import React from 'react';
import { Certificate } from '../../types/certificate';
import { Award, FileText, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
  className?: string;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, className = '' }) => {
  const isHaki = certificate.type === 'haki';
  const isPending = !!certificate.status;

  return (
    <div
      className={`card ${className}`.trim()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.45)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.06), 0 0 16px rgba(255, 184, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Header: Category Badge & Year */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          marginBottom: '1rem',
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

        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontWeight: 600,
          }}
        >
          {certificate.year}
        </span>
      </div>

      {/* Title */}
      <h3
        className="heading-2"
        style={{
          fontSize: '1.1rem',
          lineHeight: 1.35,
          marginBottom: '0.4rem',
        }}
      >
        {certificate.title}
      </h3>

      {/* Issuer */}
      <p
        style={{
          fontSize: '0.825rem',
          color: 'var(--text-muted)',
          fontWeight: 600,
          marginBottom: '0.85rem',
        }}
      >
        {certificate.issuer}
      </p>

      {/* Description */}
      <p
        className="body"
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.65,
          marginBottom: '1.25rem',
          flex: 1,
        }}
      >
        {certificate.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.35rem',
          marginBottom: '1.25rem',
        }}
      >
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

      {/* CTA / Status */}
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
            href={certificate.fileUrl}
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
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--yellow-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
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
  );
};
