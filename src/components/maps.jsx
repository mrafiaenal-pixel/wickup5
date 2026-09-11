// import React from "react";

// function Maps() {
//   return (
//     <section id="lokasi" className="maps-section">
//       <h2 className="section-title">Lokasi Kami</h2>
//       <div className="map-container">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0032900761334!2d106.84231861477137!3d-6.6456070952591605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c8959419d16d%3A0x2a553174f30a916a!2sSMK%20Wikrama%20Bogor!5e0!3m2!1sen!2sid!4v1678888888888!5m2!1sen!2sid0"
//           width="100%"
//           height="400"
//           style={{ border: 0, borderRadius: '15px' }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>

//       <style>{`
//         @keyframes gradientMove {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         .maps-section {
//           background: linear-gradient(-45deg, #223165, #000000, #f5931c, #f8bb28);
//           background-size: 400% 400%;
//           animation: gradientMove 15s ease infinite;
          
//           /* padding-top: 0 agar menempel */
//           padding: 0 20px 80px 20px; 
//           text-align: center;
//         }

//         .maps-section .section-title {
//           font-size: 2.8rem;
//           font-weight: 800;
          
//           /* Jarak dari konten di atas (home/kompetisi) */
//           margin-top: 80px; 
//           margin-bottom: 60px;
          
//           color: #ffffff;
//           text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//         }

//         .map-container {
//           max-width: 900px;
//           height: 400px;
//           margin: 0 auto;
//           border-radius: 15px;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
//         }

//         @media (max-width: 768px) {
//           .maps-section .section-title {
//             font-size: 2.2rem;
//             margin-top: 60px;
//             margin-bottom: 40px;
//           }
//           .map-container {
//             height: 300px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Maps;