import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { educationData } from '../data/education';
import {
  Calendar,
  GraduationCap,
  MapPin,
  Award,
  Maximize2,
  X,
  ZoomIn,
  ExternalLink,
} from 'lucide-react';
import { getImageUrl } from '../utils/assets';
import { useModalBackHandler } from '../hooks/useModalBackHandler';

interface PreviewState {
  isOpen: boolean;
  imageUrl: string;
  title: string;
}

export const EducationSection: React.FC = () => {
  const [preview, setPreview] = useState<PreviewState>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  const handleOpenPreview = (imageUrl: string, title: string) => {
    setPreview({
      isOpen: true,
      imageUrl: getImageUrl(imageUrl), // resolve BASE_URL di sini
      title,
    });
  };

  const handleClosePreview = () => {
    setPreview((prev) => ({ ...prev, isOpen: false }));
  };

  // Dukungan tombol Back perangkat / browser mobile untuk menutup preview foto
  useModalBackHandler(preview.isOpen, handleClosePreview);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && preview.isOpen) {
        handleClosePreview();
      }
    };

    if (preview.isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [preview.isOpen]);

  return (
    <section id="education" className="section section-alt">
      <Container>
        <SectionHeading
          label="Pendidikan"
          title="Latar Belakang Akademis"
          subtitle="Pendidikan formal, fokus keilmuan rekayasa perangkat lunak, dan prestasi akademik."
          align="left"
        />

        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className={`edu-card-container reveal delay-${(idx + 1) * 150}`}
              style={{
                display: 'grid',
                gridTemplateColumns: edu.image ? '260px 1fr' : '1fr',
                gap: '2rem',
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg)',
                boxShadow: 'var(--shadow-xs)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
              }}
            >
              {/* Left: Graduation Photo */}
              {edu.image && (
                <div
                  className="edu-photo-wrapper"
                  onClick={() =>
                    handleOpenPreview(
                      edu.image!,
                      `${edu.degree} — ${edu.institution}`
                    )
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenPreview(
                        edu.image!,
                        `${edu.degree} — ${edu.institution}`
                      );
                    }
                  }}
                  title="Klik untuk memperbesar foto kelulusan"
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-muted)',
                    border: '1px solid var(--border)',
                    cursor: 'pointer',
                    aspectRatio: '3 / 4',
                    maxHeight: '360px',
                    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.04)',
                    alignSelf: 'start',
                  }}
                >
                  <img
                    src={getImageUrl(edu.image)}
                    alt={`${edu.degree} - ${edu.institution}`}
                    loading="lazy"
                    className="edu-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 18%',
                      display: 'block',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="edu-photo-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                    >
                      <Maximize2 size={13} style={{ color: 'var(--yellow-primary)' }} />
                      Lihat Foto
                    </span>
                  </div>
                </div>
              )}

              {/* Right: Academic Information */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {/* Degree & Badges */}
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
                        fontSize: '1.25rem',
                        lineHeight: 1.3,
                        marginBottom: '0.35rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {edu.degree}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.85rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontWeight: 600,
                        }}
                      >
                        <GraduationCap
                          size={16}
                          style={{ color: 'var(--yellow-hover)', flexShrink: 0 }}
                        />
                        <span>{edu.institution}</span>
                      </div>

                      {edu.location && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <MapPin size={13} style={{ flexShrink: 0 }} />
                          <span>{edu.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Period & GPA Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--bg-muted)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Calendar size={13} style={{ color: 'var(--yellow-hover)' }} />
                      <span>{edu.period}</span>
                    </div>

                    {edu.gpa && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--yellow-subtle)',
                          border: '1px solid var(--yellow-border)',
                          color: '#805b00',
                        }}
                      >
                        <Award size={13} style={{ color: 'var(--yellow-hover)' }} />
                        <span>IPK {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {edu.description && (
                  <p
                    className="body"
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {edu.description}
                  </p>
                )}

                {/* Specialization Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {[
                    'Rekayasa Perangkat Lunak',
                    'Web Development (Laravel & React.js)',
                    'Internet of Things (IoT)',
                    'Data Science',
                    'Robotika & Embedded Systems',
                  ].map((spec) => (
                    <span
                      key={spec}
                      className="badge"
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.55rem',
                        backgroundColor: 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graduation Photo Lightbox Modal */}
        {preview.isOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '1.25rem',
              animation: 'fadeIn 0.2s ease-out',
            }}
            onClick={handleClosePreview}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#141414',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow:
                  '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 24px rgba(255, 184, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#1b1b1b',
                  color: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <ZoomIn size={16} style={{ color: 'var(--yellow-primary)' }} />
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      maxWidth: '480px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {preview.title}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <a
                    href={preview.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buka foto di tab baru"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.78rem',
                      color: 'var(--yellow-primary)',
                      backgroundColor: 'rgba(255, 184, 0, 0.12)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 184, 0, 0.24)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 184, 0, 0.12)';
                    }}
                  >
                    <span>Tab Baru</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={handleClosePreview}
                    aria-label="Tutup preview foto"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      color: '#ffffff',
                      cursor: 'pointer',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Body */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.25rem',
                  backgroundColor: '#0a0a0a',
                  overflow: 'auto',
                }}
              >
                <img
                  src={preview.imageUrl}
                  alt={preview.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '75vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <style>{`
          .edu-photo-wrapper:hover .edu-img {
            transform: scale(1.05);
          }
          .edu-photo-wrapper:hover .edu-photo-overlay {
            opacity: 1 !important;
          }
          .edu-card-container:hover {
            border-color: rgba(255, 184, 0, 0.45) !important;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06), 0 0 18px rgba(255, 184, 0, 0.12) !important;
          }
          @media (max-width: 768px) {
            .edu-card-container {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
              padding: 1.25rem !important;
            }
            .edu-photo-wrapper {
              max-height: 380px !important;
              width: 100% !important;
              aspect-ratio: 4 / 3 !important;
            }
            .edu-img {
              object-position: center 25% !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
};
