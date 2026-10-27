import React from 'react';
import { Container } from '../ui/Container';
import { SocialLinks } from '../ui/SocialLinks';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 0',
        backgroundColor: 'var(--bg)',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '-0.015em',
                color: 'var(--text-primary)',
              }}
            >
              Profil<span style={{ color: 'var(--text-muted)' }}> Tedy</span>
              <span style={{ color: 'var(--yellow-primary)' }}>.</span>
            </span>
            <p className="body" style={{ fontSize: '0.82rem', marginTop: '0.15rem', color: 'var(--text-muted)' }}>
              &copy; {year} {profileData.name}. All rights reserved.
            </p>
          </div>

          <SocialLinks links={profileData.socials} />
        </div>
      </Container>
    </footer>
  );
};
