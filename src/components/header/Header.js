import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, House, Briefcase, CircleHelp, Phone, CircleUserRound, FileText } from 'lucide-react';
import logo from '../../images/logo1234.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompactNav, setIsCompactNav] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const [is844x390Landscape, setIs844x390Landscape] = useState(false);
  const [is915x412Landscape, setIs915x412Landscape] = useState(false);
  const [is932x430Landscape, setIs932x430Landscape] = useState(false);
  const [is740x360Landscape, setIs740x360Landscape] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 767px), (max-height: 500px) and (orientation: landscape)'
    );
    const landscapeQuery = window.matchMedia('(max-height: 500px) and (orientation: landscape)');
    const exact844x390Query = window.matchMedia('(width: 844px) and (height: 390px) and (orientation: landscape)');
    const exact915x412Query = window.matchMedia('(width: 915px) and (height: 412px) and (orientation: landscape)');
    const exact932x430Query = window.matchMedia('(width: 932px) and (height: 430px) and (orientation: landscape)');
    const exact740x360Query = window.matchMedia('(width: 740px) and (height: 360px) and (orientation: landscape)');

    const updateCompactNav = (event) => {
      setIsCompactNav(event.matches);
    };

    const updateLandscapeMode = (event) => {
      setIsMobileLandscape(event.matches);
    };

    const update844x390Mode = (event) => {
      setIs844x390Landscape(event.matches);
    };

    const update915x412Mode = (event) => {
      setIs915x412Landscape(event.matches);
    };

    const update932x430Mode = (event) => {
      setIs932x430Landscape(event.matches);
    };

    const update740x360Mode = (event) => {
      setIs740x360Landscape(event.matches);
    };

    setIsCompactNav(mediaQuery.matches);
    setIsMobileLandscape(landscapeQuery.matches);
    setIs844x390Landscape(exact844x390Query.matches);
    setIs915x412Landscape(exact915x412Query.matches);
    setIs932x430Landscape(exact932x430Query.matches);
    setIs740x360Landscape(exact740x360Query.matches);
    mediaQuery.addEventListener('change', updateCompactNav);
    landscapeQuery.addEventListener('change', updateLandscapeMode);
    exact844x390Query.addEventListener('change', update844x390Mode);
    exact915x412Query.addEventListener('change', update915x412Mode);
    exact932x430Query.addEventListener('change', update932x430Mode);
    exact740x360Query.addEventListener('change', update740x360Mode);

    return () => {
      mediaQuery.removeEventListener('change', updateCompactNav);
      landscapeQuery.removeEventListener('change', updateLandscapeMode);
      exact844x390Query.removeEventListener('change', update844x390Mode);
      exact915x412Query.removeEventListener('change', update915x412Mode);
      exact932x430Query.removeEventListener('change', update932x430Mode);
      exact740x360Query.removeEventListener('change', update740x360Mode);
    };
  }, []);

  useEffect(() => {
    if (!isCompactNav) {
      setIsMenuOpen(false);
    }
  }, [isCompactNav]);

  const navLinks = [
    { path: '/', label: 'Home', icon: House },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/about', label: 'About', icon: CircleUserRound },
    { path: '/faq', label: 'FAQ', icon: CircleHelp },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  const isActive = (path) => location.pathname === path;
  const menuIconSize = is740x360Landscape
    ? 17
    : is844x390Landscape
      ? 18
      : is915x412Landscape
        ? 18
        : is932x430Landscape
          ? 19
          : isMobileLandscape
            ? 20
            : 24;

  const mobileNavClasses = is740x360Landscape
    ? 'px-3 py-1.5 space-y-1 max-h-[42vh] overflow-y-auto'
    : is844x390Landscape
      ? 'px-3 py-2 space-y-1 max-h-[44vh] overflow-y-auto'
      : is915x412Landscape
        ? 'px-4 py-2 space-y-1 max-h-[46vh] overflow-y-auto'
        : is932x430Landscape
          ? 'px-4 py-2 space-y-1 max-h-[48vh] overflow-y-auto'
          : isMobileLandscape
            ? 'px-6 py-2 space-y-1 max-h-[45vh] overflow-y-auto'
            : 'px-6 py-4 space-y-3';

  const mobileFontSize = is740x360Landscape
    ? '9.5pt'
    : is844x390Landscape
      ? '10pt'
      : is915x412Landscape
        ? '10.25pt'
        : is932x430Landscape
          ? '10.5pt'
          : isMobileLandscape
            ? '11pt'
            : '14pt';

  const mobileItemIconSize = is740x360Landscape
    ? 13
    : is844x390Landscape
      ? 14
      : is915x412Landscape
        ? 15
        : is932x430Landscape
          ? 15
          : isMobileLandscape
            ? 16
            : 18;

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6" style={{ height: '0.6in' }}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="SCIVO" className="h-17 mt-5" />
          </div>

          {/* Desktop Nav */}
          <nav className={`${isCompactNav ? 'hidden' : 'hidden md:flex'} items-center gap-8 font-medium text-gray-700`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition ${
                  isActive(link.path)
                    ? 'rounded-full bg-emerald-500/20 px-4 py-1 text-emerald-400'
                    : 'hover:text-gray-900 cursor-pointer'
                }`}
                style={{ fontSize: '12pt' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
         <Link
  to="/instant-quote"
  className={`${isCompactNav ? 'hidden' : 'hidden md:inline-block'} rounded-full bg-emerald-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-emerald-600`}
  style={{ fontSize: '12pt' }}
>
  Instant Quote
</Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isCompactNav ? 'inline-flex' : 'md:hidden'} text-gray-700 hover:text-gray-900 transition`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={menuIconSize} /> : <Menu size={menuIconSize} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isCompactNav && (
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <nav className={`flex flex-col ${mobileNavClasses}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition py-2 flex items-center gap-2 ${
                    isActive(link.path)
                      ? 'text-emerald-400 bg-emerald-500/20 px-4 rounded-lg'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{ fontSize: mobileFontSize }}
                >
                  <link.icon size={mobileItemIconSize} />
                  {link.label}
                </Link>
              ))}
              <Link
                to="/instant-quote"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-full bg-emerald-500 px-5 py-2 font-semibold text-white shadow-md hover:bg-emerald-600 flex items-center justify-center gap-2"
                style={{ fontSize: mobileFontSize }}
              >
                <FileText size={mobileItemIconSize} />
                Instant Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;