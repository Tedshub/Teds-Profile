export interface ProjectSlide {
  /** path ke gambar atau video (mp4) */
  src: string;
  /** 'image' | 'video' – default 'image' jika tidak diisi */
  type?: 'image' | 'video';
  /** caption / deskripsi untuk slide ini */
  caption: string;
}

export interface ProjectDocument {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  description?: string;
  slides?: ProjectSlide[];
  demoUrl?: string;
  githubUrl?: string;
  documents?: ProjectDocument[];
  featured?: boolean;
  category?: 'web' | 'mobile' | 'system' | 'all';
  tech?: string[];
}
