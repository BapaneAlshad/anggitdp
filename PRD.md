# MASTER PRD v2.0 — Website Personal Branding & Client Acquisition Funnel
**Pemilik Produk:** Anggit Dwi Prakoso (Anggit Prakoso)
**Role Positioning:** Marketing, Branding & Digital Growth Partner
**Tech Stack:** Next.js (App Router, Static Export/SSG), TypeScript, Tailwind CSS, Lucide React (Icons), Vercel
**Target Utama:** Pemilik UMKM, Bisnis F&B (Cafe, Kedai, Restoran, Minuman, Franchise), & Brand Lokal Berkembang (90% akses via Mobile/HP)

---

## 1. Visi Produk & Prinsip Utama untuk AI (Codex Instructions)
Website ini BUKAN sekadar brosur statis atau portofolio agensi anonim, melainkan **Interactive Personal Branding & WhatsApp Funnel** milik Anggit Prakoso.
1. **100% Fungsional & Saling Berkaitan:** Setiap tombol, kartu masalah, pilihan layanan, dan paket harga harus terhubung ke satu `ConsultationState` global yang mempermudah pengunjung mengirim pesan WhatsApp terstruktur tanpa harus mengetik dari nol.
2. **Mobile-First & Thumb-Friendly:** Dirancang khusus untuk layar smartphone (360px–430px) dengan tetap tampil elegan dalam format *Bento Grid* di layar Desktop (1366px–1440px+). Semua tombol interaktif memiliki tinggi minimal `48px` agar nyaman ditekan ibu jari.
3. **Tanpa Backend Berat:** Tidak menggunakan database, login, atau CMS. Seluruh konten dikelola melalui satu file terpusat `src/data/siteData.ts` dengan tipe data TypeScript yang ketat (`strict`).

---

## 2. Sistem Desain (Design System & UI Tokens)

### 2.1 Palet Warna (Konfigurasi Tailwind CSS)
- **Background Utama (`bg-canvas`):** `#FAF9F6` (Warm Alabaster — bersih namun tidak menyilaukan mata di layar HP).
- **Surface / Card (`bg-surface`):** `#FFFFFF` dengan border `#E2E8F0` (`border-slate-200`) dan subtle shadow.
- **Dark Surface / Kredibilitas (`bg-credibility`):** `#0F172A` (`slate-900` — digunakan pada kartu highlight, metrik portofolio, dan footer).
- **Primary Brand (`brand-blue`):** `#2563EB` (`blue-600`, hover `blue-700`) — untuk elemen interaktif, filter aktif, dan indikator langkah.
- **Conversion / Growth (`growth-green`):** `#059669` (`emerald-600`, hover `emerald-700`) — khusus untuk tombol utama WhatsApp dan badge pertumbuhan outlet.
- **Typography Colors:** Heading `#0F172A` (`slate-900`), Body `#475569` (`slate-600`), Muted `#64748B` (`slate-500`).

### 2.2 Tipografi (Google Fonts via `next/font/google`)
- **Heading Font:** `Plus Jakarta Sans` (Bold/ExtraBold, tracking `-0.02em`) — memberikan kesan modern, strategis, dan ramah.
- **Body Font:** `Inter` (Regular/Medium) — keterbacaan sangat tinggi di layar HP ukuran kecil.

---

## 3. Arsitektur Interaksi (Bagaimana Fitur Saling Berkaitan)

Buat sebuah React Context bernama `ConsultationContext` yang menyimpan state berikut:
- `selectedProblems: string[]` (Daftar masalah UMKM yang diklik pengunjung)
- `selectedServiceOrPackage: string` (Nama layanan atau paket harga yang dipilih)
- `portfolioReference: string | null` (Studi kasus yang menarik perhatian pengunjung, misal: "Java Tea")
- `isDrawerOpen: boolean` (Status buka/tutup modal Bottom Sheet konsultasi)

### Alur Keterkaitan Fitur (User Flow):
1. **Dari Section Masalah UMKM ke Solusi & Paket:**
   Pengunjung dapat mengklik/memilih satu atau beberapa kartu masalah di Section 6.3. Saat dipilih, kartu menyala (`border-blue-600 bg-blue-50/40`), dan muncul *floating banner* kecil di bawah section tersebut: *"Anda memilih X masalah bisnis. Lihat rekomendasi paket atau langsung diskusikan solusinya."*
