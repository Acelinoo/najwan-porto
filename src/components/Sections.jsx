import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlexCarousel from './FlexCarousel/FlexCarousel';
import DriftWall from './DriftWall/DriftWall';
import { MOTION_EASE, MOTION_DURATION, MOTION_STAGGER, SCROLL_REVEAL_DEFAULTS } from '../lib/motion';
import './Sections.css';

gsap.registerPlugin(ScrollTrigger);

const NAJWAN_DRIFT_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&auto=format&fit=crop',
    title: 'Vespa Retro Chronicles'
  },
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop',
    title: 'Silhouettes & Textures'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop',
    title: 'Raw Human Moments'
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&auto=format&fit=crop',
    title: 'Milan Runway Form'
  },
  {
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80&auto=format&fit=crop',
    title: 'Shadow & Highlight'
  },
  {
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80&auto=format&fit=crop',
    title: 'Urban Kinetic Perspective'
  },
  {
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&auto=format&fit=crop',
    title: 'Monochrome Study'
  },
  {
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80&auto=format&fit=crop',
    title: 'Menswear Sartorial'
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop',
    title: 'Intimate Portraiture'
  },
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80&auto=format&fit=crop',
    title: 'Natural Ambient Tone'
  },
  {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop',
    title: 'Editorial Haute Form'
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop',
    title: 'Sculpted Profile'
  },
  {
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80&auto=format&fit=crop',
    title: 'Classic Vintage Aura'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',
    title: 'Draped Elegance'
  },
  {
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&q=80&auto=format&fit=crop',
    title: 'Bold Contrast Profile'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop',
    title: 'Studio Depth Expression'
  }
];

const NAJWAN_PORTFOLIO_WORKS = [
  {
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop',
    alt: 'Seri Fashion Streetwear Vespa Retro Chronicles',
    title: 'Vespa Retro Chronicles',
    subtitle: 'Streetwear & Urban Culture'
  },
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80&auto=format&fit=crop',
    alt: 'Editorial Lookbook Silhouettes & Textures',
    title: 'Silhouettes & Textures',
    subtitle: 'High-Fashion Autumn'
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80&auto=format&fit=crop',
    alt: 'Potret Studio Intim Raw Human Moments',
    title: 'Raw Human Moments',
    subtitle: 'Intimate Studio Portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop',
    alt: 'Draperi Kain dan Siluet Editorial',
    title: 'Milan Runway Form',
    subtitle: 'Avant-Garde Drape'
  },
  {
    src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80&auto=format&fit=crop',
    alt: 'Studio Lighting High-Contrast',
    title: 'Shadow & Highlight',
    subtitle: 'Lightroom Experiments'
  },
  {
    src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
    alt: 'Street Persona Urban Culture',
    title: 'Urban Kinetic Perspective',
    subtitle: 'Candid Motion'
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80&auto=format&fit=crop',
    alt: 'Fine Art Editorial Portrait',
    title: 'Monochrome Study',
    subtitle: 'Form & Expression'
  }
];

