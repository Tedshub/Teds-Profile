import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  PlayCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { Project } from '../../types/project';
import { getImageUrl } from '../../utils/assets';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const GithubIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
         0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
         -.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832
         .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
         -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
         1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7
         1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
         0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017
         C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const slides =
    project?.slides && project.slides.length > 0
      ? project.slides
      : project?.image
      ? [
          {
            src: project.image,
            type: 'image' as const,
            caption: project.description || project.title,
          },
        ]
      : [
          {
            src: '',
            type: 'image' as const,
            caption: project?.description || project?.title || '',
          },
        ];

  const hasMultiple = slides.length > 1;

  /* Reset slide index tiap kali project berubah */
  useEffect(() => {
    setActiveIdx(0);
  }, [project]);

  const triggerSlide = useCallback(
    (newIdx: number, dir: 'left' | 'right') => {
      if (animating || newIdx === activeIdx) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActiveIdx(newIdx);
        setAnimating(false);
      }, 200);
    },
    [animating, activeIdx]
  );

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    triggerSlide((activeIdx + 1) % slides.length, 'right');
  }, [hasMultiple, triggerSlide, activeIdx, slides.length]);

  const goPrev = useCallback(() => {
    if (!hasMultiple) return;
    triggerSlide((activeIdx - 1 + slides.length) % slides.length, 'left');
  }, [hasMultiple, triggerSlide, activeIdx, slides.length]);

  /* Keyboard navigation + ESC */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    },
    [onClose, goNext, goPrev]
  );

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const currentSlide = slides[activeIdx] || slides[0] || {
    src: '',
    type: 'image' as const,
    caption: '',
  };
  const isVideo = currentSlide?.type === 'video';

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        animation: 'projectModalFadeIn 0.2s ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1020px',
          maxHeight: '90vh',
          backgroundColor: 'var(--bg)',
          borderRadius: '18px',
          border: '1px solid var(--border)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.35), 0 0 32px rgba(255,184,0,0.12)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'projectModalSlideUp 0.25s cubic-bezier(0.16,1,0.3,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header Strip ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--border)',
            flexShrink: 0,
            backgroundColor: 'var(--bg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--yellow-primary)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span className="label" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              Detail Proyek
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup modal"
            style={{
              border: 'none',
              background: 'transparent',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              transition: 'all 0.15s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-muted)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Body Layout: Kiri Media | Kanan Deskripsi ── */}
        <div
          className="project-modal-body"
          style={{
            display: 'flex',
            flex: 1,
            overflow: 'hidden',
            minHeight: 0,
          }}
        >
          {/* ── Sisi Kiri: Media Viewer ── */}
          <div
            className="project-modal-media"
            style={{
              flex: '0 0 56%',
              position: 'relative',
              backgroundColor: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Active Media Container */}
            <div
              style={{
                width: '100%',
                flex: 1,
                opacity: animating ? 0 : 1,
                transform: animating
                  ? `translateX(${direction === 'right' ? '-20px' : '20px'})`
                  : 'translateX(0)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {currentSlide?.src ? (
                isVideo ? (
                  <video
                    key={currentSlide.src}
                    src={getImageUrl(currentSlide.src)}
                    controls
                    autoPlay
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <img
                    key={currentSlide.src}
                    src={getImageUrl(currentSlide.src)}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                )
              ) : (
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  Tidak ada preview media
                </div>
              )}
            </div>

            {/* Tombol Slide Samping (Left / Right) */}
            {hasMultiple && (
              <>
                <button
                  onClick={goPrev}
                  aria-label="Slide sebelumnya"
                  style={{
                    position: 'absolute',
                    left: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.15s ease',
                    zIndex: 10,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--yellow-primary)';
                    e.currentTarget.style.color = '#000000';
                    e.currentTarget.style.borderColor = 'var(--yellow-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={goNext}
                  aria-label="Slide berikutnya"
                  style={{
                    position: 'absolute',
                    right: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.15s ease',
                    zIndex: 10,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--yellow-primary)';
                    e.currentTarget.style.color = '#000000';
                    e.currentTarget.style.borderColor = 'var(--yellow-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Badge Posisi Slide */}
                <span
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    right: '0.85rem',
                    backgroundColor: 'rgba(0,0,0,0.65)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    zIndex: 10,
                  }}
                >
                  {activeIdx + 1} / {slides.length}
                </span>

                {/* Thumbnail Strip di Bawah Media */}
                <div
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    overflowX: 'auto',
                    zIndex: 10,
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {slides.map((s, idx) => {
                    const isActive = idx === activeIdx;
                    return (
                      <button
                        key={idx}
                        onClick={() => triggerSlide(idx, idx > activeIdx ? 'right' : 'left')}
                        aria-label={`Buka slide ${idx + 1}`}
                        style={{
                          width: '42px',
                          height: '30px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          border: isActive
                            ? '2px solid var(--yellow-primary)'
                            : '1.5px solid rgba(255,255,255,0.2)',
                          backgroundColor: '#1a1a1a',
                          padding: 0,
                          cursor: 'pointer',
                          position: 'relative',
                          opacity: isActive ? 1 : 0.6,
                          transform: isActive ? 'scale(1.08)' : 'scale(1)',
                          transition: 'all 0.18s ease',
                          flexShrink: 0,
                        }}
                      >
                        {s.type === 'video' ? (
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              backgroundColor: '#262626',
                            }}
                          >
                            <PlayCircle size={14} style={{ color: 'var(--yellow-primary)' }} />
                          </div>
                        ) : (
                          <img
                            src={getImageUrl(s.src)}
                            alt=""
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* ── Sisi Kanan: Detail & Deskripsi yang Berubah Bersama Slide ── */}
          <div
            className="project-modal-info"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              padding: '1.75rem',
              gap: '1.25rem',
              borderLeft: '1px solid var(--border)',
              backgroundColor: 'var(--bg)',
            }}
          >
            {/* Judul Proyek */}
            <h2
              style={{
                fontSize:
                  project.title.length > 120
                    ? '0.88rem'
                    : project.title.length > 90
                    ? '0.98rem'
                    : project.title.length > 60
                    ? '1.08rem'
                    : '1.25rem',
                fontWeight: 800,
                lineHeight: 1.45,
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              {project.title}
            </h2>

            {/* Tech Stack Badges */}
            {project.tech && project.tech.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      backgroundColor: 'var(--yellow-subtle)',
                      border: '1px solid var(--yellow-border)',
                      color: '#805b00',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Action Links (Live Demo & Repository) — Tepat di Bawah Tag Skill */}
            {(project.demoUrl || project.githubUrl) && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.65rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      fontSize: '0.83rem',
                      fontWeight: 700,
                      color: '#0f0f0f',
                      backgroundColor: 'var(--yellow-primary)',
                      border: '1px solid var(--yellow-hover)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: '0 2px 8px rgba(255, 184, 0, 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--yellow-hover)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--yellow-primary)';
                    }}
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
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 1.1rem',
                      borderRadius: '8px',
                      fontSize: '0.83rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-muted)',
                      border: '1.5px solid var(--border)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'border-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-strong)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <GithubIcon />
                    Repository
                  </a>
                )}
              </div>
            )}

            {/* Separator */}
            <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />

            {/* Kontrol Navigasi Slide di Area Deskripsi */}
            {hasMultiple && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.55rem 0.75rem',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  {isVideo ? (
                    <PlayCircle size={15} style={{ color: 'var(--yellow-hover)' }} />
                  ) : (
                    <ImageIcon size={15} style={{ color: 'var(--yellow-hover)' }} />
                  )}
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Slide {activeIdx + 1} dari {slides.length} ({isVideo ? 'Video' : 'Gambar'})
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    onClick={goPrev}
                    aria-label="Slide sebelumnya"
                    style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <ChevronLeft size={13} />
                    Prev
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Slide berikutnya"
                    style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    Next
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            )}

            {/* Deskripsi Dinamis Sesuai Slide Aktif */}
            <div
              style={{
                opacity: animating ? 0 : 1,
                transform: animating
                  ? `translateY(${direction === 'right' ? '6px' : '-6px'})`
                  : 'translateY(0)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
            >
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--yellow-hover)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.45rem',
                }}
              >
                Penjelasan Gambar / Video:
              </p>
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  color: 'var(--text-primary)',
                  margin: 0,
                }}
              >
                {currentSlide?.caption || project.description || ''}
              </p>
            </div>

            {/* Ringkasan Umum Proyek */}
            {project.description && hasMultiple && (
              <div style={{ marginTop: '0.25rem' }}>
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.45rem',
                  }}
                >
                  Ringkasan Proyek:
                </p>
                <p
                  style={{
                    fontSize: '0.84rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>
              </div>
            )}

            {/* Dokumen & Sertifikat Pendukung (Jika Ada) */}
            {project.documents && project.documents.length > 0 && (
              <div style={{ marginTop: '0.25rem' }}>
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Dokumen Pendukung:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {project.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.55rem 0.85rem',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        backgroundColor: 'var(--bg-muted)',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--yellow-primary)';
                        e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
                        e.currentTarget.style.color = '#805b00';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-muted)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                        <FileText size={15} style={{ color: 'var(--yellow-hover)' }} />
                        {doc.title}
                      </span>
                      <ExternalLink size={13} style={{ color: 'var(--text-muted)' }} />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Spacer */}
            <div style={{ flex: 1 }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes projectModalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes projectModalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        @media (max-width: 768px) {
          .project-modal-body {
            flex-direction: column !important;
            overflow-y: auto !important;
          }
          .project-modal-media {
            flex: none !important;
            width: 100% !important;
            height: 250px !important;
          }
          .project-modal-info {
            border-left: none !important;
            border-top: 1px solid var(--border) !important;
            padding: 1.25rem !important;
            overflow-y: visible !important;
          }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};
