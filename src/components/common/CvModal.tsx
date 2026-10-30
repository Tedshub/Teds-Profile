import React, { useEffect } from 'react';
import { X, Code2, Cpu, ExternalLink } from 'lucide-react';
import { getImageUrl } from '../../utils/assets';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
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
        padding: '1.25rem',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '580px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 24px rgba(255, 184, 0, 0.15)',
          padding: '2rem',
          position: 'relative',
          animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup Modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
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
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.4rem' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--yellow-primary)',
                display: 'inline-block',
              }}
            />
            <span className="label" style={{ color: 'var(--text-muted)' }}>
              Kurikulum Vitae
            </span>
          </div>
          <h2 className="heading-1" style={{ fontSize: '1.45rem', marginBottom: '0.35rem' }}>
            Pilih Format Curriculum Vitae
          </h2>
          <p className="body" style={{ fontSize: '0.88rem' }}>
            Silakan pilih versi CV yang sesuai dengan fokus spesialisasi yang Anda butuhkan:
          </p>
        </div>

        {/* CV Options Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Option 1: Web Developer */}
          <a
            href={getImageUrl('/documents/CV Web Developer.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.15rem',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1.5px solid var(--border)',
              backgroundColor: '#ffffff',
              textDecoration: 'none',
              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--yellow-primary)';
              e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 184, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#000000',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Code2 size={22} style={{ color: 'var(--yellow-primary)' }} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#000000' }}>
                  CV Web Developer
                </h3>
                <ExternalLink size={15} style={{ color: 'var(--text-muted)' }} />
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                Fokus pada Full Stack Web Development (Laravel, React.js, REST API, Database SQL & Web Architecture).
              </p>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#805b00',
                  backgroundColor: 'rgba(255, 184, 0, 0.15)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                Buka File PDF • Web Developer
              </span>
            </div>
          </a>

          {/* Option 2: IoT */}
          <a
            href={getImageUrl('/documents/CV IoT.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.15rem',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1.5px solid var(--border)',
              backgroundColor: '#ffffff',
              textDecoration: 'none',
              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--yellow-primary)';
              e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 184, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#000000',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Cpu size={22} style={{ color: 'var(--yellow-primary)' }} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#000000' }}>
                  CV IoT & Embedded Systems
                </h3>
                <ExternalLink size={15} style={{ color: 'var(--text-muted)' }} />
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                Fokus pada Embedded Systems, ESP32, Sensor & Modbus RTU, Python, dan Computer Vision (OpenCV / YOLO).
              </p>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#805b00',
                  backgroundColor: 'rgba(255, 184, 0, 0.15)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                Buka File PDF • IoT Engineer
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
