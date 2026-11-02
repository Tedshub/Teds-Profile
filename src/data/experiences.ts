import { Experience } from '../types/experience';

export const experiencesData: Experience[] = [
  {
    id: "teaching-assistant",
    role: "Teaching Assistant - IoT & Data Science",
    company: "Universitas PGRI Semarang",
    period: "Jun 2025 - Jul 2026",
    location: "Semarang, Jawa Tengah, Indonesia",
    image: "/images/profile/asistensi.jpg",
    description: [
      "Membimbing mahasiswa dalam praktikum dan implementasi studi kasus terapan bidang Data Science serta Internet of Things (IoT).",
      "Mendampingi evaluasi kode pemrograman, pemahaman algoritma, dan konsultasi teknis proyek akhir praktikum.",
    ],
    technologies: ["University Teaching", "Data Science", "Internet of Things (IoT)", "Python"],
    certificates: [
      {
        title: "Sertifikat Asistensi IoT (PDF)",
        url: "/documents/asistensi_IoT.pdf",
      },
      {
        title: "Sertifikat Asistensi Data Science (PDF)",
        url: "/documents/asistensi_datascience.pdf",
      },
    ],
  },
  {
    id: "campus-digital",
    role: "Full-stack & Back End Developer (Internship)",
    company: "Campus Digital Indonesia",
    period: "Jan 2025 - Apr 2025",
    location: "Semarang, Jawa Tengah, Indonesia",
    image: "/images/profile/magang_cdi.jpeg",
    description: [
      "Mengembangkan arsitektur backend berbasis Laravel, RESTful API andal, serta optimasi query database MySQL.",
      "Membangun antarmuka manajemen bisnis yang interaktif dan responsif menggunakan React.js.",
    ],
    technologies: ["Laravel", "React.js", "PHP", "RESTful API", "MySQL", "Back-End Web Development"],
    certificates: [ 
      {
        title: "Sertifikat Magang Campus Digital Indonesia (PDF)",
        url: "/documents/Setifikat Kompetensi Junior Web Developer.pdf",
      },
    ],
  },
  {
    id: "upgris-robotic-team",
    role: "Co Head & Head of Programming Division",
    company: "UPGRIS Robotic Team",
    period: "Nov 2022 - Nov 2025 (3 thn 1 bln)",
    location: "Semarang, Jawa Tengah, Indonesia",
    image: "/images/profile/robotic.jpeg",
    description: [
      "Memimpin koordinasi organisasi, riset strategi pemrograman logika kendali, dan automasi robot kompetisi.",
      "Membina regenerasi divisi programming dalam penguasaan C++ mikrokontroler dan publikasi berkala.",
    ],
    technologies: ["Robot Programming", "C++", "Team Management", "Project Management", "Embedded Systems"],
  },
  {
    id: "kri-2024",
    role: "Team Leader — Kontes Robot Indonesia (KRI) 2024",
    company: "Robotic Team Universitas PGRI Semarang (KRI UMS)",
    period: "Jan 2024 - Jul 2024",
    location: "Surakarta, Jawa Tengah, Indonesia",
    image: "/images/profile/Sertifikat kri wilayah Tedy Firmansyah_page-0001.jpg",
    description: [
      "Memimpin perancangan, wiring kelistrikan, dan pemrograman robot otonom KRTMI pada kompetisi nasional KRI 2024.",
      "Mengimplementasikan algoritma navigasi mikrokontroler C/C++ dan deteksi objek presisi untuk penyelesaian misi.",
    ],
    technologies: ["C/C++", "Robotic Design", "Object Detection", "Electrical Control", "Autonomous Navigation"],
    certificates: [
      {
        title: "Sertifikat KRI Wilayah 2024 (PDF)",
        url: "/documents/Sertifikat kri wilayah Tedy Firmansyah.pdf",
      },
    ],
  },
  {
    id: "pkm-ki-2023",
    role: "Team Leader — Program Kreativitas Mahasiswa (PKM-KI)",
    company: "Kampus Merdeka / Kemendikbudristek",
    period: "Jun 2023 - Nov 2023",
    location: "Semarang & Jakarta, Indonesia",
    image: "/images/profile/TEDY FIRMANSYAH_22670133_PKMKI_4772_page-0001.jpg",
    description: [
      "Memimpin riset dan fabrikasi inovasi prototipe IoT 'SABUK SEJAK' (Ikat Pinggang Sensor Jarak Audiosonik).",
      "Mengintegrasikan sensor ultrasonik, modul audiosonik, dan mikrokontroler IoT untuk sistem proteksi anak real-time.",
    ],
    technologies: ["Internet of Things (IoT)", "Arduino / ESP32", "Hardware Prototyping", "Sensor Integration", "Leadership"],
    certificates: [
      {
        title: "Sertifikat Pendanaan PKM-KI (PDF)",
        url: "/documents/TEDY FIRMANSYAH_22670133_PKMKI_4772.pdf",
      },
    ],
  },
  {
    id: "fiverr-freelance",
    role: "Graphic Artist (Freelance)",
    company: "Fiverr",
    period: "Sep 2021 - Jun 2024 (2 thn 10 bln)",
    location: "Indonesia (Remote Global)",
    image: "/images/profile/grapic_artist.jpg",
    description: [
      "Menyelesaikan 300+ pesanan ilustrasi digital dan desain visual kustom untuk klien internasional dengan rating kepuasan prima.",
      "Mengelola komunikasi kebutuhan desain, manajemen tenggat proyek, dan aset grafis berkualitas tinggi.",
    ],
    technologies: ["Graphic Arts", "Digital Illustration", "Visual Design", "Creative Communication"],
  },
];
