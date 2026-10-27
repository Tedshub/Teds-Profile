import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { profileData } from '../data/profile';

const stats = [
  { value: '3.89', label: 'IPK Kelulusan' },
  { value: 'S1',   label: 'Teknik Informatika' },
  { value: '2026', label: 'Angkatan Wisuda' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section section-alt">
      <Container>
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <SectionHeading
              label="Tentang Saya"
              title="Latar Belakang & Visi"
              align="left"
            />
            <p className="body-lg reveal delay-100">{profileData.bio}</p>
          </div>

          {/* Right: Stats */}
          <div
            className="about-stats"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              paddingTop: '5.5rem',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '1.25rem 0.5rem',
                  borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                  borderBottom: '1px solid var(--border)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
                  e.currentTarget.style.borderBottomColor = 'var(--yellow-primary)';
                  e.currentTarget.style.paddingLeft = '0.75rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderBottomColor = 'var(--border)';
                  e.currentTarget.style.paddingLeft = '0.5rem';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {stat.value}
                  </span>
                  {stat.value === '3.89' && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--yellow-subtle)',
                        color: '#805b00',
                        border: '1px solid var(--yellow-border)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      Cumlaude
                    </span>
                  )}
                </div>
                <span className="body" style={{ fontSize: '0.85rem' }}>
                  {stat.label}
                </span>
              </div>
            ))}

            <div className="reveal delay-400" style={{ marginTop: '1.5rem', paddingLeft: '0.5rem' }}>
              <p className="label" style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--yellow-primary)',
                  }}
                />
                Universitas
              </p>
              <p
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                Universitas PGRI Semarang
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 868px) {
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
            .about-stats {
              padding-top: 0 !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
};
