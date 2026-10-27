import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "crm-dashboard",
    title: "Enterprise CRM Platform",
    description: "Sistem manajemen relasi pelanggan berbasis web dengan visualisasi analitik real-time, manajemen leads, dan integrasi automated email campaign.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/images/projects/crm.webp",
    demoUrl: "https://example.com/demo-crm",
    githubUrl: "https://github.com/example/crm",
    featured: true,
    category: "web",
  },
  {
    id: "lms-portal",
    title: "Interactive LMS Portal",
    description: "Platform pembelajaran daring interaktif dengan modul video streaming, kuis otomatis, forum diskusi interaktif, serta sertifikat digital otomatis.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "/images/projects/lms.webp",
    demoUrl: "https://example.com/demo-lms",
    githubUrl: "https://github.com/example/lms",
    featured: true,
    category: "web",
  },
];
