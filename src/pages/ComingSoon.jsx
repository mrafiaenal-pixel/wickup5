// Nama file: src/pages/ComingSoon.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk tombol kembali

function ComingSoon() {
  return (
    <>
      <section className="coming-soon-section">
        <div className="coming-soon-content">
          
          {/* Logo Anda dari folder /public */}
          <img src="/logo-wikcup.png" alt="Wikrama Cup Logo" className="coming-soon-logo" />

          {/* ✅ TULISAN DIPERBARUI MENJADI UMUM */}
          <h1 className="coming-soon-title">Sedang Dalam Proses</h1>
          <p className="coming-soon-text">
            Dokumen yang Anda tuju sedang dalam proses pengajuan atau revisi.
            <br />
            Silakan periksa kembali nanti.
          </p>

          {/* Tombol untuk kembali ke halaman regulasi basket */}
          <Link to="/kompetisi/basket" className="back-button">
            ← Kembali ke Regulasi Basket
          </Link>
        </div>
      </section>

      {/* --- CSS untuk halaman ini --- */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .coming-soon-section {
          background: linear-gradient(-45deg, #223165, #000000, #1a254f, #000000);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          width: 100%;
          min-height: calc(100vh - 74px); /* (Dikurangi tinggi Navbar) */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
          box-sizing: border-box;
        }
        
        .coming-soon-content {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 60px 40px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          max-width: 600px;
        }
        
        .coming-soon-logo {
          width: 120px;
          margin-bottom: 30px;
          filter: drop-shadow(0 0 10px rgba(248, 187, 40, 0.5));
        }

        .coming-soon-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #f8bb28;
          text-shadow: 0 0 10px rgba(248, 187, 40, 0.5);
          margin-bottom: 20px;
        }
        
        .coming-soon-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #FFFFFF;
          margin-bottom: 40px;
        }

        .back-button {
          color: #f8bb28;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-shadow: 0 0 8px rgba(248, 187, 40, 0.5);
        }
        .back-button:hover {
          color: #ffffff;
        }
        
        @media (max-width: 600px) {
          .coming-soon-title {
            font-size: 2.2rem;
          }
          .coming-soon-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default ComingSoon;