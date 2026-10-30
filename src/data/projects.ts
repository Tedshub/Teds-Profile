import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Sistem Monitoring Energi Listrik Berbasis IoT dengan Protokol Modbus RTU dan Dashboard Web Real-Time pada Power Meter FORT FCN300-3E4Y",
    image: "/images/projects/power-meter-monitoring.jpg",
    category: "web",
    demoUrl: "https://cekel.my.id/",
    tech: ["Python", "Modbus RTU", "RS-485", "Power Meter FORT FCN300-3E4Y", "Intel NUC", "Laravel", "React.js", "Inertia.js", "MySQL", "Heartbeat System"],
    description:
      "Sistem pemantauan konsumsi energi listrik tiga fasa secara real-time berbasis IoT. Menggunakan CT clamp sebagai sensor arus yang terpasang pada panel listrik dan terhubung ke Power Meter FORT FCN300-3E4Y untuk membaca beban distribusi AC dan panel utama LVMDP (tegangan, arus, daya aktif/semu/reaktif, power factor, dan frekuensi). Komunikasi industrial menggunakan protokol Modbus RTU melalui RS-485 dengan modul USB-to-RS485 ke Mini PC Intel NUC yang dipasang langsung di dalam panel. Program data collector Python membaca data secara periodik, menyimpan ke file Excel lokal sebagai offline buffer, dan melakukan auto-sync ke backend via REST API over HTTPS saat koneksi pulih. Dilengkapi sistem heartbeat pemantau status online/offline (deteksi offline jika ping terhenti >15 detik) dan dashboard web real-time berbasis Laravel, React, dan Inertia.js.",
    slides: [
      {
        src: "/images/projects/power-meter-monitoring/landing-page.jpg",
        type: "image",
        caption:
          "Landing page resmi platform sistem monitoring energi listrik real-time (cekel.my.id) — gerbang akses pemantauan beban kelistrikan terpadu.",
      },
      {
        src: "/images/projects/power-meter-monitoring/hardware.jpg",
        type: "image",
        caption:
          "Instalasi fisik hardware di dalam panel listrik: CT clamp sensor arus terhubung ke 2 unit Power Meter FORT FCN300-3E4Y untuk membaca beban distribusi AC dan LVMDP, serta Mini PC Intel NUC yang menjalankan program data collector Python via antarmuka USB-to-RS485 (Modbus RTU).",
      },
      {
        src: "/images/projects/power-meter-monitoring/dashoard.png",
        type: "image",
        caption:
          "Dashboard web real-time berbasis Laravel & React (Inertia.js) menampilkan visualisasi parameter listrik lengkap (tegangan, arus, daya aktif/semu/reaktif, power factor, frekuensi, akumulasi kWh) serta status koneksi heartbeat perangkat secara live.",
      },
      {
        src: "/images/projects/power-meter-monitoring/detail-data.png",
        type: "image",
        caption:
          "Halaman detail analitik data dengan grafik fluktuasi konsumsi listrik historis, log anomali daya, dan mekanisme auto-sync dari offline buffer lokal.",
      },
      {
        src: "/images/projects/power-meter-monitoring/export-laporan.png",
        type: "image",
        caption:
          "Fitur ekspor laporan periodik penggunaan energi listrik format Excel/PDF untuk audit kelistrikan, analisis efisiensi konsumsi daya, dan pelaporan manajemen.",
      },
    ],
  },
  {
    id: "project-2",
    title: "Loyalcust — Customer Relation Management (CRM).",
    image: "/images/projects/CRM.png",
    category: "web",
    demoUrl: "https://loyalcust.rizkikurni.my.id/",
    tech: ["Laravel 11", "Next.js", "Tailwind CSS", "MySQL", "RBAC", "2FA / OTP", "Email Invitation", "PDF Report"],
    description:
      "Platform Customer Relationship Management (CRM) komprehensif bernama Loyalcust yang dikembangkan menggunakan Laravel 11, Next.js, Tailwind CSS, dan database MySQL. Dilengkapi implementasi Role-Based Access Control (RBAC) untuk manajemen hak akses hierarkis, Two-Factor Authentication (2FA) berbasis One-Time Password (OTP), sistem email invitation untuk mengundang anggota tim sesuai struktur jabatan, serta fitur utama CRM seperti manajemen pelanggan, produk, deals, import data leads via Excel, dan pelaporan yang dapat diunduh dalam format PDF. Dapat diakses secara live di loyalcust.rizkikurni.my.id.",
    slides: [
      {
        src: "/images/projects/crm/landing-page.jpg",
        type: "image",
        caption:
          "Landing page platform Loyalcust CRM (loyalcust.rizkikurni.my.id) — portal pengenalan solusi terpadu manajemen relasi pelanggan, deals, dan analitik bisnis.",
      },
      {
        src: "/images/projects/crm/mfa-otp-verification.png",
        type: "image",
        caption:
          "Verifikasi Two-Factor Authentication (2FA) menggunakan kode One-Time Password (OTP) sebagai lapisan keamanan ekstra saat autentikasi akun pengguna.",
      },
      {
        src: "/images/projects/crm/dashboard.png",
        type: "image",
        caption:
          "Dashboard analitik utama Loyalcust CRM menampilkan ringkasan metrik leads, conversion rate, tren deals, serta performa penjualan tim secara real-time.",
      },
      {
        src: "/images/projects/crm/manajemen-pelanggan.png",
        type: "image",
        caption:
          "Halaman manajemen pelanggan lengkap dengan segmentasi status kontak, riwayat interaksi, dan integrasi data profil konsumen.",
      },
      {
        src: "/images/projects/crm/manajemen-karyawan.png",
        type: "image",
        caption:
          "Manajemen karyawan berbasis Role-Based Access Control (RBAC) untuk mengatur pembagian tugas, peran, dan hierarki akses pengguna sistem.",
      },
      {
        src: "/images/projects/crm/employee-invitattion-via-email.png",
        type: "image",
        caption:
          "Fitur email invitation otomatis untuk mengundang anggota tim baru bergabung ke dalam organisasi sesuai dengan role dan hierarki jabatan.",
      },
      {
        src: "/images/projects/crm/manajemen-produk.png",
        type: "image",
        caption:
          "Katalog manajemen produk dan layanan perusahaan untuk mempermudah pencatatan penawaran deals dan perhitungan transaksi pelanggan.",
      },
      {
        src: "/images/projects/crm/halaman-deals-dan-pelaporan.png",
        type: "image",
        caption:
          "Pipeline deals penjualan interaktif dan modul pelaporan CRM yang dapat diekspor langsung ke dalam format dokumen PDF.",
      },
      {
        src: "/images/projects/crm/support-import-file-excel-leads-data.png",
        type: "image",
        caption:
          "Fitur import data leads dalam jumlah banyak (bulk import) secara praktis melalui file spreadsheet Excel (.xlsx).",
      },
    ],
  },
  {
    id: "project-3",
    title: "Group Finances — Platform Pencatatan Keuangan dengan Fitur Komunitas dan Live Group Chat.",
    image: "/images/projects/group-finances.png",
    category: "web",
    tech: ["Laravel 12", "React.js", "Tailwind CSS", "MySQL", "Live Group Chat", "RBAC", "Finance Tracking"],
    description:
      "Platform pencatatan keuangan modern berbasis komunitas yang dirancang menggunakan Laravel 12, React.js, Tailwind CSS, dan MySQL. Mengimplementasikan Role-Based Access Control (RBAC) untuk mengelola wewenang pengguna dalam grup (owner & member), sistem interaksi komunitas dengan fitur undang anggota, persetujuan/penolakan keanggotaan, pencatatan transaksi kas bersama, alokasi tabungan serta budgeting, dan komunikasi interaktif real-time melalui fitur live group chat dengan dukungan reaksi emoji dan reply pesan spesifik.",
    slides: [
      {
        src: "/images/projects/group-finances/landing-page.jpg",
        type: "image",
        caption:
          "Landing page platform Group Finances — antarmuka penyambutan modern yang memperkenalkan solusi pencatatan finansial terintegrasi, fitur komunitas, dan kolaborasi grup.",
      },
      {
        src: "/images/projects/group-finances/login-register-page.jpg",
        type: "image",
        caption:
          "Halaman autentikasi akun (Login & Registrasi) pengguna yang aman dan responsif, menjadi gerbang masuk ke ekosistem keuangan komunitas.",
      },
      {
        src: "/images/projects/group-finances/dashboard.png",
        type: "image",
        caption:
          "Dashboard analitik keuangan menampilkan ringkasan saldo, grafik arus kas pemasukan dan pengeluaran, serta ringkasan aktivitas grup terkini.",
      },
      {
        src: "/images/projects/group-finances/include-feature-tabungan-penganggaran-pelaporan.png",
        type: "image",
        caption:
          "Fitur perencanaan finansial mencakup manajemen tabungan berjangka, penetapan batas penganggaran (budgeting), serta pelaporan performa keuangan terstruktur.",
      },
      {
        src: "/images/projects/group-finances/fitur-komunitas.jpg",
        type: "image",
        caption:
          "Halaman komunitas/grup dengan implementasi Role-Based Access Control (RBAC) — hak istimewa owner untuk mengundang, menerima/menolak, dan mengeluarkan member, serta menu bergabung/keluar bagi pengguna.",
      },
      {
        src: "/images/projects/group-finances/halaman-transaksi-komunitas.jpg",
        type: "image",
        caption:
          "Pencatatan dan monitoring transaksi bersama dalam grup komunitas, memungkinkan transparansi pembagian beban pengeluaran dan arus kas secara real-time.",
      },
      {
        src: "/images/projects/group-finances/live-group-chat-support-reaction-and-reply-specific-chat.png",
        type: "image",
        caption:
          "Fitur Live Group Chat interaktif yang mendukung komunikasi antar anggota grup secara real-time, dilengkapi reaksi emoji serta opsi reply/balas pesan spesifik.",
      },
      {
        src: "/images/projects/group-finances/halaman-pengaturan-dan-profile.jpg",
        type: "image",
        caption:
          "Halaman pengaturan akun dan profil pengguna untuk kustomisasi informasi pribadi, preferensi notifikasi, dan keamanan sistem.",
      },
      {
        src: "/images/projects/group-finances/responsive-mobile-view.png",
        type: "image",
        caption:
          "Tampilan antarmuka responsif pada perangkat mobile (smartphone/tablet), memastikan navigasi dan pencatatan keuangan tetap nyaman diakses kapan saja.",
      },
    ],
  },
  {
    id: "project-4",
    title: "Sistem Presensi Website & Mobile dengan Face Recognition, Geo Tagging, dan Anti-Fake GPS untuk Karyawan Desa se-Kecamatan Mayong, Jepara, Jawa Tengah, Mendukung Presensi Online & Offline.",
    image: "/images/projects/presensi-mayong.png",
    category: "web",
    demoUrl: "https://presensimayong.dssrks.co.id/",
    tech: ["Laravel 13", "React.js", "Tailwind CSS", "MySQL", "Flutter", "TensorFlow.js (SSD MobileNet V1)", "ML Kit BlazeFace", "MobileFaceNet 192D", "RBAC (4 Roles)", "Anti-Fake GPS"],
    description:
      "Sistem presensi terintegrasi Website & Mobile untuk seluruh karyawan desa se-Kecamatan Mayong, Jepara, Jawa Tengah. Platform Web (Laravel 13, React.js, Tailwind CSS, MySQL) berfungsi sebagai pusat manajemen pengguna, kantor desa, jadwal kerja, data wajah, dan laporan presensi PDF dengan Role-Based Access Control (RBAC) 4 peran (Admin Developer, Admin Kecamatan, Admin Desa, Karyawan Desa). Registrasi wajah karyawan menggunakan auto-capture 5 sudut pose (lurus, menoleh kiri, kanan, atas, bawah) dan face-api.js (SSD MobileNet V1, 68-point Dlib Landmark, ResNet-34 128D). Aplikasi Mobile (Flutter) menjalankan pengenalan wajah offline menggunakan Google ML Kit BlazeFace, Euler Angles, dan MobileFaceNet 192D via tflite_flutter, dilengkapi sistem keamanan Anti-Fake GPS (deteksi Mock Location, isMocked, Root/Jailbreak, dan Emulator) serta mendukung presensi offline dengan auto-sinkronisasi saat terhubung internet.",
    slides: [
      {
        src: "/images/projects/presensi-mayong/landing-page.jpg",
        type: "image",
        caption:
          "Landing page resmi portal Sistem Presensi Karyawan Desa se-Kecamatan Mayong, Jepara (presensimayong.dssrks.co.id) — pusat autentikasi dan gerbang informasi sistem presensi kerja digital.",
      },
      {
        src: "/images/projects/presensi-mayong/dashboard-admin-kecamatan.png",
        type: "image",
        caption:
          "Dashboard Admin Kecamatan pada platform web (Laravel 13 & React.js) yang memonitor statistik kehadiran seluruh desa se-Kecamatan Mayong, rekapitulasi pegawai, dan grafik kepatuhan kerja.",
      },
      {
        src: "/images/projects/presensi-mayong/manajemen-kantor-desa.png",
        type: "image",
        caption:
          "Manajemen data kantor desa dan penetapan koordinat geo-tagging (latitude, longitude, dan radius presensi valid) untuk masing-masing kantor desa.",
      },
      {
        src: "/images/projects/presensi-mayong/detail-data-perkantor-desa-manajemen-kepala-desa-pelaporan-presensi-semua-karyawan.png",
        type: "image",
        caption:
          "Detail data per kantor desa yang mencakup pengelolaan profil Kepala Desa, penugasan staf perangkat desa, serta rekapitulasi pelaporan presensi seluruh karyawan desa.",
      },
      {
        src: "/images/projects/presensi-mayong/detail-data-karyawan.png",
        type: "image",
        caption:
          "Halaman detail profil karyawan desa, riwayat penugasan, status verifikasi biometrik wajah, dan pengaturan hak akses pengguna.",
      },
      {
        src: "/images/projects/presensi-mayong/manajaemen-jadwal.png",
        type: "image",
        caption:
          "Modul manajemen jadwal kerja fleksibel dan shift kantor desa, pengaturan jam masuk/pulang, toleransi keterlambatan, serta penetapan hari libur kerja.",
      },
      {
        src: "/images/projects/presensi-mayong/pengambilan-data-wajah-karyawan-oleh-masing-masing-admin-desa.jpg",
        type: "image",
        caption:
          "Proses auto-capture pendaftaran data biometrik wajah karyawan oleh Admin Desa menggunakan face-api.js (SSD MobileNet V1 & ResNet-34 128D) dengan 5 variasi sudut pose (lurus, tengok kiri, kanan, atas, bawah) untuk akurasi pengenalan maksimal.",
      },
      {
        src: "/images/projects/presensi-mayong/detail-presensi-dan-pelaporan-perkaryawan.png",
        type: "image",
        caption:
          "Detail log presensi harian per karyawan dilengkapi bukti foto wajah, timestamp, koordinat GPS, status kehadiran, dan ekspor laporan resmi format PDF.",
      },
      {
        src: "/images/projects/presensi-mayong/mobile-app-tampilan-halaman-presensi.jpeg",
        type: "image",
        caption:
          "Aplikasi Mobile Flutter: Tampilan beranda presensi karyawan yang menampilkan status kehadiran hari ini, jadwal kerja aktif, tombol presensi cepat, dan menu pengajuan izin/cuti.",
      },
      {
        src: "/images/projects/presensi-mayong/mobile-app-tampilan-saat-presensi.jpeg",
        type: "image",
        caption:
          "Aplikasi Mobile Flutter: Antarmuka kamera saat melakukan presensi dengan deteksi wajah Google ML Kit BlazeFace, verifikasi Euler Angles, dan pencocokan MobileFaceNet 192D yang berjalan cepat secara offline.",
      },
      {
        src: "/images/projects/presensi-mayong/mobile-app-tampilan-block-saat-terdeteksi-penggunaan-fake-gps.jpeg",
        type: "image",
        caption:
          "Aplikasi Mobile Flutter: Proteksi keamanan Anti-Fake GPS aktif — sistem langsung memblokir proses presensi saat mendeteksi Mock Location, isMocked, aplikasi spoofing lokasi, akses Root/Jailbreak, maupun emulator.",
      },
      {
        src: "/images/projects/presensi-mayong/mobile-app-tampilan-info-jadwal.jpeg",
        type: "image",
        caption:
          "Aplikasi Mobile Flutter: Tampilan informasi jadwal kerja mingguan, jam presensi masuk dan pulang yang berlaku bagi masing-masing perangkat desa.",
      },
      {
        src: "/images/projects/presensi-mayong/mobile-app-detail-hari-libur.jpeg",
        type: "image",
        caption:
          "Aplikasi Mobile Flutter: Kalender hari libur nasional dan cuti bersama resmi yang tersinkronisasi langsung dari web server kecamatan.",
      },
      {
        src: "/images/projects/presensi-mayong/mobile-app-tampilan-profil.jpeg",
        type: "image",
        caption:
          "Aplikasi Mobile Flutter: Tampilan profil karyawan desa, informasi jabatan/instansi, status sinkronisasi presensi offline, dan pengaturan akun.",
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
        src: "/images/projects/Fish Feeder/MockupFeeder.png",
        type: "image",
        caption:
          "Mockup desain alat fish feeder otomatis berkapasitas 3kg+ dengan komponen sensor berat (load cell), servo motor, dan modul ESP32 sebagai pengendali utama.",
      },
      {
        src: "/images/projects/Fish Feeder/desain-fish-feeder.png",
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
    tech: ["Laravel 12", "React.js", "Tailwind CSS", "MySQL", "Metode TOPSIS", "2FA / OTP", "RBAC Multi-Role", "UAT 22 Kepala Sekolah"],
    documents: [
      {
        title: "Sertifikat Hak Cipta (HaKI) DSS RKS",
        url: "/documents/HAKI DSS RKS.pdf",
      },
    ],
    description:
      "Website Decision Support System (DSS) untuk membantu perencanaan sekolah yang dibangun dengan database MySQL sesuai kebutuhan lingkup pendidikan. Menggunakan framework Laravel 12, library React.js, dan Tailwind CSS. Mengimplementasikan Two-Factor Authentication (2FA) dengan One-Time Password (OTP) sebagai lapisan keamanan tambahan, Role-Based Access Control (RBAC) untuk mengatur hak akses multi-role (Kepala Sekolah, Tim Pengembang, dan Stakeholder), serta metode Technique for Order Preference by Similarity to Ideal Solution (TOPSIS) untuk perangkingan rekomendasi program kerja sekolah secara objektif. Sistem telah melalui User Acceptance Test (UAT) yang dilakukan langsung oleh 22 Kepala Sekolah Dasar di Kota Semarang, Jawa Tengah, dan disempurnakan sesuai dengan hasil masukan UAT. Dapat diakses secara live di rks.dssrks.co.id.",
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
          "Dokumentasi User Acceptance Test (UAT) dan deseminasi implementasi sistem yang dilakukan langsung bersama 22 Kepala Sekolah Dasar, staf SD, dan P3K Kota Semarang, Jawa Tengah.",
      },
    ],
  },
  {
    id: "project-7",
    title: "Implementasi YOLOv8 dan Embedded System Berbasis ESP32 pada Prototipe Sistem Penargetan Militer Real-Time dengan Integrasi Aktuator Servo.",
    image: "/images/projects/object-targeting.jpg",
    category: "web",
    tech: ["YOLOv8", "ESP32 Firmware", "Python", "Flask Web App", "Aktuator Servo", "Komunikasi Serial (115200 Baud)", "Roboflow", "Voice Control"],
    description:
      "Proyek implementasi AI Computer Vision pada prototipe sistem penargetan militer real-time berbasis ESP32 dengan integrasi aktuator servo. Model deteksi objek dikembangkan menggunakan YOLOv8. Hardware prototipe dirancang berbasis mikrokontroler ESP32 yang terhubung dengan kamera, servo motor pan-tilt, dan komponen elektrikal pendukung. Firmware ESP32 dikembangkan untuk mengendalikan pergerakan aktuator servo secara presisi berdasarkan instruksi AI. Komunikasi antara AI dan mikrokontroler menggunakan protokol serial USB/COM pada baud rate 115200 untuk respon kendali real-time. Program Python dibangun sebagai penghubung antara model AI, user interface, dan sistem embedded. Dilengkapi aplikasi web berbasis Flask untuk kendali suara (voice control), pemilihan mode manual/otomatis, pengunggahan model YOLO kustom, serta konfigurasi pengaturan sistem.",
    slides: [
      {
        src: "/images/projects/object-targeting.jpg",
        type: "image",
        caption:
          "Prototipe hardware sistem penargetan militer real-time dengan modul mikrokontroler ESP32, kamera, aktuator servo motor pan-tilt, dan rangkaian elektrikal pendukung.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/diagram-alur-sistem.png",
        type: "image",
        caption:
          "Diagram alur arsitektur sistem: Integrasi model computer vision YOLOv8, penghubung Python, komunikasi serial USB/COM (115200 baud), firmware ESP32, aktuator servo, dan kontrol via web Flask.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/roboflow-plane_dataset.png",
        type: "image",
        caption:
          "Dataset pesawat yang dianotasi menggunakan Roboflow sebagai data latih model YOLOv8 untuk deteksi target militer.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/tes_result.png",
        type: "image",
        caption:
          "Hasil pengujian performa model YOLOv8 — menampilkan bounding box deteksi target secara akurat dengan confidence score tinggi.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/user-interface.png",
        type: "image",
        caption:
          "Antarmuka aplikasi web Flask untuk kontrol suara (voice control), pengalihan mode manual/otomatis, unggah model YOLO, dan monitor sistem feed kamera.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/test-redball-model.mp4",
        type: "video",
        caption:
          "Demo pengujian model computer vision mendeteksi dan mengunci target bola merah secara real-time dengan pergerakan aktuator servo mengikuti posisi objek.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/test-model_plane.mp4",
        type: "video",
        caption:
          "Demo pengujian model YOLOv8 mendeteksi objek pesawat dalam kondisi nyata dengan respon pergerakan sistem penargetan servo yang presisi.",
      },
      {
        src: "/images/projects/prototipe-sistem-penargetan/trial n error.mp4",
        type: "video",
        caption:
          "Dokumentasi proses trial & error pengembangan sistem: kalibrasi komunikasi serial baud rate 115200, tuning firmware ESP32, dan pengujian stabilitas penargetan.",
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
