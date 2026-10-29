import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SkillBadge } from '../components/common/SkillBadge';
import { skillsData } from '../data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <Container>
        <SectionHeading
          label="Tech Stack"
          title="Keahlian & Teknologi"
          subtitle="Tools dan teknologi yang saya gunakan sehari-hari dalam pengembangan."
          align="left"
        />

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '2.5rem',
          }}
        >
          {skillsData.map((category, catIdx) => (
            <div
              key={category.category}
              className={`skills-category-group reveal delay-${(catIdx + 1) * 100}`}
            >
              <div className="skills-category-header">
                <h3
                  className="skills-category-title"
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {category.category}
                </h3>
                <span className="skills-count-badge">
                  {category.items.length}
                </span>
              </div>

              <div
                className="skills-items-list"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                {category.items.map((skill, itemIdx) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    className={`reveal delay-${Math.min((catIdx * 100) + ((itemIdx + 1) * 50), 600)}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .skills-category-header {
            display: flex;
            align-items: center;
            justifyContent: space-between;
          }
          .skills-count-badge {
            display: none;
          }

          /* Tampilan Ringkas di Mobile (< 768px) */
          @media (max-width: 767px) {
            .skills-grid {
              gap: 1.15rem !important;
            }

            .skills-category-group {
              background-color: var(--bg-subtle);
              border: 1px solid var(--border);
              border-radius: var(--radius-lg);
              padding: 1.1rem 1.15rem;
            }

            .skills-category-header {
              margin-bottom: 0.85rem;
              padding-bottom: 0.55rem;
              border-bottom: 1px solid var(--border);
            }

            .skills-category-title {
              margin-bottom: 0 !important;
              padding-bottom: 0 !important;
              border-bottom: none !important;
              color: var(--text-primary) !important;
              font-size: 0.82rem !important;
            }

            .skills-count-badge {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 0.72rem;
              font-weight: 700;
              padding: 0.15rem 0.5rem;
              border-radius: 999px;
              background-color: var(--yellow-subtle);
              border: 1px solid var(--yellow-border);
              color: #805b00;
            }

            /* Ubah list vertikal memanjang menjadi horizontal chip wrap ringkas */
            .skills-items-list {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: wrap !important;
              gap: 0.45rem !important;
            }

            .skill-badge-item {
              display: inline-flex !important;
              align-items: center !important;
              padding: 0.38rem 0.75rem !important;
              border-radius: 9999px !important;
              background-color: #ffffff !important;
              border: 1px solid var(--border) !important;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
            }

            .skill-badge-item span {
              font-size: 0.8rem !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
};
