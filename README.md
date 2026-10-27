# Ted's Portfolio (`teds-profile`)

Personal portfolio website dibangun menggunakan **React 18**, **TypeScript**, dan **Vite** dengan arsitektur modular dan komponen yang terstruktur rapi.

## 📁 Struktur Direktori

```text
teds-profile/
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile.webp
│   │   ├── projects/
│   │   │   ├── crm.webp
│   │   │   └── lms.webp
│   │   ├── certificates/
│   │   └── favicon.svg
│   │
│   ├── videos/
│   │   └── projects/
│   │       └── project-demo.mp4
│   │
│   ├── documents/
│   │   └── cv.pdf
│   │
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── illustrations/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── SocialLinks.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MainLayout.tsx
│   │   │
│   │   └── common/
│   │       ├── ProjectCard.tsx
│   │       ├── SkillBadge.tsx
│   │       └── ExperienceCard.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── pages/
│   │   └── HomePage.tsx
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experiences.ts
│   │   └── education.ts
│   │
│   ├── hooks/
│   │   └── useScrollSpy.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── project.ts
│   │   └── experience.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## 🚀 Memulai (Getting Started)

### 1. Install Dependensi
```bash
npm install
```

### 2. Jalankan Mode Pengembangan (Dev Server)
```bash
npm run dev
```
Akses di browser pada `http://localhost:5173`.

### 3. Build untuk Produksi
```bash
npm run build
```

### 4. Jalankan Linting
```bash
npm run lint
```
