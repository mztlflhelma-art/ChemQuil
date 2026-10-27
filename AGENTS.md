# Cara Memulai Setiap Tugas

1. Baca `PRD.md` dan `AGENTS.md` sampai selesai.
2. Kerjakan **satu tahap/tugas per permintaan**. Jangan melompat ke fitur lain.
3. Jika permintaan ambigu atau bertentangan dengan `PRD.md`, **tanyakan dulu**, jangan menebak.
4. Setelah selesai, jelaskan **file apa yang dibuat/diubah** dan **apa yang perlu diperiksa pengguna**.

## 1. Peran dan Pengguna

- Pengguna Anda adalah **guru kimia, bukan programmer**. Jelaskan perubahan dengan bahasa sederhana.
- Pengguna akhir produk adalah **siswa SMA kelas XI**.
- Anda berperan sebagai **senior React developer** sekaligus **desainer UI/UX edukasi sains**.

## 2. Teknologi (Wajib)

| Aspek | Aturan |
|---|---|
| Framework | React + Vite, komponen fungsional dengan Hooks |
| Bahasa | JavaScript (`.jsx`); jangan pakai TypeScript kecuali diminta |
| Styling | Tailwind CSS atau CSS biasa; pilih **satu** dan konsisten |
| Routing | `react-router-dom` untuk multi-halaman |
| Grafik | Pustaka ringan (mis. `recharts`) atau SVG/Canvas buatan sendiri |
| Penyimpanan | **`localStorage` saja**; data anonim |
| Backend | **Dilarang**: tanpa server, database, atau API luar |
| Paket tambahan | Tambahkan **hanya jika perlu**, sebutkan alasannya, dan hindari paket berat |

> Jika Anda tergoda membuat backend, login, atau database: **berhenti**. Itu di luar cakupan (lihat `PRD.md` bagian 5.3).

## 3. Struktur Folder

```
web-kimia/
├─ PRD.md
├─ AGENTS.md
├─ AI_LOG.md
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ components/        ← komponen yang dipakai ulang
   │  ├─ Navbar.jsx
   │  ├─ HeroSection.jsx
   │  ├─ ModuleCard.jsx
   │  ├─ Quiz.jsx
   │  ├─ ChemFormula.jsx   ← helper penulisan rumus
   │  └─ ProgressBar.jsx
   ├─ pages/             ← satu file per halaman
   │  ├─ Home.jsx
   │  ├─ Modul1Konsep.jsx
   │  ├─ Modul2Tetapan.jsx
   │  ├─ Modul3Pergeseran.jsx
   │  └─ Modul4Kehidupan.jsx
   ├─ simulations/       ← simulasi & kalkulator
   │  ├─ LeChatelierSim.jsx
   │  └─ KcKpCalculator.jsx
   ├─ data/              ← KONTEN (mudah diedit guru)
   │  ├─ modules.js
   │  └─ quizzes.js
   └─ utils/
      ├─ storage.js       ← pembungkus localStorage
      └─ equilibrium.js   ← logika perhitungan kimia
```

Aturan struktur:
- **Satu komponen = satu file**, dengan nama berawalan huruf besar (PascalCase).
- Jangan menaruh teks materi dan soal di dalam komponen. Simpan di `src/data/`.
- Logika perhitungan kimia dipisah di `utils/equilibrium.js` agar mudah diuji.
- Jangan membuat file raksasa; pecah bila satu file melebihi ±200 baris.

## 4. Aturan Konten Kimia (Sangat Penting)

Kebenaran konsep **lebih penting daripada tampilan**. Jika ragu, **tandai dengan komentar `// PERIKSA GURU:`** dan jangan mengarang.

### 4.1 Konsep yang harus benar

