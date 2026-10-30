import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ExperienceCard } from '../components/common/ExperienceCard';
import { experiencesData } from '../data/experiences';
import { X, ExternalLink, ZoomIn } from 'lucide-react';
import { getImageUrl } from '../utils/assets';

interface PreviewState {
  isOpen: boolean;
  imageUrl: string;
  title: string;
}

export const ExperienceSection: React.FC = () => {
  const [preview, setPreview] = useState<PreviewState>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  const handleOpenPreview = (imageUrl: string, title: string) => {
    setPreview({
      isOpen: true,
      imageUrl: getImageUrl(imageUrl),
      title,
    });
  };

  const handleClosePreview = () => {
    setPreview((prev) => ({ ...prev, isOpen: false }));
  };

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
    <section id="experience" className="section">
      <Container>
        <SectionHeading
          label="Karier & Rekam Jejak"
          title="Pengalaman Profesional"
          subtitle="Dokumentasi perjalanan karier, asistensi akademik, kepemimpinan tim robotika, serta inovasi riset terapan."
          align="left"
        />

        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {experiencesData.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onPreviewImage={handleOpenPreview}
              className={`reveal delay-${Math.min((idx + 1) * 100, 500)}`}
            />
          ))}
        </div>

        {/* Image Lightbox Modal */}
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
                maxWidth: '920px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#141414',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 24px rgba(255, 184, 0, 0.2)',
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
                      letterSpacing: '-0.01em',
                      maxWidth: '550px',
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
                    title="Buka gambar ukuran penuh di tab baru"
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
                    aria-label="Tutup preview gambar"
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
                  padding: '1rem',
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
      </Container>
    </section>
  );
};
