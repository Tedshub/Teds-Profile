import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { profileData } from '../data/profile';
import { ArrowRight, Mail, ExternalLink, RefreshCw } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Pesan dari ${formData.name} — Portfolio Tedy Firmansyah`
    );
    const body = encodeURIComponent(
      `Halo Tedy,\n\nNama: ${formData.name}\nEmail Pengirim: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim melalui Form Kontak Website Portfolio`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setLastMailtoUrl(mailtoUrl);

    // Memicu pembukaan aplikasi email default perangkat
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setLastMailtoUrl('');
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
          {/* Left: Contact Info */}
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
                  href={`mailto:${profileData.email}?subject=${encodeURIComponent('Halo Tedy — Diskusi Proyek & Peluang Kerja')}`}
                  style={{
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--yellow-hover)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  <Mail size={15} style={{ color: 'var(--yellow-hover)' }} />
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
                  padding: '2.5rem 2rem',
                  border: '1px solid var(--yellow-border)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  background: 'var(--yellow-subtle)',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'var(--yellow-primary)',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                    fontWeight: 700,
                    boxShadow: '0 4px 14px rgba(255, 184, 0, 0.3)',
                  }}
                >
                  <Mail size={24} />
                </div>

                <h3 className="heading-2" style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: '#0a0a0a' }}>
                  Aplikasi Email Terbuka
                </h3>

                <p className="body" style={{ fontSize: '0.9rem', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  Aplikasi email Anda (seperti Gmail, Outlook, atau Mail) telah dipicu dengan subjek dan draf pesan yang sudah terisi otomatis. Silakan tekan <strong>Kirim</strong> pada aplikasi email Anda.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {lastMailtoUrl && (
                    <a
                      href={lastMailtoUrl}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        padding: '0.6rem 1.15rem',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a1a1a';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#000000';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <ExternalLink size={14} style={{ color: 'var(--yellow-primary)' }} />
                      Buka Ulang Aplikasi Email
                    </a>
                  )}

                  <Button variant="outline" onClick={handleReset} icon={<RefreshCw size={14} />}>
                    Tulis Pesan Lain
                  </Button>
                </div>
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
                    placeholder="Contoh: Budi Santoso"
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
                    Alamat Email Anda
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
                    placeholder="Ceritakan tentang proyek, penawaran kerja, atau kebutuhan kolaborasi Anda..."
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
                    Kirim Pesan via Email
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
