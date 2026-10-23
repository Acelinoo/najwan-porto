import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 4000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. SECTION TENTANG ANIMATIONS ---
      // Garis Divider Atas: Animasi scaleX dari 0 ke 1
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

      // Section Number: Slide in with tracking expansion
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

      // Section Title: Masked upward rise
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

      // Statement large: Scale-up with soft fade
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

      // Paragraph: Upward glide
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

      // Divider sebelum specs: scaleX 0 -> 1
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

      // Specs items: Staggered entrance from bottom right
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

      // --- 1.1 EDUCATION SUBSECTION ANIMATIONS ---
      gsap.fromTo(
        '.tentang-education-wrap .education-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '.tentang-education-wrap',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        ['.education-label-col', '.education-info-col'],
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.tentang-education-wrap',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          stagger: MOTION_STAGGER.base,
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
      // Divider Atas Karya
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

      // Floating Header overlay (number + title with mask)
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

      // FlexCarousel container reveal
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

      // DriftWall Stage reveal
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
        ['.kontak-narrative', '.kontak-form-card'],
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.kontak-content-grid',
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

          {/* 01.1 / EDUCATION SUBSECTION */}
          <div className="tentang-education-wrap">
            <div className="education-divider editorial-divider" />
            <div className="education-grid">
              <div className="education-label-col">
                <span className="spec-label">PENDIDIKAN / FORMAL EDUCATION</span>
                <span className="education-period-large">2021 — 2024</span>
              </div>
              <div className="education-info-col">
                <div className="education-school-badge">
                  <h3 className="education-school-name">SMK Yadika Soreang</h3>
                  <span className="education-major-tag">Software Engineering / Rekayasa Perangkat Lunak</span>
                </div>
                <p className="education-statement">
                  Started my formal journey in software engineering through vocational education, building foundational skills in programming and web development.
                </p>
                <div className="education-skills-pills">
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
        {/* Floating Minimalist Editorial Header */}
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

      {/* 04 / SECTION KONTAK */}
      <section id="kontak" className="editorial-section section-kontak" aria-label="Kontak dan Kolaborasi">
        <div className="editorial-divider" />
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">04 / KONTAK</span>
            <h2 className="section-title">
              <span className="editorial-mask">
                <span className="editorial-mask-inner">MARI MEMULAI KOLABORASI</span>
              </span>
            </h2>
          </div>

          <div className="kontak-content-grid">
            <div className="kontak-narrative">
              <p className="statement-large">
                "Punya proyek editorial, kampanye fashion, atau lookbook yang ingin dihidupkan? Mari wujudkan narasi visual berkarakter bersama."
              </p>

              <div className="kontak-details-list">
                <div className="kontak-detail-item">
                  <span className="spec-label">EMAIL INQUIRIES</span>
                  <a href="mailto:contact@najwan.photo" className="kontak-direct-link">
                    contact@najwan.photo
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className="kontak-detail-item">
                  <span className="spec-label">LOKASI STUDIO</span>
                  <span className="spec-value">Bandung & Jakarta, Indonesia (Available Worldwide)</span>
                </div>
                <div className="kontak-detail-item">
                  <span className="spec-label">INSTAGRAM</span>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="kontak-direct-link">
                    @najwan.photo
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="kontak-form-card">
              <form className="editorial-form" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="client-name" className="form-label">NAMA LENGKAP / BRAND</label>
                    <input
                      type="text"
                      id="client-name"
                      name="name"
                      required
                      placeholder="e.g. Elena Rostova / Maison"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="client-email" className="form-label">ALAMAT EMAIL</label>
                    <input
                      type="email"
                      id="client-email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="project-category" className="form-label">KATEGORI PROYEK</label>
                  <select id="project-category" name="category" className="form-input form-select" defaultValue="editorial">
                    <option value="editorial">Fashion & Editorial Lookbook</option>
                    <option value="portrait">Intimate Studio Portraiture</option>
                    <option value="commercial">Commercial & Brand Campaign</option>
                    <option value="custom">Creative Concept Collaboration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="project-message" className="form-label">PESAN & BRIEF VISUAL</label>
                  <textarea
                    id="project-message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Ceritakan gambaran konsep, moodboard, jadwal produksi, atau kebutuhan foto Anda..."
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>{formSubmitted ? 'PESAN TERKIRIM' : 'KIRIM INQUIRY'}</span>
                  <ArrowUpRight size={18} />
                </button>

                {formSubmitted && (
                  <p className="form-success-note">
                    Terima kasih. Pesan Anda telah diterima, kami akan segera merespons brief Anda.
                  </p>
                )}
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
