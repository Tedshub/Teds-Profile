export interface Certificate {
  id: string;
  title: string;
  category: string;
  issuer: string;
  year: string;
  fileUrl?: string;
  status?: string;
  type: 'technical' | 'competition' | 'research' | 'haki';
  description: string;
  tags: string[];
}
