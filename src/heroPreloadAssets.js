/**
 * Hero section assets only – slider images and logos.
 * Preload these before showing the app so the Hero has no lag.
 */
import hero1 from './images/hero.jpg';
import hero2 from './images/hero1.jpg';
import hero3 from './images/hero2.jpg';
import hero4 from './images/hero3.jpg';
import spinlogo from './images/SCIVO_orbit_AI_clean.svg';
import staticlogo from './images/staticlog.png';

/** Hero slider images (4 slides) + spin logo + static logo – load these first. */
export const heroAssetUrls = [hero1, hero2, hero3, hero4, spinlogo, staticlogo];
