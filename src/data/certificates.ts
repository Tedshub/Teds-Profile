import { Certificate } from '../types/certificate';

export const certificatesData: Certificate[] = [
  // 1. Sertifikasi Kompetensi BNSP (Dalam Proses Penerbitan) - Paling Pertama
  {
    id: 'cert-bnsp',
    title: 'Sertifikasi Kompetensi BNSP — Junior Web Programmer (JWP)',
    category: 'Sertifikasi Profesi Nasional',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) / LSP Teknologi Digital',
    year: '2026',
    status: 'Dalam Proses Penerbitan',
    type: 'technical',
    description: 'Standar kompetensi kerja nasional Republik Indonesia untuk keahlian rekayasa web dan pengembangan perangkat lunak profesional.',
    tags: ['BNSP', 'LSP', 'Junior Web Developer', 'Standar Nasional'],
  },
  // 2. Asistensi Akademik - Internet of Things (IoT)
  {
    id: 'cert-asistensi-iot',
    title: 'Sertifikat Asisten Dosen Internet of Things (IoT)',
    category: 'Asistensi Akademik',
    issuer: 'Universitas PGRI Semarang',
    year: '2026',
    fileUrl: '/documents/asistensi_IoT.pdf',
    type: 'technical',
    description: 'Sertifikat dan surat keputusan resmi sebagai asisten pengajar universitas pada bimbingan praktikum Internet of Things (IoT).',
    tags: ['Teaching Assistant', 'IoT', 'Hardware & Sensor', 'UPGRIS'],
  },
  // 3. Asistensi Akademik - Data Science
  {
    id: 'cert-asistensi-datascience',
    title: 'Sertifikat Asisten Dosen Data Science',
    category: 'Asistensi Akademik',
    issuer: 'Universitas PGRI Semarang',
    year: '2026',
    fileUrl: '/documents/asistensi_datascience.pdf',
    type: 'technical',
    description: 'Sertifikat resmi asisten pengajar universitas untuk pendampingan materi, studi kasus komputasi data, dan bimbingan praktikum Data Science.',
    tags: ['Teaching Assistant', 'Data Science', 'Python', 'UPGRIS'],
  },
  // 4. Sertifikasi Teknis Magang
  {
    id: 'cert-jwd',
    title: 'Sertifikat Kompetensi Junior Web Developer',
    category: 'Sertifikasi Kompetensi Teknis',
    issuer: 'PT. Campus Digital Indonesia',
    year: '2025',
    fileUrl: '/documents/Setifikat Kompetensi Junior Web Developer.pdf',
    type: 'technical',
    description: 'Standar kompetensi kerja nasional bidang rekayasa perangkat lunak dan pemrograman web profesional.',
    tags: ['Web Development', 'Kompetensi Teknis', 'Full Stack', 'Laravel & React'],
  },
  // 5. Kompetisi Robotika & IoT Teknis
  {
    id: 'cert-kri',
    title: 'Sertifikat Kontes Robot Indonesia (KRI) Wilayah',
    category: 'Kompetisi Robotika & Embedded Systems',
    issuer: 'Balai Pengembangan Talenta Indonesia (BPTI) / Puspresnas Kemendikbudristek',
    year: '2024',
    fileUrl: '/documents/Sertifikat kri wilayah Tedy Firmansyah.pdf',
    type: 'competition',
    description: 'Penghargaan kompetisi robotika bergengsi tingkat nasional di bidang otomasi, mikrokontroler, dan perancangan robot.',
    tags: ['Robotika', 'IoT', 'Embedded Systems', 'KRI Nasional'],
  },
  // 6. Riset & Inovasi Teknologi
  {
    id: 'cert-pkmki',
    title: 'Program Kreativitas Mahasiswa Karsa Cipta (PKM-KI)',
    category: 'Inovasi & Riset Teknologi Terapan',
    issuer: 'Direktorat Pembelajaran & Kemahasiswaan (Belmawa) Kemendikbudristek',
    year: '2023',
    fileUrl: '/documents/TEDY FIRMANSYAH_22670133_PKMKI_4772.pdf',
    type: 'research',
    description: 'Pendanaan dan apresiasi karya cipta teknologi solutif berbasis riset dan perekayasaan sistem cerdas.',
    tags: ['Riset Teknologi', 'Inovasi Cipta', 'Kemendikbudristek', 'Smart System'],
  },
  // 7. Hak Cipta (HaKI) Teknis - DSS RKS
  {
    id: 'haki-dss',
    title: 'Surat Pencatatan Hak Cipta: DSS RKS',
    category: 'Hak Kekayaan Intelektual (HaKI)',
    issuer: 'Kementerian Hukum dan HAM Republik Indonesia (DJKI)',
    year: '2025',
    fileUrl: '/documents/HAKI DSS RKS.pdf',
    type: 'haki',
    description: 'Sertifikat resmi perlindungan ciptaan program komputer berupa Decision Support System berbasis web.',
    tags: ['HaKI', 'Program Komputer', 'Kemenkumham RI', 'DSS'],
  },
  // 8. Hak Cipta (HaKI) Teknis - Siramdas
  {
    id: 'haki-siramdas',
    title: 'Surat Pencatatan Hak Cipta: Siramdas (Penyiraman Cerdas IoT)',
    category: 'Hak Kekayaan Intelektual (HaKI)',
    issuer: 'Kementerian Hukum dan HAM Republik Indonesia (DJKI)',
    year: '2024',
    fileUrl: '/documents/HaKI Siramdas.pdf',
    type: 'haki',
    description: 'Pencatatan hak cipta sistem penyiraman otomatis berbasis sensor dan Internet of Things.',
    tags: ['HaKI', 'IoT Hardware & Software', 'Kemenkumham RI', 'Smart Farming'],
  },
  // 9. Hak Cipta (HaKI) - Simankole
  {
    id: 'haki-simankole',
    title: 'Surat Pencatatan Hak Cipta: Simankole',
    category: 'Hak Kekayaan Intelektual (HaKI)',
    issuer: 'Kementerian Hukum dan HAM Republik Indonesia (DJKI)',
    year: '2024',
    fileUrl: '/documents/HaKI Simankole.pdf',
    type: 'haki',
    description: 'Pencatatan hak cipta perangkat lunak manajemen operasional dan keuangan terintegrasi.',
    tags: ['HaKI', 'Sistem Informasi', 'Kemenkumham RI', 'Web Application'],
  },
  // 10. Hak Cipta (HaKI) - PKM KI
  {
    id: 'haki-pkmki',
    title: 'Surat Pencatatan Hak Cipta: Karya Inovasi PKM-KI',
    category: 'Hak Kekayaan Intelektual (HaKI)',
    issuer: 'Kementerian Hukum dan HAM Republik Indonesia (DJKI)',
    year: '2025',
    fileUrl: '/documents/HaKI PKM KI.pdf',
    type: 'haki',
    description: 'Perlindungan hak cipta karya intelektual hasil inovasi program karsa cipta mahasiswa.',
    tags: ['HaKI', 'Karya Cipta', 'Kemenkumham RI', 'Inovasi'],
  },
];
