import React, { useState, useEffect } from 'react';
import { X, ChevronRight, Menu } from 'lucide-react';
import { Container } from '../ui/Container';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useModalBackHandler } from '../../hooks/useModalBackHandler';
import { projectsData } from '../../data/projects';
import { experiencesData } from '../../data/experiences';
import { certificatesData } from '../../data/certificates';

interface NavItem {
  label: string;
  href: string;
  badge?: number;
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Tentang', href: '#about' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Proyek', href: '#projects', badge: projectsData.length },
    { label: 'Pengalaman', href: '#experience', badge: experiencesData.length },
    { label: 'Pendidikan', href: '#education' },
    { label: 'Sertifikat', href: '#certificates', badge: certificatesData.length },
    { label: 'Kontak', href: '#contact' },
  ];

  const activeSection = useScrollSpy(
    navItems.map((i) => i.href.substring(1)),
    100
  );

  // Dukungan tombol Back perangkat / browser mobile untuk menutup mobile drawer
  useModalBackHandler(isMobileMenuOpen, () => setIsMobileMenuOpen(false));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ── Main Top Header ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          maxWidth: '100vw',
          zIndex: 50,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'border-color 0.2s ease',
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '60px',
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Profil <span style={{ color: 'var(--text-muted)' }}>Tedy</span>
              <span style={{ color: 'var(--yellow-primary)' }}>.</span>
            </a>

            {/* Desktop Nav */}
            <nav
              className="desktop-nav"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      position: 'relative',
                      padding:
                        item.badge !== undefined
                          ? '0.4rem 0.9rem 0.4rem 0.75rem'
                          : '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'var(--yellow-subtle)' : 'transparent',
                      borderBottom: isActive
                        ? '2px solid var(--yellow-primary)'
                        : '2px solid transparent',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span>{item.label}</span>

                    {/* Top-Right Badge */}
                    {item.badge !== undefined && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '1px',
                          right: '1px',
                          transform: 'translate(20%, -20%)',
                          minWidth: '18px',
                          height: '18px',
                          padding: '0 4px',
                          borderRadius: '9999px',
                          backgroundColor: isActive ? 'var(--yellow-primary)' : '#0f0f0f',
                          color: isActive ? '#0f0f0f' : '#ffffff',
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          lineHeight: 1,
                          border: '1.5px solid #ffffff',
                          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.16)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Desktop */}
            <a
              href="#contact"
              className="btn btn-primary desktop-cta"
              style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}
            >
              Hubungi Saya
            </a>
          </div>
        </Container>
      </header>

      {/* ── Mobile Floating Button (Sisi Kiri Tengah Layar) ── */}
      <button
        type="button"
        className={`mobile-side-toggle ${isMobileMenuOpen ? 'drawer-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Buka menu navigasi"
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: isMobileMenuOpen
            ? 'translateY(-50%) translateX(-100%)'
            : 'translateY(-50%) translateX(0)',
          zIndex: 90,
          backgroundColor: 'rgba(15, 15, 15, 0.65)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          border: '1.5px solid rgba(255, 184, 0, 0.65)',
          borderLeft: 'none',
          borderTopRightRadius: '14px',
          borderBottomRightRadius: '14px',
          padding: '0.75rem 0.55rem',
          display: 'none', // dikontrol oleh media query
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          cursor: 'pointer',
          opacity: isMobileMenuOpen ? 0 : 0.6,
          boxShadow: '2px 4px 14px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 184, 0, 0.15)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'var(--yellow-primary)',
            color: '#0f0f0f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.1rem',
          }}
        >
          <Menu size={14} strokeWidth={2.5} />
        </div>
        <span
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontSize: '0.68rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
            color: 'var(--yellow-primary)',
            textTransform: 'uppercase',
          }}
        >
          Menu
        </span>
      </button>

      {/* ── Mobile Backdrop Overlay ── */}
      <div
        className={`mobile-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Off-Canvas Drawer (Slide dari Kiri) ── */}
      <aside
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Menu Navigasi Mobile"
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.25rem 1rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Profil <span style={{ color: 'var(--text-muted)' }}>Tedy</span>
            <span style={{ color: 'var(--yellow-primary)' }}>.</span>
          </a>

          {/* Tombol Tutup Drawer */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Tutup menu navigasi"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-muted)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
          }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              padding: '0.25rem 0.5rem 0.5rem',
              margin: 0,
            }}
          >
            Navigasi Halaman
          </p>

          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.7rem 0.85rem',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--yellow-subtle)' : 'transparent',
                  border: isActive ? '1px solid var(--yellow-border)' : '1px solid transparent',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--yellow-primary)' : 'transparent',
                      display: 'inline-block',
                    }}
                  />
                  <span>{item.label}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {item.badge !== undefined && (
                    <span
                      style={{
                        minWidth: '22px',
                        height: '22px',
                        padding: '0 6px',
                        borderRadius: '9999px',
                        backgroundColor: isActive
                          ? 'var(--yellow-primary)'
                          : 'var(--bg-muted)',
                        color: isActive ? '#0f0f0f' : 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight size={15} style={{ color: 'var(--text-muted)' }} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div
          style={{
            padding: '1rem 1.25rem 1.5rem',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg-muted)',
          }}
        >
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              fontSize: '0.88rem',
              fontWeight: 700,
              padding: '0.7rem 1rem',
              borderRadius: '10px',
            }}
          >
            Hubungi Saya
          </a>
        </div>
      </aside>

      {/* ── Responsive Styling ── */}
      <style>{`
        /* Desktop styles (>= 768px) */
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-side-toggle { display: none !important; }
          .mobile-backdrop { display: none !important; }
          .mobile-drawer { display: none !important; }
        }

        /* Mobile styles (< 768px) */
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-side-toggle { display: flex !important; }

          .mobile-side-toggle:hover,
          .mobile-side-toggle:focus-visible,
          .mobile-side-toggle:active {
            opacity: 1 !important;
            background-color: rgba(15, 15, 15, 0.95) !important;
            border-color: var(--yellow-primary) !important;
            box-shadow: 3px 6px 20px rgba(0, 0, 0, 0.35), 0 0 16px rgba(255, 184, 0, 0.3) !important;
          }

          .mobile-backdrop {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(4px);
            z-index: 100;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.28s ease;
          }
          .mobile-backdrop.open {
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-drawer {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 280px;
            max-width: 82vw;
            background-color: var(--bg);
            border-right: 1px solid var(--border);
            z-index: 101;
            display: flex;
            flex-direction: column;
            box-shadow: 4px 0 28px rgba(0, 0, 0, 0.25);
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .mobile-drawer.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

