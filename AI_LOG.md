# AI_LOG — Catatan Pengembangan Pembelajaran Kimia ChemQuil

## [2026-10-21] — Pembuatan Halaman Beranda (Navbar, Hero, & Kartu Topik)
- **Prompt**: Baca PRD.md dan AGENTS.md di workspace. Bertindaklah sebagai senior React developer dan desainer UI/UX edukasi sains. Buat halaman Beranda yang memuat: 1. Navbar dengan identitas media; 2. Hero dengan judul dan tombol "Mulai Belajar"; 3. Tiga kartu: Stoikiometri, Termokimia, dan Larutan Asam-Basa. Pecah menjadi Navbar.jsx, HeroSection.jsx, dan TopicCards.jsx. Ikuti semua aturan AGENTS.md.
- **Perubahan AI**:
  - `src/components/Navbar.jsx`: Komponen navigasi memuat identitas media "ChemQuil", lencana "Kimia SMA Kelas XI", menu interaktif, dan tombol aksi mobile responsif.
  - `src/components/HeroSection.jsx`: Komponen pengantar dengan judul berbobot sains edukatif, tombol "Mulai Belajar" dengan scrolling halus, statistik pembelajaran mandiri, dan ilustrasi SVG molekul.
  - `src/components/TopicCards.jsx`: Komponen kartu untuk 3 topik (Stoikiometri, Termokimia, dan Larutan Asam-Basa) dilengkapi modal pratinjau topik.
  - `src/components/ChemFormula.jsx`: Komponen helper rumus kimia dengan penulisan subskrip/superskrip standar sains.
  - `src/data/topics.js`: Pemisahan teks materi kimia dari komponen sesuai Bagian 3 AGENTS.md.
  - `src/App.jsx`: Penggabungan seluruh komponen menjadi struktur beranda yang kohesif.
  - `src/App.css` & `src/index.css`: Penataan gaya mobile-first (font >= 16px, kontras tinggi, palet laboratorium modern).
- **Pemeriksaan**:
  - Uji build produksi (`npm run build`): Berhasil tanpa error dalam 240 ms.
  - Uji static analysis / linter (`npm run lint`): 0 error dan 0 warning setelah refactoring impure `Date` dan regex escape.
  - Uji server lokal (`npm run dev`): Berjalan aktif dan merespons `HTTP/1.1 200 OK` pada `http://localhost:5174/`.
- **Koreksi**:
  - Memperbaiki peringatan impure function pada render tahun di footer dengan mengekstrak konstanta `CURRENT_YEAR`.
  - Merapikan karakter escape regex pada `ChemFormula.jsx`.
- **Sumber**:
  - Buku Kimia SMA Kelas XI Kurikulum Merdeka / K13 (Stoikiometri, Termokimia, Larutan Asam-Basa).
  - Standar AGENTS.md dan PRD.md.

## [2026-10-21] — Penyesuaian Modul Sesuai PRD.md (Kesetimbangan Kimia)
- **Prompt**: Sesuaikan modulnya dengan yang ada di file PRD.md nya yaitu Konsep Kesetimbangan Dinamis, Tetapan Kesetimbangan (Kc dan Kp), Pergeseran Kesetimbangan (Asas Le Chatelier)
- **Perubahan AI**:
  - `src/data/topics.js`: Memperbarui 3 modul utama agar tepat sesuai PRD.md:
    1. Modul 1: Konsep Kesetimbangan Dinamis (reaksi reversibel, laju reaksi v₁ = v₂, kondisi dinamis)
    2. Modul 2: Tetapan Kesetimbangan (Kc dan Kp) (hukum aksi massa, Kp = Kc(RT)^Δn, zat solid/liquid diabaikan, kuosien reaksi Qc)
    3. Modul 3: Pergeseran Kesetimbangan (Asas Le Chatelier) (faktor konsentrasi, suhu, tekanan/volume gas, peran katalis yang tidak menggeser kesetimbangan)
  - `src/data/modules.js`: Menambahkan berkas ekspor modul sesuai struktur AGENTS.md Bagian 3.
  - `src/components/TopicCards.jsx`: Memperbarui tampilan kartu dengan contoh reaksi baku (N₂O₄ ⇌ 2NO₂, N₂ + 3H₂ ⇌ 2NH₃) dan rumus acuan.
  - `src/components/HeroSection.jsx`: Menyelaraskan teks pengantar dan balon molekul ke materi kesetimbangan kimia (⇌, Kc, Kp, [NH₃]).
  - `src/App.jsx` & `src/App.css`: Memperbarui tautan footer dan menambahkan gaya tampilan pill reaksi kesetimbangan.
- **Pemeriksaan**:
  - Linter (`npm run lint`): 0 error, 0 warning pada seluruh 9 berkas.
  - Build produksi (`npm run build`): Berhasil tanpa kendala (224 ms).
  - Respon server lokal (`http://localhost:5174/`): HTTP 200 OK.
- **Koreksi**:
  - Menyelaraskan contoh reaksi dan arah pergeseran dengan aturan baku kimia di AGENTS.md Bagian 4.
- **Sumber**:
  - PRD.md & AGENTS.md Bagian 4 (Aturan Konten Kimia).
  - Reaksi baku Haber-Bosch dan dimerisasi N₂O₄/NO₂.

## [2026-10-26] — Pemulihan Operasional Server & Penanganan Error Perintah Terminal
- **Prompt**: Buatlah website yang sudah dibuat dapat dioperasikan kembali karena kemarin ditemukan error karena sempat typo di terminalnya
- **Perubahan AI**:
  - `package.json`: Menambahkan skrip `"start": "vite"` agar perintah umum `npm start` dapat dijalankan dengan sukses di samping `npm run dev`.
  - `jalankan.bat`: Menambahkan berkas skrip praktis (batch) agar guru dapat langsung menjalankan server lokal dan membuka browser secara otomatis tanpa perlu khawatir salah ketik di terminal.
  - Menjalankan kembali server Vite lokal pada latar belakang (`http://localhost:5173/`).
- **Pemeriksaan**:
  - Uji server lokal (`http://localhost:5173/`): Berjalan normal dengan respons HTTP 200 OK.
  - Linter (`npm.cmd run lint`): 0 error, 0 warning pada seluruh 9 berkas.
  - Build produksi (`npm.cmd run build`): Berhasil tanpa error dalam 363 ms.
- **Koreksi**:
  - Mengantisipasi kendala eksekusi PowerShell di Windows dengan menyediakan opsi `npm.cmd` dan skrip `jalankan.bat`.
  - Menambahkan alias skrip `npm start` untuk mengantisipasi siswa atau guru yang terbiasa mengetik `npm start`.
- **Sumber**:
  - PRD.md & AGENTS.md.
