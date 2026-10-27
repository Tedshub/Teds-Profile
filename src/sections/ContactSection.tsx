import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { profileData } from '../data/profile';
import { ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 0.9rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <section id="contact" className="section">
      <Container>
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <SectionHeading
              label="Kontak"
              title="Mari Berkolaborasi"
              align="left"
            />

            <div className="reveal-left delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p className="label" style={{ marginBottom: '0.35rem' }}>Email</p>
                <a
                  href={`mailto:${profileData.email}`}
                  style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}
                >
                  {profileData.email}
                </a>
              </div>

              <div>
                <p className="label" style={{ marginBottom: '0.35rem' }}>Lokasi</p>
                <p style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {profileData.location}
                </p>
              </div>

              <div>
                <p className="label" style={{ marginBottom: '0.35rem' }}>Status</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <span
                    style={{
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      background: 'var(--yellow-primary)',
                      boxShadow: '0 0 10px rgba(255, 184, 0, 0.6)',
                      animation: 'pulseBeacon 2s infinite',
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {profileData.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right delay-200">
            {submitted ? (
              <div
                style={{
                  padding: '3rem 2rem',
                  border: '1px solid var(--yellow-border)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  background: 'var(--yellow-subtle)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--yellow-primary)',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                  }}
                >
                  ✓
                </div>
                <h3 className="heading-2" style={{ marginBottom: '0.5rem' }}>Pesan Terkirim</h3>
                <p className="body" style={{ marginBottom: '1.5rem' }}>
                  Terima kasih telah menghubungi saya. Akan saya balas secepatnya.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Kirim Pesan Lain
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Example: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--yellow-primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.16)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--yellow-primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.16)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--yellow-primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.16)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ paddingTop: '0.5rem' }}>
                  <Button type="submit" variant="primary" icon={<ArrowRight size={16} />}>
                    Kirim Pesan
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 868px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
};
