import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="konten-utama" className="section" tabIndex={-1}>
      <div className="site-shell">
        <p className="eyebrow">404</p>
        <h1 className="section-title">Halaman tidak ditemukan</h1>
        <p className="section-description">Kembali ke beranda atau pilih profil dari daftar portofolio.</p>
        <div className="hero-actions">
          <Link className="button button--primary" href="/portofolio/">Lihat portofolio</Link>
          <Link className="button button--secondary" href="/"><ArrowLeft aria-hidden="true" />Ke beranda</Link>
        </div>
      </div>
    </main>
  );
}
