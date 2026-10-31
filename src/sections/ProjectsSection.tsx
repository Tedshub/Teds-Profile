import React from 'react';
import { Container } from '../components/ui/Container';
import { ProjectCard } from '../components/common/ProjectCard';
import { projectsData } from '../data/projects';
import { LayoutGrid } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const total = projectsData.length;

  return (
    <section id="projects" className="section section-alt">
      <Container>
        {/* Heading dengan badge jumlah */}
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p
            className="label"
            style={{
              marginBottom: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--yellow-primary)',
              }}
            />
            Portofolio
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 className="heading-1" style={{ marginBottom: 0 }}>
              Proyek Pilihan
            </h2>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.82rem',
                fontWeight: 800,
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--yellow-subtle)',
                border: '1px solid var(--yellow-border)',
                color: '#805b00',
              }}
            >
              <LayoutGrid size={14} style={{ color: 'var(--yellow-hover)' }} />
              {total} Proyek
            </span>
          </div>

          <p className="body-lg" style={{ marginTop: '0.75rem' }}>
            Kumpulan Proyek Website, Internet of Things (IoT) dan Computer Vision (CV).
          </p>
        </div>

        {/* Projects Grid — Menampilkan seluruh card proyek di semua ukuran layar */}
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={`reveal delay-${Math.min((idx % 4 + 1) * 100, 400)}`}
            />
          ))}
        </div>
      </Container>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1023px) and (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }
        @media (max-width: 639px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
