import React, { useEffect } from 'react';
import { X, Code2, Cpu, ExternalLink } from 'lucide-react';
import { getImageUrl } from '../../utils/assets';
import { useModalBackHandler } from '../../hooks/useModalBackHandler';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  // Dukungan tombol Back perangkat / browser mobile untuk menutup modal
  useModalBackHandler(isOpen, onClose);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(6px)',
        animation: 'cvFadeIn 0.2s ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.18), 0 0 20px rgba(255, 184, 0, 0.12)',
          padding: '1.5rem',
          position: 'relative',
          animation: 'cvSlideUp 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup Modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
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
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-muted)';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <X size={18} />
        </button>

        {/* Compact Header */}
        <div style={{ marginBottom: '1.25rem', paddingRight: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--yellow-primary)',
                display: 'inline-block',
              }}
            />
            <span
              className="label"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                fontWeight: 700,
              }}
            >
              Curriculum Vitae
            </span>
          </div>
          <h2
            className="heading-1"
            style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '0.25rem', color: '#0a0a0a' }}
          >
            Pilih Format CV
          </h2>
          <p className="body" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
            Pilih versi spesialisasi kurikulum vitae yang diinginkan:
          </p>
        </div>

        {/* Compact CV Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Option 1: Web Developer */}
          <a
            href={getImageUrl('/documents/CV Web Developer.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="cv-card-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.85rem',
              padding: '0.9rem 1rem',
              borderRadius: '12px',
              border: '1.5px solid var(--border)',
              backgroundColor: '#ffffff',
              textDecoration: 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--yellow-primary)';
              e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 184, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '9px',
                  backgroundColor: '#0a0a0a',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Code2 size={19} style={{ color: 'var(--yellow-primary)' }} />
              </div>

              <div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0a0a0a', margin: '0 0 0.15rem 0' }}>
                  CV Web Developer & Computer Vision
                </h3>
              </div>
            </div>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                borderRadius: '6px',
                color: '#805b00',
                backgroundColor: 'rgba(255, 184, 0, 0.18)',
                border: '1px solid var(--yellow-border)',
                flexShrink: 0,
              }}
            >
              <ExternalLink size={13} style={{ opacity: 0.85 }} />
            </span>
          </a>

          {/* Option 2: IoT */}
          <a
            href={getImageUrl('/documents/CV IoT.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="cv-card-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.85rem',
              padding: '0.9rem 1rem',
              borderRadius: '12px',
              border: '1.5px solid var(--border)',
              backgroundColor: '#ffffff',
              textDecoration: 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--yellow-primary)';
              e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 184, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '9px',
                  backgroundColor: '#0a0a0a',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Cpu size={19} style={{ color: 'var(--yellow-primary)' }} />
              </div>

              <div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0a0a0a', margin: '0 0 0.15rem 0' }}>
                  CV IoT & Computer Vison
                </h3>
              </div>
            </div>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                borderRadius: '6px',
                color: '#805b00',
                backgroundColor: 'rgba(255, 184, 0, 0.18)',
                border: '1px solid var(--yellow-border)',
                flexShrink: 0,
              }}
            >
              <ExternalLink size={13} style={{ opacity: 0.85 }} />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes cvFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cvSlideUp {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};
