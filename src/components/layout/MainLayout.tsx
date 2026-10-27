import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useScrollReveal();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '60px' }}>{children}</main>
      <Footer />
    </div>
  );
};

