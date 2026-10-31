export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  availability: string;
  avatarUrl: string;
  cvUrl: string;
  socials: SocialLink[];
}

export const profileData: Profile = {
  name: "Tedy Firmansyah",
  role: "Junior Full Stack Web Developer, IoT & Computer Vision Engineer",
  tagline: "Membangun aplikasi web, solusi IoT, dan sistem Computer Vision yang andal, efisien, dan berdampak nyata.",
  bio: "Fresh Graduate Universitas PGRI Semarang dengan minat dan keahlian dalam Web Development menggunakan framework Laravel dan library React.js, serta Artificial Intelligence, Internet of Things (IoT), Robotika, dan Embedded Systems. Memiliki pengalaman mengembangkan berbagai proyek berbasis web, AI, IoT, robotika, dan firmware melalui studi maupun proyek praktis. Berpengalaman sebagai Asisten Dosen selama satu tahun pada mata kuliah IoT dan Data Science. Adaptif terhadap teknologi baru, memiliki kemampuan belajar yang baik, serta berkomitmen untuk terus mengembangkan kompetensi dan memberikan kontribusi di lingkungan profesional.",
  email: "tedysyhh07@gmail.com",
  location: "Semarang, Indonesia",
  availability: "Fresh Graduate — Aktif Mencari Peluang Kerja",
  avatarUrl: "/images/profile/profile.webp",
  cvUrl: "/documents/cv.pdf",
  socials: [
    { platform: "GitHub", url: "https://github.com/Tedshub", iconName: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/tedy-firmansyah-305ab5340/", iconName: "Linkedin" },
    { platform: "Email", url: "mailto:tedysyhh07@gmail.com?subject=Halo%20Tedy%20%E2%80%94%20Tanya%20Proyek%20%2F%20Kolaborasi", iconName: "Mail" },
  ],
};
