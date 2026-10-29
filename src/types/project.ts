export interface Project {
  id: string;
  title: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: 'web' | 'mobile' | 'system' | 'all';
}
