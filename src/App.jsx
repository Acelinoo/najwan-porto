import React, { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll } from './lib/smoothScroll';
import Preloader from './components/Preloader/Preloader';
import ProgressBar from './components/ProgressBar/ProgressBar';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling integrated with GSAP Ticker
    const smoothScroll = initSmoothScroll();

    // 2. Refresh ScrollTrigger once window is loaded to prevent any layout offset
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      smoothScroll?.destroy();
    };
  }, []);

  const handlePreloaderComplete = React.useCallback(() => {
    setIsReady(true);
    // Refresh ScrollTrigger as elements settle into position
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  }, []);

  return (
    <div className="editorial-app">
      {/* 1. Preloader with Tabular Counter & Curtain Reveal */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* 2. Top Scroll Progress Bar */}
      <ProgressBar />

      {/* 3. Custom Follower Cursor with Context Badges */}
      <CustomCursor />

      {/* 4. Editorial Navigation Header */}
      <Header isReady={isReady} />

      <main id="main-content">
        {/* 5. Hero Section with Masked Typography, Depth Layering, & Parallax */}
        <Hero isReady={isReady} />

        {/* 6. Editorial Content Sections (Tentang, Karya WebGL, Arsip Drift, Footer) */}
        <Sections />
      </main>
    </div>
  );
}
