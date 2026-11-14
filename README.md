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

Foto di beranda menggunakan `public/images/anggit-prakoso.jpg`. Jika foto gagal dimuat, bagian pembuka menampilkan monogram AP. Komponen Hero juga menerima prop `portraitSrc` untuk menggunakan lokasi aset lain.

## Portofolio

Beranda menampilkan tiga karya pilihan di `/#portofolio`. Daftar lengkap ada di `/portofolio/`; setiap entri di array `portfolio` menghasilkan halaman statis `/portofolio/[id]/` saat build. Gunakan ID yang unik dan stabil. Untuk menyertakan foto proyek, tambahkan `photo` dengan path aset di `public/`, teks alternatif, keterangan, lebar, dan tinggi. Tanpa foto, halaman tetap menampilkan profil dan capaian brand tanpa gambar pengganti.

## Konsultasi WhatsApp

`ConsultationProvider` menghubungkan kartu masalah, layanan, paket, portofolio, dan tombol konsultasi. Drawer mempertahankan isian pengunjung, memungkinkan pergantian paket, dan menyediakan kebutuhan yang bisa diedit. Tombol kirim membuka WhatsApp dengan pesan terstruktur untuk diperiksa serta dikirim sendiri oleh pengunjung.

Testimonial tetap ditandai sebagai ilustrasi/mockup. Keterangan sumber dan batasan uraian portofolio ditampilkan bersama studi kasus.
