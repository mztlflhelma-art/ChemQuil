// Data materi kesetimbangan kimia untuk kartu beranda ChemQuil
// Sesuai dengan PRD.md:
// 1. Konsep Kesetimbangan Dinamis
// 2. Tetapan Kesetimbangan (Kc dan Kp)
// 3. Pergeseran Kesetimbangan (Asas Le Chatelier)
// Sesuai AGENTS.md: teks materi dipisahkan ke src/data agar mudah diperbarui guru

export const topicsData = [
  {
    id: "konsep-kesetimbangan",
    modulNomor: 1,
    badge: "Modul 1 • Dinamis",
    icon: "🔄",
    title: "Konsep Kesetimbangan Dinamis",
    subtitle: "Reaksi Bolak-balik (Reversibel) & Laju Reaksi",
    description:
      "Pelajari ciri-ciri kesetimbangan kimia dinamis pada sistem tertutup, di mana laju reaksi maju sama dengan laju reaksi balik (v₁ = v₂), konsentrasi komponen tidak berubah, dan reaksi terus berlangsung pada tingkat molekuler.",
    keyConcepts: [
      "Reaksi Reversibel (⇌) vs Irreversibel (→)",
      "Ciri Dinamis: Laju Reaksi Maju = Laju Reaksi Balik",
      "Kondisi Konsentrasi Konstan (Tidak Harus Sama)",
      "Grafik Laju & Konsentrasi terhadap Waktu"
    ],
    sampleFormula: "v_maju = v_balik",
    sampleReaction: "N₂O₄(g) ⇌ 2NO₂(g)",
    accentColor: "#0284c7" // Biru dinamis
  },
  {
    id: "tetapan-kesetimbangan",
    modulNomor: 2,
    badge: "Modul 2 • Kuantitatif",
    icon: "⚖️",
    title: "Tetapan Kesetimbangan (Kc dan Kp)",
    subtitle: "Hukum Aksi Massa & Hubungan Kp = Kc(RT)^Δn",
    description:
      "Pahami perumusan nilai tetapan kesetimbangan konsentrasi (Kc) dan tekanan parsial (Kp). Kuasai aturan pengabaian zat padat murni (s) dan cairan murni (l), serta evaluasi arah reaksi melalui kuosien reaksi (Qc vs Kc).",
    keyConcepts: [
      "Hukum Kesetimbangan: Produk berpangkat koefisien / Reaktan",
      "Zat Padat (s) & Cairan Murni (l) Tidak Ditulis",
      "Hubungan Kp = Kc (RT)^Δn",
      "Analisis Kuosien Reaksi (Qc < Kc, Qc = Kc, Qc > Kc)"
    ],
    sampleFormula: "Kp = Kc (RT)^Δn",
    sampleReaction: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
    accentColor: "#0d9488" // Teal kesetimbangan
  },
  {
    id: "pergeseran-kesetimbangan",
    modulNomor: 3,
    badge: "Modul 3 • Asas Le Chatelier",
    icon: "🧪",
    title: "Pergeseran Kesetimbangan",
    subtitle: "Faktor Konsentrasi, Suhu, Tekanan & Volume",
    description:
      "Analisis respon sistem kesetimbangan jika diberi gangguan aksi luar berdasarkan Asas Le Chatelier. Pahami pengaruh perubahan konsentrasi, suhu terhadap nilai K, tekanan/volume gas, serta peran katalis yang tidak mengubah posisi kesetimbangan.",
    keyConcepts: [
      "Pengaruh Konsentrasi: Pereaksi ditambah → Bergeser ke Produk",
      "Pengaruh Suhu: Suhu naik → Bergeser ke Endoterm (Nilai K berubah)",
      "Pengaruh Tekanan: Naik → Bergeser ke sisi Mol Gas Lebih Sedikit",
      "Peran Katalis: Hanya mempercepat laju, TIDAK menggeser kesetimbangan"
    ],
    sampleFormula: "Δn = mol_produk - mol_reaktan",
    sampleReaction: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = -92 kJ",
    accentColor: "#ea580c" // Oranye Le Chatelier
  }
];
