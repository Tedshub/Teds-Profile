import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ExperienceCard } from '../components/common/ExperienceCard';
import { experiencesData } from '../data/experiences';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <Container>
        <SectionHeading
          label="Karier"
          title="Pengalaman Profesional"
          align="left"
        />

        <div style={{ maxWidth: '820px' }}>
          {experiencesData.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              className={`reveal delay-${Math.min((idx + 1) * 150, 600)}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
