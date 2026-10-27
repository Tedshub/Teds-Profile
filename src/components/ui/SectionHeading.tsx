import React from 'react';

export interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`reveal ${className}`.trim()}
      style={{
        textAlign: align,
        marginBottom: '3.5rem',
        maxWidth: align === 'center' ? '640px' : '100%',
        marginInline: align === 'center' ? 'auto' : undefined,
      }}
    >
      {label && (
        <p
          className="label"
          style={{
            marginBottom: '0.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--yellow-primary)',
            }}
          />
          {label}
        </p>
      )}
      <h2 className="heading-1" style={{ marginBottom: subtitle ? '0.75rem' : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p className="body-lg" style={{ marginTop: '0.5rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
