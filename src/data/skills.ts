export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Bahasa Pemrograman",
    items: [
      { name: "SQL" },
      { name: "Javascript" },
      { name: "PHP" },
      { name: "C++" },
      { name: "Python" },
    ],
  },
  {
    category: "Framework & Library",
    items: [
      { name: "Laravel" },
      { name: "React.js" },
      { name: "Flask" },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MySQL" },
      { name: "Jira" },
      { name: "Visual Studio Code" },
      { name: "Laragon" },
      { name: "Postman" },
      { name: "Google Colab" },
      { name: "Arduino IDE" },
      { name: "Roboflow" },
      { name: "Git" },
    ],
  },
];
