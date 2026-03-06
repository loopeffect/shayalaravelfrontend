import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Loader from './components/common/Loader';
import About from './components/about/About';
import Faq from './components/faq/Faq';
import Contact from './components/contact/Contact';
import InstantQuote from './components/InstantQuote/InstantQuote';
import ExactQuoteResults from './components/InstantQuote/ExactQuoteResults';
import ScheduleActivation from './components/InstantQuote/ScheduleActivation';
import { heroAssetUrls } from './heroPreloadAssets';

function preloadImage(url) {
  return new Promise((resolve) => {
    if (!url) {
      resolve();
      return;
    }
    const img = new Image();
    const done = () => {
      img.onload = null;
      img.onerror = null;
      resolve();
    };
    img.onload = done;
    img.onerror = done;
    img.src = url;
  });
}

/** Load all Hero slider images and logos first – no lag when Hero appears. */
function preloadHeroAssets() {
  return Promise.all(heroAssetUrls.map(preloadImage));
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const prevPathRef = useRef(location.pathname);
  const appShellRef = useRef(null);
  const hasCompletedInitialPreloadRef = useRef(false);

  const extractUrlsFromCssText = useCallback((cssText) => {
    if (!cssText) return [];
    const matches = [...cssText.matchAll(/url\((['"]?)(.*?)\1\)/g)];
    return matches
      .map((match) => match[2])
      .filter((url) => url && !url.startsWith('data:'));
  }, []);

  const getStylesheetMediaUrls = useCallback(() => {
    const urls = [];

    Array.from(document.styleSheets).forEach((sheet) => {
      let rules;

      try {
        rules = sheet.cssRules;
      } catch {
        return;
      }

      Array.from(rules || []).forEach((rule) => {
        urls.push(...extractUrlsFromCssText(rule.cssText));
      });
    });

    return urls;
  }, [extractUrlsFromCssText]);

  const getManifestMediaUrls = useCallback(async () => {
    try {
      const response = await fetch('/asset-manifest.json', { cache: 'force-cache' });

      if (!response.ok) {
        return [];
      }

      const manifest = await response.json();
      const manifestValues = [
        ...Object.values(manifest.files || {}),
        ...(manifest.entrypoints || []),
      ];

      return manifestValues.filter((value) =>
        /\.(png|jpe?g|webp|gif|svg|avif|ico|mp4|webm|ogg|ogv|mp3|wav|m4a)$/i.test(value)
      );
    } catch {
      return [];
    }
  }, []);

  const toAbsoluteUrl = useCallback((url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:')) {
      return url;
    }

    try {
      return new URL(url, window.location.origin).href;
    } catch {
      return url;
    }
  }, []);

  const runLoaderUntilReady = useCallback((maxWaitMs = 8000, noImageDelayMs = 1500, options = {}) => {
    setLoading(true);

    const root = appShellRef.current;
    const images = Array.from(root ? root.querySelectorAll('img') : []);
    const videos = Array.from(root ? root.querySelectorAll('video') : []);
    let finished = false;
    let canceled = false;
    const cleanups = [];

    const finish = () => {
      if (finished || canceled) return;
      finished = true;
      cleanups.forEach((cleanup) => cleanup());
      if (typeof options.onFinish === 'function') {
        options.onFinish();
      }
      requestAnimationFrame(() => {
        setTimeout(() => setLoading(false), 80);
      });
    };

    const fallbackTimer = setTimeout(() => {
      finish();
    }, maxWaitMs);

    cleanups.push(() => clearTimeout(fallbackTimer));

    const imagePromises = images.map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const handleLoad = () => resolve();
        const handleError = () => resolve();

        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleError, { once: true });

        cleanups.push(() => {
          img.removeEventListener('load', handleLoad);
          img.removeEventListener('error', handleError);
        });
      });
    });

    const videoPromises = videos.map((video) => {
      if (video.readyState >= 2) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const handleLoadedData = () => resolve();
        const handleVideoError = () => resolve();

        video.addEventListener('loadeddata', handleLoadedData, { once: true });
        video.addEventListener('error', handleVideoError, { once: true });

        cleanups.push(() => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('error', handleVideoError);
        });
      });
    });

    const preloadImageUrl = (url) =>
      new Promise((resolve) => {
        const preloader = new Image();
        const handleLoad = () => resolve();
        const handleError = () => resolve();

        preloader.addEventListener('load', handleLoad, { once: true });
        preloader.addEventListener('error', handleError, { once: true });
        preloader.src = toAbsoluteUrl(url);

        cleanups.push(() => {
          preloader.removeEventListener('load', handleLoad);
          preloader.removeEventListener('error', handleError);
        });
      });

    const collectAndPreloadGlobalMedia = async () => {
      const inlineBackgroundImageUrls = root
        ? Array.from(root.querySelectorAll('*'))
            .map((node) => window.getComputedStyle(node).backgroundImage)
            .filter((bg) => bg && bg !== 'none')
            .flatMap((bg) => extractUrlsFromCssText(bg))
        : [];

      const stylesheetUrls = getStylesheetMediaUrls();
      const manifestUrls = await getManifestMediaUrls();

      const uniqueGlobalUrls = Array.from(
        new Set([...inlineBackgroundImageUrls, ...stylesheetUrls, ...manifestUrls])
      );

      return uniqueGlobalUrls.map((url) => preloadImageUrl(url));
    };

    Promise.resolve()
      .then(async () => {
        const globalPreloadPromises = await collectAndPreloadGlobalMedia();
        const allPromises = [
          ...imagePromises,
          ...videoPromises,
          ...globalPreloadPromises,
        ];

        if (allPromises.length === 0) {
          const timer = setTimeout(() => finish(), noImageDelayMs);
          cleanups.push(() => clearTimeout(timer));
          return;
        }

        await Promise.allSettled(allPromises);
        finish();
      })
      .catch(() => {
        finish();
      });

    return () => {
      canceled = true;
      finished = true;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [extractUrlsFromCssText, getManifestMediaUrls, getStylesheetMediaUrls, toAbsoluteUrl]);

  useEffect(() => {
    let cleanup = () => {};

    const runAfterHeroPreload = () => {
      preloadHeroAssets()
        .then(() => {
          cleanup = runLoaderUntilReady(8000, 1500, {
            onFinish: () => {
              hasCompletedInitialPreloadRef.current = true;
            },
          });
        })
        .catch(() => {
          cleanup = runLoaderUntilReady(8000, 1500, {
            onFinish: () => {
              hasCompletedInitialPreloadRef.current = true;
            },
          });
        });
    };

    if (document.readyState === 'loading') {
      const onReady = () => runAfterHeroPreload();
      document.addEventListener('DOMContentLoaded', onReady);
      return () => {
        document.removeEventListener('DOMContentLoaded', onReady);
        cleanup();
      };
    } else {
      runAfterHeroPreload();
      return () => cleanup();
    }
  }, [runLoaderUntilReady]);

  useEffect(() => {
    const fromPath = prevPathRef.current;
    const toPath = location.pathname;

    prevPathRef.current = toPath;

    // Only run the full-screen loader on the very first load. When navigating back to
    // home, do not show the loader again so hero images and content are visible.
    if (hasCompletedInitialPreloadRef.current) {
      return undefined;
    }

    if (toPath === '/' && fromPath !== '/') {
      return runLoaderUntilReady(5000, 900, {
        onFinish: () => {
          hasCompletedInitialPreloadRef.current = true;
        },
      });
    }

    return undefined;
  }, [location.pathname, runLoaderUntilReady]);

  return (
    <>
      <div
        ref={appShellRef}
        className="min-h-screen bg-black text-white"
        style={{ visibility: loading ? 'hidden' : 'visible' }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instant-quote" element={<InstantQuote />} />
          <Route path="/quote-form" element={<InstantQuote />} />
          <Route path="/exact-quote-results" element={<ExactQuoteResults />} />
          <Route path="/schedule-activation" element={<ScheduleActivation />} />
        </Routes>
        <Footer />
      </div>
      {loading && <Loader />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
