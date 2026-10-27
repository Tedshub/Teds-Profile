import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { educationData } from '../data/education';
import { Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section section-alt">
      <Container>
        <SectionHeading
          label="Pendidikan"
          title="Latar Belakang Akademis"
          align="left"
        />

        <div style={{ maxWidth: '820px' }}>
          {educationData.map((edu, i) => (
            <div
              key={edu.id}
              className={`edu-row-grid reveal delay-${(i + 1) * 150}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '2rem',
                padding: '2rem 1rem',
                borderBottom: '1px solid var(--border)',
                borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                borderLeft: '3px solid transparent',
                transition: 'all 0.22s ease',
                borderRadius: '0 8px 8px 0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = 'var(--yellow-primary)';
                e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {/* Left: Period */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.45rem',
                  paddingTop: '0.15rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                }}
              >
                <Calendar size={14} style={{ color: 'var(--yellow-hover)', marginTop: '2px', flexShrink: 0 }} />
                <span>{edu.period}</span>
              </div>

              {/* Right: Content */}
              <div>
                <h3 className="heading-2" style={{ marginBottom: '0.2rem' }}>{edu.degree}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  {edu.institution}
                </p>

                {edu.description && (
                  <p className="body" style={{ marginBottom: '0.85rem' }}>{edu.description}</p>
                )}

                {edu.gpa && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'var(--yellow-subtle)',
                      border: '1px solid var(--yellow-border)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <span className="label" style={{ color: '#805b00' }}>IPK</span>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f0f0f' }}>
                      {edu.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 680px) {
            .edu-row-grid {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
              padding: 1.5rem 0 !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
};
