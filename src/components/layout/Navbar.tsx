import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { useScrollSpy } from '../../hooks/useScrollSpy';
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
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
                    padding: item.badge !== undefined ? '0.4rem 0.9rem 0.4rem 0.75rem' : '0.4rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--yellow-subtle)' : 'transparent',
                    borderBottom: isActive ? '2px solid var(--yellow-primary)' : '2px solid transparent',
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

          {/* CTA */}
          <a
            href="#contact"
            className="btn btn-primary desktop-cta"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}
          >
            Hubungi Saya
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="mobile-toggle"
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--text-primary)',
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '1rem',
              paddingBottom: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
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
                    padding: '0.55rem 0.75rem',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--yellow-subtle)' : 'transparent',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <span>{item.label}</span>

                  {item.badge !== undefined && (
                    <span
                      style={{
                        minWidth: '22px',
                        height: '22px',
                        padding: '0 6px',
                        borderRadius: '9999px',
                        backgroundColor: isActive ? 'var(--yellow-primary)' : 'var(--bg-muted)',
                        color: isActive ? '#0f0f0f' : 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            >
              Hubungi Saya
            </a>
          </div>
        )}
      </Container>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