- Kesetimbangan itu **dinamis**: laju reaksi maju = laju reaksi balik. Reaksi **tidak berhenti**.
- Konsentrasi saat setimbang **tidak harus sama**; yang konstan adalah **perbandingannya** sesuai K.
- **Zat padat dan cairan murni tidak ditulis** dalam ekspresi Kc/Kp.
- **Katalis tidak menggeser kesetimbangan** dan **tidak mengubah nilai K**; katalis hanya mempercepat tercapainya setimbang.
- **Nilai K hanya berubah karena suhu.**
- Pengaruh tekanan/volume hanya terjadi jika **jumlah mol gas ruas kiri ≠ ruas kanan**. Jika sama, tidak ada pergeseran.
- Aturan pergeseran (asas Le Chatelier):
  - Konsentrasi pereaksi ditambah → bergeser ke **produk**; produk ditambah → bergeser ke **pereaksi**.
  - Suhu naik → bergeser ke arah reaksi **endoterm**; suhu turun → bergeser ke arah **eksoterm**.
  - Tekanan naik (volume turun) → bergeser ke sisi dengan **jumlah mol gas lebih sedikit**.
  - Tekanan turun (volume naik) → bergeser ke sisi dengan **jumlah mol gas lebih banyak**.
- Hubungan Kc dan Kp: `Kp = Kc (RT)^Δn`, dengan `Δn` = (mol gas produk) − (mol gas pereaksi).
- Perbandingan Qc dan Kc: `Qc < Kc` → bergeser ke kanan; `Qc > Kc` → bergeser ke kiri; `Qc = Kc` → setimbang.

### 4.2 Notasi dan penulisan

- Panah kesetimbangan memakai **⇌**, bukan `<->` atau `=`.
- Subskrip dan superskrip ditulis benar: H₂O, NH₃, SO₃, CO₂, Kc, Kp, ΔH.
- Konsentrasi memakai kurung siku: `[NH₃]`.
- Wujud zat ditulis: (s), (l), (g), (aq).
- Satuan selalu disertakan: M, atm, kJ/mol, K atau °C.
- Gunakan komponen **`ChemFormula.jsx`** untuk menampilkan rumus agar subskrip seragam di seluruh situs. Jangan menulis `H2O` biasa untuk teks yang tampil ke siswa.
- Angka memakai **koma desimal** pada teks bahasa Indonesia (mis. 0,25 M), kecuali di dalam kode.

### 4.3 Reaksi yang boleh dipakai sebagai contoh

Pakai reaksi baku dari buku teks, misalnya:

- `N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ` (Haber-Bosch)
- `2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH < 0` (proses Kontak)
- `N₂O₄(g) ⇌ 2NO₂(g)   ΔH > 0`
- `H₂(g) + I₂(g) ⇌ 2HI(g)`
- `CaCO₃(s) ⇌ CaO(s) + CO₂(g)` (heterogen)

Jangan membuat reaksi baru, data ΔH, atau nilai K yang tidak jelas sumbernya.

## 5. Aturan Simulasi dan Kalkulator

- Logika perhitungan ditulis di `utils/equilibrium.js` dan **terpisah dari tampilan**.
- Simulasi boleh **kualitatif atau semi-kuantitatif** (model sederhana), tetapi **arah pergeserannya harus benar** untuk keempat faktor.
- Setiap perubahan pada simulasi wajib menampilkan **kalimat penjelasan** (mis. "Suhu dinaikkan, sehingga kesetimbangan bergeser ke arah reaksi endoterm").
- Kalkulator Kc/Kp harus:
  - mengabaikan zat padat/cairan murni,
  - menampilkan **langkah perhitungan**, bukan hanya angka akhir,
  - menolak input tidak valid (kosong, negatif, nol di penyebut) dengan pesan ramah.
- Simulasi harus tetap terbaca di layar HP (grafik tidak terpotong).

## 6. Aturan Kuis

- Data soal berada di `src/data/quizzes.js` dengan bentuk:

```js
{
  id: "m3-q1",
  modul: 3,
  pertanyaan: "...",
  pilihan: ["...", "...", "...", "..."],
  jawabanBenar: 1,        // indeks pilihan yang benar
  pembahasan: "..."
}
```

- Setiap soal wajib punya **pembahasan singkat**.
- Umpan balik muncul **setelah siswa menjawab**, tidak sebelum.
- Hindari kunci jawaban yang bisa dibaca langsung dari tampilan/kode yang tampil ke siswa.
- Pengecoh (distraktor) harus berasal dari **miskonsepsi nyata**, bukan jawaban asal.

## 7. Aturan Penyimpanan (`localStorage`)

