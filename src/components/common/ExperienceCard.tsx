import React, { useState } from 'react';
import { Experience } from '../../types/experience';
import { Calendar, MapPin, Building2, FileText, ExternalLink, Maximize2 } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  onPreviewImage?: (imageUrl: string, title: string) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  className = '',
  onPreviewImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const safeImageUrl = experience.image ? encodeURI(experience.image) : '';

  const handleImageClick = () => {
    if (onPreviewImage && experience.image) {
      onPreviewImage(experience.image, `${experience.role} — ${experience.company}`);
    }
  };

  return (
    <div
      className={`exp-card-container ${className}`.trim()}
      style={{
        display: 'grid',
        gridTemplateColumns: experience.image ? '260px 1fr' : '1fr',
        gap: '1.75rem',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        marginBottom: '1.5rem',
        position: 'relative',
        boxShadow: isHovered
          ? '0 12px 28px rgba(0, 0, 0, 0.06), 0 0 18px rgba(255, 184, 0, 0.12)'
          : 'var(--shadow-xs)',
        borderColor: isHovered ? 'rgba(255, 184, 0, 0.5)' : 'var(--border)',
        transform: isHovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left: Thumbnail Preview */}
      {experience.image && (
        <div
          className="exp-thumbnail-wrapper"
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleImageClick();
            }
          }}
          title="Klik untuk memperbesar gambar"
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-muted)',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            aspectRatio: '16 / 10',
            alignSelf: 'start',
            boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.03)',
          }}
        >
          <img
            src={safeImageUrl}
            alt={`${experience.role} - ${experience.company}`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isHovered ? 'scale(1.06)' : 'scale(1)',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

          {/* Hover Zoom Overlay Pill */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.2s ease',
              backdropFilter: 'blur(2px)',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#ffffff',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Maximize2 size={13} style={{ color: 'var(--yellow-primary)' }} />
              Lihat Foto
            </span>
          </div>
        </div>
      )}

      {/* Right: Experience Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {/* Top Header: Role & Period Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3
              className="heading-2"
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.3,
                marginBottom: '0.35rem',
                color: 'var(--text-primary)',
              }}
            >
              {experience.role}
            </h3>

            {/* Company & Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.85rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                <Building2 size={14} style={{ color: 'var(--yellow-hover)', flexShrink: 0 }} />
                <span>{experience.company}</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                <MapPin size={13} style={{ flexShrink: 0 }} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Period Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--yellow-subtle)',
              border: '1px solid var(--yellow-border)',
              color: '#805b00',
              whiteSpace: 'nowrap',
            }}
          >
            <Calendar size={13} style={{ color: 'var(--yellow-hover)' }} />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Ringkas Description (Bullet Points) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.45rem',
            marginTop: '0.2rem',
          }}
        >
          {experience.description.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--yellow-primary)',
                  marginTop: '0.55rem',
                  flexShrink: 0,
                }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.2rem' }}>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="badge"
              style={{
                fontSize: '0.72rem',
                padding: '0.2rem 0.55rem',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Attached Certificates & Documents */}
        {experience.certificates && experience.certificates.length > 0 && (
          <div
            style={{
              marginTop: '0.5rem',
              paddingTop: '0.75rem',
              borderTop: '1px dashed var(--border)',
            }}
          >
            <p
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--text-muted)',
                marginBottom: '0.5rem',
              }}
            >
              Lampiran Sertifikat Resmi:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {experience.certificates.map((cert) => (
                <a
                  key={cert.url}
                  href={encodeURI(cert.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-cert-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--yellow-subtle)',
                    border: '1px solid var(--yellow-border)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--yellow-primary)';
                    e.currentTarget.style.borderColor = 'var(--yellow-hover)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
                    e.currentTarget.style.borderColor = 'var(--yellow-border)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <FileText size={14} style={{ color: '#805b00', flexShrink: 0 }} />
                  <span>{cert.title}</span>
                  <ExternalLink size={12} style={{ opacity: 0.65, flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-card-container {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            padding: 1.25rem !important;
          }
          .exp-thumbnail-wrapper {
            aspect-ratio: 16 / 9 !important;
            max-height: 240px;
          }
        }
      `}</style>
    </div>
  );
};
