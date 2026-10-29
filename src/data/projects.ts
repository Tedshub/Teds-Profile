import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Sistem Monitoring Energi Listrik Berbasis IoT dengan Protokol Modbus RTU dan Dashboard Web Real-Time pada Power Meter FORT FCN300-3E4Y",
    image: "/images/projects/power-meter-monitoring.jpg",
    category: "web",
    demoUrl: "https://cekel.my.id/",
    tech: ["Python", "Modbus RTU", "Power Meter FORT FCN300-3E4Y", "Intel NUC", "Panel LVMDP & AC", "Web Real-Time", "MySQL"],
    description:
      "Sistem monitoring energi listrik terintegrasi berbasis IoT yang membaca konsumsi daya listrik menggunakan 2 unit Power Meter FORT FCN300-3E4Y untuk memonitor beban distribusi AC dan panel utama LVMDP secara real-time via protokol Modbus RTU (RS-485). Program akuisisi data dijalankan menggunakan Python pada Mini PC Intel NUC yang diinstalasi langsung di dalam panel distribusi listrik, kemudian data diteruskan ke server web (cekel.my.id) untuk visualisasi live, analitik beban, dan export laporan periodik.",
    slides: [
      {
        src: "/images/projects/power-meter-monitoring/landing-page.jpg",
        type: "image",
        caption:
          "Landing page platform sistem monitoring energi listrik real-time (cekel.my.id) — gerbang akses pemantauan beban kelistrikan terpadu.",
      },
      {
        src: "/images/projects/power-meter-monitoring/hardware.jpg",
        type: "image",
        caption:
          "Instalasi hardware pada panel distribusi: integrasi 2 unit Power Meter FORT FCN300-3E4Y untuk membaca beban distribusi AC & LVMDP, serta Mini PC Intel NUC yang dipasang langsung di dalam panel untuk menjalankan program Python akuisisi data via Modbus RTU.",
      },
      {
        src: "/images/projects/power-meter-monitoring/dashoard.png",
        type: "image",
        caption:
          "Dashboard web real-time menampilkan parameter listrik lengkap (tegangan per fasa, arus, daya aktif, frekuensi, power factor, dan akumulasi kWh) dari kedua power meter pada beban AC dan LVMDP.",
      },
      {
        src: "/images/projects/power-meter-monitoring/detail-data.png",
        type: "image",
        caption:
          "Halaman detail data analitik dengan grafik fluktuasi beban listrik historis, log anomali daya, serta status konektivitas perangkat secara langsung.",
      },
      {
        src: "/images/projects/power-meter-monitoring/export-laporan.png",
        type: "image",
        caption:
          "Fitur export laporan penggunaan energi listrik format PDF/Excel untuk mempermudah audit kelistrikan, analisis efisiensi energi, dan pelaporan manajemen.",
      },
    ],
  },
  {
    id: "project-2",
    title: "Loyalcust — Customer Relation Management (CRM).",
    image: "/images/projects/CRM.png",
    category: "web",
    demoUrl: "https://loyalcust.rizkikurni.my.id/",
    tech: ["React.js", "Laravel", "REST API", "MySQL", "Tailwind CSS"],
    description:
      "Platform CRM bernama Loyalcust yang dirancang untuk membantu bisnis mengelola hubungan pelanggan, riwayat transaksi, program loyalitas, dan analitik pelanggan dalam satu dashboard terpadu yang dapat diakses secara live di loyalcust.rizkikurni.my.id.",
    slides: [
      {
        src: "/images/projects/crm/landing-page.jpg",
        type: "image",
        caption:
          "Landing page resmi Loyalcust CRM (loyalcust.rizkikurni.my.id) — platform terpadu solusi manajemen loyalitas dan relasi pelanggan.",
      },
      {
        src: "/images/projects/CRM.png",
        type: "image",
        caption:
          "Tampilan dashboard utama Loyalcust CRM dengan visualisasi metrik pelanggan, volume transaksi, segmentasi keanggotaan loyalty, dan tren retensi pelanggan.",
      },
    ],
  },
  {
    id: "project-3",
    title: "Group Finances — Platform Pencatatan Keuangan dengan Fitur Komunitas dan Live Group Chat.",
    image: "/images/projects/group-finances.png",
    category: "web",
    tech: ["React.js", "Laravel", "WebSocket", "MySQL", "Tailwind CSS"],
    description:
      "Aplikasi pencatatan keuangan berbasis komunitas yang memungkinkan pengguna mencatat pemasukan & pengeluaran, berbagi laporan dalam grup, serta berkomunikasi real-time melalui fitur live group chat.",
    slides: [
      {
        src: "/images/projects/group-finances.png",
        type: "image",
        caption:
          "Halaman utama Group Finances menampilkan ringkasan keuangan kelompok, riwayat transaksi bersama, dan panel live group chat.",
      },
    ],
  },
  {
    id: "project-4",
    title: "Sistem Presensi Website & Mobile dengan Face Recognition, Geo Tagging, dan Anti-Fake GPS untuk Karyawan Desa se-Kecamatan Mayong, Jepara, Jawa Tengah, Mendukung Presensi Online & Offline.",
    image: "/images/projects/presensi-mayong.png",
    category: "web",
    demoUrl: "https://presensimayong.dssrks.co.id/",
    tech: ["Laravel", "Flutter", "Face Recognition", "Geo-Tagging", "Anti-Fake GPS", "MySQL"],
    description:
      "Sistem presensi terintegrasi untuk karyawan desa se-Kecamatan Mayong yang menggabungkan verifikasi biometrik face recognition, geo-tagging koordinat kantor desa, dan mekanisme anti-fake GPS. Mendukung operasional online maupun offline secara real-time dan dapat diakses melalui portal presensimayong.dssrks.co.id.",
    slides: [
      {
        src: "/images/projects/presensi-mayong/landing-page.jpg",
        type: "image",
        caption:
          "Landing page resmi portal Sistem Presensi Karyawan Desa se-Kecamatan Mayong, Jepara (presensimayong.dssrks.co.id) — pusat informasi dan portal autentikasi presensi kerja.",
      },
      {
        src: "/images/projects/presensi-mayong.png",
        type: "image",
        caption:
          "Antarmuka sistem presensi digital dengan verifikasi biometrik wajah (face recognition), validasi radius GPS kantor desa, dan rekonsiliasi data presensi offline ke server pusat.",
      },
    ],
  },
  {
    id: "project-5",
    title: "IoT Automatic Fish Feeder Berkapasitas 3kg+ dengan Web Server untuk Monitoring Kapasitas, Penjadwalan, dan Kendali Pakan Jarak Jauh pada Kolam Lele Kelurahan Kembangarum, Semarang.",
    image: "/images/projects/MockupFeeder.jpg",
    category: "web",
    tech: ["ESP32", "Laravel", "WebSocket", "Sensor Load Cell", "Servo Motor"],
    description:
      "Prototipe pemberi pakan ikan lele otomatis berbasis IoT berkapasitas 3kg+ yang dilengkapi web server untuk monitoring kapasitas pakan secara real-time, penjadwalan pemberian pakan, dan kendali manual jarak jauh. Diimplementasikan di kolam lele Kelurahan Kembangarum, Semarang.",
    slides: [
      {
        src: "/images/projects/Fish Feeder/MockupFeeder.jpg",
        type: "image",
        caption:
          "Mockup desain alat fish feeder otomatis berkapasitas 3kg+ dengan komponen sensor berat (load cell), servo motor, dan modul ESP32 sebagai pengendali utama.",
      },
      {
        src: "/images/projects/Fish Feeder/desain-fish-feeder.jpg",
        type: "image",
        caption:
          "Desain fisik rangkaian fish feeder yang menampilkan tata letak komponen elektronik, wadah pakan, dan mekanisme penyaluran pakan otomatis.",
      },
      {
        src: "/images/projects/Fish Feeder/landing-page.png",
        type: "image",
        caption:
          "Halaman landing page web server Fish Feeder — pintu masuk ke sistem monitoring dan kendali pakan ikan secara remote.",
      },
      {
        src: "/images/projects/Fish Feeder/dashboard-fish-feeder.png",
        type: "image",
        caption:
          "Dashboard web real-time menampilkan kapasitas pakan saat ini, jadwal pemberian pakan, dan tombol kendali manual jarak jauh.",
      },
      {
        src: "/images/projects/Fish Feeder/detail-feeder-monitoring.png",
        type: "image",
        caption:
          "Halaman detail monitoring fish feeder dengan grafik riwayat pemberian pakan, log aktivitas, dan status koneksi perangkat ESP32.",
      },
      {
        src: "/images/projects/Fish Feeder/instalasi.mp4",
        type: "video",
        caption:
          "Instalasi dan pelatihan penggunaan feeder di kolam lele kelurahan Kembangarum, Semarang Barat, Kota Semarang.",
      },
    ],
  },
  {
    id: "project-6",
    title: "Sistem Pendukung Keputusan untuk Perencanaan Sekolah Menggunakan Metode TOPSIS dengan Penilaian Alternatif Multi-Role oleh Kepala Sekolah dan Stakeholder",
    image: "/images/projects/RKS-DSS.png",
    category: "web",
    demoUrl: "https://rks.dssrks.co.id/",
    tech: ["Laravel", "TOPSIS", "MySQL", "Bootstrap", "Chart.js"],
    documents: [
      {
        title: "Sertifikat Hak Cipta (HaKI) DSS RKS",
        url: "/documents/HAKI DSS RKS.pdf",
      },
    ],
    description:
      "Sistem pendukung keputusan (DSS) berbasis web untuk membantu perencanaan sekolah (RKS) menggunakan metode TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution). Sistem mendukung penilaian alternatif multi-role oleh Kepala Sekolah dan stakeholder sekolah untuk menghasilkan rekomendasi prioritas program kerja sekolah yang objektif dan transparan. Dapat diakses secara live di rks.dssrks.co.id.",
    slides: [
      {
        src: "/images/projects/dss-rks/landing-page.jpg",
        type: "image",
        caption:
          "Landing page platform Sistem Pendukung Keputusan Rencana Kerja Sekolah (rks.dssrks.co.id) — sistem asistensi perencanaan berbasis metode komputasi TOPSIS.",
      },
      {
        src: "/images/projects/dss-rks/register.png",
        type: "image",
        caption:
          "Halaman registrasi akun stakeholder dan pendaftaran role pengguna baru ke dalam sistem perencanaan sekolah.",
      },
      {
        src: "/images/projects/dss-rks/verifikkasi-otp.png",
        type: "image",
        caption:
          "Proses verifikasi keamanan akun menggunakan kode One-Time Password (OTP) untuk otentikasi identitas stakeholder yang sah.",
      },
      {
        src: "/images/projects/dss-rks/dashboard.png",
        type: "image",
        caption:
          "Dashboard utama sistem menampilkan matriks evaluasi, status penilaian kuisioner yang sedang berjalan, dan grafik rekapitulasi data.",
      },
      {
        src: "/images/projects/dss-rks/manajemen-user-oleh-admin.png",
        type: "image",
        caption:
          "Panel manajemen pengguna oleh Administrator untuk mengatur hak akses akun multi-role (Kepala Sekolah, Tim Pengembang, dan Stakeholder).",
      },
      {
        src: "/images/projects/dss-rks/manajemen-kriteria.png",
        type: "image",
        caption:
          "Pengaturan kriteria penilaian perencanaan sekolah serta pembobotan nilai preferensi yang menjadi dasar perhitungan algoritma TOPSIS.",
      },
      {
        src: "/images/projects/dss-rks/halaman-kriteria.png",
        type: "image",
        caption:
          "Daftar detail kriteria evaluasi perencanaan sekolah (kriteria benefit/cost) beserta parameter standar pengukuran prioritas program kerja.",
      },
      {
        src: "/images/projects/dss-rks/halaman-opsi-kebijakan-atau-alternatif.png",
        type: "image",
        caption:
          "Katalog opsi kebijakan atau alternatif program kerja sekolah yang diajukan untuk dievaluasi kelayakan dan tingkat urgensinya.",
      },
      {
        src: "/images/projects/dss-rks/kuisioner-penilaian-opsi-kebijakan.png",
        type: "image",
        caption:
          "Formulir kuisioner penilaian opsi kebijakan interaktif yang diisi secara mandiri oleh Kepala Sekolah dan para stakeholder terkait.",
      },
      {
        src: "/images/projects/dss-rks/perangkingan.png",
        type: "image",
        caption:
          "Hasil kalkulasi algoritma TOPSIS berupa tabel perangkingan rekomendasi prioritas program kerja sekolah yang objektif dan terukur.",
      },
      {
        src: "/images/projects/dss-rks/uat-deseminasi-user-kepala-sekolah-dan-staf-sd-dan-p3k-kota-semarang.jpg",
        type: "image",
        caption:
          "Dokumentasi kegiatan UAT (User Acceptance Testing) dan deseminasi implementasi sistem bersama Kepala Sekolah, staf SD, dan P3K Kota Semarang.",
      },
    ],
  },
  {
    id: "project-7",
    title: "Implementasi YOLOv8 dan Embedded System Berbasis ESP32 pada Prototipe Sistem Penargetan Militer Real-Time dengan Integrasi Aktuator Servo.",
    image: "/images/projects/object-targeting.jpg",
    category: "web",
    tech: ["YOLOv8", "Python", "ESP32", "OpenCV", "Servo Motor", "Roboflow"],
    description:
      "Prototipe sistem penargetan objek real-time yang mengintegrasikan model deteksi objek YOLOv8 dengan embedded system berbasis ESP32 dan aktuator servo. Sistem mampu mendeteksi dan mengunci target secara otomatis melalui kamera, lalu menggerakkan servo untuk mengarahkan penargetan.",
    slides: [
      {
        src: "/images/projects/object-targeting.jpg",
        type: "image",
        caption:
          "Prototipe hardware sistem penargetan dengan modul ESP32, kamera, dan aktuator servo yang terintegrasi dalam satu rangkaian mekanis.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/roboflow-plane_dataset.png",
        type: "image",
        caption:
          "Dataset pesawat yang dianotasi menggunakan Roboflow sebagai data latih model YOLOv8 untuk deteksi objek militer.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/tes_result.png",
        type: "image",
        caption:
          "Hasil pengujian model YOLOv8 — menampilkan bounding box deteksi objek target dengan confidence score pada frame video.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/user-interface.png",
        type: "image",
        caption:
          "Antarmuka pengguna sistem penargetan yang menampilkan feed kamera real-time dengan overlay deteksi objek dan status servo.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/test-redball-model.mp4",
        type: "video",
        caption:
          "Demo pengujian model mendeteksi dan mengunci target bola merah secara real-time dengan pergerakan servo mengikuti posisi objek.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/test-model_plane.mp4",
        type: "video",
        caption:
          "Demo pengujian model YOLOv8 mendeteksi objek pesawat dalam kondisi nyata dengan sistem servo yang merespons pergerakan target.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/trial n error.mp4",
        type: "video",
        caption:
          "Dokumentasi proses trial & error pengembangan — kalibrasi servo, tuning model deteksi, dan pengujian integrasi sistem secara bertahap.",
      },
    ],
  },
  {
    id: "project-8",
    title: "Sistem Parkir dengan Pencatatan Plat Nomor Kendaraan Menggunakan YOLOV8 serta Easyocr.",
    image: "/images/projects/plate-recognition.jpeg",
    category: "web",
    tech: ["YOLOv8", "EasyOCR", "Python", "OpenCV", "Flask", "MySQL"],
    description:
      "Sistem manajemen parkir otomatis yang menggunakan YOLOv8 untuk mendeteksi plat nomor kendaraan dan EasyOCR untuk membaca teks plat. Data kendaraan masuk dan keluar dicatat secara otomatis ke database beserta timestamp dan gambar plat.",
    slides: [
      {
        src: "/images/projects/plate-recognition.jpeg",
        type: "image",
        caption:
          "Sistem kamera parkir yang mendeteksi plat nomor kendaraan menggunakan YOLOv8 dan EasyOCR dengan hasil pencatatan otomatis ke database.",
      },
      {
        src: "/images/projects/Plat Recognition/plat-recognition.mp4",
        type: "video",
        caption:
          "Demo real-time sistem parkir — kamera mendeteksi kendaraan masuk, YOLOv8 melokalisasi plat, EasyOCR membaca teks, dan data tersimpan otomatis.",
      },
    ],
  },
];
