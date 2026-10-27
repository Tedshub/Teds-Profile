export interface Certificate {
  id: string;
  title: string;
  category: string;
  issuer: string;
  year: string;
  fileUrl: string;
  type: 'technical' | 'competition' | 'research' | 'haki';
  description: string;
  tags: string[];
}
