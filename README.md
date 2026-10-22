# Website Anggit Prakoso

Website personal branding dan konsultasi UMKM/F&B berbasis Next.js App Router, TypeScript strict, Tailwind CSS, dan Lucide React. Seluruh konten bisnis berada di `src/data/siteData.ts`.

## Menjalankan proyek

Gunakan Node.js 20.9 atau lebih baru.

```powershell
npm ci
npm run dev
```

Server pengembangan tersedia di `http://localhost:3000`.

## Pemeriksaan dan build

```powershell
npm run typecheck
npm run build
```

Build menghasilkan website statis di folder `out/`. Publikasikan isi folder tersebut melalui hosting statis atau Vercel. Konfigurasi menggunakan `output: "export"`, sehingga tidak memerlukan server Next.js saat produksi.

## Domain dan metadata

Setel environment variable `NEXT_PUBLIC_SITE_URL` menjadi URL HTTPS domain resmi sebelum menjalankan build produksi. Pada Vercel, `VERCEL_PROJECT_PRODUCTION_URL` digunakan sebagai alternatif bila `NEXT_PUBLIC_SITE_URL` belum diatur.

Jika domain belum ditentukan, metadata judul, deskripsi, dan identitas tetap tersedia. Canonical serta URL gambar OpenGraph/Twitter baru dicantumkan setelah URL produksi tersedia, sehingga hasil build tidak mengarang domain atau memakai alamat localhost untuk tautan sosial.

Gambar berbagi sosial dibuat secara statis pada `/og-image.png`.

## Foto personal

Simpan foto Anggit di `public/images/anggit-prakoso.webp`, dengan rasio 4:5 dan ukuran ideal 1200 × 1500 piksel. Selama file belum tersedia atau gagal dimuat, Hero dan Tentang menampilkan visual monogram AP. Kedua komponen juga menerima prop `portraitSrc` untuk menggunakan lokasi aset lain.

## Konsultasi WhatsApp

`ConsultationProvider` menghubungkan kartu masalah, layanan, paket, portofolio, dan tombol konsultasi. Drawer mempertahankan isian pengunjung, memungkinkan pergantian paket, dan menyediakan kebutuhan yang bisa diedit. Tombol kirim membuka WhatsApp dengan pesan terstruktur untuk diperiksa serta dikirim sendiri oleh pengunjung.

Testimonial tetap ditandai sebagai ilustrasi/mockup. Keterangan sumber dan batasan uraian portofolio ditampilkan bersama studi kasus.
