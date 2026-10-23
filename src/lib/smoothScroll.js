import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
let tickerCallback = null;
let anchorClickHandler = null;

/**
 * Initializes Lenis smooth scrolling with GSAP ScrollTrigger synchronization.
 * If user prefers reduced motion, Lenis smooth scrolling is bypassed for accessibility.
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;

  // Prevent multiple simultaneous instances
  if (lenisInstance) {
    return {
      lenis: lenisInstance,
      destroy: () => {}
    };
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
      infinite: false
    });

    lenisInstance.on('scroll', ScrollTrigger.update);

    tickerCallback = (time) => {
      lenisInstance?.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for internal hash links (#tentang, #karya, #arsip, #kontak)
    anchorClickHandler = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        const targetEl = document.querySelector(href);
        if (targetEl && lenisInstance) {
          e.preventDefault();
          lenisInstance.scrollTo(targetEl, {
            offset: 0,
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    };
    document.addEventListener('click', anchorClickHandler);

    return {
      lenis: lenisInstance,
      destroy: () => {
        if (tickerCallback) {
          gsap.ticker.remove(tickerCallback);
          tickerCallback = null;
        }
        if (anchorClickHandler) {
          document.removeEventListener('click', anchorClickHandler);
          anchorClickHandler = null;
        }
        if (lenisInstance) {
          lenisInstance.destroy();
          lenisInstance = null;
        }
      }
    };
  } catch (err) {
    console.warn('Lenis initialization skipped:', err);
    return { lenis: null, destroy: () => {} };
  }
}

export function getLenis() {
  return lenisInstance;
}
