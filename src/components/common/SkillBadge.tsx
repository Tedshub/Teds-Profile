import React from 'react';

export interface SkillBadgeProps {
  name: string;
  level?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, className = '', style = {} }) => {
  return (
    <div
      className={`skill-badge-item ${className}`.trim()}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.65rem 0.95rem',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--bg)',
        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--yellow-primary)';
        e.currentTarget.style.backgroundColor = 'var(--yellow-subtle)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 184, 0, 0.16)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.backgroundColor = 'var(--bg)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--yellow-primary)',
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          {name}
        </span>
      </div>
      {level && (
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          {level}
        </span>
      )}
    </div>
  );
};
