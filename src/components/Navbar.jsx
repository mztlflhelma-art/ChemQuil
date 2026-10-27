import React, { useState } from 'react';

/**
 * Navbar Component
 * Memuat identitas media "ChemQuil" (sesuai PRD.md) untuk siswa SMA kelas XI
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (targetId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Identitas Media */}
        <a href="#beranda" className="navbar-brand" onClick={() => handleNavClick('beranda')}>
          <div className="brand-logo" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2v7.31L4.2 18.5A2 2 0 0 0 5.86 21.5h12.28a2 2 0 0 0 1.66-3L14 9.31V2" />
              <line x1="8" y1="2" x2="16" y2="2" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <circle cx="12" cy="16" r="1" fill="currentColor" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">ChemQuil</span>
            <span className="brand-badge">Kimia SMA Kelas XI</span>
          </div>
        </a>

        {/* Tombol Hamburger untuk Layar Ponsel */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Buka menu navigasi"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Tautan Navigasi Desktop & Mobile */}
        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Navigasi Utama">
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('beranda')}
          >
            Beranda
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('topik-pembelajaran')}
          >
            Topik Pembelajaran
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('tentang-media')}
          >
            Tentang
          </button>
          <button
            type="button"
            className="nav-cta-btn"
            onClick={() => handleNavClick('topik-pembelajaran')}
          >
            Mulai Belajar
          </button>
        </nav>
      </div>
    </header>
  );
}
