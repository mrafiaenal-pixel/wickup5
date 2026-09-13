import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <>
      <section className="coming-soon-section">
        <div className="coming-soon-bg-ring ring-a" />
        <div className="coming-soon-bg-ring ring-b" />
        <div className="coming-soon-grid" />

        <div className="coming-soon-content">
          <img src="/logo-wikcup.png" alt="Wikrama Cup Logo" className="coming-soon-logo" />
          <div className="cs-badge"><span className="cs-dot" />Sedang Diproses</div>
          <h1 className="coming-soon-title">Segera Hadir</h1>
          <p className="coming-soon-text">
            Dokumen yang Anda tuju sedang dalam proses pengajuan atau revisi.<br />
            Silakan periksa kembali nanti.
          </p>
          <Link to="/kompetisi/basket" className="back-button">← Kembali ke Regulasi Basket</Link>
        </div>
      </section>

      <style>{`
        @keyframes gradientMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes csRing{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
        @keyframes csRingRev{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(-360deg)}}
        @keyframes logoPulse{0%,100%{filter:drop-shadow(0 0 15px rgba(248,187,40,0.4))}50%{filter:drop-shadow(0 0 30px rgba(248,187,40,0.8))}}
        @keyframes dotPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.6)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

        .coming-soon-section{
          background:linear-gradient(-45deg,#060e24,#0a1230,#091545,#060e24);
          background-size:400% 400%;
          animation:gradientMove 15s ease infinite;
          width:100%;min-height:calc(100vh - 70px);
          display:flex;align-items:center;justify-content:center;
          text-align:center;padding:40px;
          position:relative;overflow:hidden;
        }
        .coming-soon-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(248,187,40,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(248,187,40,0.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}
        .coming-soon-bg-ring{position:absolute;border-radius:50%;border:1px solid rgba(248,187,40,0.1);top:50%;left:50%;pointer-events:none}
        .ring-a{width:500px;height:500px;animation:csRing 20s linear infinite}
        .ring-b{width:700px;height:700px;border-color:rgba(245,147,28,0.06);animation:csRingRev 30s linear infinite}
        .coming-soon-content{position:relative;z-index:2;background:rgba(255,255,255,0.03);border:1px solid rgba(248,187,40,0.2);border-radius:24px;padding:60px 48px;max-width:580px;backdrop-filter:blur(20px);box-shadow:0 25px 60px rgba(0,0,0,0.5);animation:fadeUp 0.8s ease forwards}
        .coming-soon-logo{width:110px;margin-bottom:24px;animation:logoPulse 3s ease-in-out infinite}
        .cs-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(248,187,40,0.1);border:1px solid rgba(248,187,40,0.3);color:#f8bb28;padding:5px 16px;border-radius:50px;font-size:0.8rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:20px}
        .cs-dot{width:7px;height:7px;border-radius:50%;background:#f8bb28;animation:dotPulse 1.5s ease infinite}
        .coming-soon-title{font-size:2.8rem;font-weight:900;color:#f8bb28;text-shadow:0 0 20px rgba(248,187,40,0.4);margin:0 0 16px}
        .coming-soon-text{font-size:1.05rem;line-height:1.7;color:#c0cce8;margin:0 0 36px}
        .back-button{display:inline-flex;align-items:center;gap:6px;color:#f8bb28;text-decoration:none;font-weight:700;font-size:0.95rem;transition:all 0.3s ease;border:1px solid rgba(248,187,40,0.3);padding:11px 24px;border-radius:50px;background:rgba(248,187,40,0.06)}
        .back-button:hover{background:rgba(248,187,40,0.15);border-color:#f8bb28;transform:translateX(-4px)}
        @media(max-width:600px){.coming-soon-content{padding:40px 24px}.coming-soon-title{font-size:2.2rem}.ring-a{width:300px;height:300px}.ring-b{width:450px;height:450px}}
      `}</style>
    </>
  );
}

export default ComingSoon;
