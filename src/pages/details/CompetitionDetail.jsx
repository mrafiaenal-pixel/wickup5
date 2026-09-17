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
          "Peserta membawakan 1 lagu daerah Jawa Barat dan 1 lagu bebas dengan genre Pop Indonesia.",
          "Minus one/pengiring musik disiapkan oleh peserta dan diserahkan ke panitia saat TM.",
          "Durasi maksimal penampilan peserta adalah 10 menit per peserta.",
          "Pakaian bebas, sopan, dan rapi (diutamakan mengenakan kostum panggung yang menarik).",
        ],
      },
      {
        code: "C",
        title: "INDIKATOR PENILAIAN",
        items: [
          "Materi Suara: Ketepatan nada dari awal hingga akhir.",
          "Materi Suara: Kualitas nada tinggi dan nada rendah.",
          "Materi Suara: Kualitas kejernihan suara/bersih.",
          "Materi Suara: Warna suara/timbre.",
          "Teknik Vokal: Penggunaan register vokal yang menyeluruh, pernafasan, artikulasi, power suara, dinamika, dan improvisasi.",
          "Teknik Vokal: Irama yang dinyanyikan sesuai dengan aksen/tekanan lagu.",
          "Penghayatan/Interpretasi: Penjiwaan dan penghayatan terhadap lirik lagu.",
          "Penghayatan/Interpretasi: Penyampaian pesan atau cerita lagu sesuai dengan makna lirik.",
          "Penampilan: Sikap panggung (percaya diri, penguasaan panggung, interaksi dengan audiens, dan gerakan yang mendukung).",
          "Penampilan: Kostum (kesesuaian busana dengan lagu yang dibawakan).",
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
    title: "Regulasi Lengkap Lomba Cerdas Cermat",
    kategori: "Siswa aktif SMP/SMA sederajat (3 Orang / Tim)",
    waktuTempat: {
      pendaftaran: "13 September – 1 Oktober 2026",
      technicalMeeting: "1 Oktober 2026 (Online)(13.30 s.d 15.30 WIB)",
      pelaksanaan: "17-18 Oktober 2026 (08.00 WIB - selesai)",
      tempat: "Ruang Multimedia SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 200.000,00 / tim",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    kuota: {
      total: "20 tim",
      details: [{ label: "Tim", count: 20 }],
    },
    penghargaan: [
      { juara: "Juara 1", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 500.000,00" },
      { juara: "Juara 2", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 350.000,00" },
      { juara: "Juara 3", hadiah: "Piala, Piagam dan Uang Pembinaan senilai Rp 200.000,00" },
    ],
    sections: [
      {
        code: "A",
        title: "PERSYARATAN UMUM",
        items: [
          "Membayar uang pendaftaran sebesar Rp200.000/tim.",
          "Melengkapi seluruh berkas pendaftaran saat Technical Meeting (TM).",
          "Surat rekomendasi dari sekolah (berstempel asli dan ditandatangani kepala sekolah).",
          "Mengisi formulir pendaftaran resmi yang disediakan panitia.",
          "Fotokopi Kartu Pelajar atau Fotokopi Rapor semester terakhir.",
          "Pasfoto ukuran 3x4 sebanyak dua lembar (satu untuk ID Card, satu untuk formulir pendaftaran).",
        ],
      },
      {
        code: "B",
        title: "PERATURAN UMUM",
        items: [
          "Keputusan panitia dan dewan juri bersifat mutlak serta tidak dapat diganggu gugat.",
          "Semua peserta WAJIB mengikuti seluruh rangkaian acara yang telah ditentukan.",
          "Peserta adalah siswa aktif SMP/SMA sederajat tahun ajaran 2026/2027.",
          "Perwakilan tim (minimal satu orang) WAJIB hadir saat Technical Meeting. Jika tidak hadir, tim dianggap menyetujui seluruh keputusan TM.",
          "Seluruh peserta WAJIB menggunakan ID Card selama berada di area perlombaan.",
          "Official dan guru pendamping WAJIB berpakaian rapi dan sopan.",
        ],
      },
      {
        code: "C",
        title: "KETENTUAN ANGGOTA DAN PERALATAN TIM",
        items: [
          "Setiap tim terdiri dari 3 (tiga) orang.",
          "Juru bicara tim harus berada di posisi tengah.",
          "Selama kegiatan berlangsung (penyisihan, semifinal, maupun final), peserta dilarang menggunakan alat bantu hitung/elektronik apa pun, termasuk kalkulator dan HP. Hanya kertas kosong dan pulpen yang diperbolehkan di sekitar peserta.",
          "Khusus babak luring (semifinal dan final), peserta dilarang menggunakan jam tangan.",
          "Kertas dan alat tulis pada babak luring disediakan oleh panitia.",
        ],
      },
      {
        code: "D",
        title: "TATA TERTIB & TEKNIS BABAK PENYISIHAN (DARING)",
        items: [
          "Pakaian & Sikap: Peserta wajib menggunakan seragam sekolah masing-masing. Dilarang bekerja sama atau berdiskusi dengan siapa pun selain rekan satu tim.",
          "Ketentuan Perangkat (3 Device):",
          "Device 1: Laptop/PC untuk pengerjaan soal pada situs e-ujian.",
          "Device 2: HP/kamera dari sisi depan peserta via Zoom dengan microphone aktif. Username: No urut - Kamera 1 (Peserta) (contoh: 2026L01 - Kamera 1 (Peserta)).",
          "Device 3: HP/kamera dari sisi samping peserta via Zoom. Username: No urut - Kamera 2 (Peserta) (contoh: 2026L01 - Kamera 2 (Peserta)).",
          "Akun & Akses: Informasi login e-ujian dikirimkan melalui email masing-masing saat pendaftaran. Peserta wajib login 30 menit sebelum ujian dimulai.",
          "Sistem Pengerjaan & Waktu: 40 soal pilihan ganda dengan waktu pengerjaan 120 menit.",
          "Sistem Penilaian: Jawaban benar +4 poin; jawaban salah -2 poin; jawaban kosong -1 poin.",
          "Jika terdapat skor yang sama, kecepatan waktu pengerjaan mempengaruhi peringkat.",
          "Kualifikasi: 12 (dua belas) tim dengan skor tertinggi berhak lolos ke Babak Semifinal.",
        ],
      },
      {
        code: "E",
        title: "TATA TERTIB & TEKNIS BABAK SEMIFINAL (LURING)",
        items: [
          "Pembagian Kelompok: Semifinal 1 terdiri dari peringkat 1, 4, 7, dan 10; Semifinal 2 dari peringkat 2, 5, 8, dan 11; Semifinal 3 dari peringkat 3, 6, 9, dan 12.",
          "Posisi Duduk & Amplop: Urutan tempat duduk dan giliran memilih amplop soal ditentukan berdasarkan hasil spinner.",
          "Teknis Pengerjaan: Soal ditampilkan pada layar proyektor. Waktu berhitung dan menekan bel adalah 2 menit setelah juri selesai membacakan soal. Jawaban yang disampaikan adalah jawaban final.",
          "Sesi 1 - Soal Wajib Semifinal: Setiap tim memilih amplop berisi 3 soal wajib.",
          "Pada sesi wajib, peserta wajib menekan bel sebelum menjawab dan hanya juru bicara yang boleh menjawab. Jika anggota lain menjawab lebih dari 3 kali, tim dikenakan denda -10 poin.",
          "Setelah bel ditekan, terdapat jeda 5 detik sebelum menjawab. Jika tidak menjawab dalam 5 detik atau menekan bel tanpa menjawab, dianggap salah.",
          "Penilaian Sesi Wajib SF: benar +100; salah -50; kosong/habis waktu 0; jawaban kurang sempurna khusus materi geometri +50.",
          "Sesi 2 - Soal Rebutan Semifinal: Terdiri dari 10 soal. Semua anggota tim boleh menjawab setelah menekan bel dan dipersilakan oleh juri.",
          "Menjawab sebelum dipersilakan juri dianggap salah. Jika bel ditekan namun tidak menjawab lengkap dalam 5 detik atau jawaban kurang sempurna, sisa waktu 2 menit dapat direbut tim lain, kecuali tim yang sudah menjawab salah.",
          "Penilaian Sesi Rebutan SF: benar +100; salah -50; tidak terjawab/gugur 0.",
          "Kualifikasi: 3 (tiga) tim dengan skor tertinggi berhak lolos ke Babak Final.",
        ],
      },
      {
        code: "F",
        title: "TATA TERTIB & TEKNIS BABAK FINAL (LURING)",
        items: [
          "Peserta & Posisi Duduk: Diikuti oleh 3 tim terbaik. Tempat duduk, urutan amplop, dan urutan lemparan ditentukan dari hasil spinner.",
          "Teknis Pengerjaan: Soal ditampilkan melalui proyektor. Waktu berhitung 2 menit. Jawaban yang disebutkan bersifat final.",
          "Sesi 1 - Soal Wajib Final: Terdiri dari 5 soal wajib per tim dari amplop pilihan.",
          "Peserta wajib menekan bel dan hanya juru bicara yang boleh menjawab. Pelanggaran lebih dari 3 kali berakibat denda -10 poin.",
          "Penilaian Sesi Wajib Final: benar +100; salah -50; tidak terjawab/habis waktu/gugur -50; jawaban kurang sempurna materi geometri +50.",
          "Sesi 2 - Soal Lemparan Final: Terdiri dari 5 soal lemparan. Juru bicara menekan bel jika ingin menjawab dengan waktu 2 menit.",
          "Jika tidak terjawab/kurang sempurna, soal dilempar ke tim berikutnya sesuai urutan spinner tanpa waktu tambahan berhitung, hanya diberi waktu 5 detik untuk menjawab.",
          "Penilaian Sesi Lemparan Final: benar +100; salah -50. Jika soal tidak dapat dijawab seluruh tim, tidak ada pengurangan nilai pada tim mana pun (0).",
          "Sesi 3 - Soal Rebutan Final: Terdiri dari 10 soal. Semua anggota tim boleh menjawab setelah menekan bel dan ditunjuk juri. Menjawab sebelum ditunjuk juri dianggap salah.",
          "Jika salah/tidak lengkap dalam 5 detik, sisa waktu 2 menit dapat direbut tim lain, kecuali tim yang sudah menjawab salah.",
          "Penilaian Sesi Rebutan Final: benar +100; salah -50; tidak terjawab 0.",
        ],
      },
      {
        code: "G",
        title: "TATA TERTIB SUPORTER DAN PENONTON",
        items: [
          "Suporter dan pembina wajib duduk di tempat yang telah disediakan serta menjaga ketertiban.",
          "Suporter dilarang keras membantu atau memberikan isyarat/jawaban kepada peserta.",
          "Jika suporter terbukti membantu memberikan jawaban, tim yang dibantu memperoleh nilai 0 pada soal tersebut.",
          "Suporter pendukung tim yang tidak menaati aturan/memberikan jawaban akan menyebabkan pengurangan skor -25 poin pada tim yang didukung setelah 1 kali peringatan.",
          "Suporter eksternal yang membuat kegaduhan akan dikeluarkan dari ruangan perlombaan oleh panitia.",
        ],
      },
      {
        code: "H",
        title: "SERAGAM DAN TATA TERTIB ARENA",
        items: [
          "Peserta wajib mengenakan seragam batik sekolah atau almamater resmi.",
          "Hanya peserta aktif dan satu guru pendamping yang diperbolehkan berada di sekitar area perlombaan.",
          "Dilarang merokok dan membuat kegaduhan di seluruh area sekolah/perlombaan.",
          "Toleransi keterlambatan maksimal 5 menit dari jadwal. Tim yang terlambat tanpa konfirmasi dianggap gugur (WO).",
        ],
      },
      {
        code: "I",
        title: "GANGGUAN TEKNIS DAN KENDALA",
        items: [
          "Babak Penyisihan (Daring): Peserta yang mengalami kendala teknis wajib segera menghubungi Kontak Resmi Panitia: 08988226061 (a.n. Salma Fadhillah).",
          "Kendala akibat kelalaian peserta, seperti kehabisan kuota, baterai habis, atau keterlambatan, menjadi tanggung jawab penuh peserta.",
          "Babak Semifinal & Final (Luring): Jika terjadi gangguan teknis (bel rusak, listrik padam, atau sistem error), soal yang terdampak akan diulang atau dihentikan sementara hingga sistem normal.",
          "Batas waktu penanganan gangguan teknis oleh panitia maksimal 15 menit.",
        ],
      },
      {
        code: "J",
        title: "PROTES DAN SANKSI KECURANGAN",
        items: [
          "Protes hanya dapat dilakukan secara tertulis oleh guru pendamping maksimal 15 menit setelah pertandingan berakhir. Keputusan akhir ditentukan oleh Ketua Dewan Juri dan Panitia.",
          "Tim yang terbukti melakukan kecurangan, menggunakan alat bantu elektronik, atau menerima bantuan jawaban akan langsung didiskualifikasi.",
          "Tim yang menyatakan mundur saat pertandingan berlangsung (mogok) dianggap gugur.",
        ],
      },
      {
        code: "K",
        title: "HAL-HAL LAIN",
        items: [
          "Segala sesuatu yang belum tercantum dalam regulasi ini akan diatur dan disepakati saat Technical Meeting.",
        ],
      },
    ],
    lampiran: [
      { title: "Surat Undangan Resmi (SMP)", url: "/0766 Undangan Wikrama Cup V 2026.pdf" },
      { title: "Unduh Formulir Pendaftaran", url: "/formulir-pendaftaran-atlet.docx" },
      { title: "Tata Tertib Babak Penyisihan LCC", url: "/TATA TERTIB BABAK PENYISIHAN LCC-M.pdf" },
      { title: "Tata Tertib Babak Semifinal LCC", url: "/TATA TERTIB BABAK SEMIFINAL LCC-M.pdf" },
      { title: "Tata Tertib Babak Final LCC", url: "/TATA TERTIB BABAK FINAL LCC-M.pdf" },
    ],
    kontak: [
      { nama: "Faiz (PJ Cerdas Cermat)", wa: "0877-2108-4547", link: "https://wa.me/6287721084547" },
      { nama: "Dede Hermansyah, S.Pd.", wa: "0856-0437-9531", link: "https://wa.me/6285604379531" },
      { nama: "Ria Rosia Cahyawati, S.Pd.", wa: "0858-1026-6449", link: "https://wa.me/6285810266449" },
    ],
  },
  "tenis-meja": {
    icon: "🏓",
    title: "Regulasi Pertandingan Lomba Tenis Meja Antar SMP Se-Bogor Raya",
    kategori: "Siswa aktif SMP/sederajat wilayah Bogor Raya",
    waktuTempat: {
      pendaftaran: "13 November - 1 Oktober 2026",
      technicalMeeting: "1 Oktober 2026",
      pelaksanaan: "3, 4 Oktober 2026",
      tempat: "Aula Balaikrida SMK Wikrama Bogor",
    },
    biayaPendaftaran: {
      nominal: "Rp. 75.000,00 / pemain",
      bank: "Bank BJB",
      atasNama: "Mohamad Rizal",
      rekening: "0149257144100",
    },
    kuota: {
      total: "Maksimal 2 peserta persekolah perkategori",
      details: [
        { label: "Tunggal putra", count: 2 },
        { label: "Tunggal putri", count: 2 },
      ],
    },
    penghargaan: [
      { juara: "Juara I", hadiah: "Trophy, Piagam dan Uang Pembinaan Rp750.000" },
      { juara: "Juara II", hadiah: "Trophy, Piagam dan Uang Pembinaan Rp500.000 " },
      { juara: "Juara III Bersama", hadiah: "Trophy, Piagam dan Uang pembinaan Rp250.000 " },
    ],
    sections: [
      {
        code: "A",
        title: "KATEGORI",
        items: [
          "Peserta merupakan siswa aktif tingkat SMP/sederajat di wilayah Bogor Raya.",
          "Peserta wajib membawa kartu pelajar atau identitas sekolah apabila diperlukan.",
          "Setiap peserta wajib mengikuti seluruh ketentuan yang telah ditetapkan oleh panitia.",
          "Satu sekolah maksimal mengirimkan 2 orang pemain pada masing-masing nomor: tunggal putra maksimal 2 orang dan tunggal putri maksimal 2 orang.",
        ],
      },
      {
        code: "B",
        title: "WAKTU DAN TEMPAT",
        items: [
          "Pendaftaran: 13 September - 1 Oktober 2026.",
          "Technical Meeting: 1 Oktober 2026.",
          "Pelaksanaan: 3, 4 Oktober 2026.",
          "Tempat: Aula Balaikrida SMK Wikrama Bogor.",
        ],
      },
      {
        code: "C",
        title: "BIAYA PENDAFTARAN",
        items: [
          "Biaya pendaftaran sebesar Rp75.000,00 per pemain.",
          "Pembayaran melalui Bank BJB.",
          "Atas nama Mohamad Rizal.",
          "Nomor rekening: 0149257144100.",
        ],
      },
      {
        code: "D",
        title: "PENGHARGAAN",
        items: [
          "Peserta yang berhasil memperoleh hasil terbaik akan mendapatkan penghargaan sesuai daftar Juara I, Juara II, dan Juara III Bersama.",
          "Penetapan juara dilakukan berdasarkan hasil akhir pertandingan dan keputusan panitia serta wasit.",
        ],
      },
      {
        code: "E",
        title: "PERSYARATAN UMUM",
        items: [
          "Sudah membayar uang pendaftaran sebesar Rp50.000 per pemain.",
          "Pada saat Technical Meeting, setiap peserta harus sudah melengkapi persyaratan kejuaraan Wikrama Fest.",
          "Mengisi formulir pendaftaran.",
          "Surat rekomendasi dari sekolah masing-masing, bertanda tangan kepala sekolah dan berstempel sekolah asli, di-upload saat pendaftaran.",
          "Fotokopi rapor semester terakhir sesuai tingkatan atau fotokopi Kartu Pelajar.",
        ],
      },
      {
        code: "F",
        title: "PERATURAN UMUM",
        items: [
          "Keputusan panitia tidak dapat diganggu gugat.",
          "Panitia berhak menginterpretasikan peraturan sesuai persepsi panitia.",
          "Semua peserta Wikrama Fest 4 WAJIB mengikuti semua proses acara dan rangkaian kegiatan.",
          "Semua peserta WAJIB mengikuti protokol kesehatan yang sudah ditentukan.",
          "Peserta diutamakan adalah kelas 8-9 siswa SMP sederajat tahun ajaran 2025-2026 yang telah memenuhi persyaratan panitia Wikrama Fest.",
          "Semua peserta WAJIB mengikuti upacara pembukaan.",
          "Peraturan permainan yang digunakan adalah peraturan ITTF.",
          "Official, pelatih, dan guru pendamping WAJIB menggunakan pakaian rapi.",
        ],
      },
      {
        code: "G",
        title: "PERATURAN KHUSUS",
        items: [
          "Peserta wajib menggunakan bet tenis meja dengan standar pertandingan ITTF.",
          "Ketebalan dan jenis karet bet mengikuti standar yang berlaku dalam olahraga tenis meja dan tidak menggunakan bintik proses.",
          "Panitia dan wasit berhak memeriksa bet peserta apabila diperlukan.",
          "Meja pertandingan menggunakan NEXSIST 18.",
          "Bola pertandingan menggunakan DHS DJ40+.",
          "Pertandingan menggunakan sistem pool pada babak penyisihan.",
          "Peserta dalam setiap pool akan bertanding melawan seluruh peserta dalam pool tersebut.",
          "Peserta dengan hasil terbaik dari setiap pool akan melaju ke babak selanjutnya.",
          "Sistem babak selanjutnya menggunakan sistem gugur yang ditentukan oleh panitia sesuai jumlah peserta.",
          "Sistem pool menggunakan best of 3 game dan sistem gugur menggunakan best of 5 game.",
          "Setiap game dimainkan hingga mencapai 11 poin.",
          "Apabila skor mencapai 10-10, pertandingan dilanjutkan hingga salah satu pemain unggul 2 poin.",
          "Pertandingan menggunakan peraturan tenis meja yang berlaku.",
          "Setiap pemain mendapatkan kesempatan servis sebanyak 2 kali secara bergantian.",
          "Apabila skor mencapai 10-10, servis berganti setiap 1 poin.",
          "Pemain wajib hadir minimal 10 menit sebelum pertandingan dimulai.",
          "Peserta yang dipanggil sebanyak 3 kali dan tidak hadir dapat dinyatakan WO (Walk Over).",
          "Peserta wajib menjunjung tinggi sportivitas selama pertandingan.",
        ],
      },
      {
        code: "H",
        title: "WASIT DAN KOORDINATOR PERTANDINGAN",
        items: [
          "Pertandingan dipimpin oleh wasit yang telah ditentukan oleh panitia (PENGCAB PTMSI KOTA BOGOR).",
          "Keputusan wasit selama pertandingan bersifat mengikat.",
          "Peserta wajib menghormati keputusan wasit dan panitia.",
          "Protes dapat disampaikan dengan cara yang sopan kepada panitia sesuai ketentuan yang berlaku.",
        ],
      },
      {
        code: "I",
        title: "HAL-HAL LAIN",
        items: [
          "Segala sesuatu yang belum tercantum akan diatur saat Technical Meeting.",
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