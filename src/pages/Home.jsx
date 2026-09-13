import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* === BAGIAN HERO === */}
      <section id="hero" className="hero-section">

        {/* Dekorasi Aset */}
        <img src="/orange-stripes.png" alt="Decoration" className="hero-decoration-top-right" />
        <img src="/orange-stripes.png" alt="Decoration" className="hero-decoration-bottom-left" />
        <img src="/basketball.png" alt="Basketball" className="hero-decoration-basketball" />
        <img src="/microphone.png" alt="Microphone" className="hero-decoration-microphone" />

        <div className="hero-content">
          <img src="/logo-wikcup.png" alt="Wikrama Cup Logo" className="hero-logo" />

          <h1 className="hero-title">WIKRAMA CUP 2026</h1>
          <p className="hero-subtitle">
            Ajang Kompetisi Olahraga & Seni Antar SMP Se-Bogor Raya
          </p>
          <Link to="/kompetisi" className="hero-button">
            Lihat Kompetisi
          </Link>
        </div>

        <img src="/shapes.png" alt="Geometric Shapes" className="hero-geometric-shapes" />
      </section>

      {/* === BAGIAN MAPS === */}
      <section id="lokasi" className="maps-section">
        <h2 className="section-title-maps">Lokasi Kami</h2>
        <div className="map-container">
          <iframe
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0139230514087!2d106.84130407499401!3d-6.645191993349406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c89505b4c37d%3A0x307fc4a38e65fa2b!2sSMK%20Wikrama%20Bogor!5e0!3m2!1sen!2sid!4v1762262010406!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '15px', width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* === CSS UNTUK HOME & MAPS === */}
      <style>{`
        /* --- Keyframes (Animasi Gradien Gelap) --- */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* --- Hero Section --- */
        .hero-section {
          /* ✅ DIUBAH: Gradien hanya menggunakan warna gelap */
          background: linear-gradient(-45deg, #223165, #000000, #1a254f, #000000);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          width: 100%;
          min-height: calc(100vh - 74px);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding: 80px 20px 0 20px;
        }

        /* --- Dekorasi Aset --- */
        .hero-decoration-top-right {
            position: absolute;
            top: 0;
            right: 0;
            width: 150px;
            opacity: 0.6;
            z-index: 1;
            transform: rotate(180deg);
        }
        .hero-decoration-bottom-left {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 150px;
            opacity: 0.6;
            z-index: 1;
        }
        .hero-decoration-basketball {
            position: absolute;
            top: 50px;
            left: 50px;
            width: 100px;
            opacity: 0.3;
            z-index: 1;
            transform: rotate(-20deg);
            border-radius: 50%;
        }
        .hero-decoration-microphone {
            position: absolute;
            bottom: 50px;
            right: 50px;
            width: 80px;
            opacity: 0.3;
            z-index: 1;
            transform: rotate(15deg);
        }
        .hero-geometric-shapes {
            position: absolute;
            bottom: 20px;
            right: 20px;
            width: 100px;
            opacity: 0.8;
            z-index: 1;
        }
        /* --- Akhir Dekorasi --- */

        .hero-content {
          z-index: 2;
          position: relative;
          padding: 10px;
        }

        .hero-logo {
          width: 400px;
          height: auto;
          margin-bottom: 10px;
          filter: drop-shadow(0 0 15px rgba(248, 187, 40, 0.5));
        }

        .hero-title {
          font-size: 7rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: #f8bb28; /* Warna Kuning (Aksen) */
          text-shadow: 0 0 15px rgba(248, 187, 40, 0.3); /* Shadow tipis untuk glow */
        }

        .hero-subtitle {
          font-size: 1.8rem;
          margin-bottom: 40px;
          line-height: 1.5;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          color: #F0F0F0; /* ✅ DIUBAH: Warna netral putih solid */
        }

        .hero-button {
          display: inline-block;
          background: linear-gradient(90deg, #f5931c, #f8bb28);
          color: #223165;
          border: none;
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 8px 25px rgba(245, 147, 28, 0.4);
          text-decoration: none;
        }

        .hero-button:hover {
          background: linear-gradient(90deg, #f8bb28, #f5931c);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 35px rgba(248, 187, 40, 0.6);
        }

            @media (max-width: 768px) {
        .hero-section {
          min-height: calc(100vh - 74px);
          padding: 50px 20px 20px 20px;
          box-sizing: border-box;
        }

        .hero-content {
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
        }

        .hero-logo {
          width: 160px;
          height: auto;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.05;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.5;
          max-width: 350px;
        }

        .hero-button {
          padding: 12px 30px;
          font-size: 1.1rem;
        }

        .hero-decoration-top-right,
        .hero-decoration-bottom-left {
          width: 100px;
        }

        .hero-decoration-basketball {
          width: 70px;
          top: 30px;
          left: 30px;
        }

        .hero-decoration-microphone {
          width: 60px;
          bottom: 30px;
          right: 30px;
        }

        .hero-geometric-shapes {
          width: 70px;
        }
      }

        /* --- Maps Section --- */
        .maps-section {
          /* ✅ DIUBAH: Gradien hanya menggunakan warna gelap */
          background: linear-gradient(-45deg, #223165, #000000, #1a254f, #000000);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          width: 100%;
          margin: 0;
          padding: 0 20px 80px 20px;
          text-align: center;
          border: none;
        }

        .section-title-maps {
          font-size: 2.8rem;
          font-weight: 800;
          margin-top: 0;
          padding-top: 80px;
          margin-bottom: 60px;
          color: #f8bb28; /* ✅ DIUBAH: Judul menjadi kuning (Aksen) */
        }

        .map-container {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          aspect-ratio: 16 / 9;
          height: auto; 
        }

        @media (max-width: 768px) {
          .section-title-maps {
            font-size: 2.2rem;
            margin-top: 0;
            padding-top: 60px;
            margin-bottom: 40px;
          }
          .map-container {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </>
  );
}

export default Home;