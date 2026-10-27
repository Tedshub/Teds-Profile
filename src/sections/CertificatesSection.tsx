import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CertificateCard } from '../components/common/CertificateCard';
import { certificatesData } from '../data/certificates';

export const CertificatesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'haki'>('all');

  const filteredCertificates = certificatesData.filter((cert) => {
    if (filter === 'technical') return cert.type !== 'haki';
    if (filter === 'haki') return cert.type === 'haki';
    return true;
  });

  return (
    <section id="certificates" className="section">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <SectionHeading
              label="Sertifikasi & Legalitas"
              title="Sertifikat & Hak Cipta"
              subtitle="Dokumentasi resmi kompetensi teknis, prestasi kompetisi, dan pencatatan Hak Cipta (HaKI)."
              align="left"
            />
          </div>

          {/* Filter Pills */}
          <div
            className="reveal delay-100"
            style={{
              display: 'flex',
              gap: '0.5rem',
              backgroundColor: 'var(--bg-muted)',
              padding: '0.3rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              marginBottom: '3.5rem',
            }}
          >
            <button
              onClick={() => setFilter('all')}
              style={{
                border: 'none',
                background: filter === 'all' ? '#000000' : 'transparent',
                color: filter === 'all' ? '#ffffff' : 'var(--text-secondary)',
                padding: '0.45rem 0.9rem',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Semua ({certificatesData.length})
            </button>
            <button
              onClick={() => setFilter('technical')}
              style={{
                border: 'none',
                background: filter === 'technical' ? '#000000' : 'transparent',
                color: filter === 'technical' ? '#ffffff' : 'var(--text-secondary)',
                padding: '0.45rem 0.9rem',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Teknis & Lomba
            </button>
            <button
              onClick={() => setFilter('haki')}
              style={{
                border: 'none',
                background: filter === 'haki' ? '#000000' : 'transparent',
                color: filter === 'haki' ? '#ffffff' : 'var(--text-secondary)',
                padding: '0.45rem 0.9rem',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              HaKI (Kemenkumham)
            </button>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredCertificates.map((cert, idx) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              className={`reveal delay-${Math.min((idx + 1) * 100, 600)}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