2. **Dari Section Portofolio ke Konsultasi:**
   Di dalam setiap studi kasus (Java Tea, Javacafe, New Story), terdapat tombol *"Terapkan Pendekatan Ini di Bisnis Saya"*. Jika diklik, `portfolioReference` terisi dan langsung membuka **Smart WhatsApp Drawer**.
3. **Dari Section Layanan & Paket ke Smart WhatsApp Drawer:**
   Saat pengunjung mengklik tombol pada salah satu dari 6 Layanan atau 4 Paket Harga, `selectedServiceOrPackage` otomatis terisi dengan nama paket/layanan tersebut dan membuka **Smart WhatsApp Drawer**.
4. **Smart WhatsApp Drawer (Modal Bottom-Sheet Interaktif):**
   Ketika terbuka, pengunjung melihat ringkasan pilihan mereka (masalah yang dipilih + paket/layanan yang diminati) dan hanya perlu mengisi input singkat:
   - Nama (`input text`)
   - Nama Bisnis (`input text`)
   - Jenis Bisnis (`pilihan tombol cepat/chips`: Cafe/Kedai, Restoran/Kuliner, Minuman/Franchise, UMKM Produk/Jasa Lainnya)
   - Kebutuhan atau Masalah Utama (Otomatis terisi dari kartu masalah/paket yang diklik sebelumnya, namun tetap bisa diedit)
   - Instagram / Website Bisnis (`input text` opsional)
   Saat tombol **"Kirim ke WhatsApp Mas Anggit"** diklik, sistem meng-encode teks sesuai format template resmi ke `https://wa.me/6285870061793?text=...` dan membukanya di tab baru.

---

## 4. Spesifikasi Detail Per Section & Data Konten

### 4.1 Header & Mobile Bottom Navigation
- **Top Header (Desktop & Mobile):**
  - Kiri: Logo Monogram `AP` dalam kotak *rounded* berwarna `#0F172A` + teks **Anggit Prakoso**.
  - Tengah (Desktop): Navigasi *smooth-scroll* ke `#tentang`, `#layanan`, `#paket`, `#portofolio`, `#faq`.
  - Kanan: Tombol `Konsultasi` (Membuka Smart WhatsApp Drawer).
- **Sticky Mobile Bottom Bar (Khusus layar `< 768px`):**
  - Muncul melayang di bagian bawah layar HP agar mudah dijangkau ibu jari.
  - Berisi 3 akses cepat: `Paket Harga` (scroll ke `#paket`), `Bukti Karya` (scroll ke `#portofolio`), dan tombol hijau menonjol `Chat WA` (membuka Smart WhatsApp Drawer).

### 4.2 Hero Section
- **Badge Atas:** `Marketing • Branding • Digital Growth Partner`
- **Headline Utama:** "Bantu UMKM & Bisnis F&B Tampil Lebih Profesional, Promosi Lebih Terarah, dan Siap Bertumbuh."
- **Deskripsi Singkat:** Pendekatan praktis, strategis, dan realistis untuk pemilik bisnis yang ingin merapikan brand, konten, website, hingga promosi digital tanpa pusing dengan jargon yang rumit.
- **CTA Primer:** Tombol hijau/biru `"Konsultasi via WhatsApp"` (Membuka Smart WhatsApp Drawer).
- **CTA Sekunder:** Tombol outline `"Lihat Pengalaman"` (Scroll halus ke `#portofolio`).
- **Visual Kanan (Atau Atas pada Mobile):**
  - Frame foto personal Anggit Prakoso dengan rasio `4:5` (ukuran ideal `1200x1500 px`, format WebP/JPG, `priority` loading di Next.js, crop kepala hingga badan atas dengan background bersih).
  - **Floating Credibility Cards (Statistik Pengalaman):** Kartu melayang di sudut foto yang menampilkan highlight pencapaian nyata:
    1. `CMO / Marketing Leader` — Hazna Berkah Indonesia
    2. `225+ Total Outlet` — Akumulasi pertumbuhan brand yang ditangani (Java Tea 70+, Javacafe 125+, New Story 30+)
    3. `End-to-End Solution` — Strategi, Brand, Konten, Web & Ads

