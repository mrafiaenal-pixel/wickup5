import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function useCounter(end, duration, startAnim) {
  if (!duration) duration = 2000;
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!startAnim) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startAnim]);
  return count;
}

function useInView(threshold) {
  if (!threshold) threshold = 0.2;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Home() {
  const [statsRef, statsInView] = useInView(0.3);
  const [heroVisible, setHeroVisible] = useState(false);
  const c1 = useCounter(50, 1800, statsInView);
  const c2 = useCounter(5, 1200, statsInView);
  const c3 = useCounter(3, 900, statsInView);
  const c4 = useCounter(100, 2000, statsInView);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="aurora-layer aurora-1" />
        <div className="aurora-layer aurora-2" />
        <div className="aurora-layer aurora-3" />
        <div className="hero-grid-overlay" />
        <div className="hero-scanline" />

        <svg className="hero-lightning-tr" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
          <polygon points="220,0 220,40 160,40 185,80 130,65 145,110 90,75 110,130 220,130" fill="#f8bb28" opacity="0.9" />
        </svg>
        <svg className="hero-lightning-bl" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,220 0,180 60,180 35,140 90,155 75,110 130,145 110,90 0,90" fill="#f8bb28" opacity="0.9" />
        </svg>

        <img src="/basketball.png" alt="Basketball" className="hero-decoration-basketball" />
        <img src="/microphone.png" alt="Microphone" className="hero-decoration-microphone" />
        <div className="hero-glow-bg" />

        <div className="hero-particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="particle" style={{
              left: `${(i * 37 + 5) % 100}%`,
              top: `${(i * 53 + 10) % 100}%`,
              width: `${3 + (i % 5) * 1.5}px`,
              height: `${3 + (i % 5) * 1.5}px`,
              animationDuration: `${4 + (i % 6)}s`,
              animationDelay: `${(i % 8) * 0.5}s`,
            }} />
          ))}
        </div>

        <div className="hero-ring ring-1" />
        <div className="hero-ring ring-2" />

        <div className={`hero-content${heroVisible ? ' hero-content--visible' : ''}`}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>WIKRAMA CUP 5 &nbsp;·&nbsp; 2026</span>
          </div>
          <img src="/logo-wikcup.png" alt="Wikrama Cup Logo" className="hero-logo" />
          <h1 className="hero-title">
            <span className="hero-title-white">WIKRAMA</span>
            <span className="hero-title-yellow">CUP<em className="hero-year"> 2026</em></span>
          </h1>
          <p className="hero-subtitle">Ajang Kompetisi Olahraga &amp; Seni Antar SMP Se-Bogor Raya</p>
          <p className="hero-tagline">✨ Tunjukkan bakatmu, raih prestasimu, jadilah bagian dari sejarah!</p>
          <div className="hero-cta-group">
            <Link to="/kompetisi" className="hero-button hero-button--primary">Lihat Kompetisi &nbsp;→</Link>
            <a href="#lokasi" className="hero-button hero-button--outline">Lokasi Kami</a>
          </div>
          <div className="scroll-indicator"><div className="scroll-wheel" /></div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="values-inner">
          <div className="section-header">
            <span className="section-eyebrow">Tentang Kami</span>
            <h2 className="section-heading">Nilai-Nilai Wikrama Cup</h2>
            <p className="section-desc">Lebih dari sekedar kompetisi — ini adalah wadah bertumbuh bersama.</p>
          </div>
          <div className="values-grid">
            {[
              { icon: '🏆', title: 'Sportivitas', desc: 'Bersaing dengan sehat dan menjunjung tinggi nilai sportivitas di setiap pertandingan.', color: '#f8bb28' },
              { icon: '🤝', title: 'Kebersamaan', desc: 'Mempererat tali persaudaraan dan jaringan antar pelajar se-Bogor Raya.', color: '#f5931c' },
              { icon: '⭐', title: 'Prestasi', desc: 'Wujudkan mimpi dan raih pengalaman berharga bersama para atlet muda berbakat.', color: '#f8bb28' },
              { icon: '🛡️', title: 'Integritas', desc: 'Menjaga kejujuran dan integritas sebagai fondasi setiap kompetisi yang digelar.', color: '#f5931c' },
            ].map((v, i) => (
              <div className="value-card" key={i} style={{ '--accent': v.color, animationDelay: `${i * 0.12}s` }}>
                <div className="value-card-icon">{v.icon}</div>
                <div className="value-card-glow" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMPETISI PILLS */}
      <section className="highlight-section">
        <div className="values-inner">
          <div className="section-header">
            <span className="section-eyebrow">Cabang Lomba</span>
            <h2 className="section-heading">5 Kompetisi Seru Menanti</h2>
          </div>
          <div className="comp-pills">
            {[
              { emoji: '🏀', label: 'Basket', slug: 'basket' },
              { emoji: '🏐', label: 'Voli', slug: 'voli' },
              { emoji: '🏓', label: 'Tenis Meja', slug: 'tenis-meja' },
              { emoji: '🎤', label: 'Menyanyi Solo', slug: 'menyanyi-solo' },
              { emoji: '🧠', label: 'Cerdas Cermat', slug: 'cerdas-cermat' },
            ].map((c) => (
              <Link to={`/kompetisi/${c.slug}`} className="comp-pill" key={c.slug}>
                <span className="comp-pill-emoji">{c.emoji}</span>
                <span>{c.label}</span>
                <span className="comp-pill-arrow">→</span>
              </Link>
            ))}
          </div>
          <div className="highlight-cta">
            <Link to="/kompetisi" className="hero-button hero-button--primary">Lihat Semua Kompetisi &nbsp;🔥</Link>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <section id="lokasi" className="maps-section">
        <div className="values-inner">
          <div className="section-header">
            <span className="section-eyebrow">Venue</span>
            <h2 className="section-heading" style={{ color: '#f8bb28' }}>Lokasi Kami</h2>
            <p className="section-desc">SMK Wikrama Bogor — Pusat kegiatan Wikrama Cup 2026</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0139230514087!2d106.84130407499401!3d-6.645191993349406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c89505b4c37d%3A0x307fc4a38e65fa2b!2sSMK%20Wikrama%20Bogor!5e0!3m2!1sen!2sid!4v1762262010406!5m2!1sen!2sid"
              width="100%" height="100%"
              style={{ border: 0, borderRadius: '16px', width: '100%', height: '100%' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes floatBasketball { 0%,100%{transform:translateY(0) rotate(-8deg) scale(1)} 50%{transform:translateY(-22px) rotate(-5deg) scale(1.02)} }
        @keyframes floatMic { 0%,100%{transform:translateY(0) rotate(6deg)} 50%{transform:translateY(-16px) rotate(8deg)} }
        @keyframes pulseGlow { 0%,100%{opacity:0.3;transform:translate(-50%,-50%) scale(1)} 50%{opacity:0.55;transform:translate(-50%,-50%) scale(1.08)} }
        @keyframes floatParticle { 0%{transform:translateY(0) scale(0.8);opacity:0} 10%{opacity:1} 60%{transform:translateY(-90px) scale(1.2);opacity:0.5} 100%{transform:translateY(-160px) scale(0.6);opacity:0} }
        @keyframes rotateSlow { from{transform:rotate(0deg) translate(-50%,-50%)} to{transform:rotate(360deg) translate(-50%,-50%)} }
        @keyframes rotateSlowRev { from{transform:rotate(0deg) translate(-50%,-50%)} to{transform:rotate(-360deg) translate(-50%,-50%)} }
        @keyframes scanline { 0%{top:-5%} 100%{top:110%} }
        @keyframes auroraShift { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(5%,3%) scale(1.08)} 66%{transform:translate(-3%,5%) scale(0.95)} }
        @keyframes heroFadeIn { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes badgePulse { 0%,100%{box-shadow:0 0 0 0 rgba(248,187,40,0.4)} 50%{box-shadow:0 0 0 8px rgba(248,187,40,0)} }
        @keyframes scrollBounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
        @keyframes dotPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
        @keyframes gradientBG { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes cardReveal { from{opacity:0;transform:translateY(40px) scale(0.95)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes pillSlide { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes ringRotate { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes ringRotateRev { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(-360deg)} }

        .hero-section {
          background: radial-gradient(ellipse 80% 70% at 50% 35%, rgba(21,37,128,0.7) 0%, transparent 65%),
            linear-gradient(160deg, #060e24 0%, #0d1e60 30%, #091545 60%, #060e24 100%);
          width:100%; min-height:calc(100vh - 70px);
          display:flex; flex-direction:column; justify-content:center; align-items:center;
          text-align:center; position:relative; overflow:hidden; padding:80px 20px 40px;
        }
        .aurora-layer { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; animation:auroraShift ease-in-out infinite; z-index:0; }
        .aurora-1 { width:700px; height:500px; background:radial-gradient(circle,rgba(21,37,128,0.55) 0%,transparent 70%); top:-100px; left:-150px; animation-duration:14s; }
        .aurora-2 { width:600px; height:450px; background:radial-gradient(circle,rgba(248,187,40,0.1) 0%,transparent 65%); top:30%; right:-100px; animation-duration:18s; animation-delay:-4s; }
        .aurora-3 { width:500px; height:400px; background:radial-gradient(circle,rgba(15,60,180,0.4) 0%,transparent 60%); bottom:-80px; left:30%; animation-duration:22s; animation-delay:-8s; }
        .hero-grid-overlay { position:absolute; inset:0; background-image:linear-gradient(rgba(248,187,40,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(248,187,40,0.04) 1px,transparent 1px); background-size:60px 60px; z-index:0; pointer-events:none; }
        .hero-scanline { position:absolute; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,rgba(248,187,40,0.15),transparent); animation:scanline 8s linear infinite; z-index:1; pointer-events:none; }
        .hero-ring { position:absolute; border-radius:50%; border:1px solid rgba(248,187,40,0.1); pointer-events:none; top:50%; left:50%; }
        .ring-1 { width:600px; height:600px; animation:ringRotate 25s linear infinite; transform-origin:center center; }
        .ring-2 { width:900px; height:900px; border-color:rgba(245,147,28,0.06); animation:ringRotateRev 40s linear infinite; }
        .hero-lightning-tr { position:absolute; top:0; right:0; width:200px; height:200px; z-index:1; pointer-events:none; filter:drop-shadow(0 0 12px rgba(248,187,40,0.6)); }
        .hero-lightning-bl { position:absolute; bottom:0; left:0; width:200px; height:200px; z-index:1; pointer-events:none; filter:drop-shadow(0 0 12px rgba(248,187,40,0.6)); }
        .hero-decoration-basketball { position:absolute; top:10%; right:-15px; width:250px; z-index:2; filter:drop-shadow(0 25px 50px rgba(0,0,0,0.6)) drop-shadow(0 0 20px rgba(248,187,40,0.15)); animation:floatMic 6.5s ease-in-out infinite; }
        .hero-decoration-microphone { position:absolute; bottom:-40px; left:-50px; width:320px; z-index:2; filter:drop-shadow(0 25px 50px rgba(0,0,0,0.6)) drop-shadow(0 0 30px rgba(245,147,28,0.2)); animation:floatBasketball 5.5s ease-in-out infinite; }
        .hero-glow-bg { position:absolute; top:50%; left:50%; width:800px; height:800px; background:radial-gradient(circle,rgba(248,187,40,0.1) 0%,transparent 60%); animation:pulseGlow 5s ease-in-out infinite; z-index:0; pointer-events:none; }
        .hero-particles { position:absolute; inset:0; z-index:1; overflow:hidden; pointer-events:none; }
        .particle { position:absolute; border-radius:50%; background:radial-gradient(circle,#f8bb28 0%,rgba(248,187,40,0) 70%); animation-name:floatParticle; animation-timing-function:ease-in-out; animation-iteration-count:infinite; }
        .hero-content { z-index:3; position:relative; display:flex; flex-direction:column; align-items:center; gap:0; opacity:0; transition:none; }
        .hero-content--visible { animation:heroFadeIn 1s ease forwards; }
        .hero-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(248,187,40,0.1); border:1px solid rgba(248,187,40,0.4); color:#f8bb28; padding:6px 20px; border-radius:50px; font-size:0.8rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; margin-bottom:20px; animation:badgePulse 2.5s ease infinite; }
        .hero-badge-dot { width:7px; height:7px; border-radius:50%; background:#f8bb28; animation:dotPulse 1.5s ease infinite; }
        .hero-logo { width:130px; height:auto; margin-bottom:12px; filter:drop-shadow(0 0 25px rgba(248,187,40,0.55)); animation:floatBasketball 6s ease-in-out infinite; }
        .hero-title { font-size:clamp(4rem,10vw,7.5rem); font-weight:900; margin:0 0 18px; line-height:0.95; letter-spacing:-3px; display:flex; flex-direction:column; }
        .hero-title-white { color:#ffffff; text-shadow:0 4px 30px rgba(0,0,0,0.5); }
        .hero-title-yellow { color:#f8bb28; transform:skewX(-4deg); text-shadow:0 0 40px rgba(248,187,40,0.5),0 4px 20px rgba(0,0,0,0.4); display:inline-block; }
        .hero-year { font-style:normal; color:#f5931c; font-size:0.7em; vertical-align:super; margin-left:6px; }
        .hero-subtitle { font-size:clamp(1rem,2.5vw,1.3rem); margin:0 0 8px; line-height:1.6; max-width:600px; color:#d0daf5; font-weight:400; }
        .hero-tagline { font-size:0.95rem; font-style:italic; color:#8898c0; margin:0 0 36px; }
        .hero-cta-group { display:flex; gap:14px; flex-wrap:wrap; justify-content:center; margin-bottom:40px; }
        .hero-button { display:inline-flex; align-items:center; gap:6px; padding:14px 34px; border-radius:50px; font-size:1rem; font-weight:700; cursor:pointer; text-decoration:none; letter-spacing:0.4px; transition:all 0.35s cubic-bezier(0.25,0.46,0.45,0.94); position:relative; overflow:hidden; white-space:nowrap; }
        .hero-button::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent); transition:left 0.5s ease; }
        .hero-button:hover::before { left:120%; }
        .hero-button--primary { background:linear-gradient(135deg,#f5931c,#f8bb28); color:#1a1a2e; box-shadow:0 6px 30px rgba(245,147,28,0.45); }
        .hero-button--primary:hover { transform:translateY(-4px) scale(1.05); box-shadow:0 14px 40px rgba(248,187,40,0.65); color:#1a1a2e; }
        .hero-button--outline { background:transparent; color:#f8bb28; border:1.5px solid rgba(248,187,40,0.5); backdrop-filter:blur(10px); }
        .hero-button--outline:hover { background:rgba(248,187,40,0.12); border-color:#f8bb28; transform:translateY(-4px); color:#f8bb28; }
        .scroll-indicator { display:flex; justify-content:center; opacity:0.5; }
        .scroll-wheel { width:24px; height:40px; border:2px solid rgba(248,187,40,0.5); border-radius:12px; position:relative; }
        .scroll-wheel::after { content:''; position:absolute; top:6px; left:50%; transform:translateX(-50%); width:4px; height:8px; border-radius:2px; background:#f8bb28; animation:scrollBounce 1.8s ease-in-out infinite; }

        .stats-bar { background:#07102a; border-top:1px solid rgba(248,187,40,0.15); border-bottom:1px solid rgba(248,187,40,0.1); padding:40px 20px; width:100%; }
        .stats-container { max-width:900px; margin:0 auto; display:flex; align-items:center; justify-content:center; gap:0; flex-wrap:wrap; }
        .stat-counter-item { display:flex; flex-direction:column; align-items:center; gap:6px; flex:1; min-width:150px; padding:16px 20px; }
        .stat-number { font-size:clamp(2.2rem,5vw,3.5rem); font-weight:900; background:linear-gradient(135deg,#f8bb28,#f5931c); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; line-height:1; }
        .stat-plus { font-size:0.65em; vertical-align:super; }
        .stat-label { font-size:0.85rem; color:#7a8bac; font-weight:500; text-transform:uppercase; letter-spacing:1.5px; }
        .stat-divider { width:1px; height:60px; background:rgba(255,255,255,0.08); flex-shrink:0; }

        .values-section { background:linear-gradient(180deg,#07102a 0%,#050d20 100%); padding:100px 20px; width:100%; }
        .values-inner { max-width:1100px; margin:0 auto; }
        .section-header { text-align:center; margin-bottom:60px; }
        .section-eyebrow { display:inline-block; font-size:0.78rem; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#f5931c; border:1px solid rgba(245,147,28,0.4); padding:5px 16px; border-radius:50px; margin-bottom:16px; }
        .section-heading { font-size:clamp(2rem,5vw,3rem); font-weight:900; margin:0 0 14px; color:#ffffff; line-height:1.1; }
        .section-desc { font-size:1.05rem; color:#7a8bac; max-width:500px; margin:0 auto; line-height:1.7; }
        .values-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .value-card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.09); border-radius:20px; padding:32px 24px; text-align:center; position:relative; overflow:hidden; cursor:default; transition:transform 0.35s ease,border-color 0.35s ease,box-shadow 0.35s ease; animation:cardReveal 0.6s ease both; }
        .value-card::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 50% 0%,var(--accent,#f8bb28) 0%,transparent 70%); opacity:0; transition:opacity 0.4s ease; pointer-events:none; }
        .value-card:hover { transform:translateY(-10px); border-color:var(--accent,#f8bb28); box-shadow:0 20px 50px rgba(0,0,0,0.4),0 0 30px rgba(248,187,40,0.1); }
        .value-card:hover::before { opacity:0.06; }
        .value-card-glow { position:absolute; top:-60%; left:50%; transform:translateX(-50%); width:200px; height:200px; border-radius:50%; background:radial-gradient(circle,var(--accent,#f8bb28) 0%,transparent 70%); opacity:0.07; pointer-events:none; }
        .value-card-icon { font-size:2rem; margin-bottom:16px; display:block; filter:drop-shadow(0 0 10px rgba(248,187,40,0.4)); transition:transform 0.35s ease; }
        .value-card:hover .value-card-icon { transform:scale(1.15) rotate(-5deg); }
        .value-card h3 { color:#ffffff; font-size:1.1rem; font-weight:700; margin:0 0 10px; }
        .value-card p { color:#7a8bac; font-size:0.88rem; line-height:1.65; margin:0; }

        .highlight-section { background:linear-gradient(-45deg,#060e24,#091545,#0a1230,#060e24); background-size:400% 400%; animation:gradientBG 20s ease infinite; padding:80px 20px; width:100%; }
        .comp-pills { display:flex; flex-wrap:wrap; gap:14px; justify-content:center; margin-bottom:48px; }
        .comp-pill { display:inline-flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(248,187,40,0.25); color:#d0daf5; padding:14px 24px; border-radius:50px; font-size:0.95rem; font-weight:600; text-decoration:none; transition:all 0.3s ease; position:relative; overflow:hidden; animation:pillSlide 0.5s ease both; }
        .comp-pill:hover { border-color:#f8bb28; color:#f8bb28; transform:translateY(-4px); box-shadow:0 10px 30px rgba(248,187,40,0.15); }
        .comp-pill-emoji { font-size:1.3rem; }
        .comp-pill-arrow { opacity:0; transform:translateX(-6px); transition:all 0.3s ease; font-size:0.9rem; color:#f8bb28; }
        .comp-pill:hover .comp-pill-arrow { opacity:1; transform:translateX(0); }
        .highlight-cta { text-align:center; }

        .maps-section { background:linear-gradient(180deg,#050d20 0%,#060e24 100%); padding:80px 20px 100px; width:100%; }
        .map-container { max-width:960px; margin:0 auto; border-radius:20px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,0.6); aspect-ratio:16/9; border:1px solid rgba(248,187,40,0.2); position:relative; }

        @media (max-width:1000px) { .values-grid{grid-template-columns:repeat(2,1fr)} }
        @media (max-width:900px) {
          .hero-decoration-basketball{width:200px;opacity:0.55}
          .hero-decoration-microphone{width:150px;opacity:0.55}
          .hero-lightning-tr,.hero-lightning-bl{width:140px;height:140px}
        }
        @media (max-width:768px) {
          .hero-section{min-height:calc(100vh - 70px);padding:60px 20px 30px}
          .hero-decoration-basketball{width:120px;opacity:0.3;bottom:-20px;left:-20px}
          .hero-decoration-microphone{width:100px;opacity:0.3;right:-10px}
          .hero-lightning-tr,.hero-lightning-bl{width:100px;height:100px}
          .ring-1,.ring-2{display:none}
          .stat-divider{display:none}
          .stat-counter-item{flex:0 0 calc(50% - 20px)}
          .values-grid{grid-template-columns:1fr;max-width:420px;margin:0 auto}
          .values-section,.highlight-section,.maps-section{padding:60px 20px}
          .hero-cta-group{flex-direction:column;align-items:center}
        }
        @media (max-width:480px) {
          .comp-pills{gap:10px}
          .comp-pill{padding:12px 18px;font-size:0.88rem}
        }
      `}</style>
    </>
  );
}

export default Home;
