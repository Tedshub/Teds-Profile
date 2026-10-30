import React, { useState } from 'react';
import { Certificate } from '../../types/certificate';
import { Award, FileText, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { getImageUrl } from '../../utils/assets';

interface CertificateCardProps {
  certificate: Certificate;
  className?: string;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, className = '' }) => {
  const isHaki = certificate.type === 'haki';
  const isPending = !!certificate.status;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`cert-card ${className}`.trim()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden',
        borderColor: isHovered ? 'rgba(255, 184, 0, 0.45)' : 'var(--border)',
        boxShadow: isHovered
          ? '0 12px 28px rgba(0, 0, 0, 0.06), 0 0 16px rgba(255, 184, 0, 0.1)'
          : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Preview Area (16:9) ── */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
          backgroundColor: '#f3f4f6',
        }}
      >
        {certificate.fileUrl && !isPending ? (
          /* PDF preview via native <object> — browser render langsung tanpa pihak ketiga */
          <a
            href={getImageUrl(certificate.fileUrl)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}
            title="Klik untuk buka dokumen PDF"
          >
            <object
              data={`${getImageUrl(certificate.fileUrl)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              type="application/pdf"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                pointerEvents: 'none',
                display: 'block',
              }}
            >
              {/* Fallback jika browser tidak support PDF inline */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: isHaki ? '#f8f8f8' : '#fffbeb',
                }}
              >
                <FileText
                  size={32}
                  style={{ color: isHaki ? 'var(--text-muted)' : 'var(--yellow-hover)', opacity: 0.75 }}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Dokumen PDF
                </span>
              </div>
            </object>

            {/* Hover overlay — "Buka PDF" pill */}
            <div
              className="cert-preview-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.22s ease',
              }}
            >
              <span
                className="cert-expand-icon"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '999px',
                  backgroundColor: 'var(--yellow-primary)',
                  color: '#0f0f0f',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  opacity: 0,
                  transform: 'scale(0.85)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                }}
              >
                <ExternalLink size={13} />
                Buka PDF
              </span>
            </div>
          </a>
        ) : (
          /* Placeholder: pending atau tidak ada fileUrl */
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: isHaki ? '#f5f5f5' : '#fffbeb',
            }}
          >
            {isHaki ? (
              <ShieldCheck size={32} style={{ color: 'var(--text-muted)', opacity: 0.45 }} />
            ) : (
              <Clock size={32} style={{ color: '#D97706', opacity: 0.55 }} />
            )}
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {isPending ? 'Dokumen Dalam Proses' : 'Tidak Ada Dokumen'}
            </span>
          </div>
        )}
      </div>

      {/* ── Card Body ── */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
        {/* Header: Category Badge & Year */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                backgroundColor: isHaki ? 'var(--bg-muted)' : 'var(--yellow-subtle)',
                color: isHaki ? 'var(--text-secondary)' : '#805b00',
                border: `1px solid ${isHaki ? 'var(--border)' : 'var(--yellow-border)'}`,
                letterSpacing: '0.02em',
              }}
            >
              {isHaki ? (
                <ShieldCheck size={13} style={{ color: 'var(--text-secondary)' }} />
              ) : (
                <Award size={13} style={{ color: 'var(--yellow-hover)' }} />
              )}
              {certificate.category}
            </span>

            {isPending && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  backgroundColor: '#FEF3C7',
                  border: '1px solid #F59E0B',
                  color: '#B45309',
                }}
              >
                <Clock size={11} />
                {certificate.status}
              </span>
            )}
          </div>

          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {certificate.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className="heading-2"
          style={{ fontSize: '1rem', lineHeight: 1.35, marginBottom: '0.2rem' }}
        >
          {certificate.title}
        </h3>

        {/* Issuer */}
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          {certificate.issuer}
        </p>

        {/* Description */}
        <p className="body" style={{ fontSize: '0.855rem', lineHeight: 1.65, flex: 1 }}>
          {certificate.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {certificate.tags.map((tag) => (
            <span
              key={tag}
              className="badge"
              style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {certificate.fileUrl ? (
            <a
              href={getImageUrl(certificate.fileUrl)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.84rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                transition: 'color 0.15s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--yellow-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <FileText size={15} style={{ color: 'var(--yellow-primary)' }} />
              <span>Buka Dokumen PDF</span>
              <ExternalLink size={13} style={{ opacity: 0.7 }} />
            </a>
          ) : (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#B45309',
              }}
            >
              <Clock size={15} style={{ color: '#D97706' }} />
              <span>Dokumen {certificate.status || 'Dalam Proses Penerbitan'}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover CSS */}
      <style>{`
        .cert-card:hover .cert-preview-overlay {
          background-color: rgba(0,0,0,0.22) !important;
        }
        .cert-card:hover .cert-expand-icon {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
    </div>
  );
};
