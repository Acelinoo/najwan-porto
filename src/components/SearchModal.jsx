import React, { useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import './SearchModal.css';

export default function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Modal Pencarian">
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <Search size={22} className="search-icon-modal" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari karya, tema, atau seri foto..."
            className="search-input-field"
            aria-label="Input pencarian foto"
          />
          <button type="button" className="search-close-btn" onClick={onClose} aria-label="Tutup pencarian">
            <X size={20} />
          </button>
        </div>

        <div className="search-suggestions">
          <p className="suggestions-title">SERI POPULER</p>
          <div className="suggestion-tags">
            <a href="#karya" onClick={onClose} className="suggestion-tag">
              <span>Editorial Series</span>
              <ArrowRight size={12} />
            </a>
            <a href="#karya" onClick={onClose} className="suggestion-tag">
              <span>Vespa & Urban Street</span>
              <ArrowRight size={12} />
            </a>
            <a href="#galeri" onClick={onClose} className="suggestion-tag">
              <span>Fashion Lookbook</span>
              <ArrowRight size={12} />
            </a>
            <a href="#about" onClick={onClose} className="suggestion-tag">
              <span>Portrait Story</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
