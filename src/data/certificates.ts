import { Certificate } from '../types/certificate';

export const certificatesData: Certificate[] = [
  // 1. Sertifikasi Teknis Utama
  {
    id: 'cert-jwd',
    title: 'Sertifikat Kompetensi Junior Web Developer',
    category: 'Sertifikasi Kompetensi Teknis',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) / LSP Informatika',
    year: '2024',
    fileUrl: '/documents/Setifikat Kompetensi Junior Web Developer.pdf',
    type: 'technical',
    description: 'Standar kompetensi kerja nasional bidang rekayasa perangkat lunak dan pemrograman web profesional.',
    tags: ['Web Development', 'BNSP', 'Kompetensi Teknis', 'Full Stack'],
  },
  // 2. Kompetisi Robotika & IoT Teknis
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
  // 3. Riset & Inovasi Teknologi
  {
    id: 'cert-pkmki',
    title: 'Program Kreativitas Mahasiswa Karsa Cipta (PKM-KI)',
    category: 'Inovasi & Riset Teknologi Terapan',
    issuer: 'Direktorat Pembelajaran & Kemahasiswaan (Belmawa) Kemendikbudristek',
    year: '2024',
    fileUrl: '/documents/TEDY FIRMANSYAH_22670133_PKMKI_4772.pdf',
    type: 'research',
    description: 'Pendanaan dan apresiasi karya cipta teknologi solutif berbasis riset dan perekayasaan sistem cerdas.',
    tags: ['Riset Teknologi', 'Inovasi Cipta', 'Kemendikbudristek', 'Smart System'],
  },
  // 4. Hak Cipta (HaKI) Teknis - DSS RKS
  {
    id: 'haki-dss',
    title: 'Surat Pencatatan Hak Cipta: DSS RKS',
    category: 'Hak Kekayaan Intelektual (HaKI)',
    issuer: 'Kementerian Hukum dan HAM Republik Indonesia (DJKI)',
    year: '2024',
    fileUrl: '/documents/HAKI DSS RKS.pdf',
    type: 'haki',
    description: 'Sertifikat resmi perlindungan ciptaan program komputer berupa Decision Support System berbasis web.',
    tags: ['HaKI', 'Program Komputer', 'Kemenkumham RI', 'DSS'],
  },
  // 5. Hak Cipta (HaKI) Teknis - Siramdas
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
  // 6. Hak Cipta (HaKI) - Simankole
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
  // 7. Hak Cipta (HaKI) - PKM KI
  {
    id: 'haki-pkmki',
    title: 'Surat Pencatatan Hak Cipta: Karya Inovasi PKM-KI',
    category: 'Hak Kekayaan Intelektual (HaKI)',
    issuer: 'Kementerian Hukum dan HAM Republik Indonesia (DJKI)',
    year: '2024',
    fileUrl: '/documents/HaKI PKM KI.pdf',
    type: 'haki',
    description: 'Perlindungan hak cipta karya intelektual hasil inovasi program karsa cipta mahasiswa.',
    tags: ['HaKI', 'Karya Cipta', 'Kemenkumham RI', 'Inovasi'],
  },
];
