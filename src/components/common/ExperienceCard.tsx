import React from 'react';
import { Experience } from '../../types/experience';
import { Calendar, MapPin } from 'lucide-react';

export const ExperienceCard: React.FC<{ experience: Experience; className?: string }> = ({
  experience,
  className = '',
}) => {
  return (
    <div
      className={`exp-card-grid ${className}`.trim()}
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '2rem',
        padding: '2rem 1rem',
        borderBottom: '1px solid var(--border)',
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
      {/* Left: Meta */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.15rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            fontWeight: 600,
          }}
        >
          <Calendar size={14} style={{ color: 'var(--yellow-hover)', flexShrink: 0 }} />
          <span>{experience.period}</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <MapPin size={13} />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Right: Content */}
      <div>
        <h3 className="heading-2" style={{ marginBottom: '0.2rem' }}>
          {experience.role}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
          }}
        >
          {experience.company}
        </p>

        <ul
          style={{
            paddingLeft: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            marginBottom: '1.25rem',
          }}
        >
          {experience.description.map((item, i) => (
            <li key={i} className="body">
              {item}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {experience.technologies.map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .exp-card-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
            padding: 1.5rem 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
