import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/common/ProjectCard';
import { projectsData } from '../data/projects';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section section-alt">
      <Container>
        <SectionHeading
          label="Portofolio"
          title="Proyek Pilihan"
          subtitle="Beberapa proyek yang menggambarkan pendekatan dan kemampuan saya."
          align="left"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: '1.5rem',
          }}
        >
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={`reveal delay-${Math.min((idx + 1) * 150, 600)}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
