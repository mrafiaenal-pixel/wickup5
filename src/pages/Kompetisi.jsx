import React from "react";
import { Link } from "react-router-dom";

const competitions = [
  { slug: "basket", name: "Basket", description: "Perlihatkan keakuratan lemparanmu.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "olahraga" },
  { slug: "voli", name: "Voli", description: "Tunjukkan kerja sama tim terbaikmu.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "olahraga" },
  { slug: "tenis-meja", name: "Tenis Meja", description: "Bertanding dengan sportif dan penuh semangat.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "olahraga" },
  { slug: "menyanyi-solo", name: "Menyanyi Solo", description: "Tunjukkan kemampuan vokal terbaikmu.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "lainnya" },
  { slug: "cerdas-cermat", name: "Cerdas Cermat Literasi Numerasi", description: "Uji kemampuan literasi dan numerasimu.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "lainnya" },
];

function Kompetisi() {
  const olahraga = competitions.filter((c) => c.category === "olahraga");
  const lainnya = competitions.filter((c) => c.category === "lainnya");

  return (
    <section id="kompetisi" className="kompetisi-section">
      <h2 className="section-title">Kompetisi Wikrama Cup 2026</h2>
      <img src="/shapes.png" alt="Dekorasi" className="kompetisi-decoration top" />
      <img src="/shapes.png" alt="Dekorasi" className="kompetisi-decoration bottom" />

      {/* Baris 1: 3 card olahraga */}
      <div className="kompetisi-card-container three-cols">
        {olahraga.map((competition) => (
          <article className="kompetisi-card" key={competition.slug}>
            <h3>{competition.name}</h3>
            <p>{competition.description}</p>
            <Link to={`/kompetisi/${competition.slug}`} className="card-detail-button">
              Lihat Detail
            </Link>
          </article>
        ))}
      </div>

      {/* Baris 2: 2 card lainnya */}
      <div className="kompetisi-card-container two-cols">
        {lainnya.map((competition) => (
          <article className="kompetisi-card" key={competition.slug}>
            <h3>{competition.name}</h3>
            <p>{competition.description}</p>
            <Link to={`/kompetisi/${competition.slug}`} className="card-detail-button">
              Lihat Detail
            </Link>
          </article>
        ))}
      </div>

      <div className="lampiran-section">
        <h3>Dokumen Pendukung</h3>
        <div className="lampiran-container">
          <a href="/surat-undangan-resmi.pdf" target="_blank" rel="noopener noreferrer" className="download-button">Undangan</a>
          <a href="/formulir-pendaftaran-atlet.docx" target="_blank" rel="noopener noreferrer" className="download-button">Formulir</a>
        </div>
      </div>

      <style>{`
        /* --- Keyframes Animasi Gradien (sama seperti Home) --- */
        @keyframes gradientMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .kompetisi-section {
          min-height: calc(100vh - 74px);
          padding: 110px 20px 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
          /* ✅ Background berjalan seperti Home */
          background: linear-gradient(-45deg, #223165, #000000, #1a254f, #000000);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }

        .section-title, .lampiran-section h3 { color: #f8bb28; font-weight: 800; }
        .section-title { font-size: clamp(2.2rem, 5vw, 3rem); margin: 0 0 52px; }

        .kompetisi-card-container {
          max-width: 1080px;
          margin: 0 auto 24px;
          display: grid;
          gap: 24px;
          position: relative;
          z-index: 1;
        }
        .kompetisi-card-container.three-cols { grid-template-columns: repeat(3, 1fr); }
        .kompetisi-card-container.two-cols {
          grid-template-columns: repeat(2, 1fr);
          max-width: 720px;
        }

        .kompetisi-card {
          min-height: 245px;
          padding: 30px 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 15px;
          background: rgba(0,0,0,.35);
        }
        .kompetisi-card h3 { color: #f8bb28; font-size: 1.6rem; margin: 0 0 16px; }
        .kompetisi-card p {
          color: #f0f0f0;
          line-height: 1.6;
          flex: 1;
          margin: 0 0 24px;
        }

        .card-detail-button, .download-button {
          display: inline-block;
          border-radius: 50px;
          padding: 12px 26px;
          background: linear-gradient(90deg, #f5931c, #f8bb28);
          color: #223165;
          font-weight: 700;
          text-decoration: none;
          transition: transform .2s ease;
        }
        .card-detail-button:hover, .download-button:hover { transform: scale(1.04); }

        .lampiran-section {
          position: relative;
          z-index: 1;
          max-width: 1080px;
          margin: 52px auto 0;
          padding-top: 35px;
          border-top: 1px solid rgba(255,255,255,.2);
        }
        .lampiran-section h3 { font-size: 1.7rem; margin: 0 0 20px; }
        .lampiran-container {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .kompetisi-decoration {
          position: absolute;
          width: 80px;
          opacity: .6;
        }
        .top { top: 20px; left: 20px; }
        .bottom { right: 20px; bottom: 20px; transform: rotate(180deg); }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .kompetisi-card-container.three-cols { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .kompetisi-card-container.three-cols,
          .kompetisi-card-container.two-cols {
            grid-template-columns: 1fr;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
export { competitions };
export default Kompetisi;