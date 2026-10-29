import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SocialLinks } from '../components/ui/SocialLinks';
import { profileData } from '../data/profile';
import { ArrowRight, EyeIcon, MapPin } from 'lucide-react';
import { CvModal } from '../components/common/CvModal';

export const HeroSection: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Background Layer 1: Ambient fill (so no edges are ever black or empty) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/profile/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Background Layer 2: Sharp foreground (contain on mobile/tablet to show 100% of image, cover on desktop) */}
      <div
        className="hero-bg-sharp"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/profile/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Dark overlay for cinematic hero background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.45)',
          zIndex: 2,
        }}
      />

      {/* Content — 2-column flex layout aligning text and person */}
      <Container style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            padding: '4rem 0',
            minHeight: 'calc(100vh - 80px)',
          }}
        >
          {/* Left Column: All Hero Text */}
          <div style={{ maxWidth: '600px', width: '100%', flex: '1 1 auto', minWidth: 0 }}>
            {/* Role label */}
            <div className="reveal delay-100" style={{ marginBottom: '1.25rem' }}>
              <span
                className="label hero-role-label"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  fontWeight: 800,
                  padding: '0.4rem 0.85rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border)',
                  letterSpacing: '0.06em',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                  lineHeight: 1.45,
                  maxWidth: '100%',
                }}
              >
                {profileData.role}
              </span>
            </div>

            {/* Name */}
            <h1
              className="display reveal delay-200"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                marginBottom: '1.5rem',
                lineHeight: 1.2,
              }}
            >
              <span
                style={{
                  display: 'inline',
                  backgroundColor: '#ffffff',
                  color: '#0a0a0a',
                  padding: '0.12em 0.35em',
                  borderRadius: '4px',
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                {profileData.name}
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="body-lg reveal delay-300"
              style={{
                maxWidth: '480px',
                marginBottom: '2.5rem',
                lineHeight: 1.85,
              }}
            >
              <span
                style={{
                  display: 'inline',
                  backgroundColor: '#ffffff',
                  color: 'var(--text-primary)',
                  padding: '0.2em 0.45em',
                  borderRadius: '4px',
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                  boxShadow: '0 1px 6px rgba(0, 0, 0, 0.03)',
                }}
              >
                {profileData.tagline}
              </span>
            </p>

            {/* Action Buttons */}
            <div
              className="reveal delay-400"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '2.5rem',
              }}
            >
              <Button
                variant="primary"
                href="#projects"
                icon={<ArrowRight size={16} />}
                className="hero-btn-project"
              >
                Lihat Proyek
              </Button>
              <Button
                variant="primary"
                onClick={() => setIsCvModalOpen(true)}
                icon={<EyeIcon size={16} />}
                className="hero-btn-cv"
              >
                Lihat CV
              </Button>
            </div>

            {/* Social + Location */}
            <div className="reveal delay-500">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                  backgroundColor: '#ffffff',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
                }}
              >
                <SocialLinks links={profileData.socials} />
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <MapPin size={14} style={{ color: 'var(--yellow-hover)', flexShrink: 0 }} />
                  {profileData.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Person Photo Container (sedikit lebih kecil, sejajar dengan text) */}
          <div className="reveal-scale delay-300" style={{ flex: '0 0 auto' }}>
            <div
              className="hero-person-wrapper"
              style={{
                width: 'clamp(220px, 22vw, 300px)',
                aspectRatio: '427 / 585',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 45%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 184, 0, 0.15)',
                animation: 'subtleFloat 6s ease-in-out infinite',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <img
                src="/images/profile/person.png"
                alt={profileData.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Button styles and responsive layout */}
      <style>{`
        .hero-btn-project {
          background-color: #000000 !important;
          color: #ffffff !important;
          border: 1.5px solid #ffffff !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .hero-btn-project:hover {
          background-color: #111111 !important;
          border-color: var(--yellow-primary) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 184, 0, 0.32) !important;
        }
        .hero-btn-project:active {
          background-color: #2e2e2e !important;
          transform: translateY(0);
        }

        .hero-btn-cv {
          background-color: #ffffff !important;
          color: #0a0a0a !important;
          border: 1.5px solid #ffffff !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .hero-btn-cv:hover {
          background-color: var(--yellow-subtle) !important;
          border-color: var(--yellow-primary) !important;
          color: #7c5700 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(255, 184, 0, 0.22) !important;
        }
        .hero-btn-cv:active {
          background-color: #dcdcdc !important;
          border-color: #dcdcdc !important;
          transform: translateY(0);
        }

        @media (max-width: 900px) {
          .hero-bg-sharp {
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center 25% !important;
          }
          .hero-grid {
            flex-direction: column !important;
            align-items: center !important;
            gap: 2.5rem !important;
            padding: 2.5rem 0 3.5rem 0 !important;
            min-height: auto !important;
          }
          .hero-person-wrapper {
            display: flex !important;
            width: clamp(200px, 42vw, 260px) !important;
            margin: 0 auto !important;
          }
        }

        @media (max-width: 640px) {
          .hero-person-wrapper {
            display: flex !important;
            width: clamp(170px, 48vw, 220px) !important;
            margin: 0 auto !important;
          }
          .hero-bg-sharp {
            background-size: contain !important;
            background-position: center 15% !important;
          }
          .hero-role-label {
            font-size: 0.68rem !important;
            padding: 0.35rem 0.65rem !important;
            letter-spacing: 0.04em !important;
          }
        }
      `}</style>

      {/* CV Selection Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </section>
  );
};