### 4.3 Interactive Diagnostic: Masalah UMKM (`#masalah`)
- **Instruksi UI:** Buat dengan judul *"Cek Kondisi Bisnis Anda: Mana yang Paling Sering Anda Rasakan?"* disertai sub-instruksi *"Ketuk masalah yang sedang dialami bisnis Anda saat ini (bisa pilih lebih dari satu):"*
- **6 Kartu Masalah Interaktif (Checkable Cards):**
  1. `"Sudah posting tetapi hasil belum terasa"`
  2. `"Desain konten berubah-ubah"`
  3. `"Promosi berjalan spontan"`
  4. `"Brand belum terlihat profesional"`
  5. `"Takut budget iklan terbuang"`
  6. `"Belum memiliki website yang meyakinkan"`
- **Fitur Fungsional:** Jika pengunjung memilih >= 1 kartu, tampilkan kotak rekomendasi dinamis di bawahnya:
  - Jika memilih masalah belum memiliki website -> Rekomendasikan **Website / Landing Page Bisnis**.
  - Jika memilih masalah desain/konten -> Rekomendasikan **Rapikan Brand & Konten**.
  - Jika memilih kombinasi acak/bingung mulai dari mana -> Rekomendasikan **Bedah Bisnis Digital (Mulai Rp350 ribu)** + Tombol `"Konsultasikan Masalah Ini"`.

### 4.4 Gambaran Solusi (3 Pilar Transformasi)
Tampilkan dalam 3 kartu berjejer (Bento style) dengan ikon SVG lokal yang bersih:
1. **Brand Lebih Mudah Dipercaya** — Tampilan bisnis yang rapi membuat pelanggan dan mitra lebih yakin sejak pandangan pertama.
2. **Konten Lebih Terarah** — Tidak lagi sekadar posting harian, tetapi memiliki pesan dan tujuan yang jelas untuk menarik pembeli.
3. **Promosi Digital Lebih Terukur** — Website dan iklan dijalankan dengan strategi yang sesuai kapasitas serta anggaran bisnis Anda.

### 4.5 Tentang Anggit (`#tentang`)
- **Layout:** Asymmetric Bento Grid (Foto Personal Anggit + Kartu Pengalaman + Kartu Filosofi Kerja).
- **Konten Utama:**
  - Posisi sebagai **CMO / Leader Marketing di Hazna Berkah Indonesia**.
  - Pengalaman langsung mengembangkan brand F&B: **Java Tea**, **Javacafe**, dan **New Story**.
  - Keahlian menyeluruh: Marketing, Branding, Konten, Website, Iklan Digital, dan Creative Direction.
- **Poin Pendekatan Kerja (Mengapa Berbeda dari Agensi Biasa):**
  - *Bukan sekadar jual desain atau postingan*, tapi melihat bisnis secara menyeluruh.
  - *Bahasa yang membumi*, tanpa istilah teknis yang membingungkan pemilik UMKM.
  - *Solusi realistis*, disesuaikan dengan tahap perkembangan dan budget bisnis.

### 4.6 Layanan (`#layanan`)
Tampilkan 6 kartu layanan. Setiap kartu memiliki tombol `"Tanyakan Layanan Ini"` yang otomatis memilih layanan tersebut di dalam Smart WhatsApp Drawer:
1. **Bedah Brand & Marketing Bisnis** — Review kondisi bisnis saat ini dan penyusunan *action plan* yang jelas.
2. **Rapikan Tampilan Brand** — Arah visual, *moodboard*, *tone* komunikasi, dan materi promosi agar terlihat sekelas brand besar.
3. **Konten Bisnis Lebih Rapi dan Menjual** — Perencanaan ide, kalender konten, *caption*, dan konsep *campaign*.
4. **Website / Landing Page Bisnis** — Struktur halaman yang menjual, *copywriting* persuasif, integrasi CTA WhatsApp, dan *basic SEO*.
5. **Iklan Online** — Penentuan target *audience*, konsep iklan, arahan *creative*, *monitoring*, dan evaluasi berkala.
6. **Pendampingan Marketing Bulanan** — Partner diskusi dan eksekusi strategi, *campaign*, evaluasi, laporan, serta rekomendasi pertumbuhan.

