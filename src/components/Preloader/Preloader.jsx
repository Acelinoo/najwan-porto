import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MOTION_EASE } from '../../lib/motion';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const curtainRef = useRef(null);
  const counterRef = useRef(null);
  const barFillRef = useRef(null);
  const statusRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const counterEl = counterRef.current;
    const barFillEl = barFillRef.current;
    const statusEl = statusRef.current;
    const curtainEl = curtainRef.current;
    const contentEl = contentRef.current;

    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
      }
    });

    // 1. Counter counts 0 to 100 in 0.85s
    tl.to(counterObj, {
      val: 100,
      duration: 0.85,
      ease: 'power2.inOut',
      onUpdate: () => {
        const current = Math.floor(counterObj.val);
        if (counterEl) {
          counterEl.textContent = current < 10 ? `00${current}` : current < 100 ? `0${current}` : '100';
        }
        if (barFillEl) {
          barFillEl.style.transform = `scaleX(${current / 100})`;
        }
        if (statusEl) {
          if (current >= 80) statusEl.textContent = 'READY';
          else if (current >= 40) statusEl.textContent = 'INDEXING EDITORIAL FRAMES';
        }
      }
    });

    // 2. Content fades out quickly
    tl.to(
      contentEl,
      {
        opacity: 0,
        y: -18,
        duration: 0.22,
        ease: 'power2.in'
      },
      '+=0.02'
    );

    // 3. Immediately trigger hero & page animations as curtain lifts
    tl.add(() => {
      onCompleteRef.current?.();
    });

    // 4. Curtain slides up smoothly
    tl.to(
      curtainEl,
      {
        yPercent: -100,
        duration: 0.75,
        ease: MOTION_EASE.curtain
      },
      '-=0.02'
    );

    // Safety timeout: ensure page is never blocked regardless of any external edge case
    const safetyTimer = setTimeout(() => {
      onCompleteRef.current?.();
      setIsFinished(true);
    }, 2200);

    return () => {
      clearTimeout(safetyTimer);
      tl.kill();
    };
  }, []);

  if (isFinished) return null;

  return (
    <div ref={containerRef} className="editorial-preloader" aria-hidden="true">
      <div ref={curtainRef} className="preloader-curtain">
        <div ref={contentRef} className="preloader-content">
          <div className="preloader-top-bar">
            <span className="preloader-brand">NAJWAN PHOTOGRAPHY</span>
            <span className="preloader-meta">VOL. 26 / ARCHIVE</span>
          </div>

          <div className="preloader-center">
            <div className="preloader-counter-wrap">
              <span ref={counterRef} className="preloader-counter">
                000
              </span>
              <span className="preloader-symbol">%</span>
            </div>
            <div className="preloader-bar-track">
              <div ref={barFillRef} className="preloader-bar-fill" />
            </div>
          </div>

          <div className="preloader-bottom-bar">
            <span ref={statusRef} className="preloader-status">
              CALIBRATING OPTICS
            </span>
            <span className="preloader-subtext">EDITORIAL & FASHION LOOKBOOK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
