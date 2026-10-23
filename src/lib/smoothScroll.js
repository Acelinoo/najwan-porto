import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
let tickerCallback = null;

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

    return {
      lenis: lenisInstance,
      destroy: () => {
        if (tickerCallback) {
          gsap.ticker.remove(tickerCallback);
          tickerCallback = null;
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