### 4.7 Paket & Estimasi Investasi (`#paket`)
Tampilkan 4 kartu paket harga yang transparan. Tambahkan *note* halus: *"Harga bersifat estimasi awal dan dapat disesuaikan dengan cakupan kebutuhan bisnis Anda."*

| Nama Paket | Peruntukan Utama | Harga Sementara | Badge UI |
| :--- | :--- | :--- | :--- |
| **Bedah Bisnis Digital** | Untuk bisnis yang belum tahu prioritas & harus mulai dari mana | **Mulai Rp350 ribu** | *Langkah Awal Terbaik* |
| **Rapikan Brand & Konten** | Untuk bisnis yang ingin tampil lebih rapi dan profesional | **Mulai Rp750 ribu** | — |
| **Website / Landing Page Bisnis** | Untuk memiliki halaman online profesional yang siap konversi | **Mulai Rp1,5 juta** | *Populer untuk UMKM* |
| **Marketing Jalan Bulanan** | Untuk pendampingan strategi dan eksekusi rutin setiap bulan | **Mulai Rp2,5 juta/bulan** | *Partner Pertumbuhan* |

*Fitur Fungsional:* Klik tombol `"Pilih Paket Ini"` pada kartu mana pun akan membuka Smart WhatsApp Drawer dengan paket tersebut sudah terpilih.

### 4.8 Portofolio & Studi Kasus Nyata (`#portofolio`)
- **UI/UX Mobile-Friendly:** Buat 3 Kartu Utama yang menonjolkan metrik pertumbuhan di bagian atas, dilengkapi **Interactive Tab (`Ringkasan` | `Strategi & Peran` | `Hasil & Insight`)** di dalam kartu agar halaman tetap ringkas di HP namun informasinya lengkap.
- **3 Data Portofolio Utama:**
  1. **Java Tea** (Kategori: F&B / Minuman & Kemitraan) — **Bertumbuh dari 2 menjadi 70+ Outlet**.
  2. **Javacafe** (Kategori: F&B / Cafe & Kuliner) — **Bertumbuh hingga 125+ Outlet**.
  3. **New Story** (Kategori: F&B / Modern Beverage) — **Bertumbuh hingga 30+ Outlet**.
- **Struktur Wajib di Dalam Setiap Studi Kasus:**
  - `Tantangan awal`: Kondisi atau masalah sebelum dibantu.
  - `Peran saya`: Kontribusi dan tanggung jawab Anggit.
  - `Pendekatan`: Strategi, aktivitas, dan pekerjaan yang dilakukan.
  - `Hasil`: Angka pertumbuhan outlet dan dampak bisnis yang dicapai.
  - `Insight`: Pelajaran praktis yang dapat diterapkan pada bisnis UMKM/F&B lain.
- **Tombol Kontekstual di Bawah Tiap Studi Kasus:** `"Ingin diskusi strategi seperti [Nama Brand]?"` -> Membuka Smart WhatsApp Drawer dengan referensi studi kasus terkait.

### 4.9 Proses Konsultasi (4 Langkah Mudah)
- **Judul Section:** "Mulai dari memahami bisnis Anda terlebih dahulu."
- **Visual:** Stepper horizontal di Desktop, Timeline vertikal yang rapi di Mobile:
  1. **Ceritakan kondisi bisnis** — Jelaskan profil bisnis, kendala marketing, target, dan kebutuhan saat ini.
  2. **Identifikasi prioritas** — Menentukan bagian yang paling mendesak untuk diperbaiki: brand, konten, website, promosi, atau strategi.
  3. **Dapatkan rekomendasi** — Memperoleh gambaran langkah realistis sesuai kondisi dan budget bisnis Anda.
  4. **Tentukan bentuk kerja sama** — Memilih layanan satuan atau paket pendampingan yang paling sesuai.

