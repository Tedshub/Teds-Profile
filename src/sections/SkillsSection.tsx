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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '2.5rem',
          }}
        >
          {skillsData.map((category, catIdx) => (
            <div key={category.category} className={`reveal delay-${(catIdx + 1) * 100}`}>
              <h3
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
      </Container>
    </section>
  );
};
