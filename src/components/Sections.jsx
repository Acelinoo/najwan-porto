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
    image: '/gallery/vespa-urban-duo.png',
    title: 'Braga Vintage Duet'
  },
  {
    image: '/gallery/vespa-tea-plantation.png',
    title: 'Highland Serenity'
  },
  {
    image: '/gallery/vespa-portrait-thumb.png',
    title: 'Sartorial Companion'
  },
  {
    image: '/gallery/vespa-roadside-scenic.png',
    title: 'Southern Ridge Horizon'
  },
  {
    image: '/gallery/vespa-countryside-mist.png',
    title: 'Valley of Solitude'
  },
  {
    image: '/gallery/vespa-urban-duo.png',
    title: 'Urban Kinetic Still'
  },
  {
    image: '/gallery/vespa-tea-plantation.png',
    title: 'Emerald Daylight'
  },
  {
    image: '/gallery/vespa-portrait-thumb.png',
    title: 'Confidence in Frame'
  },
  {
    image: '/gallery/vespa-roadside-scenic.png',
    title: 'Winding Highland Route'
  },
  {
    image: '/gallery/vespa-countryside-mist.png',
    title: 'Terrace Fog Study'
  },
  {
    image: '/gallery/vespa-urban-duo.png',
    title: 'Cobblestone Echo'
  },
  {
    image: '/gallery/vespa-tea-plantation.png',
    title: 'Pure Horizon Sky'
  },
  {
    image: '/gallery/vespa-portrait-thumb.png',
    title: 'Tailored Sartorial Note'
  },
  {
    image: '/gallery/vespa-roadside-scenic.png',
    title: 'Open Asphalt Line'
  },
  {
    image: '/gallery/vespa-countryside-mist.png',
    title: 'Solitary Green Valley'
  },
  {
    image: '/gallery/vespa-urban-duo.png',
    title: 'Braga Archive 01'
  },
  {
    image: '/gallery/vespa-tea-plantation.png',
    title: 'Highland Archive 02'
  },
  {
    image: '/gallery/vespa-roadside-scenic.png',
    title: 'Roadside Archive 03'
  }
];

const NAJWAN_PORTFOLIO_WORKS = [
  {
    src: '/gallery/vespa-urban-duo.png',
    alt: 'Dua unit Vespa klasik di depan pertokoan Jalan Braga Bandung',
    title: 'Braga Vintage Duet',
    subtitle: 'Urban Classic Lookbook'
  },
  {
    src: '/gallery/vespa-tea-plantation.png',
    alt: 'Vespa putih di hamparan perkebunan teh berlatar bukit hijau dan langit biru cerah',
    title: 'Highland Serenity',
    subtitle: 'Tea Plantation Open Air'
  },
  {
    src: '/gallery/vespa-portrait-thumb.png',
    alt: 'Pengendara berjas gelap dan kemeja putih memberikan jempol di samping setang Vespa putih',
    title: 'Sartorial Companion',
    subtitle: 'Tailored Blazer & Classic Vespa'
  },
  {
    src: '/gallery/vespa-roadside-scenic.png',
    alt: 'Vespa klasik putih berban serep di tepi jalan aspal perbukitan kebun teh',
    title: 'Southern Ridge Horizon',
    subtitle: 'Highland Route Perspective'
  },
  {
    src: '/gallery/vespa-countryside-mist.png',
    alt: 'Pengendara berhelm kuning berdiri di samping Vespa menghadap lembah sawah bertingkat dan bukit berkabut',
    title: 'Valley of Solitude',
    subtitle: 'Misty Terraces & Rural Solitude'
  },
  {
    src: '/gallery/vespa-urban-duo.png',
    alt: 'Siluet Vespa klasik di trotoar kota sudut alternatif',
    title: 'Heritage Streetform',
    subtitle: 'Braga Monochrome Cadence'
  },
  {
    src: '/gallery/vespa-tea-plantation.png',
    alt: 'Komposisi Vespa klasik putih dan lereng perkebunan teh hijau',
    title: 'Emerald Vista',
    subtitle: 'Plateau Ambient Study'
  }
];

