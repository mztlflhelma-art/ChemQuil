import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopicCards from './components/TopicCards';
import './App.css';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * App Component - Halaman Beranda ChemQuil
 * Menggabungkan Navbar, HeroSection, dan TopicCards sesuai instruksi & AGENTS.md
 */
export default function App() {
  const handleSelectTopic = (topicId) => {
    // Sesuai AGENTS.md: pencatatan modul yang dipilih siswa dapat dihubungkan ke modul detail
    console.info(`Topik dipilih: ${topicId}`);
  };

  return (
    <div className="app-wrapper">
      {/* 1. Navbar dengan Identitas Media */}
      <Navbar />

      <main className="main-content">
        {/* 2. Hero dengan Judul dan Tombol "Mulai Belajar" */}
        <HeroSection />

        {/* 3. Tiga Kartu Topik: Stoikiometri, Termokimia, Larutan Asam-Basa */}
        <TopicCards onSelectTopic={handleSelectTopic} />
      </main>

      {/* Footer Edukasi Sains */}
      <footer id="tentang-media" className="footer-section">
        <div className="footer-inner">
          <div>
            <div className="brand-name" style={{ fontSize: '1.25rem' }}>ChemQuil</div>
            <p className="footer-brand-desc">
              Media pembelajaran kimia interaktif untuk siswa SMA kelas XI. 
              Dirancang khusus untuk memvisualisasikan konsep kesetimbangan dinamis, tetapan kesetimbangan (Kc dan Kp), 
              serta memprediksi arah pergeseran kesetimbangan (Asas Le Chatelier).
            </p>
          </div>

          <div className="footer-column">
            <h4>Modul Pembelajaran</h4>
            <ul>
              <li><a href="#topik-pembelajaran">1. Konsep Kesetimbangan Dinamis</a></li>
              <li><a href="#topik-pembelajaran">2. Tetapan Kesetimbangan (Kc & Kp)</a></li>
              <li><a href="#topik-pembelajaran">3. Pergeseran Kesetimbangan</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Informasi</h4>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#topik-pembelajaran">Panduan Belajar</a></li>
              <li><a href="#tentang-media">Tentang Pengembang</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {CURRENT_YEAR} ChemQuil — Kimia SMA Kelas XI. Bebas diakses untuk pembelajaran.</span>
          <span>Desain Sesuai Standar AGENTS.md</span>
        </div>
      </footer>
    </div>
  );
}
