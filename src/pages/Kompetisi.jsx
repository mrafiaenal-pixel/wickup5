import React from "react";
import { Link } from "react-router-dom";

const competitions = [
  { slug: "basket", name: "Basket", description: "5 cabang sudah fix.", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform?usp=pp_url&entry.0=basket" },
  { slug: "menyanyi-solo", name: "Menyanyi Solo", description: "Tunjukkan kemampuan vokal terbaikmu.", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform?usp=pp_url&entry.0=menyanyi-solo" },
  { slug: "cerdas-cermat", name: "Cerdas Cermat Literasi Numerasi", description: "Uji kemampuan literasi dan numerasimu.", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform?usp=pp_url&entry.0=cerdas-cermat-literasi-numerasi" },
  { slug: "tenis-meja", name: "Tenis Meja", description: "Bertanding dengan sportif dan penuh semangat.", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform?usp=pp_url&entry.0=tenis-meja" },
  { slug: "voli", name: "Voli", description: "Tunjukkan kerja sama tim terbaikmu.", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform?usp=pp_url&entry.0=voli" },
];

function Kompetisi() {
  return (
    <section id="kompetisi" className="kompetisi-section">
      <h2 className="section-title">Kompetisi Wikrama Cup 2026</h2>
      <img src="/shapes.png" alt="Dekorasi" className="kompetisi-decoration top" />
      <img src="/shapes.png" alt="Dekorasi" className="kompetisi-decoration bottom" />
      <div className="kompetisi-card-container">
        {competitions.map((competition) => <article className="kompetisi-card" key={competition.slug}>
          <h3>{competition.name}</h3><p>{competition.description}</p>
          <Link to={`/kompetisi/${competition.slug}`} className="card-detail-button">Lihat Detail</Link>
        </article>)}
      </div>
      <div className="lampiran-section"><h3>Dokumen Pendukung</h3><div className="lampiran-container">
        <a href="/surat-undangan-resmi.pdf" target="_blank" rel="noopener noreferrer" className="download-button">Undangan</a>
        <a href="/formulir-pendaftaran-atlet.docx" target="_blank" rel="noopener noreferrer" className="download-button">Formulir</a>
      </div></div>
      <style>{`
        .kompetisi-section { min-height: calc(100vh - 74px); padding: 110px 20px 80px; position: relative; overflow: hidden; text-align: center; background: linear-gradient(-45deg, #223165, #000, #1a254f, #000); background-size: 400% 400%; animation: gradientMove 15s ease infinite; }
        .section-title, .lampiran-section h3 { color: #f8bb28; font-weight: 800; }.section-title { font-size: clamp(2.2rem, 5vw, 3rem); margin: 0 0 52px; }
        .kompetisi-card-container { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; position: relative; z-index: 1; }
        .kompetisi-card { min-height: 245px; padding: 30px 25px; display: flex; flex-direction: column; align-items: center; border: 1px solid rgba(255,255,255,.2); border-radius: 15px; background: rgba(0,0,0,.35); }.kompetisi-card h3 { color: #f8bb28; font-size: 1.6rem; margin: 0 0 16px; }.kompetisi-card p { color: #f0f0f0; line-height: 1.6; flex: 1; margin: 0 0 24px; }
        .card-detail-button, .download-button { display: inline-block; border-radius: 50px; padding: 12px 26px; background: linear-gradient(90deg, #f5931c, #f8bb28); color: #223165; font-weight: 700; text-decoration: none; transition: transform .2s ease; }.card-detail-button:hover, .download-button:hover { transform: scale(1.04); }
        .lampiran-section { position: relative; z-index: 1; max-width: 1080px; margin: 52px auto 0; padding-top: 35px; border-top: 1px solid rgba(255,255,255,.2); }.lampiran-section h3 { font-size: 1.7rem; margin: 0 0 20px; }.lampiran-container { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .kompetisi-decoration { position: absolute; width: 80px; opacity: .6; }.top { top: 20px; left: 20px; }.bottom { right: 20px; bottom: 20px; transform: rotate(180deg); }
      `}</style>
    </section>
  );
}
export { competitions };
export default Kompetisi;
