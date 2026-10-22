# AGENTS.md — Strict Coding Rules for Anggit Prakoso Personal Branding Website

## 1. Anti-Hallucination & Zero-Placeholder Policy (CRITICAL)
- DILARANG KERAS menulis komentar seperti `// TODO`, `// tambahkan item lainnya di sini`, `/* ... */`, atau memotong array data.
- Seluruh teks, data portofolio, layanan, paket harga, langkah konsultasi, FAQ, dan kontak harus ditulis LENGKAP sesuai `PRD.md`.
- DILARANG mengarang nama klien palsu pada bagian Testimonial. Wajib gunakan label ilustrasi/mockup sesuai aturan di `PRD.md`.
- DILARANG menambahkan library eksternal berat atau backend/database yang tidak diminta di `PRD.md`. Gunakan Next.js (App Router), TypeScript, Tailwind CSS, dan `lucide-react`.

## 2. Interconnected Architecture Rule (No Dead Buttons)
- TIDAK BOLEH ada tombol CTA yang mati (`href="#"`) atau sekadar mengarah ke link WhatsApp kosong.
- Setiap interaksi pengguna pada:
  1. Kartu Masalah UMKM (`selectedProblems`)
  2. Tombol Layanan & Paket Harga (`selectedServiceOrPackage`)
  3. Tombol Studi Kasus Portofolio (`portfolioReference`)
  4. Tombol Konsultasi di Header, Hero, CTA Bawah, dan Sticky Mobile Bar
  WAJIB terhubung ke `ConsultationContext` dan membuka **Smart WhatsApp Bottom-Sheet Drawer**.

## 3. Mobile-First UMKM & F&B UX Standard
- Target utama adalah pemilik UMKM dan bisnis F&B yang membuka website dari HP (360px - 430px).
- Pastikan tidak ada horizontal overflow (`overflow-x-hidden`).
- Semua tombol interaktif wajib memiliki tinggi minimal `48px` (`min-h-[48px]`) agar nyaman diketuk dengan ibu jari.
- Gunakan skema warna Warm Alabaster (`#FAF9F6`), Surface Putih (`#FFFFFF`), Deep Slate Navy (`#0F172A`), Brand Royal Blue (`#2563EB`), dan Growth Emerald (`#059669`).