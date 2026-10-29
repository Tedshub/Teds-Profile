import React, { useState } from 'react';
import { Project } from '../../types/project';
import { ExternalLink, Expand, FileText } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const ProjectCard: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = '',
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const titleFontSize =
    project.title.length > 120
      ? '0.72rem'
      : project.title.length > 90
      ? '0.8rem'
      : project.title.length > 60
      ? '0.88rem'
      : '1rem';

  return (
    <>
      <div
        className={`card ${className}`.trim()}
        style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Lihat detail proyek: ${project.title}`}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalOpen(true); }}
      >
        {/* Image */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: 'var(--bg-muted)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />

          {/* Hover overlay hint */}
          <div
            className="card-hover-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.25s ease',
            }}
          >
            <span
              className="card-expand-icon"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--yellow-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transform: 'scale(0.7)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
            >
              <Expand size={18} color="#0f0f0f" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '0.75rem',
            minHeight: '9rem',
          }}
        >
          <h3
            style={{
              fontSize: titleFontSize,
              fontWeight: 700,
              lineHeight: 1.45,
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            {project.title}
          </h3>

          {/* Links & Aksi */}
          <div
            style={{
              display: 'flex',
              gap: '0.85rem',
              paddingTop: '0.65rem',
              borderTop: '1px solid var(--border)',
              marginTop: 'auto',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
            /* prevent card click from firing duplicate events */
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Ringkasan Proyek */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label={`Buka ringkasan proyek ${project.title}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.83rem',
                fontWeight: 600,
                color: 'var(--yellow-hover)',
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#805b00';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--yellow-hover)';
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              <FileText size={14} />
              Ringkasan Proyek
            </button>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.83rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--yellow-hover)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.83rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                       0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                       -.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832
                       .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                       -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
                       c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
                       .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
                       0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017
                       C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                Repository
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <ProjectModal
          project={project}
          onClose={() => setModalOpen(false)}
        />
      )}

      <style>{`
        .card:hover .card-hover-overlay {
          background-color: rgba(0,0,0,0.28) !important;
        }
        .card:hover .card-expand-icon {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        .card:hover .project-image {
          transform: scale(1.04);
        }
      `}</style>
    </>
  );
};
