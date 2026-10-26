import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { MOTION_EASE, MOTION_DURATION, MOTION_STAGGER, SCROLL_REVEAL_DEFAULTS } from '../lib/motion';
import './Sections.css';

gsap.registerPlugin(ScrollTrigger);



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
      // --- 1. SECTION 01 / ABOUT (TENTANG SAYA) ANIMATIONS ---
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

      // --- 2. SECTION 02 / JOURNEY (PERJALANAN) ANIMATIONS ---
      gsap.fromTo(
        '#journey .editorial-divider',
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: '#journey',
            ...SCROLL_REVEAL_DEFAULTS
          },
          scaleX: 1,
          duration: MOTION_DURATION.editorial,
          ease: MOTION_EASE.editorial,
          clearProps: 'scaleX'
        }
      );

      gsap.fromTo(
        '#journey .section-number',
        { x: -35, opacity: 0, letterSpacing: '0.35em' },
        {
          scrollTrigger: {
            trigger: '#journey',
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
        '#journey .section-title .editorial-mask-inner',
        { yPercent: 110 },
        {
          scrollTrigger: {
            trigger: '#journey',
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
        '#journey .journey-headline',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#journey .journey-editorial-grid',
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
        '#journey .journey-intro-text .narrative-paragraph',
        { y: 28, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#journey .journey-intro-text',
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
        '#journey .timeline-node',
        { x: -25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#journey .journey-timeline',
            ...SCROLL_REVEAL_DEFAULTS
          },
          x: 0,
          opacity: 1,
          stagger: 0.16,
          duration: MOTION_DURATION.base,
          ease: MOTION_EASE.editorial,
          clearProps: 'all'
        }
      );

      gsap.to('#journey .section-title', {
        x: -24,
        ease: 'none',
        scrollTrigger: {
          trigger: '#journey',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // --- 3. SECTION KONTAK ANIMATIONS ---
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
      {/* 01 / SECTION ABOUT */}
      <section id="about" className="editorial-section section-about" aria-label="Tentang Saya">
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

          {/* Konten Tentang Saya (Dua Kolom Editorial) */}
          <div className="about-editorial-grid">
            {/* Kolom Kiri: Headline Besar & Frame Visual Najwan */}
            <div className="about-hero-col">
              <h3 className="about-editorial-headline">
                DI ANTARA VESPA, MUSIK, DAN FOTOGRAFI.
              </h3>

              {/* Editorial Visual Media Frame */}
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

                <div className="about-passions-card">
                  <span className="passions-tag-label">MINAT & KETERTARIKAN</span>
                  <div className="passions-pill-row">
                    <span className="passion-pill">Vespa Klasik</span>
                    <span className="passion-pill">Musik '90-an & Sebelumnya</span>
                    <span className="passion-pill">Seni Fotografi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Narasi Personal Menggunakan Sudut Pandang Orang Pertama */}
            <div className="about-narrative-col">
              <div className="about-narrative">
                <p className="narrative-paragraph narrative-lead">
                  Saya menyukai sepeda motor klasik, khususnya Vespa, serta musik dari era 1990-an dan sebelumnya. Ketertarikan terhadap Vespa berawal dari rasa ingin tahu saya terhadap komunitas scooter klasik, yang dikenal memiliki jaringan luas, solidaritas kuat, dan kebiasaan saling membantu.
                </p>

                <p className="narrative-paragraph">
                  Bagi saya, Vespa bukan sekadar kendaraan. Setiap perjalanan memiliki cerita dan arti tersendiri. Ada kebebasan, kebersamaan, dan ruang untuk mengekspresikan diri melalui kendaraan, pakaian, serta gaya hidup yang saya pilih.
                </p>

                <p className="narrative-paragraph">
                  Musik juga menjadi bagian dari keseharian saya. The Beatles, The Who, Joy Division, New Order, Oasis, Suede, Pulp, dan Blur adalah beberapa band yang sering saya dengarkan. Musik-musik tersebut menemani berbagai aktivitas dan menjadi bagian dari selera pribadi saya.
                </p>

                <p className="narrative-paragraph">
                  Di tengah kehidupan yang semakin cepat, saya tetap menikmati Vespa dan musik klasik karena keduanya memberikan ruang untuk menjalani hari dengan lebih tenang dan santai. Saya tidak merasa harus selalu mengikuti perubahan zaman. Ada hal-hal lama yang tetap layak dinikmati dan memiliki arti tersendiri.
                </p>

                <p className="narrative-paragraph">
                  Selain Vespa dan musik, saya juga menyukai fotografi. Bagi saya, fotografi merupakan bentuk seni yang memiliki kedekatan dengan seni lukis. Setiap jepretan dapat menyimpan cerita, suasana, dan makna yang berbeda. Saya menikmati proses mengamati, menemukan sudut pandang, dan mengabadikan momen melalui gambar.
                </p>

                <p className="narrative-paragraph">
                  Fotografi juga menjadi cara bagi saya untuk mengekspresikan diri sekaligus menikmati waktu luang. Melalui foto, saya ingin menyimpan hal-hal yang menarik perhatian saya dan membagikan cara saya melihat dunia kepada orang lain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / SECTION JOURNEY */}
      <section id="journey" className="editorial-section section-journey" aria-label="Perjalanan Najwan">
        {/* Alias anchor jika diperlukan */}
        <span id="perjalanan" className="section-anchor-alias" aria-hidden="true" />
        <div className="editorial-divider" />

        <div className="section-container">
          <div className="section-header">
            <span className="section-number">02 / PERJALANAN</span>
            <h2 className="section-title">
              <span className="editorial-mask">
                <span className="editorial-mask-inner">PERJALANAN</span>
              </span>
            </h2>
          </div>

          <div className="journey-editorial-grid">
            {/* Kolom Kiri: Headline & Deskripsi Pembuka (Sudut Pandang Orang Pertama) */}
            <div className="journey-intro-col">
              <h3 className="journey-headline">
                SETIAP ORANG MEMILIKI JALANNYA SENDIRI.
              </h3>

              <div className="journey-intro-text">
                <p className="narrative-paragraph narrative-lead">
                  Perjalanan saya tidak selalu berjalan dalam satu arah. Saya memulai pendidikan di bidang teknologi, kemudian melanjutkan studi di bidang yang berbeda. Dari proses tersebut, saya belajar bahwa perkembangan diri tidak harus selalu mengikuti satu jalur yang sama.
                </p>

                <p className="narrative-paragraph">
                  Saya percaya bahwa belajar merupakan proses yang tidak pernah selesai. Semakin banyak hal yang dipelajari, semakin besar kesempatan untuk berkembang dan memberikan manfaat bagi diri sendiri maupun orang lain.
                </p>

                <p className="narrative-paragraph">
                  Bagi saya, setiap orang memiliki titik awal, kesempatan, dan perjalanan yang berbeda. Tidak semua orang harus berjalan dengan kecepatan atau arah yang sama. Hal terpenting adalah tetap mau belajar, menjalani proses, dan berusaha menjadi pribadi yang bermanfaat.
                </p>
              </div>
            </div>

            {/* Kolom Kanan: Riwayat Pendidikan (Dua Tahap Utama Sederhana Tanpa Fakta Karangan) */}
            <div className="journey-timeline-col">
              <div className="journey-timeline-card">
                <div className="timeline-card-header">
                  <span className="timeline-header-dot" />
                  <span className="timeline-header-tag">PENDIDIKAN</span>
                </div>

                <div className="journey-timeline">
                  {/* Tahap 1: SMK RPL */}
                  <div className="timeline-node">
                    <div className="timeline-node-aside">
                      <span className="node-index">01</span>
                      <div className="node-stem" />
                    </div>
                    <div className="node-content">
                      <span className="node-category">PENDIDIKAN MENENGAH KEJURUAN</span>
                      <h4 className="node-title">SMK — Rekayasa Perangkat Lunak (RPL)</h4>
                      <p className="node-description">
                        Saya menempuh pendidikan di bidang Rekayasa Perangkat Lunak dengan mempelajari dasar-dasar pengembangan website dan aplikasi. Dari pengalaman tersebut, saya mulai mengenal dunia teknologi dan memahami bagaimana sebuah aplikasi dibangun.
                      </p>
                    </div>
                  </div>

                  {/* Tahap 2: S1 Ilmu Pemerintahan */}
                  <div className="timeline-node">
                    <div className="timeline-node-aside">
                      <span className="node-index node-index-active">02</span>
                    </div>
                    <div className="node-content">
                      <span className="node-category">PENDIDIKAN TINGGI (S1)</span>
                      <h4 className="node-title">S1 — Ilmu Pemerintahan</h4>
                      <p className="node-description">
                        Saat ini, saya menempuh pendidikan S1 di bidang Ilmu Pemerintahan, bidang yang berbeda dari latar belakang pendidikan sebelumnya. Perubahan ini menjadi bagian dari perjalanan saya dalam mempelajari hal baru dan menjalani kesempatan yang ada.
                      </p>
                      <p className="node-description node-sub-description">
                        Saya percaya bahwa latar belakang pendidikan bukan satu-satunya hal yang menentukan arah hidup seseorang. Selama masih memiliki kemauan untuk belajar, selalu ada kesempatan untuk memperluas wawasan dan mengembangkan diri.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / SECTION KONTAK (Desain Eksak Sesuai Gambar 1) */}
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
