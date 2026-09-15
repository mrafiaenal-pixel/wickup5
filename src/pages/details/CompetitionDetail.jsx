import React from "react";
import { Link, useParams } from "react-router-dom";
import { competitions } from "../Kompetisi.jsx";

// Data Detail Terstruktur untuk Semua Cabang Lomba
const competitionDetailsData = {
  basket: {
    icon: "🏀",
    title: "Regulasi Turnamen Basket Antar SMP Se-Bogor Raya",
    kategori: "Murid putra/putri SMP sederajat",
    waktuTempat: {
      pendaftaran: "13 September – 1 Oktober 2026",
      technicalMeeting: "1 Oktober 2026 (Online)(13.00 s.d 14.30 WIB)",
      pelaksanaan: "10, 11, 17 dan 18 Oktober 2026 (07.30 - selesai)",
      tempat: "Lapangan SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 600.000,00 / tim",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    kuota: {
      putra: "12 tim",
      putri: "12 tim",
      total: "24 tim",
      details: [
        { label: "Putra", count: 12 },
        { label: "Putri", count: 12 },
      ],
    },
    penghargaan: [
      { juara: "Juara 1", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 1.500.000,00" },
      { juara: "Juara 2", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 1.000.000,00" },
      { juara: "Juara 3", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 600.000,00" },
    ],
    sections: [
      {
        code: "A",
        title: "PERSYARATAN UMUM",
        items: [
          "Sudah membayar uang pendaftaran sebesar Rp. 600.000/tim",
          "Pada saat Technical Meeting, setiap tim harus sudah melengkapi persyaratan kejuaraan Wikrama Cup.",
          "Surat rekomendasi dari sekolah masing-masing (bertanda tangan kepala sekolah dan berstempel sekolah asli).",
          "Mengisi formulir pendaftaran.",
          "FC Raport semester terakhir (sesuai tingkatan) / FC Kartu Pelajar.",
          "Pas Foto 3x4 dua buah (satu untuk ID Card dan satu untuk formulir).",
        ],
      },
      {
        code: "B",
        title: "PERATURAN UMUM",
        items: [
          "Keputusan panitia tidak dapat diganggu gugat.",
          "Panitia berhak menginterprestasikan peraturan sesuai persepsi panitia.",
          "Semua peserta Wikrama Cup 5 WAJIB mengikuti semua proses acara dan rangkaian kegiatan.",
          "Semua peserta WAJIB mengikuti protokol kesehatan yang sudah ditentukan.",
          "Peserta diutamakan adalah kelas 8-9 siswa SMP sederajat tahun ajaran 2026-2027 dengan telah memenuhi persyaratan yang ditetapkan oleh panitia Wikrama Cup.",
          "Semua tim WAJIB mengikuti pembukaan minimal diwakili 5 orang/tim. (Denda Rp 50.000/tim jika kurang).",
          "Perwakilan tim WAJIB hadir saat Technical Meeting... Jika tidak hadir, maka peserta dianggap telah memahami dan menyetujui seluruh peraturan Wikrama Cup 5",
          "Peraturan permainan yang digunakan adalah peraturan FIBA 2024.",
          "Semua Peserta WAJIB menggunakan ID CARD selama berada dilingkungan SMK Wikrama.",
          "Official, pelatih, dan guru pendamping WAJIB menggunakan pakaian rapih.",
        ],
      },
      {
        code: "C",
        title: "PERATURAN KHUSUS",
        items: [
          "Setiap tim maksimal 12 pemain dan 3 official.",
          "Sistem pertandingan yang digunakan pada Wikrama Cup adalah sistem gugur.",
          "Waktu Tanding (Penyisihan-Semifinal): 4x10 menit (kotor), 2 menit terakhir Q4 waktu bersih.",
          "Waktu Tanding (Final): 4x10 menit (semibersih), 2 menit terakhir Q4 waktu bersih.",
          "Istirahat: 1 menit (antar Q1-Q2 & Q3-Q4) dan 2 menit (jeda babak).",
          "Overtime: Jika imbang, tambahan waktu 5 menit.",
          "Toleransi Keterlambatan: 10 menit dari jadwal (3x panggilan @3 menit). Tim yang tidak hadir dinyatakan kalah WO.",
          "Time Out: Total 5 kali (2x di babak pertama, 3x di babak kedua). 1x time out hangus di 2 menit terakhir jika belum diambil.",
          "Setiap tim WAJIB memainkan seluruh pemain minimal 4 menit (dari Q1-Q3). Pelatih akan dikenai Technical Foul per jumlah pemain yang melanggar. Hukuman akan dilaksanakan pada awal quarter keempat (Q4).",
          "Tim harus daftar ulang 30 menit sebelum jadwal tanding.",
          "Panitia hanya memberikan P3K, penanganan lanjutan dibebankan kepada tim.",
          "Juara 1 dan 2 tahun 2025 akan menempati posisi atas dan bawah bagan.",
        ],
      },
      {
        code: "D",
        title: "SERAGAM DAN TATA TERTIB LAPANGAN",
        items: [
          "Setiap tim wajib membawa bola masing-masing untuk pemanasan.",
          "Maksimal 15 orang (12 pemain, 3 official) di area bangku pemain.",
          "Dilarang merokok di area SMK Wikrama Bogor.",
          "Official harus mengenakan pakaian rapi dan sopan.",
          "Wajib menyediakan 2 set kostum (Gelap & Terang). Tim disebut PERTAMA pakai TERANG, tim KEDUA pakai GELAP.",
          "Setiap pemain harus memasukan kostum ke dalam celana.",
          "Dilarang menggunakan aksesoris tubuh (anting, kalung, cincin, dll).",
          "Aksesoris (Sleeve, Deker, Headband, dll) WAJIB berwarna HITAM atau PUTIH saja dan seragam se-tim.",
          "Saat bertanding, ID Card pemain diserahkan ke meja. Official wajib mengenakan ID Card.",
          "Pemain yang tidak menyerahkan ID Card dilarang bermain.",
          "Peserta tidak memakai kostum dengan nomor punggung yang sama dalam 1 tim.",
        ],
      },
      {
        code: "E",
        title: "WASIT DAN KOORDINATOR WASIT",
        items: [
          "Wasit ditugaskan oleh pengcab PERBASI Kota Bogor.",
          "Wasit memiliki hak dan kewajiban sesuai peraturan FIBA 2024.",
          "Jumlah wasit per pertandingan adalah 2 orang.",
          "Wasit tidak boleh mempunyai hubungan dengan kedua tim.",
        ],
      },
      {
        code: "F",
        title: "GANGGUAN",
        items: [
          "Gangguan di Q1: Pertandingan dan skor diulang.",
          "Gangguan di Q2 - Q4 (menit ke-5): Pertandingan dilanjutkan (skor & waktu terakhir).",
          "Gangguan di Q4 (kurang dari 5 menit): Pertandingan dianggap selesai.",
          "Batas waktu menunggu gangguan adalah 30 menit.",
          "Keputusan panitia tidak dapat diganggu gugat.",
        ],
      },
      {
        code: "G",
        title: "PROTES",
        items: [
          "Protes dapat diajukan secara tertulis, maks 30 menit setelah laga, kepada pengawas pertandingan/panitia Wikrama Cup dengan uang jaminan Rp 1.000.000,- (uang hangus).",
          "Pengaduan diselesaikan oleh panitia hakim.",
        ],
      },
      {
        code: "H",
        title: "SANKSI DENDA",
        items: [
          "Tim yang WO (tidak hadir) harus membayar denda Rp 100.000,-/pertandingan dan akan di-blacklist di Wikrama Cup berikutnya.",
        ],
      },
      {
        code: "I",
        title: "SANKSI PEMBUAT ONAR DAN PEMOGOKAN",
        items: [
          "Tim yang berbuat onar dikenakan sanksi diskualifikasi dan denda Rp 1.000.000,-.",
          "Tim yang mogok (setelah 10 menit peringatan) akan didiskualifikasi.",
        ],
      },
      {
        code: "J",
        title: "SANKSI PELAKU PENGANIAYAAN DAN PERKELAHIAN",
        items: [
          "Jika seorang pemain melakukan penganiayaan (pemain lawan/wasit), pemain dikeluarkan.",
          "Apabila penganiayaan mengakibatkan terjadinya baku hantam massal, satu atau kedua tim didiskualifikasi.",
          "Apabila official melakukan penganiayaan, official didiskualifikasi.",
          "Tim yang menolak lanjut bertanding karena poin di atas dianggap mogok dan didiskualifikasi.",
        ],
      },
      {
        code: "K",
        title: "HAL-HAL LAIN",
        items: [
          "Segala sesuatu yang belum tercantum akan diatur saat Technical Meeting.",
        ],
      },
    ],
    lampiran: [
      { title: "Surat Undangan Resmi (SMP)", url: "/0766 Undangan Wikrama Cup V 2026.pdf" },
      { title: "Unduh Formulir Pendaftaran Atlet", url: "/Formulir Pendaftaran Atlet - Basket FIX.docx" },
    ],
    kontak: [
      { nama: "Kayla (PJ Basket)", wa: "0831-7969-2009", link: "https://wa.me/6283179692009" },
      { nama: "Noer Sandy M. S.Pd", wa: "0899-7972-996", link: "https://wa.me/628997972996" },
    ],
  },

  "menyanyi-solo": {
    icon: "🎤",
    title: "Regulasi Lomba menyanyi solo Antar SMP Se-Bogor Raya",
    kategori: "Siswa / Siswi SMP sederajat",
    waktuTempat: {
      pendaftaran: "13 september – 1 Oktober 2026",
      technicalMeeting: "1 Oktober 2026 (Online)(13.30 s.d 15.30 WIB)",
      pelaksanaan: "18 Oktober 2026 (08.00 WIB - selesai)",
      tempat: "Gedung Utama SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 75.000,00 / peserta",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    kuota: {
      total: "20 peserta",
      details: [{ label: "Peserta", count: 20 }],
    },
    penghargaan: [
      { juara: "Juara 1", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 750.000,00" },
      { juara: "Juara 2", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 500.000,00" },
      { juara: "Juara 3", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 300.000,00" },
    ],
    sections: [
      {
        code: "A",
        title: "PERSYARATAN PESERTA",
        items: [
          "Peserta adalah siswa/i aktif SMP/MTs sederajat se-Bogor Raya.",
          "Membayar uang pendaftaran sebesar Rp 75.000,- per peserta.",
          "Mengisi formulir pendaftaran dan melampirkan fotokopi Kartu Pelajar.",
          "Menyerahkan pas foto 3x4 sebanyak 2 lembar.",
        ],
      },
      {
        code: "B",
        title: "KETENTUAN LOMBA",
        items: [
          "Peserta membawakan 1 lagu wajib dan 1 lagu pilihan bebas.",
          "Minus one / pengiring musik disiapkan sendiri oleh peserta dan diserahkan ke panitia saat TM.",
          "Durasi maksimal penampilan adalah 10 menit per peserta.",
          "Pakaian bebas, sopan, dan rapi (diutamakan mengenakan kostum panggung yang menarik).",
        ],
      },
      {
        code: "C",
        title: "KRITERIA PENILAIAN",
        items: [
          "Materi Vokal & Teknik (Intonasi, Artikulasi, Pernapasan, Aksentuasi).",
          "Penghayatan & Ekspresi (Interpretasi lagu dan pemjiwaan).",
          "Penampilan & Stage Act (Kostum, kerapian, penguasaan panggung).",
          "Keputusan Dewan Juri bersifat mutlak dan tidak dapat diganggu gugat.",
        ],
      },
    ],
    lampiran: [
      { title: "Surat Undangan Resmi (SMP)", url: "/0766 Undangan Wikrama Cup V 2026.pdf" },
      { title: "Unduh Formulir Pendaftaran", url: "/formulir-pendaftaran-atlet.docx" },
    ],
    kontak: [
      { nama: "Shofia (PJ Menyanyi Solo)", wa: "0856-9240-6601", link: "https://wa.me/6285692406601" },
      { nama: "Gracia (PJ Menyanyi Solo)", wa: "0895-1743-7132", link: "https://wa.me/6289517437132" },
      { nama: "Elvia Roza, S.Pd.	", wa: "0813-1749-5607", link: "https://wa.me/6281317495607" },
    ],
  },
  "cerdas-cermat": {
    icon: "🧠",
    title: "Regulasi Lomba Cerdas Cermat Antar SMP Se-Bogor Raya",
    kategori: "Tim Murid SMP sederajat (3 Orang / Tim)",
    waktuTempat: {
      pendaftaran: "13 September – 1 Oktober 2026",
      technicalMeeting: "1 Oktober 2026 (Online)(13.30 s.d 15.30 WIB)",
      pelaksanaan: "17-18 Oktober 2026 (08.00 WIB - selesai)",
      tempat: "Ruang Multimedia SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 300.000,00 / tim",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    kuota: {
      total: "20 tim",
      details: [{ label: "Tim", count: 20 }],
    },
    penghargaan: [
      { juara: "Juara 1", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 1.000.000,00" },
      { juara: "Juara 2", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 750.000,00" },
      { juara: "Juara 3", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 500.000,00" },
    ],
    sections: [
      {
        code: "A",
        title: "PERSYARATAN TIM",
        items: [
          "Setiap tim terdiri dari 3 orang siswa/i aktif dari sekolah yang sama.",
          "Membayar biaya pendaftaran sebesar Rp 300.000,- per tim.",
          "Menyerahkan surat rekomendasi resmi dari sekolah asal.",
          "Melampirkan fotokopi Kartu Pelajar masing-masing anggota tim.",
        ],
      },
      {
        code: "B",
        title: "TAHAPAN PERTANDINGAN",
        items: [
          "Babak Penyisihan: Ujian tertulis / sistem berbasis komputer untuk menentukan peringkat 8 besar.",
          "Babak Semifinal: Babak wajib jawab dan babak lemparan antar tim.",
          "Babak Final: Babak wajib jawab, lemparan, dan babak rebutan cepat tepat.",
        ],
      },
      {
        code: "C",
        title: "MATERI & PERATURAN",
        items: [
          "Materi meliputi Literasi Bahasa Indonesia, Literasi Bahasa Inggris, Numerasi Matematika, dan Logika Penalaran.",
          "Dilarang menggunakan kalkulator, gadget, atau alat bantu elektronik lainnya.",
          "Keputusan panitia dan dewan juri bersifat mutlak.",
        ],
      },
    ],
    lampiran: [
      { title: "Surat Undangan Resmi (SMP)", url: "/0766 Undangan Wikrama Cup V 2026.pdf" },
      { title: "Unduh Formulir Pendaftaran", url: "/formulir-pendaftaran-atlet.docx" },
    ],
    kontak: [
      { nama: "Faiz (PJ Cerdas Cermat)", wa: "0877-2108-4547", link: "https://wa.me/6287721084547" },
      { nama: "Dede Hermansyah, S.Pd.", wa: "0856-0437-9531", link: "https://wa.me/6285604379531" },
      { nama: "Ria Rosia Cahyawati, S.Pd.", wa: "0858-1026-6449", link: "https://wa.me/6285810266449" },
    ],
  },
  "tenis-meja": {
    icon: "🏓",
    title: "Regulasi Turnamen Tenis Meja Antar SMP Se-Bogor Raya",
    kategori: "Tunggal  Putra / Putri SMP sederajat",
    waktuTempat: {
      pendaftaran: "13 September – 1 Oktober 2026",
      technicalMeeting: "Oktober 2026 (Online)(13.00 s.d 14.30 WIB)",
      pelaksanaan: "3 - 4 Oktober 2026 (07.30 - selesai)",
      tempat: "Balai Krida SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 150.000,00 / peserta",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    kuota: {
      total: "32 peserta",
      details: [
        { label: "Putra", count: 16 },
        { label: "Putri", count: 16 },
      ],
    },
    penghargaan: [
      { juara: "Juara 1", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 750.000,00" },
      { juara: "Juara 2", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 500.000,00" },
      { juara: "Juara 3", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 300.000,00" },
    ],
    sections: [
      {
        code: "A",
        title: "PERSYARATAN UMUM",
        items: [
          "Peserta adalah murid aktif kelas 7-9 SMP/MTs sederajat.",
          "Sudah membayar biaya pendaftaran Rp 150.000/peserta.",
          "Menyerahkan surat rekomendasi sekolah dan FC Kartu Pelajar.",
        ],
      },
      {
        code: "B",
        title: "PERATURAN PERTANDINGAN",
        items: [
          "Peraturan permainan mengacu pada standar PTMSI / ITTF.",
          "Sistem gugur (Best of 3 Games untuk penyisihan, Best of 5 Games untuk Semifinal & Final).",
          "Peserta wajib membawa kayu/bet sendiri yang standar ITTF.",
          "Bola pertandingan disiapkan oleh panitia.",
          "Pakaian olah raga rapi, wajib mengenakan sepatu olah raga non-marking.",
        ],
      },
    ],
    lampiran: [
      { title: "Surat Undangan Resmi (SMP)", url: "/0766 Undangan Wikrama Cup V 2026.pdf" },
      { title: "Surat Rekomendasi", url: "/Rekomendasi-Turnamen-Tenis-Meja.pdf" },
      { title: "Unduh Formulir Pendaftaran Atlet", url: "/Formulir Pendaftaran Atlet - Tenis Meja FIX.docx" },
    ],
    kontak: [
      { nama: "Zelita (PJ Tenis Meja)", wa: "0857-7269-0892", link: "https://wa.me/6285772690892" },
      { nama: "Feri Firmansyah, S.Pd.", wa: "0856-7264-884", link: "https://wa.me/628567264884" },
    ],
  },
  voli: {
    icon: "🏐",
    title: "Regulasi Turnamen Voli Antar SMP Se-Bogor Raya",
    kategori: "Murid putra SMP sederajat",
    waktuTempat: {
      pendaftaran: "13 September – 1 Oktober 2026",
      technicalMeeting: "1 Oktober 2026 (Online) (13.30 s.d 15.30 WIB)",
      pelaksanaan: "3, 4 Oktober 2026",
      tempat: "Lapangan SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 250.000,00 / tim",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    kuota: {
      total: "12 tim",
      details: [{ label: "Putra", count: 12 }],
    },
    penghargaan: [
      { juara: "Juara 1", hadiah: "Uang pembinaan Rp 1.000.000,00 dan sertifikat" },
      { juara: "Juara 2", hadiah: "Uang pembinaan Rp 750.000,00 dan sertifikat" },
      { juara: "Juara 3 ", hadiah: "Uang pembinaan Rp 500.000,00 dan sertifikat" },
    ],
    sections: [
      {
        code: "A",
        title: "KATEGORI & PERSYARATAN PESERTA",
        items: [
          "Peserta merupakan siswa aktif tingkat SMP/sederajat di wilayah Bogor Raya (diutamakan kelas 8-9 tahun ajaran 2026-2027).",
          "Satu sekolah maksimal mengirimkan 12 orang pemain pada masing-masing nomor.",
          "Wajib membawa kartu pelajar atau identitas sekolah apabila diperlukan.",
          "Sudah membayar uang pendaftaran sebesar Rp. 250.000/tim ke Bank BJB (a.n. Mohamad Rizal, No. Rek: 0149257144100).",
          "Mengisi formulir pendaftaran dan melampirkan surat rekomendasi dari sekolah (bertanda tangan kepala sekolah & berstempel asli) serta FC Rapor semester terakhir / Kartu Pelajar yang di-upload saat pendaftaran.",
          "Setiap tim harus sudah melengkapi seluruh persyaratan pada saat Technical Meeting.",
        ],
      },
      {
        code: "B",
        title: "PERATURAN UMUM",
        items: [
          "Keputusan panitia tidak dapat diganggu gugat dan panitia berhak menginterpretasikan peraturan sesuai persepsi panitia.",
          "Semua peserta Wikrama Cup wajib mengikuti seluruh proses acara, rangkaian kegiatan, upacara pembukaan, serta protokol kesehatan yang ditentukan.",
          "Official, pelatih, dan guru pendamping wajib menggunakan pakaian rapi.",
        ],
      },
      {
        code: "C",
        title: "PERATURAN KHUSUS / PERTANDINGAN",
        items: [
          "Peraturan permainan yang digunakan adalah peraturan PBVSI.",
          "Babak penyisihan menggunakan sistem pool di mana setiap peserta akan bertanding melawan seluruh peserta dalam pool tersebut, dan peserta dengan hasil terbaik melaju ke babak selanjutnya.",
          "Babak selanjutnya menggunakan sistem gugur yang ditentukan panitia berdasarkan jumlah tim.",
          "Sistem pool dan gugur menggunakan sistem 2 winning sets (3 set), sedangkan babak final menggunakan sistem 3 winning sets (5 set).",
          "Setiap game/set dimainkan hingga mencapai 25 poin (jika skor 24–24, pertandingan dilanjutkan hingga salah satu tim unggul 2 poin).",
          "Setiap tim wajib hadir minimal 15 menit sebelum pertandingan dimulai.",
          "Tim yang dipanggil sebanyak 3 kali dan tidak hadir dapat dinyatakan WO (Walk Over).",
          "Peserta wajib menjunjung tinggi sportivitas selama pertandingan.",
        ],
      },
      {
        code: "D",
        title: "WASIT DAN KOORDINASI",
        items: [
          "Pertandingan dipimpin oleh wasit yang ditentukan oleh panitia (PBVSI Kota Bogor).",
          "Keputusan wasit selama pertandingan bersifat mengikat dan peserta wajib menghormati keputusan wasit serta panitia.",
          "Protes dapat disampaikan dengan cara yang sopan kepada panitia sesuai ketentuan yang berlaku.",
        ],
      },
    ],
    lampiran: [
      { title: "Surat Undangan Resmi (SMP)", url: "/0766 Undangan Wikrama Cup V 2026.pdf" },
      { title: "Unduh Formulir Pendaftaran Atlet", url: "/Formulir Pendaftaran Atlet - Voli FIX.docx" },
    ],
    kontak: [
      { nama: "Widi Rizki Pratama Kahar", wa: "0851-5057-8165", link: "https://wa.me/6285150578165" },
      { nama: "Laila Timoranti, S.Pd.", wa: "0851-7231-5150", link: "https://wa.me/6285172315150" },
    ],
  }
};

// Default fallback generator jika ada cabang lomba baru di kemudian hari
function getDefaultDetails(competition) {
  return {
    icon: "🏆",
    title: "Regulasi Wikrama Fest 4",
    subtitle: `${competition.name} Championship Tahun 2026`,
    kategori: "Murid SMP sederajat",
    waktuTempat: {
      pendaftaran: "8 November – 20 November 2025",
      technicalMeeting: "21 November 2025 (Online)(13.30 s.d 15.30 WIB)",
      pelaksanaan: "22, 23 dan 29 November 2026 (07.30 - selesai)",
      tempat: "Area SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 300.000,00 / tim (atau individu)",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    penghargaan: [
      { juara: "Juara 1", hadiah: "Piala, Piagam dan Uang Pembinaan" },
      { juara: "Juara 2", hadiah: "Piala, Piagam dan Uang Pembinaan" },
      { juara: "Juara 3", hadiah: "Piala, Piagam dan Uang Pembinaan" },
    ],
    sections: [
      {
        code: "A",
        title: "PERSYARATAN UMUM",
        items: [
          "Peserta adalah siswa/i aktif SMP/MTs sederajat.",
          "Membayar biaya pendaftaran sesuai ketentuan.",
          "Melampirkan formulir pendaftaran & surat rekomendasi dari sekolah.",
        ],
      },
      {
        code: "B",
        title: "PERATURAN PERTANDINGAN",
        items: [
          "Peraturan mengacu pada regulasi resmi cabang lomba terkait.",
          "Semua peserta wajib hadir saat Technical Meeting.",
          "Keputusan panitia dan juri bersifat mutlak.",
        ],
      },
    ],
    lampiran: [
      { title: "Surat Undangan Resmi (SMP)", url: "/0766 Undangan Wikrama Cup V 2026.pdf" },
      { title: "Unduh Formulir Pendaftaran Atlet", url: "/formulir-pendaftaran-atlet.docx" },
    ],
    kontak: [
      { nama: "Satria", wa: "0831-2843-1096", link: "https://wa.me/6283128431096" },
      { nama: "Noer Sandy M. S.Pd", wa: "0899-7972-996", link: "https://wa.me/628997972996" },
    ],
  };
}

function CompetitionDetail() {
  const { competitionSlug } = useParams();
  const competition = competitions.find(({ slug }) => slug === competitionSlug);

  if (!competition) {
    return (
      <section className="detail-section">
        <div className="detail-container">
          <Link to="/kompetisi" className="back-button">← Kembali ke Kompetisi</Link>
          <div className="detail-content">
            <h1>Cabang lomba tidak ditemukan.</h1>
          </div>
        </div>
      </section>
    );
  }

  // Gunakan data khusus jika ada, atau fallback ke default template
  const details = competitionDetailsData[competitionSlug] || getDefaultDetails(competition);

  return (
    <section className="detail-section">
      <div className="detail-container">
        <Link to="/kompetisi" className="back-button">
          ← Kembali ke Kompetisi
        </Link>

        <div className="regulation-wrapper ">
          {/* Header / Hero Regulasi */}
          <div className="regulasi-header">
            <span className="badge-kategori">{details.icon} Kategori: {details.kategori}</span>
            <h1>{details.title}</h1>
            <h2>{details.subtitle}</h2>
          </div>

          {/* Grid Highlights (Waktu, Tempat, Biaya) */}
          <div className="highlight-grid">
            <div className="highlight-card">
              <div className="card-icon">📅</div>
              <h3>Waktu & Tempat</h3>
              <ul>
                <li><strong>Pendaftaran:</strong> {details.waktuTempat.pendaftaran}</li>
                <li><strong>Technical Meeting:</strong> {details.waktuTempat.technicalMeeting}</li>
                <li><strong>Pelaksanaan:</strong> {details.waktuTempat.pelaksanaan}</li>
                <li><strong>Tempat:</strong> {details.waktuTempat.tempat}</li>
              </ul>
            </div>

            <div className="highlight-card">
              <div className="card-icon">💳</div>
              <h3>Biaya Pendaftaran</h3>
              <p className="fee-amount">{details.biayaPendaftaran.nominal}</p>
              <div className="bank-info">
                <p><strong>Transfer:</strong> {details.biayaPendaftaran.bank}</p>
                <p><strong>a.n:</strong> {details.biayaPendaftaran.atasNama}</p>
                <p><strong>No. Rek:</strong> <code className="rek-code">{details.biayaPendaftaran.rekening}</code></p>
              </div>
              {details.kuota && (
                <div className="quota-section">
                  <p className="quota-title">
                    <strong>Kuota Peserta:</strong> {details.kuota.total}
                  </p>
                  <div className="quota-grid">
                    {details.kuota.details.map((item) => (
                      <div className="quota-box" key={item.label}>
                        <div className="quota-number">{item.count}</div>
                        <div className="quota-info">
                          <span>Kuota</span>
                          <strong>{item.label}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="highlight-card">
              <div className="card-icon">🏆</div>
              <h3>Penghargaan</h3>
              <ul className="prize-list">
                {details.penghargaan.map((p, idx) => (
                  <li key={idx}>
                    <span className="prize-rank">{p.juara}:</span> {p.hadiah}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sections Detail Regulasi */}
          <div className="sections-container">
            <h3 className="section-block-title">Ketentuan & Peraturan Pertandingan</h3>
            {details.sections.map((sec) => (
              <div className="section-card" key={sec.code}>
                <div className="section-card-header">
                  <span className="section-code">{sec.code}</span>
                  <h4>{sec.title}</h4>
                </div>
                <ul className="section-items">
                  {sec.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Lampiran Dokumen */}
          <div className="lampiran-block">
            <h3>📎 Lampiran Dokumen</h3>
            <div className="lampiran-grid">
              {details.lampiran.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lampiran-card"
                >
                  <span>📄 {doc.title}</span>
                  <span className="download-icon">Unduh ⬇</span>
                </a>
              ))}
            </div>
          </div>

          {/* Kontak Panitia */}
          <div className="kontak-block">
            <h3>📞 Kontak Panitia (FAQ)</h3>
            <div className="kontak-grid">
              {details.kontak.map((k, idx) => (
                <a
                  key={idx}
                  href={k.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kontak-card"
                >
                  <div className="kontak-name">{k.nama}</div>
                  <div className="kontak-wa">💬 {k.wa}</div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Pendaftaran */}
          <div className="cta-wrapper">
            <a
              href={competition.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="register-button-large"
            >
              Daftar {competition.name} Sekarang 🔥
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes detailGradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

        .detail-section {
          min-height: calc(100vh - 70px);
          padding: 100px 20px 80px;
          background: linear-gradient(-45deg, #060e24, #0a1230, #091545, #060e24);
          background-size: 400% 400%;
          animation: detailGradient 18s ease infinite;
          color: #f0f0f0;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .detail-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(248,187,40,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(248,187,40,0.03) 1px,transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .detail-container {
          width: 100%;
          max-width: 900px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #f8bb28;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 28px;
          transition: all 0.3s ease;
          border: 1px solid rgba(248,187,40,0.3);
          padding: 9px 20px;
          border-radius: 50px;
          background: rgba(248,187,40,0.06);
          backdrop-filter: blur(10px);
        }

        .back-button:hover {
          background: rgba(248,187,40,0.15);
          border-color: #f8bb28;
          transform: translateX(-4px);
        }

        /* Header Regulasi */
        .regulasi-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .badge-kategori {
          display: inline-block;
          background: rgba(248, 187, 40, 0.15);
          color: #f8bb28;
          border: 1px solid #f8bb28;
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .regulasi-header h1 {
          color: #f8bb28;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 900;
          margin: 0 0 8px;
          line-height: 1.2;
        }

        .regulasi-header h2 {
          color: #ffffff;
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 600;
          margin: 0;
          opacity: 0.9;
        }

        /* Highlight Grid */
        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 44px;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(248, 187, 40, 0.3);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }

        .card-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .highlight-card h3 {
          color: #f8bb28;
          font-size: 1.25rem;
          margin: 0 0 14px;
        }

        .highlight-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .fee-amount {
          font-size: 1.5rem;
          font-weight: 800;
          color: #f5931c;
          margin: 0 0 16px;
        }

        .bank-info p {
          margin: 4px 0;
          font-size: 0.95rem;
        }

        .quota-section {
          margin-top: 18px;
        }

        .quota-title {
          margin: 0 0 12px;
          font-size: 0.95rem;
          line-height: 1.35;
        }

        .quota-title strong {
          color: #f8bb28;
        }

        .quota-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .quota-box {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          min-height: 48px;
          padding: 7px 8px;
          background: rgba(6, 14, 36, 0.75);
          border: 1px solid rgba(248, 187, 40, 0.18);
          border-radius: 8px;
          box-sizing: border-box;
        }

        .quota-number {
          width: 27px;
          height: 27px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8bb28;
          color: #223165;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 900;
        }

        .quota-info {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .quota-info span {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.55rem;
          margin-bottom: 3px;
        }

        .quota-info strong {
          color: #ffffff;
          font-size: 0.7rem;
        }

        .rek-code {
          background: rgba(0, 0, 0, 0.5);
          padding: 3px 8px;
          border-radius: 6px;
          color: #f8bb28;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .prize-list li {
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .prize-rank {
          font-weight: 800;
          color: #f8bb28;
        }

        /* Sections A-O */
        .section-block-title {
          color: #f8bb28;
          font-size: 1.6rem;
          font-weight: 800;
          margin: 0 0 24px;
          text-align: center;
        }

        .sections-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 44px;
        }

        .section-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 24px;
        }

        .section-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .section-code {
          background: linear-gradient(90deg, #f5931c, #f8bb28);
          color: #223165;
          font-weight: 900;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .section-card-header h4 {
          color: #f8bb28;
          font-size: 1.15rem;
          font-weight: 800;
          margin: 0;
        }

        .section-items {
          margin: 0;
          padding-left: 20px;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .section-items li {
          margin-bottom: 8px;
        }

        .section-items li:last-child {
          margin-bottom: 0;
        }

        /* Lampiran Block */
        .lampiran-block {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 40px;
        }

        .lampiran-block h3, .kontak-block h3 {
          color: #f8bb28;
          font-size: 1.4rem;
          margin: 0 0 20px;
          text-align: center;
        }

        .lampiran-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }

        .lampiran-card {
          background: rgba(34, 49, 101, 0.6);
          border: 1px solid rgba(248, 187, 40, 0.4);
          border-radius: 10px;
          padding: 14px 18px;
          color: #ffffff;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .lampiran-card:hover {
          background: rgba(245, 147, 28, 0.2);
          transform: translateY(-2px);
          border-color: #f8bb28;
        }

        .download-icon {
          color: #f8bb28;
          font-size: 0.85rem;
          font-weight: 700;
        }

        /* Kontak Block */
        .kontak-block {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 44px;
        }

        .kontak-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .kontak-card {
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.4);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.2s ease;
        }

        .kontak-card:hover {
          background: rgba(37, 211, 102, 0.25);
          transform: translateY(-2px);
        }

        .kontak-name {
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 6px;
          color: #f8bb28;
        }

        .kontak-wa {
          color: #25d366;
          font-weight: 700;
          font-size: 1rem;
        }

        /* CTA Button */
        .cta-wrapper {
          text-align: center;
          margin-top: 20px;
        }

        .register-button-large {
          display: inline-block;
          padding: 18px 40px;
          border-radius: 50px;
          background: linear-gradient(90deg, #f5931c, #f8bb28);
          color: #223165;
          font-size: 1.25rem;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(245, 147, 28, 0.4);
          transition: all 0.3s ease;
        }

        .register-button-large:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 14px 40px rgba(248, 187, 40, 0.6);
        }

        .detail-content {
          text-align: center;
          max-width: 680px;
          margin: 40px auto 0;
        }

        .detail-content h1 {
          color: #f8bb28;
          font-size: clamp(2.2rem, 5vw, 3.3rem);
          margin: 20px 0 8px;
        }
      `}</style>
    </section>
  );
}

export default CompetitionDetail;