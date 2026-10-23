import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProgressBar.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
}