export default function Sections() {
  const wrapperRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      // --- 1. SECTION ABOUT (TENTANG NAJWAN & PERJALANAN) ANIMATIONS ---
      gsap.fromTo(
        '#about .editorial-divider, #tentang .editorial-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '#about',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        '#about .section-number',
        { x: -35, opacity: 0, letterSpacing: '0.35em' },
        {
          scrollTrigger: {
            trigger: '#about',
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
        '#about .section-title .editorial-mask-inner',
        { yPercent: 110 },
        {
          scrollTrigger: {
            trigger: '#about',
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
        '#about .about-editorial-headline',
        { y: 32, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .about-editorial-grid',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#about .about-visual-frame',
        { y: 35, opacity: 0, scale: 0.98 },
        {
          scrollTrigger: {
            trigger: '#about .about-visual-frame',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#about .about-narrative .narrative-paragraph',
        { y: 28, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .about-narrative',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#about .pillar-item',
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .about-pillars',
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

      // --- 1.1 JOURNEY & EDUCATION REVEAL ---
      gsap.fromTo(
        '#about .journey-headline',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .journey-section-wrap',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#about .journey-step-item',
        { x: -25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .journey-path-card',
            ...SCROLL_REVEAL_DEFAULTS
          },
          x: 0,
          opacity: 1,
          stagger: 0.14,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#about .journey-narrative .narrative-paragraph',
        { y: 28, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .journey-narrative',
            ...SCROLL_REVEAL_DEFAULTS
          },
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.smooth,
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        '#about .journey-quote-box',
        { y: 24, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .journey-quote-box',
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
      gsap.to('#about .section-title', {
        x: -24,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
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
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: '#karya',
            ...SCROLL_REVEAL_DEFAULTS
          },
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: MOTION_EASE.smooth,
          clearProps: 'transform,opacity'
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
      {/* 01 / SECTION ABOUT & JOURNEY */}
      <section id="about" className="editorial-section section-tentang" aria-label="Tentang Najwan">
        {/* Anchor alias untuk kompatibilitas tautan internal lama */}
        <span id="tentang" className="section-anchor-alias" aria-hidden="true" />
        <div className="editorial-divider" />

        <div className="section-container">
          {/* Header Utama Section */}
          <div className="section-header">
            <span className="section-number">01 / TENTANG SAYA</span>
            <h2 className="section-title">
              <span className="editorial-mask">
                <span className="editorial-mask-inner">TENTANG SAYA</span>
              </span>
            </h2>
          </div>

          {/* 1. KONTEN TENTANG NAJWAN (DUA KOLOM EDITORIAL) */}
          <div className="about-editorial-grid">
            {/* Kolom Kiri: Headline Besar Editorial & Frame Visual Najwan */}
            <div className="about-hero-col">
              <h3 className="about-editorial-headline">
                DI ANTARA MESIN KLASIK, MUSIK, DAN CERITA DALAM BINGKAI.
              </h3>

              {/* Editorial Media Frame */}
              <div className="about-visual-frame">
                <div className="about-image-wrapper">
                  <picture>
                    <source srcSet="/najwan-vespa.webp" type="image/webp" />
                    <img
                      src="/najwan-vespa.png"
                      alt="Najwan di atas sepeda motor Vespa klasik"
                      className="about-featured-img"
                      loading="lazy"
                      width="1200"
                      height="600"
                    />
                  </picture>
                  <div className="about-image-badge">
                    <span className="about-badge-dot" />
                    <span className="about-badge-text">ARSIP PERSONAL</span>
                  </div>
                </div>
                <div className="about-image-caption">
                  <div className="caption-item">
                    <span className="caption-tag">ESTETIKA</span>
                    <span className="caption-val">Vespa Klasik & Gaya Personal</span>
                  </div>
                  <div className="caption-item">
                    <span className="caption-tag">PERSPEKTIF</span>
                    <span className="caption-val">Ruang Ekspresi & Kebebasan</span>
                  </div>
                </div>
              </div>

              {/* Tiga Pilar Karakter & Minat */}
              <div className="about-pillars">
                <div className="pillar-item">
                  <span className="pillar-num">01</span>
                  <div className="pillar-info">
                    <span className="pillar-label">MESIN KLASIK</span>
                    <span className="pillar-desc">Vespa & Solidaritas Komunitas Scooter</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-num">02</span>
                  <div className="pillar-info">
                    <span className="pillar-label">MUSIK ERA '90-AN</span>
                    <span className="pillar-desc">The Beatles, The Who, Joy Division, Oasis, Blur</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-num">03</span>
                  <div className="pillar-info">
                    <span className="pillar-label">FOTOGRAFI</span>
                    <span className="pillar-desc">Eksplorasi Cerita, Suasana & Seni Visual</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Narasi 5 Paragraf Lengkap Tanpa Mengubah Makna */}
            <div className="about-narrative-col">
              <div className="about-narrative">
                <p className="narrative-paragraph narrative-lead">
                  Najwan memiliki kecintaan terhadap sepeda motor klasik, khususnya Vespa, serta musik dari era 1990-an dan sebelumnya. Ketertarikannya terhadap Vespa berawal dari rasa ingin tahu mengenai komunitas penggemar scooter klasik yang dikenal memiliki jaringan luas, solidaritas kuat, dan kebiasaan saling membantu.
                </p>

                <p className="narrative-paragraph">
                  Bagi Najwan, Vespa bukan sekadar alat transportasi. Setiap perjalanan memiliki cerita dan makna tersendiri. Vespa juga menjadi simbol kebebasan, ruang untuk mengekspresikan diri, serta bagian dari gaya hidup yang ia jalani. Kecintaan tersebut dilengkapi dengan ketertarikannya terhadap dunia berpakaian dan gaya klasik yang menjadi bagian dari penampilannya saat berkendara.
                </p>

                <p className="narrative-paragraph">
                  Musik juga memiliki tempat penting dalam kesehariannya. Ia menikmati karya dari <strong className="music-band">The Beatles</strong>, <strong className="music-band">The Who</strong>, <strong className="music-band">Joy Division</strong>, <strong className="music-band">New Order</strong>, <strong className="music-band">Oasis</strong>, <strong className="music-band">Suede</strong>, <strong className="music-band">Pulp</strong>, dan <strong className="music-band">Blur</strong>. Musik-musik tersebut menjadi teman dalam berbagai aktivitas sekaligus bagian dari selera dan identitas personalnya.
                </p>

                <p className="narrative-paragraph">
                  Di tengah kehidupan yang semakin cepat dan penuh kesibukan, Najwan memilih untuk tetap menikmati kendaraan klasik dan musik dari masa lalu. Baginya, keduanya memberikan ruang untuk menjalani hidup dengan lebih tenang, santai, dan sesuai dengan caranya sendiri.
                </p>

                <p className="narrative-paragraph">
                  Selain menyukai Vespa dan musik, Najwan juga memiliki ketertarikan terhadap fotografi. Ia memandang fotografi sebagai bentuk seni yang memiliki kedekatan dengan seni lukis. Setiap foto bukan hanya rekaman visual, melainkan juga karya yang dapat menyimpan makna, suasana, dan cerita. Fotografi menjadi sarana untuk mengekspresikan diri sekaligus kegiatan yang ia nikmati saat memiliki waktu luang.
                </p>
              </div>
            </div>
          </div>

          {/* 2. BAGIAN PENDIDIKAN DAN PERJALANAN (BAGIAN TERPISAH) */}
          <div className="journey-section-wrap">
            <div className="journey-divider editorial-divider" />

            <div className="journey-header">
              <span className="section-number">01.1 / PENDIDIKAN & PERJALANAN</span>
              <h3 className="section-title journey-section-title">
                <span className="editorial-mask">
                  <span className="editorial-mask-inner">PENDIDIKAN & PERJALANAN</span>
                </span>
              </h3>
            </div>

            <div className="journey-editorial-grid">
              {/* Kolom Kiri: Headline Editorial & Lintasan Pendidikan */}
              <div className="journey-left-col">
                <h4 className="journey-headline">
                  SETIAP ORANG MEMILIKI JALANNYA SENDIRI.
                </h4>

                <div className="journey-path-card">
                  <div className="journey-path-header">
                    <span className="path-indicator-dot" />
                    <span className="path-kicker">LINTASAN PROSES BELAJAR</span>
                  </div>

                  <div className="journey-steps">
                    <div className="journey-step-item">
                      <div className="step-bullet-col">
                        <span className="step-num">01</span>
                        <div className="step-line" />
                      </div>
                      <div className="step-details">
                        <span className="step-level">PENDIDIKAN MENENGAH KEJURUAN</span>
                        <h5 className="step-title">Rekayasa Perangkat Lunak (RPL)</h5>
                        <p className="step-desc">
                          Fokus pada pengembangan website dan aplikasi. Memberikan pengalaman awal dalam mengenal dunia teknologi dan pengembangan perangkat lunak.
                        </p>
                      </div>
                    </div>

                    <div className="journey-step-item">
                      <div className="step-bullet-col">
                        <span className="step-num step-num-current">02</span>
                      </div>
                      <div className="step-details">
                        <span className="step-level">PENDIDIKAN TINGGI (S1)</span>
                        <h5 className="step-title">Ilmu Pemerintahan</h5>
                        <p className="step-desc">
                          Melanjutkan ke jenjang strata satu pada bidang yang berbeda. Menghadapi kesempatan, perubahan, dan pengalaman baru dalam memperluas cakrawala diri.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Narasi Perjalanan & Filosofi Belajar */}
              <div className="journey-right-col">
                <div className="journey-narrative">
                  <p className="narrative-paragraph narrative-lead">
                    Najwan menempuh pendidikan menengah kejuruan di bidang Rekayasa Perangkat Lunak (RPL), dengan fokus pada pengembangan website dan aplikasi. Pendidikan tersebut memberinya pengalaman awal dalam mengenal dunia teknologi dan pengembangan perangkat lunak.
                  </p>

                  <p className="narrative-paragraph">
                    Saat ini, ia melanjutkan pendidikan ke jenjang S1 Ilmu Pemerintahan, bidang yang berbeda dari latar belakang pendidikan sebelumnya. Perbedaan tersebut menjadi bagian dari perjalanan hidupnya dalam menghadapi kesempatan, perubahan, dan pengalaman baru.
                  </p>

                  <p className="narrative-paragraph">
                    Bagi Najwan, proses belajar tidak berhenti setelah menyelesaikan pendidikan tertentu. Semakin banyak pengetahuan yang diperoleh, semakin besar pula kesempatan untuk mengembangkan diri dan memberikan manfaat bagi orang lain.
                  </p>

                  <p className="narrative-paragraph">
                    Ia meyakini bahwa setiap orang memiliki titik awal, pengalaman, dan perjalanan hidup yang berbeda. Karena itu, kehidupan setiap orang tidak dapat dibandingkan begitu saja. Hal yang terpenting adalah terus belajar, menjalani proses dengan baik, serta berusaha memberikan manfaat bagi diri sendiri dan orang lain.
                  </p>

                  {/* Quote Filosofi Belajar */}
                  <div className="journey-quote-box">
                    <div className="quote-mark" aria-hidden="true">“</div>
                    <blockquote className="quote-text">
                      Hal yang terpenting adalah terus belajar, menjalani proses dengan baik, serta berusaha memberikan manfaat bagi diri sendiri dan orang lain.
                    </blockquote>
                    <span className="quote-author">— Nilai & Prinsip Najwan</span>
                  </div>
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
