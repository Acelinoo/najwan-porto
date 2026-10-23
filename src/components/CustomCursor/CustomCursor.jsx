import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'drag' | 'explore'
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop/mouse)
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Use gsap.quickTo for ultra-smooth 60+ FPS mouse following with zero lag
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' });
    const dotXTo = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
    const dotYTo = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });

    let hasMoved = false;

    const onMouseMove = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        setVisible(true);
      }
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);

      // Check current hover target
      const target = e.target;
      if (!target) return;

      const isCarousel = target.closest?.('.flex-carousel') || target.closest?.('#karya');
      const isDriftWall = target.closest?.('.driftwall-stage') || target.closest?.('#arsip');
      const isInteractive = target.closest?.('a, button, input, textarea, [role="button"], .header-icon-btn, .spec-item');

      if (isCarousel) {
        setCursorType('drag');
      } else if (isDriftWall) {
        setCursorType('explore');
      } else if (isInteractive) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`editorial-cursor-ring ${cursorType} ${visible ? 'is-visible' : ''}`}
        aria-hidden="true"
      >
        <span ref={labelRef} className="cursor-label">
          {cursorType === 'drag' ? 'DRAG' : cursorType === 'explore' ? 'EXPLORE' : ''}
        </span>
      </div>
      <div
        ref={dotRef}
        className={`editorial-cursor-dot ${cursorType} ${visible ? 'is-visible' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
