import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION_EASE, MOTION_DURATION, MOTION_STAGGER } from '../lib/motion';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Header({ isReady = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    let timer = null;
    let ctx = null;

    const initAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      ctx = gsap.context(() => {
        // 1. Coordinated entrance
        const tl = gsap.timeline({ delay: 0.05 });

        tl.fromTo(
          '.brand-title',
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: MOTION_DURATION.base,
            ease: MOTION_EASE.editorial,
            clearProps: 'transform,opacity'
          },
          0
        );

        tl.fromTo(
          '.nav-link',
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: MOTION_DURATION.base,
            stagger: MOTION_STAGGER.base,
            ease: MOTION_EASE.editorial,
            clearProps: 'transform,opacity'
          },
          0.08
        );

        tl.fromTo(
          '.header-icon-btn',
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: MOTION_DURATION.base,
            stagger: MOTION_STAGGER.base,
            ease: MOTION_EASE.editorial,
            clearProps: 'transform,opacity'
          },
          0.16
        );

        // 2. Smart scroll-hide and scroll-reveal
        let lastScroll = 0;
        ScrollTrigger.create({
          start: 'top top',
          end: 'max',
          onUpdate: (self) => {
            const currentScroll = self.scroll();
            const header = headerRef.current;
            if (!header) return;

            // Hide after threshold when scrolling down
            if (currentScroll > 120 && currentScroll > lastScroll) {
              gsap.to(header, {
                yPercent: -100,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
              });
            } else if (currentScroll < lastScroll || currentScroll <= 40) {
              // Reveal when scrolling up or at top
              gsap.to(header, {
                yPercent: 0,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
              });
            }
            lastScroll = currentScroll;
          }
        });
      }, headerRef);
    };

    if (isReady) {
      initAnimation();
    } else {
      timer = setTimeout(initAnimation, 1100);
    }

    return () => {
      if (timer) clearTimeout(timer);
      ctx?.revert();
    };
  }, [isReady]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="editorial-header">
      {/* Bagian Kiri: Navigasi Desktop (01 TENTANG & 02 KARYA) */}
      <nav className="header-nav-left" aria-label="Navigasi Utama">
        <a href="#tentang" className="nav-link">
          <span className="nav-link-num">01</span>
          <span className="nav-link-label">TENTANG</span>
        </a>
        <a href="#karya" className="nav-link">
          <span className="nav-link-num">02</span>
          <span className="nav-link-label">KARYA</span>
        </a>
        <a href="#arsip" className="nav-link">
          <span className="nav-link-num">03</span>
          <span className="nav-link-label">ARSIP</span>
        </a>
        <a href="#kontak" className="nav-link">
          <span className="nav-link-num">04</span>
          <span className="nav-link-label">KONTAK</span>
        </a>
      </nav>

      {/* Bagian Tengah: Teks Brand Photographer */}
      <div className="header-brand-center">
        <a href="#" className="brand-title" aria-label="Najwan Photographer - Beranda">
          Photographer
        </a>
      </div>

      {/* Bagian Kanan: Ikon Instagram & Mobile Menu */}
      <div className="header-actions-right">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-icon-btn"
          aria-label="Kunjungi profil Instagram Najwan"
          title="Instagram Najwan"
        >
          <InstagramIcon size={18} />
        </a>

        {/* Hamburger Menu untuk Mobile */}
        <button
          type="button"
          className="header-icon-btn mobile-menu-btn"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-brand">Photographer</span>
            <button
              type="button"
              className="header-icon-btn"
              onClick={closeMobileMenu}
              aria-label="Tutup menu"
            >
              <X size={22} strokeWidth={1.8} />
            </button>
          </div>

          <nav className="mobile-links">
            <a href="#tentang" className="mobile-link" onClick={closeMobileMenu}>
              <span className="mobile-link-num">01</span>
              <span className="mobile-link-text">TENTANG</span>
            </a>
            <a href="#karya" className="mobile-link" onClick={closeMobileMenu}>
              <span className="mobile-link-num">02</span>
              <span className="mobile-link-text">KARYA</span>
            </a>
            <a href="#arsip" className="mobile-link" onClick={closeMobileMenu}>
              <span className="mobile-link-num">03</span>
              <span className="mobile-link-text">ARSIP</span>
            </a>
            <a href="#kontak" className="mobile-link" onClick={closeMobileMenu}>
              <span className="mobile-link-num">04</span>
              <span className="mobile-link-text">KONTAK</span>
            </a>
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <InstagramIcon size={16} />
              <span>@najwan.photo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
