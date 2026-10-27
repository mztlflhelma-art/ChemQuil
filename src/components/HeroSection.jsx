import React from 'react';

/**
 * HeroSection Component
 * Menampilkan judul utama pengantar media pembelajaran kimia dan tombol "Mulai Belajar"
 */
export default function HeroSection({ onStartClick }) {
  const scrollToTopics = () => {
    if (onStartClick) {
      onStartClick();
      return;
    }
    const topicSection = document.getElementById('topik-pembelajaran');
    if (topicSection) {
      topicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-pulse" aria-hidden="true"></span>
          <span>Media Interaktif Sains Kimia SMA</span>
        </div>

        <h1 id="hero-heading" className="hero-title">
          Kuasai Konsep <span className="highlight-text">Kesetimbangan Kimia</span> dengan Logika Nyata
        </h1>

        <p className="hero-description">
          Selamat datang di <strong>ChemQuil</strong>. Platform belajar interaktif untuk siswa SMA kelas XI. 
          Pahami konsep kesetimbangan dinamis, perumusan tetapan kesetimbangan (Kc & Kp), 
          hingga prediksi arah pergeseran kesetimbangan (Asas Le Chatelier) secara visual dan terstruktur.
        </p>

        <div className="hero-action-group">
          <button
            type="button"
            id="btn-mulai-belajar"
            className="btn-primary hero-cta-btn"
            onClick={scrollToTopics}
          >
            <span>Mulai Belajar</span>
            <svg
              className="btn-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <a href="#topik-pembelajaran" className="btn-secondary hero-secondary-btn">
            Lihat Modul Pembelajaran
          </a>
        </div>

        {/* Indikator Keunggulan Pembelajaran */}
        <div className="hero-stats-row">
          <div className="hero-stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Modul Kesetimbangan</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="hero-stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Bebas Akses Tanpa Login</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="hero-stat-item">
            <span className="stat-number">Kurikulum</span>
            <span className="stat-label">Sesuai Silabus Kimia XI</span>
          </div>
        </div>
      </div>

      {/* Ilustrasi Grafis Sains */}
      <div className="hero-illustration" aria-hidden="true">
        <div className="illustration-card">
          <div className="molecule-bubble bubble-1">
            <span className="bubble-symbol">⇌</span>
          </div>
          <div className="molecule-bubble bubble-2">
            <span className="bubble-symbol">Kc</span>
          </div>
          <div className="molecule-bubble bubble-3">
            <span className="bubble-symbol">Kp</span>
          </div>
          <div className="molecule-bubble bubble-4">
            <span className="bubble-symbol">[NH₃]</span>
          </div>
          <div className="reaction-card-glow">
            <div className="flask-center-art">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                <path d="M10 2v7.31L4.2 18.5A2 2 0 0 0 5.86 21.5h12.28a2 2 0 0 0 1.66-3L14 9.31V2" />
                <line x1="8" y1="2" x2="16" y2="2" />
                <path d="M6 16c2 1 4-1 6 0s4-1 6 0" stroke="#38bdf8" strokeWidth="1.8" />
                <circle cx="9" cy="14" r="1" fill="#38bdf8" />
                <circle cx="15" cy="13" r="1.5" fill="#38bdf8" />
              </svg>
            </div>
            <p className="card-caption">Eksplorasi Konsep Kimia Interaktif</p>
          </div>
        </div>
      </div>
    </section>
  );
}
