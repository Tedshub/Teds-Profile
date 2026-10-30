/**
 * Utility: getImageUrl
 *
 * Menambahkan BASE_URL Vite di depan path aset publik secara aman (idempotent).
 * - Development  : BASE_URL = "/"             → path tidak berubah ✅
 * - GitHub Pages : BASE_URL = "/Teds-Profile/" → "/images/..." menjadi
 *                  "/Teds-Profile/images/..." ✅
 *
 * Aman dipanggil berulang kali (tidak akan menduplikasi base path).
 */
export function getImageUrl(path: string): string {
  if (!path) return '';

  // Jika sudah URL eksternal atau data URI, kembalikan langsung
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // import.meta.env.BASE_URL di-inject Vite saat build (misal: "/Teds-Profile/")
  const base: string = import.meta.env.BASE_URL ?? '/';

  // Jika path sudah diawali dengan base path, kembalikan langsung
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }

  // Hapus leading slash dari path agar tidak terjadi double-slash
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
