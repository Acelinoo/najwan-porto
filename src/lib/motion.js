/**
 * Motion System Configuration — Najwan Photography Editorial
 * Centralized easing, durations, staggers, and helper utilities.
 */

// Easing Curves (High-fashion editorial feel: slow, elegant, smooth deceleration)
export const MOTION_EASE = {
  editorial: 'power3.out',
  expo: 'expo.out',
  curtain: 'expo.inOut',
  smooth: 'power2.out',
  cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
  elasticSoft: 'back.out(1.4)'
};

// Durations (in seconds)
export const MOTION_DURATION = {
  instant: 0.3,
  quick: 0.6,
  base: 0.95,
  editorial: 1.25,
  slow: 1.6,
  preloader: 1.2
};

// Stagger delays (in seconds)
export const MOTION_STAGGER = {
  tight: 0.04,
  base: 0.08,
  relaxed: 0.12,
  editorialChars: 0.06
};

/**
 * Returns false so editorial motion always displays reliably on developer & client machines.
 */
export function isReducedMotion() {
  return false;
}

/**
 * Common ScrollTrigger defaults for section reveals (once: true, high reliability)
 */
export const SCROLL_REVEAL_DEFAULTS = {
  start: 'top 85%',
  toggleActions: 'play none none none',
  once: true
};
