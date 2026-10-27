import React from 'react';

/**
 * ChemFormula Component
 * Menampilkan rumus kimia dengan subskrip dan superskrip yang rapi.
 * Contoh pemakaian:
 *   <ChemFormula formula="H2O" /> -> H₂O
 *   <ChemFormula formula="[H+]" /> -> [H⁺]
 *   <ChemFormula formula="SO4^2-" /> -> SO₄²⁻
 */
export default function ChemFormula({ formula, className = '' }) {
  if (!formula) return null;

  // Ubah token ^(...) atau ^x menjadi <sup> dan angka setelah huruf menjadi <sub>
  const parseFormula = (text) => {
    // Pola token: superskrip (^...), subskrip angka setelah huruf, atau teks biasa
    const parts = [];
    const regex = /(\^[0-9+-]+)|([A-Za-z)\]])([0-9]+)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1]) {
        // Superskrip diawali ^
        const supText = match[1].substring(1);
        parts.push(<sup key={`sup-${match.index}`}>{supText}</sup>);
      } else if (match[2] && match[3]) {
        // Simbol diikuti angka subskrip
        parts.push(match[2]);
        parts.push(<sub key={`sub-${match.index}`}>{match[3]}</sub>);
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  return <span className={`chem-formula ${className}`}>{parseFormula(formula)}</span>;
}
