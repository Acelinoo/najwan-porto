import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION_EASE, MOTION_DURATION, MOTION_STAGGER } from '../lib/motion';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ isReady = false }) {
  const heroRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    // Run when isReady is true, or fallback after 1.1s so motion is guaranteed
    let timer = null;
    const initAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add('(min-width: 0px)', () => {
          // --- 1. INTRO / ENTRANCE TIMELINE ---
          const tl = gsap.timeline({ defaults: { ease: MOTION_EASE.editorial } });

          // Lapisan 1: Masked Typography Reveal "NAJWAN" (di belakang subjek)
          tl.fromTo(
            '.hero-title-giant .char',
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              stagger: MOTION_STAGGER.editorialChars,
              duration: MOTION_DURATION.editorial,
              ease: MOTION_EASE.editorial,
              clearProps: 'transform,opacity'
            },
            0.05
          );

          // Lapisan 2: Foto Subjek Cutout di depan (scale 1.08 -> 1, fade in, depth delay)
          tl.fromTo(
            '.hero-subject-img',
            { y: 45, scale: 1.08, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1.35,
              ease: MOTION_EASE.editorial,
              clearProps: 'transform,opacity,scale'
            },
            0.32
          );

          // Lapisan 3: Elemen pendukung (Label Bawah & Indikator Scroll)
          tl.fromTo(
            ['.hero-bottom-right', '.hero-scroll-indicator'],
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power2.out',
              clearProps: 'transform,opacity'
            },
            0.7
          );

          // --- 2. INFINITE SUBTLE SCROLL INDICATOR LOOP ---
          gsap.to('.scroll-indicator-dot', {
            y: 14,
            opacity: 0.25,
            duration: 1.35,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
          });
        });

        // --- 3. PARALLAX SCROLL-LINKED EFFECT (Desktop & Tablet) ---
        mm.add('(min-width: 769px)', () => {
          // Layer tipografi di belakang bergerak turun perlahan saat di-scroll
          gsap.to('.hero-typography-layer', {
            yPercent: 22,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6
            }
          });

          // Layer subjek foto cutout bergerak dengan kecepatan berbeda untuk kedalaman 3D
          gsap.to('.hero-subject-img', {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6
            }
          });

          // Label bawah kanan memudar halus saat scroll keluar dari hero
          gsap.to(['.hero-bottom-right', '.hero-scroll-indicator'], {
            opacity: 0,
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: '45% top',
              scrub: true
            }
          });
        });
      }, heroRef);

      return ctx;
    };

    if (isReady) {
      initAnimation();
    } else {
      timer = setTimeout(initAnimation, 1100);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isReady]);

  return (
    <section ref={heroRef} className="editorial-hero" aria-label="Hero Section Najwan Photography">
      <div className="hero-stage">
        {/* Lapisan 1: Tipografi Raksasa NAJWAN (di belakang subjek dengan overflow mask) */}
        <div className="hero-typography-layer" aria-hidden="true">
          <h1 className="hero-title-giant">
            <span className="char-mask"><span className="char">N</span></span>
            <span className="char-mask"><span className="char">A</span></span>
            <span className="char-mask"><span className="char">J</span></span>
            <span className="char-mask"><span className="char">W</span></span>
            <span className="char-mask"><span className="char">A</span></span>
            <span className="char-mask"><span className="char">N</span></span>
          </h1>
        </div>

        {/* Lapisan 2: Foto Najwan & Vespa (di depan tipografi) */}
        <div className="hero-visual-layer">
          <picture>
            <source srcSet="/najwan-cutout.webp" type="image/webp" />
            <img
              src="/najwan-cutout.png"
              alt="Najwan duduk di atas Vespa putih mengenakan hoodie merah dan helm"
              className="hero-subject-img"
              loading="eager"
              fetchPriority="high"
              width="2048"
              height="1024"
            />
          </picture>
        </div>
      </div>

      {/* Indikator Scroll Bawah Kiri */}
      <div className="hero-scroll-indicator" aria-label="Gulir ke bawah">
        <span className="scroll-indicator-text">SCROLL</span>
        <div className="scroll-indicator-track">
          <div className="scroll-indicator-dot" />
        </div>
      </div>

      {/* Bagian Bawah Kanan: Label Minimalis */}
      <div className="hero-bottom-right">
        <div className="bottom-label-group">
          <span className="bottom-label-sub">PORTFOLIO '26</span>
          <p className="bottom-label-title">FOTOGRAFI</p>
        </div>
      </div>
    </section>
  );
}
