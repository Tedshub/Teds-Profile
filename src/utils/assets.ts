/**
 * Utility: getImageUrl
 *
 * Menambahkan BASE_URL Vite di depan path aset publik.
 * - Development  : BASE_URL = "/"             → path tidak berubah ✅
 * - GitHub Pages : BASE_URL = "/Teds-Profile/" → "/images/..." menjadi
 *                  "/Teds-Profile/images/..." ✅
 *
 * Gunakan helper ini untuk SEMUA path gambar / video / dokumen
 * yang disimpan di folder `public/`.
 */
export function getImageUrl(path: string): string {
  // import.meta.env.BASE_URL di-inject Vite saat build
  const base: string = import.meta.env.BASE_URL ?? '/';
  // Hapus leading slash dari path agar tidak terjadi double-slash
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
