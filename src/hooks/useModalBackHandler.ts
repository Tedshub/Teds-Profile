import { useEffect, useRef } from 'react';

/**
 * useModalBackHandler
 *
 * Mengaitkan status buka/tutup modal dengan browser History API (popstate).
 * Pada perangkat mobile, ketika pengguna menekan tombol "Back" (tombol fisik Android,
 * gesture swipe back, atau browser back button), modal akan tertutup alih-alih
 * berpindah halaman atau keluar dari website.
 */
export function useModalBackHandler(isOpen: boolean, onClose: () => void) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const isClosedByPopStateRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    isClosedByPopStateRef.current = false;
    const modalKey = `modal_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

    // Push state baru agar tombol back browser/perangkat dapat ditangkap
    window.history.pushState({ modalKey }, '');

    const handlePopState = () => {
      // Tombol back ditekan oleh user
      isClosedByPopStateRef.current = true;
      onCloseRef.current();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);

      // Jika modal ditutup BUKAN oleh tombol back (misal klik silang, backdrop, atau tombol ESC),
      // kita kembalikan (revert) history state yang tadi di-push agar tidak meninggalkan 'ghost' history.
      if (!isClosedByPopStateRef.current) {
        if (window.history.state && window.history.state.modalKey === modalKey) {
          window.history.back();
        }
      }
    };
  }, [isOpen]);
}

