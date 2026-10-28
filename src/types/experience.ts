export interface ExperienceCertificate {
  title: string;
  url: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  image?: string;
  certificates?: ExperienceCertificate[];
}

export interface EducationCertificate {
  title: string;
  url?: string;
  status?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  description?: string;
  gpa?: string;
  image?: string;
  certificates?: EducationCertificate[];
}
