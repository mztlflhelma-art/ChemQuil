import React, { useState } from 'react';
import { topicsData } from '../data/topics';
import ChemFormula from './ChemFormula';

/**
 * TopicCards Component
 * Menampilkan 3 modul kesetimbangan kimia sesuai PRD.md:
 * 1. Konsep Kesetimbangan Dinamis
 * 2. Tetapan Kesetimbangan (Kc dan Kp)
 * 3. Pergeseran Kesetimbangan (Asas Le Chatelier)
 * Sesuai aturan AGENTS.md, teks materi diambil dari src/data/topics.js
 */
export default function TopicCards({ onSelectTopic }) {
  const [activeTopic, setActiveTopic] = useState(null);

  const handleCardClick = (topic) => {
    setActiveTopic(topic);
    if (onSelectTopic) {
      onSelectTopic(topic.id);
    }
  };

  const handleCloseModal = () => {
    setActiveTopic(null);
  };

  return (
    <section id="topik-pembelajaran" className="topics-section" aria-labelledby="topics-title">
      <div className="section-header">
        <span className="section-tag">Kurikulum Kimia SMA Kelas XI • Materi Kesetimbangan</span>
        <h2 id="topics-title" className="section-title">
          Modul Pembelajaran Kesetimbangan Kimia
        </h2>
        <p className="section-subtitle">
          Pilih modul di bawah ini untuk memulai pemahaman terstruktur dari konsep reaksi dinamis, 
          perhitungan tetapan Kc & Kp, hingga analisis pergeseran kesetimbangan menurut Asas Le Chatelier.
        </p>
      </div>

      <div className="cards-grid">
        {topicsData.map((topic) => (
          <article
            key={topic.id}
            id={`topic-card-${topic.id}`}
            className="topic-card"
            style={{ '--topic-accent': topic.accentColor }}
          >
            {/* Header Kartu: Ikon & Badge */}
            <div className="card-top-row">
              <span className="topic-icon-box" aria-hidden="true">
                {topic.icon}
              </span>
              <span className="topic-category-badge">{topic.badge}</span>
            </div>

            {/* Judul & Subjudul */}
            <h3 className="topic-card-title">{topic.title}</h3>
            <h4 className="topic-card-subtitle">{topic.subtitle}</h4>

            {/* Deskripsi Materi */}
            <p className="topic-card-desc">{topic.description}</p>

            {/* Poin-Poin Konsep Kunci */}
            <div className="key-concepts-box">
              <span className="concepts-title">Fokus Materi Inti:</span>
              <ul className="concepts-list">
                {topic.keyConcepts.map((item, idx) => (
                  <li key={idx} className="concept-item">
                    <svg className="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contoh Reaksi Baku Sesuai AGENTS.md Bagian 4.3 */}
            {topic.sampleReaction && (
              <div className="reaction-pill">
                <span className="reaction-label">Contoh Reaksi:</span>
                <code className="reaction-code">
                  <ChemFormula formula={topic.sampleReaction} />
                </code>
              </div>
            )}

            {/* Formula / Rumus Acuan */}
            <div className="formula-pill">
              <span className="formula-label">Rumus Kunci:</span>
              <code className="formula-code">
                <ChemFormula formula={topic.sampleFormula} />
              </code>
            </div>

            {/* Tombol Pelajari */}
            <button
              type="button"
              id={`btn-belajar-${topic.id}`}
              className="btn-card-learn"
              onClick={() => handleCardClick(topic)}
              aria-label={`Pelajari modul ${topic.title}`}
            >
              <span>Pelajari Modul</span>
              <svg className="btn-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </article>
        ))}
      </div>

      {/* Modal Preview Ringkas ketika Siswa Memilih Topik */}
      {activeTopic && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-content">
            <button
              type="button"
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Tutup jendela informasi modul"
            >
              ✕
            </button>
            <div className="modal-header">
              <span className="modal-icon">{activeTopic.icon}</span>
              <div>
                <span className="modal-badge">{activeTopic.badge}</span>
                <h3 id="modal-title" className="modal-title">{activeTopic.title}</h3>
              </div>
            </div>
            <p className="modal-description">{activeTopic.description}</p>
            
            <div className="modal-info-box">
              <h4>Pokok Bahasan Utama:</h4>
              <ul>
                {activeTopic.keyConcepts.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              {activeTopic.sampleReaction && (
                <div className="modal-formula-highlight" style={{ marginBottom: '0.4rem' }}>
                  <span>Contoh Reaksi: </span>
                  <strong>{activeTopic.sampleReaction}</strong>
                </div>
              )}
              <div className="modal-formula-highlight">
                <span>Rumus Kunci: </span>
                <strong>{activeTopic.sampleFormula}</strong>
              </div>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-primary modal-action-btn"
                onClick={() => {
                  alert(`Memulai ${activeTopic.title}. Materi interaktif akan dibuka!`);
                  handleCloseModal();
                }}
              >
                Mulai Modul Sekarang
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleCloseModal}
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
