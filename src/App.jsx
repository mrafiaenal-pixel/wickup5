// File: App.jsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// ✅ 1. IMPORT SEMUA HALAMAN ANDA
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import Kompetisi from './pages/Kompetisi.jsx';
import CompetitionDetail from './pages/details/CompetitionDetail.jsx';

// ✅ 2. IMPORT HALAMAN "PENGAJUAN"
import ComingSoon from './pages/ComingSoon.jsx';

// ❌ Hapus impor maintenance
// import Maintenance from './pages/maintenance.jsx';


// ✅ 3. AKTIFKAN KEMBALI LAYOUT
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}


function App() {
  return (
    // ✅ 4. AKTIFKAN KEMBALI ROUTES
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="kompetisi">
          <Route index element={<Kompetisi />} /> 
          <Route path=":competitionSlug" element={<CompetitionDetail />} />
        </Route>
        
        {/* Route untuk halaman "Dalam Proses Pengajuan" */}
        <Route path="/pengajuan" element={<ComingSoon />} />

      </Route>
    </Routes>
  );
}

export default App;
