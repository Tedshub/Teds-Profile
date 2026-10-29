import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { ProjectCard } from '../components/common/ProjectCard';
import { projectsData } from '../data/projects';
import { LayoutGrid, ArrowRight, ChevronUp } from 'lucide-react';

// Batas tampil awal per breakpoint (dikontrol JS)
const MOBILE_LIMIT = 2;
const TABLET_LIMIT = 4;

function useWindowWidth() {
  const [width, setWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  React.useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

export const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const width = useWindowWidth();
  const total = projectsData.length;

  // Tentukan berapa card yang ditampilkan
  const isDesktop = width >= 1024;
  const isMobile  = width < 640;
  const visibleLimit = isDesktop ? total : isMobile ? MOBILE_LIMIT : TABLET_LIMIT;
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, visibleLimit);
  const hasMore = !showAll && visibleProjects.length < total;

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

        {/* Projects Grid */}
        <div className="projects-grid">
          {visibleProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={`reveal delay-${Math.min((idx % 4 + 1) * 100, 400)}`}
            />
          ))}
        </div>

        {/* Tombol Lihat Semua / Tutup */}
        {!isDesktop && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            {hasMore ? (
              <button
                onClick={() => setShowAll(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.7rem 1.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--yellow-primary)';
                  e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
                  e.currentTarget.style.color = '#805b00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.backgroundColor = 'var(--bg)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <span>Lihat Semua Proyek</span>
                <ArrowRight size={16} />
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '22px',
                    height: '22px',
                    padding: '0 5px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--yellow-primary)',
                    color: '#0f0f0f',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                  }}
                >
                  {total}
                </span>
              </button>
            ) : showAll ? (
              <button
                onClick={() => setShowAll(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.5rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-strong)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-muted)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.backgroundColor = 'var(--bg)';
                }}
              >
                <ChevronUp size={16} />
                <span>Tampilkan Lebih Sedikit</span>
              </button>
            ) : null}
          </div>
        )}
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
