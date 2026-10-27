import { useEffect } from 'react';

/**
 * Custom hook to automatically reveal elements when scrolled into viewport.
 * Observes all elements with classes: .reveal, .reveal-left, .reveal-right, .reveal-scale
 */
export function useScrollReveal() {
  useEffect(() => {
    // If IntersectionObserver is not supported, reveal everything immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(
        '.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Initial check
    observeAll();

    // Use MutationObserver so dynamically mounted sections/cards are automatically tracked
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