- Semua akses `localStorage` lewat `utils/storage.js` (satu pintu).
- Gunakan awalan kunci: `kesetimbangan:` (mis. `kesetimbangan:progres`).
- Bungkus akses dengan `try/catch`; jika gagal, aplikasi tetap berjalan tanpa menyimpan.
- **Jangan menyimpan data pribadi** (nama lengkap, email, dan sejenisnya).
- Sediakan tombol **"Reset progres"**.

## 8. Aturan Tampilan dan Bahasa

- Bahasa antarmuka: **Indonesia baku, komunikatif, ramah siswa SMA**. Hindari istilah teknis pemrograman pada teks yang dilihat siswa.
- **Mobile-first**: rancang untuk layar ±360 px lebih dulu, lalu perlebar.
- Ukuran huruf isi minimal **16 px**; kontras warna memadai.
- Gunakan **satu palet warna** dan satu gaya kartu/tombol di seluruh situs.
- Jangan mengandalkan warna saja untuk menandai benar/salah; sertakan ikon atau teks.
- Semua gambar punya teks alternatif (`alt`).
- Tombol dan tautan dapat dijangkau dengan keyboard.
- Gambar: pakai gambar buatan sendiri (SVG/CSS) atau yang bebas lisensi; **jangan** mengambil gambar dari internet tanpa izin.

## 9. Gaya Penulisan Kode

- Nama komponen: `PascalCase`; variabel dan fungsi: `camelCase`.
- Komentar singkat dalam **bahasa Indonesia** pada bagian logika yang tidak jelas.
- Hindari kode duplikat; ambil jadi komponen atau fungsi bersama.
- Jangan membiarkan `console.log` sisa debugging di hasil akhir.
- Jangan menghapus atau menimpa file yang tidak terkait tugas.

## 10. Cara Bekerja dan Melapor

Untuk setiap tugas, ikuti urutan ini:

1. **Rencana singkat** (3–5 baris): apa yang akan dibuat dan file apa saja.
2. **Kerjakan** sesuai rencana, hanya yang diminta.
3. **Jalankan dan uji** (`npm run dev`); pastikan tidak ada error di terminal maupun console browser.
4. **Laporan akhir** berisi:
   - daftar file yang dibuat/diubah,
   - hal yang perlu diperiksa guru (terutama isi kimia),
   - bagian yang belum selesai atau masih diragukan.

Jika terjadi error, **jelaskan penyebabnya dengan bahasa sederhana** lalu perbaiki. Jangan menyembunyikan error.

## 11. Pencatatan (`AI_LOG.md`)

Setelah setiap tugas, tambahkan catatan ke `AI_LOG.md` dengan format:

```markdown
## [Tanggal] — [Nama tugas]
- **Prompt**: ...
- **Perubahan AI**: file yang dibuat/diubah
- **Pemeriksaan**: apa yang diuji dan hasilnya
- **Koreksi**: kesalahan yang ditemukan dan perbaikannya
- **Sumber**: rujukan materi kimia (jika ada)
```

## 12. Daftar Larangan

- ❌ Membuat backend, database, login, atau memanggil API luar.
- ❌ Menambah fitur di luar `PRD.md` tanpa persetujuan.
- ❌ Mengarang fakta kimia, nilai K, ΔH, atau reaksi.
- ❌ Menulis rumus kimia tanpa subskrip/superskrip yang benar.
- ❌ Menaruh teks materi dan soal langsung di dalam komponen.
- ❌ Menyimpan data pribadi siswa.
- ❌ Menyatakan tugas "selesai" sebelum diuji di browser.
- ❌ Mengubah banyak hal sekaligus dalam satu tugas.

## 13. Cek Mandiri Sebelum Melapor "Selesai"

- [ ] Sesuai tujuan dan fitur di `PRD.md`?
- [ ] Mematuhi seluruh `AGENTS.md`?
- [ ] Konsep dan notasi kimia benar (terutama katalis, nilai K, pengaruh tekanan)?
- [ ] Halaman terbuka tanpa error merah di terminal dan console?
- [ ] Tampilan nyaman di layar HP?
- [ ] `AI_LOG.md` sudah diperbarui?

---

*Versi 1.0 — perbarui aturan jika ada kesalahan berulang yang perlu dicegah.*