### 4.10 Testimonial (Dengan Transparansi & Etika Kredibilitas)
- **Aturan Ketat:** Gunakan *copy* testimonial di bawah ini dengan menambahkan **Badge Label Jelas** di atas section: `"Contoh Ilustrasi Dampak Kerja Sama (Segera diperbarui dengan ulasan langsung klien)"` dan **DILARANG** menampilkan nama klien palsu seolah-olah nyata.
- **3 Kartu Kutipan:**
  1. *“Mas Anggit membantu kami melihat marketing dengan lebih jelas. Dari yang sebelumnya hanya posting, sekarang kami punya arah konten dan promosi yang lebih terencana.”* — **Ilustrasi Pemilik Bisnis F&B**
  2. *“Yang kami suka adalah pendekatannya praktis. Rekomendasinya tidak hanya terlihat bagus, tetapi bisa disesuaikan dengan kondisi bisnis.”* — **Ilustrasi Pemilik UMKM Berkembang**
  3. *“Mas Anggit membantu merapikan cara brand kami tampil dan berkomunikasi. Kami jadi lebih percaya diri saat memperkenalkan bisnis kepada pelanggan.”* — **Ilustrasi Brand Lokal**

### 4.11 FAQ Interaktif (`#faq`)
Komponen *Accordion* yang bisa dibuka-tutup dengan animasi halus (`aria-expanded` accessible):
1. **Apakah layanan cocok untuk bisnis kecil?** (Jelaskan bahwa layanan justru dirancang bertahap sesuai skala dan budget UMKM).
2. **Belum tahu butuh layanan yang mana, apakah bisa konsultasi?** (Arahkan untuk diskusi awal via WhatsApp atau mulai dari paket Bedah Bisnis Digital).
3. **Apakah bisa hanya membuat website?** (Ya, tersedia layanan dan paket khusus Website / Landing Page Bisnis).
4. **Apakah tersedia kerja sama bulanan?** (Ya, melalui paket Marketing Jalan Bulanan untuk pendampingan rutin).

### 4.12 Final CTA Section & Footer
- **Headline CTA:** "Siap membuat bisnis Anda tampil lebih profesional dan promosinya lebih terarah?"
- **Tombol Aksi:**
  - Tombol Primer: `"Konsultasi via WhatsApp"` (Membuka Smart WhatsApp Drawer / `085870061793`).
  - Tombol Sekunder: `"Kirim Email"` (`mailto:anggit311@gmail.com`).
- **Footer Informasi Resmi:**
  - Nama & Positioning: **Anggit Prakoso** — Marketing, Branding & Digital Growth Partner.
  - Email: `anggit311@gmail.com`
  - WhatsApp: `085870061793`
  - Instagram: `@anggit_dwip` (https://instagram.com/anggit_dwip)
  - TikTok: `@makanbang.y` (https://tiktok.com/@makanbang.y)
  - Facebook: `@anggitdwi.prakoso` (https://facebook.com/anggitdwi.prakoso)

---

## 5. Persyaratan Teknis, SEO, & Kualitas Kode (Definition of Done)
1. **SEO & Metadata (`app/layout.tsx`):**
   - `<html lang="id" className="scroll-smooth">`
   - Title: `Anggit Prakoso | Marketing, Branding & Digital Growth Partner UMKM & F&B`
   - Meta Description & OpenGraph lengkap.
2. **Performa & Responsiveness:**
   - Menggunakan komponen `next/image` untuk foto Hero dengan properti `priority`.
   - Tidak ada *horizontal overflow* di layar HP ukuran `360px`.
   - Seluruh aset visual pendukung menggunakan inline SVG / Lucide Icons yang ringan.
3. **Format Output Pesan WhatsApp Otomatis:**
   Setiap kali pengunjung menekan tombol kirim di Smart WhatsApp Drawer, URL yang dihasilkan wajib memformat pesan persis seperti struktur ini:
   ```text
   Halo Mas Anggit, saya ingin konsultasi tentang bisnis saya.

   Nama: [Input Nama]
   Nama bisnis: [Input Nama Bisnis]
   Jenis bisnis: [Pilihan Jenis Bisnis]
   Kebutuhan atau masalah utama: [Otomatis gabungan Paket/Layanan + Masalah yang dipilih + Catatan tambahan]
   Instagram/website: [Input IG/Web]
   ```