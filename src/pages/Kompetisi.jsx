import React from "react";
import { Link } from "react-router-dom";

const competitions = [
  { slug: "basket", name: "Basket", emoji: "🏀", description: "Perlihatkan keakuratan lemparanmu di lapangan.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "olahraga" },
  { slug: "voli", name: "Voli", emoji: "🏐", description: "Tunjukkan kerja sama tim terbaikmu.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "olahraga" },
  { slug: "tenis-meja", name: "Tenis Meja", emoji: "🏓", description: "Bertanding dengan sportif dan penuh semangat.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "olahraga" },
  { slug: "menyanyi-solo", name: "Menyanyi Solo", emoji: "🎤", description: "Tunjukkan kemampuan vokal terbaikmu di panggung.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "lainnya" },
  { slug: "cerdas-cermat", name: "Cerdas Cermat Literasi Numerasi", emoji: "🧠", description: "Uji kemampuan literasi dan numerasimu.", formUrl: "https://forms.gle/3EMwPSN8VnyVQscy6 ", category: "lainnya" },
];

function Kompetisi() {
  const olahraga = competitions.filter((c) => c.category === "olahraga");
  const lainnya = competitions.filter((c) => c.category === "lainnya");

  return (
    <section id="kompetisi" className="kompetisi-section">
      <div className="komp-aurora komp-aurora-1" />
      <div className="komp-aurora komp-aurora-2" />
      <div className="komp-grid-overlay" />
      <img src="/shapes.png" alt="" className="kompetisi-decoration top" />
      <img src="/shapes.png" alt="" className="kompetisi-decoration bottom" />

      <div className="komp-header">
        <span className="komp-eyebrow">Wikrama Cup 2026</span>
        <h2 className="section-title">Kompetisi Wikrama Cup</h2>
        <p className="komp-desc">Pilih kategori lomba favoritmu dan tunjukkan kemampuan terbaikmu!</p>
      </div>

      <div className="komp-category-label"><span>⚡ Olahraga</span></div>
      <div className="kompetisi-card-container three-cols">
        {olahraga.map((competition, i) => (
          <article className="kompetisi-card" key={competition.slug} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="card-emoji">{competition.emoji}</div>
            <div className="card-glow-top" />
            <h3>{competition.name}</h3>
            <p>{competition.description}</p>
            <Link to={`/kompetisi/${competition.slug}`} className="card-detail-button">
              Lihat Detail <span className="btn-arrow">→</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="komp-category-label"><span>🌟 Seni &amp; Akademik</span></div>
      <div className="kompetisi-card-container two-cols">
        {lainnya.map((competition, i) => (
          <article className="kompetisi-card" key={competition.slug} style={{ animationDelay: `${(i + 3) * 0.1}s` }}>
            <div className="card-emoji">{competition.emoji}</div>
            <div className="card-glow-top" />
            <h3>{competition.name}</h3>
            <p>{competition.description}</p>
            <Link to={`/kompetisi/${competition.slug}`} className="card-detail-button">
              Lihat Detail <span className="btn-arrow">→</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="lampiran-section">
        <div className="lampiran-header">
          <h3>📎 Dokumen Pendukung</h3>
          <p>Unduh dokumen resmi Wikrama Cup 2026</p>
        </div>
        <div className="lampiran-container">
          <a href="/0766 Undangan Wikrama Cup V 2026.pdf" target="_blank" rel="noopener noreferrer" className="download-button">
            <span className="dl-icon">📄</span> Undangan Resmi
          </a>
          <a href="/Formulir Pendaftaran Atlet - Basket FIX.docx" target="_blank" rel="noopener noreferrer" className="download-button">
            <span className="dl-icon">📝</span> Formulir Pendaftaran Basket
          </a>
            <a href="/Formulir Pendaftaran Atlet - Voli FIX.docx" target="_blank" rel="noopener noreferrer" className="download-button">
            <span className="dl-icon">📝</span> Formulir Pendaftaran Voli
          </a>
            <a href="/Formulir Pendaftaran Atlet - Tenis Meja FIX.docx" target="_blank" rel="noopener noreferrer" className="download-button">
            <span className="dl-icon">📝</span> Formulir Pendaftaran Tenis Meja
          </a>
        </div>
      </div>

      <style>{`
        @keyframes gradientMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes auroraShift{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(5%,3%) scale(1.08)}66%{transform:translate(-3%,5%) scale(0.95)}}
        @keyframes cardIn{from{opacity:0;transform:translateY(30px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes rotateSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .kompetisi-section{min-height:calc(100vh - 70px);padding:100px 20px 80px;position:relative;overflow:hidden;text-align:center;background:linear-gradient(-45deg,#060e24,#0a1230,#091545,#060e24);background-size:400% 400%;animation:gradientMove 18s ease infinite}
        .komp-aurora{position:absolute;border-radius:50%;filter:blur(100px);pointer-events:none;animation:auroraShift ease-in-out infinite;z-index:0}
        .komp-aurora-1{width:600px;height:500px;background:radial-gradient(circle,rgba(21,37,128,0.5) 0%,transparent 70%);top:-150px;left:-100px;animation-duration:16s}
        .komp-aurora-2{width:500px;height:400px;background:radial-gradient(circle,rgba(248,187,40,0.08) 0%,transparent 65%);bottom:-100px;right:-80px;animation-duration:20s;animation-delay:-6s}
        .komp-grid-overlay{position:absolute;inset:0;background-image:linear-gradient(rgba(248,187,40,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(248,187,40,0.03) 1px,transparent 1px);background-size:60px 60px;z-index:0;pointer-events:none}
        .komp-header{position:relative;z-index:2;margin-bottom:48px}
        .komp-eyebrow{display:inline-block;font-size:0.78rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#f5931c;border:1px solid rgba(245,147,28,0.4);padding:5px 16px;border-radius:50px;margin-bottom:16px}
        .komp-desc{color:#7a8bac;font-size:1rem;margin:12px auto 0;max-width:480px;line-height:1.6}
        .section-title{color:#f8bb28;font-weight:900;font-size:clamp(2.2rem,5vw,3.2rem);margin:0 0 10px}
        .komp-category-label{position:relative;z-index:2;margin-bottom:20px}
        .komp-category-label span{display:inline-flex;align-items:center;gap:8px;font-size:0.85rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#f5931c;background:rgba(245,147,28,0.08);border:1px solid rgba(245,147,28,0.2);padding:6px 18px;border-radius:50px}
        .kompetisi-card-container{max-width:1080px;margin:0 auto 40px;display:grid;gap:20px;position:relative;z-index:1}
        .kompetisi-card-container.three-cols{grid-template-columns:repeat(3,1fr)}
        .kompetisi-card-container.two-cols{grid-template-columns:repeat(2,1fr);max-width:720px}
        .kompetisi-card{min-height:260px;padding:36px 28px 28px;display:flex;flex-direction:column;align-items:center;border:1px solid rgba(255,255,255,0.08);border-radius:20px;background:rgba(255,255,255,0.03);backdrop-filter:blur(10px);position:relative;overflow:hidden;transition:transform 0.35s ease,border-color 0.35s ease,box-shadow 0.35s ease;animation:cardIn 0.5s ease both;cursor:default}
        .kompetisi-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(248,187,40,0.08) 0%,transparent 60%);opacity:0;transition:opacity 0.35s ease;pointer-events:none}
        .kompetisi-card:hover{transform:translateY(-10px);border-color:rgba(248,187,40,0.45);box-shadow:0 20px 50px rgba(0,0,0,0.4),0 0 30px rgba(248,187,40,0.08)}
        .kompetisi-card:hover::before{opacity:1}
        .card-glow-top{position:absolute;top:-40px;left:50%;transform:translateX(-50%);width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(248,187,40,0.12) 0%,transparent 70%);pointer-events:none}
        .card-emoji{font-size:2.8rem;margin-bottom:16px;display:block;filter:drop-shadow(0 0 15px rgba(248,187,40,0.3));transition:transform 0.35s ease}
        .kompetisi-card:hover .card-emoji{transform:scale(1.2) rotate(-5deg)}
        .kompetisi-card h3{color:#f8bb28;font-size:1.3rem;font-weight:800;margin:0 0 10px}
        .kompetisi-card p{color:#8898b8;line-height:1.65;flex:1;margin:0 0 22px;font-size:0.9rem}
        .card-detail-button{display:inline-flex;align-items:center;gap:8px;border-radius:50px;padding:11px 26px;background:linear-gradient(135deg,#f5931c,#f8bb28);color:#1a1a2e;font-weight:700;font-size:0.9rem;text-decoration:none;transition:all 0.3s ease;position:relative;overflow:hidden}
        .card-detail-button::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left 0.5s ease}
        .card-detail-button:hover::before{left:120%}
        .card-detail-button:hover{transform:scale(1.05);box-shadow:0 8px 25px rgba(245,147,28,0.5)}
        .btn-arrow{transition:transform 0.3s ease}
        .card-detail-button:hover .btn-arrow{transform:translateX(4px)}
        .lampiran-section{position:relative;z-index:1;max-width:700px;margin:60px auto 0;padding-top:40px;border-top:1px solid rgba(248,187,40,0.15)}
        .lampiran-header{margin-bottom:24px}
        .lampiran-header h3{color:#f8bb28;font-size:1.6rem;font-weight:800;margin:0 0 8px}
        .lampiran-header p{color:#7a8bac;font-size:0.92rem;margin:0}
        .lampiran-container{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
        .download-button{display:inline-flex;align-items:center;gap:8px;border-radius:50px;padding:13px 28px;background:rgba(248,187,40,0.08);border:1px solid rgba(248,187,40,0.3);color:#f8bb28;font-weight:700;font-size:0.92rem;text-decoration:none;transition:all 0.3s ease}
        .download-button:hover{background:linear-gradient(135deg,#f5931c,#f8bb28);color:#1a1a2e;border-color:transparent;transform:translateY(-3px);box-shadow:0 10px 30px rgba(245,147,28,0.4)}
        .dl-icon{font-size:1rem}
        .kompetisi-decoration{position:absolute;width:80px;opacity:0.4;animation:rotateSlow 20s linear infinite}
        .top{top:20px;left:20px}
        .bottom{right:20px;bottom:20px;animation-direction:reverse}
        @media(max-width:900px){.kompetisi-card-container.three-cols{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.kompetisi-card-container.three-cols,.kompetisi-card-container.two-cols{grid-template-columns:1fr;max-width:100%}}
      `}</style>
    </section>
  );
}

export { competitions };
export default Kompetisi;