export default function Sections() {
  const wrapperRef = useRef(null);
  const [educationOpen, setEducationOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleEducation = () => {
    setEducationOpen((prev) => {
      const next = !prev;
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);
      return next;
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marchelinokurniawan321@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2200);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 4500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. SECTION TENTANG ANIMATIONS ---
      gsap.fromTo(
        '#tentang .editorial-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '#tentang',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        '#tentang .section-number',
        { x: -35, opacity: 0, letterSpacing: '0.35em' },
        {
          scrollTrigger: {
            trigger: '#tentang',
            ...SCROLL_REVEAL_DEFAULTS
          },
          x: 0,
          opacity: 1,
          letterSpacing: '0.22em',
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#tentang .section-title .editorial-mask-inner',
        { yPercent: 110 },
        {
          scrollTrigger: {
            trigger: '#tentang',
            ...SCROLL_REVEAL_DEFAULTS
          },
          yPercent: 0,
          duration: MOTION_DURATION.editorial,
          delay: 0.08,
          ease: MOTION_EASE.editorial,
          clearProps: 'transform'
        }
      );

      gsap.fromTo(
        '#tentang .statement-large',
        { scale: 0.94, y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#tentang .tentang-content-grid',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scale: 1,
          y: 0,
          opacity: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#tentang .tentang-paragraph',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#tentang .tentang-content-grid',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          duration: MOTION_DURATION.base,
          delay: 0.12,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#tentang .specs-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '#tentang .tentang-specs',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        '#tentang .spec-item',
        { x: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#tentang .tentang-specs',
            ...SCROLL_REVEAL_DEFAULTS
          },
          x: 0,
          opacity: 1,
          stagger: MOTION_STAGGER.relaxed,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      // --- 1.1 EDUCATION ACCORDION REVEAL ---
      gsap.fromTo(
        '.education-accordion',
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.education-accordion',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      // Subtle horizontal parallax on section title during scroll
      gsap.to('#tentang .section-title', {
        x: -24,
        ease: 'none',
        scrollTrigger: {
          trigger: '#tentang',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // --- 2. SECTION KARYA ANIMATIONS ---
      gsap.fromTo(
        '#karya .editorial-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '#karya',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        '#karya .karya-header-overlay .section-number',
        { x: -30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#karya',
            ...SCROLL_REVEAL_DEFAULTS
          },
          x: 0,
          opacity: 1,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#karya .karya-overlay-title .editorial-mask-inner',
        { yPercent: 110 },
        {
          scrollTrigger: {
            trigger: '#karya',
            ...SCROLL_REVEAL_DEFAULTS
          },
          yPercent: 0,
          duration: MOTION_DURATION.editorial,
          delay: 0.1,
          ease: MOTION_EASE.editorial,
          clearProps: 'transform'
        }
      );

      gsap.fromTo(
        '#karya .flex-carousel',
        { scale: 0.95, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#karya',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scale: 1,
          opacity: 1,
          duration: 1.35,
          ease: MOTION_EASE.smooth,
          clearProps: 'scale,opacity'
        }
      );

      // --- 3. SECTION DRIFT WALL ANIMATIONS ---
      gsap.fromTo(
        '#arsip .editorial-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '#arsip',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        '#arsip .section-number',
        { x: -35, opacity: 0, letterSpacing: '0.35em' },
        {
          scrollTrigger: {
            trigger: '#arsip',
            ...SCROLL_REVEAL_DEFAULTS
          },
          x: 0,
          opacity: 1,
          letterSpacing: '0.22em',
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#arsip .section-title .editorial-mask-inner',
        { yPercent: 110 },
        {
          scrollTrigger: {
            trigger: '#arsip',
            ...SCROLL_REVEAL_DEFAULTS
          },
          yPercent: 0,
          duration: MOTION_DURATION.editorial,
          delay: 0.08,
          ease: MOTION_EASE.editorial,
          clearProps: 'transform'
        }
      );

      gsap.fromTo(
        '#arsip .driftwall-stage',
        { scale: 0.96, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#arsip',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scale: 1,
          opacity: 1,
          duration: 1.25,
          ease: MOTION_EASE.smooth,
          clearProps: 'scale,opacity'
        }
      );

      // --- 4. SECTION KONTAK ANIMATIONS ---
      gsap.fromTo(
        '#kontak .editorial-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '#kontak',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        '#kontak .section-number',
        { x: -35, opacity: 0, letterSpacing: '0.35em' },
        {
          scrollTrigger: {
            trigger: '#kontak',
            ...SCROLL_REVEAL_DEFAULTS
          },
          x: 0,
          opacity: 1,
          letterSpacing: '0.22em',
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#kontak .section-title .editorial-mask-inner',
        { yPercent: 110 },
        {
          scrollTrigger: {
            trigger: '#kontak',
            ...SCROLL_REVEAL_DEFAULTS
          },
          yPercent: 0,
          duration: MOTION_DURATION.editorial,
          delay: 0.08,
          ease: MOTION_EASE.editorial,
          clearProps: 'transform'
        }
      );

      gsap.fromTo(
        ['.kontak-meta-col', '.kontak-form-col'],
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.kontak-minimal-grid',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          stagger: MOTION_STAGGER.relaxed,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      // --- 5. FOOTER ANIMATIONS ---
      gsap.fromTo(
        '.editorial-footer .editorial-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '.editorial-footer',
            start: 'top 95%',
            once: true
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        ['.editorial-footer .footer-brand', '.editorial-footer .footer-copy'],
        { y: 22, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.editorial-footer',
            start: 'top 95%',
            once: true
          },
          y: 0,
          opacity: 1,
          duration: MOTION_DURATION.base,
          stagger: MOTION_STAGGER.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '.editorial-footer .footer-tagline',
        { x: 35, opacity: 0, letterSpacing: '0.3em' },
        {
          scrollTrigger: {
            trigger: '.editorial-footer',
            start: 'top 95%',
            once: true
          },
          x: 0,
          opacity: 1,
          letterSpacing: '0.2em',
          duration: MOTION_DURATION.editorial,
          delay: 0.1,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="editorial-content-wrapper">
      {/* 01 / SECTION TENTANG */}
      <section id="tentang" className="editorial-section section-tentang" aria-label="Tentang Najwan">
        <div className="editorial-divider" />
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">01 / TENTANG</span>
            <h2 className="section-title">
              <span className="editorial-mask">
                <span className="editorial-mask-inner">FILOSOFI & VISI VISUAL</span>
              </span>
            </h2>
          </div>

          <div className="tentang-content-grid">
            <div className="tentang-statement">
              <p className="statement-large">
                "Bagi saya, fotografi editorial bukan sekadar menangkap subjek di depan lensa, melainkan menyusun narasi, ritme komposisi, dan karakter yang tak lekang waktu."
              </p>
            </div>
            <div className="tentang-details">
              <p className="tentang-paragraph">
                Najwan adalah fotografer editorial dan fashion yang berfokus pada estetika minimalis, bold framing, dan keaslian ekspresi. Berbasis di Indonesia, karyanya mengeksplorasi pertemuan antara busana, persona subjek, dan narasi sinematik.
              </p>
              <div className="specs-divider editorial-divider" />
              <div className="tentang-specs">
                <div className="spec-item">
                  <span className="spec-label">SPESIALISASI</span>
                  <span className="spec-value">Editorial, Fashion, Portrait, Commercial Lookbook</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">PENDEKATAN</span>
                  <span className="spec-value">Minimalis, High-Contrast, Studio Neutral</span>
                </div>
              </div>
            </div>
          </div>

          {/* 01.1 / EDUCATION ACCORDION DROPDOWN */}
          <div className="education-accordion">
            <button
              type="button"
              className={`education-accordion-trigger ${educationOpen ? 'is-open' : ''}`}
              onClick={toggleEducation}
              aria-expanded={educationOpen}
              aria-controls="education-accordion-content"
            >
              <div className="education-trigger-left">
                <span className="education-mono-tag">(PENDIDIKAN FORMAL)</span>
                <span className="education-trigger-school">SMK Yadika Soreang</span>
                <span className="education-trigger-period">2021 — 2024</span>
              </div>
              <div className="education-trigger-right">
                <span className="education-trigger-state">
                  {educationOpen ? 'TUTUP' : 'LIHAT DETAIL'}
                </span>
                <ChevronDown
                  size={18}
                  className={`education-chevron ${educationOpen ? 'is-rotated' : ''}`}
                />
              </div>
            </button>

            <div
              id="education-accordion-content"
              className={`education-accordion-body ${educationOpen ? 'is-open' : ''}`}
            >
              <div className="education-accordion-inner">
                <div className="education-expanded-major">
                  <span className="spec-label">JURUSAN / MAJOR</span>
                  <p className="education-major-val">Software Engineering / Rekayasa Perangkat Lunak</p>
                </div>
                <p className="education-expanded-desc">
                  Started my formal journey in software engineering through vocational education, building foundational skills in programming and web development.
                </p>
                <div className="education-expanded-tags">
                  <span className="skill-pill">Programming Fundamentals</span>
                  <span className="skill-pill">Web Development</span>
                  <span className="skill-pill">Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / SECTION KARYA - FULLSCREEN FLEX CAROUSEL (SLIDE ONLY) */}
      <section
        id="karya"
        className="section-karya-fullscreen"
        aria-label="Karya Terpilih"
        data-lenis-prevent="true"
      >
        <div className="editorial-divider" />
        <div className="karya-header-overlay">
          <span className="section-number">02 / KARYA</span>
          <h2 className="karya-overlay-title">
            <span className="editorial-mask">
              <span className="editorial-mask-inner">SERI EDITORIAL TERPILIH</span>
            </span>
          </h2>
        </div>

        {/* React Bits Flex Carousel */}
        <FlexCarousel
          items={NAJWAN_PORTFOLIO_WORKS}
          lensWidth={1.01}
          bend={0.71}
          tilt={-6}
          cardHeight={0.31}
          reach={0.29}
          squeeze={0.19}
          gap={0}
          captions={true}
          focusOnClick={true}
          autoplay={false}
          captureWheel={false}
          style={{ width: '100%', height: '100%' }}
        />
      </section>

      {/* 03 / SECTION DRIFT WALL - ARSIP VISUAL */}
      <section
        id="arsip"
        className="section-driftwall"
        aria-label="Arsip Visual Drift Wall"
        data-lenis-prevent="true"
      >
        <div className="editorial-divider" />
        <div className="section-container driftwall-header-wrap">
          <div className="section-header">
            <span className="section-number">03 / ARSIP VISUAL</span>
            <h2 className="section-title">
              <span className="editorial-mask">
                <span className="editorial-mask-inner">EKSPLORASI & PERSPEKTIF</span>
              </span>
            </h2>
          </div>
        </div>

        <div className="driftwall-stage">
          <DriftWall
            items={NAJWAN_DRIFT_ITEMS}
            columns={6}
            tileWidth={210}
            tileHeight={140}
            direction="down"
            gap={16}
            radius={8}
            tilt={14}
            turn={-12}
            speed={54}
            dim={0.65}
            fade={0.45}
            pauseOnHover={false}
            overlayColor="#0c0c0c"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>

      {/* 04 / SECTION KONTAK (Desain Eksak Sesuai Gambar 1) */}
      <section id="kontak" className="editorial-section section-kontak" aria-label="Kontak dan Kolaborasi">
        <div className="editorial-divider" />
        <div className="section-container">
          <div className="kontak-minimal-grid">
            {/* Kolom Kiri: (EMAIL) & (ELSEWHERE) */}
            <div className="kontak-meta-col">
              <div className="kontak-meta-group">
                <span className="kontak-mono-tag">(EMAIL)</span>
                <button
                  type="button"
                  className="kontak-email-btn"
                  onClick={handleCopyEmail}
                  title="Klik untuk menyalin email"
                >
                  <span className="kontak-email-val">marchelinokurniawan321@gmail.com</span>
                </button>
                <span className="kontak-copy-hint" onClick={handleCopyEmail}>
                  {copiedEmail ? 'Copied to clipboard.' : 'Click to copy.'}
                </span>
              </div>

              <div className="kontak-meta-group elsewhere-spacing">
                <span className="kontak-mono-tag">(ELSEWHERE)</span>
                <nav className="kontak-social-stack" aria-label="Media Sosial">
                  <a
                    href="https://github.com/Acelinoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kontak-social-item"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kontak-social-item"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kontak-social-item"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://spotify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kontak-social-item"
                  >
                    Spotify
                  </a>
                </nav>
              </div>
            </div>

            {/* Kolom Kanan: Minimalist Underline Form */}
            <div className="kontak-form-col">
              <form className="editorial-minimal-form" onSubmit={handleContactSubmit}>
                <div className="minimal-form-group">
                  <label htmlFor="user-name" className="minimal-form-label">YOUR NAME</label>
                  <input
                    type="text"
                    id="user-name"
                    name="name"
                    required
                    className="minimal-line-input"
                  />
                </div>

                <div className="minimal-form-group">
                  <label htmlFor="user-email" className="minimal-form-label">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    required
                    className="minimal-line-input"
                  />
                </div>

                <div className="minimal-form-group">
                  <label htmlFor="user-project" className="minimal-form-label">TELL ME ABOUT THE PROJECT</label>
                  <textarea
                    id="user-project"
                    name="project"
                    rows="3"
                    required
                    className="minimal-line-input minimal-line-textarea"
                  ></textarea>
                </div>

                <div className="minimal-form-actions">
                  <button type="submit" className="minimal-submit-btn">
                    <span>{formSubmitted ? 'MESSAGE SENT ✓' : 'SEND INQUIRY'}</span>
                    <ArrowUpRight size={16} />
                  </button>
                  {formSubmitted && (
                    <span className="minimal-submitted-note">
                      Thank you! Your message has been sent.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="editorial-footer">
        <div className="editorial-divider" />
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-brand">Najwan Photography</span>
            <span className="footer-copy">© 2026. Hak cipta dilindungi.</span>
          </div>
          <div className="footer-right">
            <span className="footer-tagline">EDITORIAL & FASHION PHOTOGRAPHY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
