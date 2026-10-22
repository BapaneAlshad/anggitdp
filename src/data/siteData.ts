import type {
  ConsultationStep,
  FaqItem,
  HeroContent,
  NavigationItem,
  PackageId,
  PackageItem,
  PortfolioCaseStudy,
  ProblemItem,
  Profile,
  ServiceItem,
  SocialContact,
  SolutionPillar,
  TestimonialItem,
} from "../types/site";

export const profile: Profile = {
  name: "Anggit Prakoso",
  fullName: "Anggit Dwi Prakoso",
  monogram: "AP",
  positioning: "Marketing, Branding & Digital Growth Partner",
  role: "CMO / Leader Marketing",
  company: "Hazna Berkah Indonesia",
  bio: "Saya Anggit Prakoso, CMO / Leader Marketing di Hazna Berkah Indonesia. Saya memiliki pengalaman langsung mengembangkan brand F&B Java Tea, Javacafe, dan New Story, dengan keahlian menyeluruh dalam marketing, branding, konten, website, iklan digital, dan creative direction. Saya membantu pemilik UMKM dan bisnis F&B menemukan langkah yang praktis untuk merapikan bisnis serta mengarahkan pertumbuhannya.",
  brands: ["Java Tea", "Javacafe", "New Story"],
  expertise: [
    "Marketing",
    "Branding",
    "Konten",
    "Website",
    "Iklan Digital",
    "Creative Direction",
  ],
  workingPrinciples: [
    "Bukan sekadar jual desain atau postingan, tetapi melihat bisnis secara menyeluruh.",
    "Bahasa yang membumi, tanpa istilah teknis yang membingungkan pemilik UMKM.",
    "Solusi realistis, disesuaikan dengan tahap perkembangan dan budget bisnis.",
  ],
};

export const hero: HeroContent = {
  badge: "Marketing • Branding • Digital Growth Partner",
  headline: "Bantu UMKM & Bisnis F&B Tampil Lebih Profesional, Promosi Lebih Terarah, dan Siap Bertumbuh.",
  description: "Pendekatan praktis, strategis, dan realistis untuk pemilik bisnis yang ingin merapikan brand, konten, website, hingga promosi digital tanpa pusing dengan jargon yang rumit.",
  primaryCtaLabel: "Konsultasi via WhatsApp",
  secondaryCtaLabel: "Lihat Pengalaman",
  secondaryCtaHref: "#portofolio",
  stats: [
    {
      id: "marketing-leadership",
      value: "CMO / Marketing Leader",
      label: "Hazna Berkah Indonesia",
    },
    {
      id: "outlet-growth",
      value: "225+ Total Outlet",
      label: "Akumulasi pertumbuhan brand yang ditangani: Java Tea 70+, Javacafe 125+, New Story 30+.",
    },
    {
      id: "end-to-end-solution",
      value: "End-to-End Solution",
      label: "Strategi, Brand, Konten, Web & Ads",
    },
  ],
};

export const problems: readonly ProblemItem[] = [
  {
    id: "posting-belum-berhasil",
    title: "Sudah posting tetapi hasil belum terasa",
    description: "Konten sudah rutin diunggah, tetapi arah pesan dan tujuan promosinya belum jelas. Mulai dengan merapikan ide, pesan, dan rencana konten agar lebih dekat dengan kebutuhan calon pembeli.",
    recommendedPackageId: "rapikan-brand-konten",
  },
  {
    id: "desain-tidak-konsisten",
    title: "Desain konten berubah-ubah",
    description: "Warna, gaya desain, dan cara berbicara bisnis sering berganti sehingga sulit dikenali. Susun arah visual dan komunikasi yang konsisten untuk konten serta materi promosi.",
    recommendedPackageId: "rapikan-brand-konten",
  },
  {
    id: "promosi-spontan",
    title: "Promosi berjalan spontan",
    description: "Promosi baru dipikirkan ketika penjualan terasa sepi, tanpa prioritas atau rencana yang jelas. Bedah kondisi bisnis terlebih dahulu untuk menentukan langkah yang paling perlu dikerjakan.",
    recommendedPackageId: "bedah-bisnis-digital",
  },
  {
    id: "brand-belum-profesional",
    title: "Brand belum terlihat profesional",
    description: "Produk sudah siap ditawarkan, tetapi tampilan dan materi komunikasinya belum membuat pelanggan yakin. Rapikan arah visual, pesan brand, dan materi konten sesuai karakter bisnis.",
    recommendedPackageId: "rapikan-brand-konten",
  },
  {
    id: "khawatir-budget-iklan",
    title: "Takut budget iklan terbuang",
    description: "Ingin mencoba iklan, tetapi belum yakin dengan target pembeli, pesan promosi, atau kesiapan bisnis. Tinjau kebutuhan dan prioritas terlebih dahulu agar anggaran digunakan dengan lebih terarah.",
    recommendedPackageId: "bedah-bisnis-digital",
  },
  {
    id: "belum-punya-website",
    title: "Belum memiliki website yang meyakinkan",
    description: "Calon pelanggan belum memiliki halaman yang jelas untuk mengenal bisnis, melihat penawaran, dan menghubungi Anda. Siapkan website atau landing page dengan informasi rapi dan tombol WhatsApp yang mudah ditemukan.",
    recommendedPackageId: "website-landing-page-bisnis",
  },
];

export const solutionPillars: readonly SolutionPillar[] = [
  {
    id: "brand-dipercaya",
    title: "Brand Lebih Mudah Dipercaya",
    description: "Tampilan bisnis yang rapi membuat pelanggan dan mitra lebih yakin sejak pandangan pertama.",
    iconName: "ShieldCheck",
  },
  {
    id: "konten-terarah",
    title: "Konten Lebih Terarah",
    description: "Tidak lagi sekadar posting harian, tetapi memiliki pesan dan tujuan yang jelas untuk menarik pembeli.",
    iconName: "Target",
  },
  {
    id: "promosi-terukur",
    title: "Promosi Digital Lebih Terukur",
    description: "Website dan iklan dijalankan dengan strategi yang sesuai kapasitas serta anggaran bisnis Anda.",
    iconName: "ChartNoAxesCombined",
  },
];

export const services: readonly ServiceItem[] = [
  {
    id: "bedah-brand-marketing",
    title: "Bedah Brand & Marketing Bisnis",
    description: "Melihat kondisi brand dan pemasaran bisnis Anda saat ini, memahami kendalanya, lalu menyusun urutan tindakan yang jelas agar Anda tahu harus mulai dari mana.",
    deliverables: [
      "Review kondisi brand dan marketing bisnis saat ini.",
      "Identifikasi kendala serta bagian yang paling perlu diperbaiki.",
      "Penyusunan action plan dengan prioritas langkah yang jelas.",
    ],
    ctaLabel: "Tanyakan Layanan Ini",
  },
  {
    id: "rapikan-tampilan-brand",
    title: "Rapikan Tampilan Brand",
    description: "Menyatukan tampilan dan cara bisnis berbicara agar lebih rapi, mudah dikenali, dan terlihat profesional di mata pelanggan maupun calon mitra.",
    deliverables: [
      "Arah visual sesuai karakter bisnis.",
      "Moodboard sebagai acuan gaya tampilan brand.",
      "Arahan tone komunikasi yang sesuai dengan pelanggan.",
      "Materi promosi yang mengikuti arah visual dan komunikasi brand.",
    ],
    ctaLabel: "Tanyakan Layanan Ini",
  },
  {
    id: "konten-bisnis",
    title: "Konten Bisnis Lebih Rapi dan Menjual",
    description: "Membantu bisnis memiliki ide dan jadwal konten dengan pesan yang jelas, sehingga posting tidak sekadar mengisi media sosial tetapi juga mendukung penawaran bisnis.",
    deliverables: [
      "Perencanaan ide konten sesuai kebutuhan bisnis.",
      "Kalender konten agar jadwal posting lebih teratur.",
      "Caption yang menjelaskan pesan dan penawaran bisnis.",
      "Konsep campaign untuk mengarahkan rangkaian promosi.",
    ],
    ctaLabel: "Tanyakan Layanan Ini",
  },
  {
    id: "website-landing-page",
    title: "Website / Landing Page Bisnis",
    description: "Menyusun halaman online yang membantu pengunjung memahami bisnis, melihat manfaat penawaran, dan melanjutkan percakapan melalui WhatsApp dengan mudah.",
    deliverables: [
      "Struktur halaman yang menjelaskan bisnis dan mengarahkan pengunjung pada penawaran.",
      "Copywriting persuasif yang mudah dipahami calon pelanggan.",
      "Integrasi tombol CTA WhatsApp untuk memudahkan konsultasi atau pertanyaan.",
      "Basic SEO sebagai dasar agar informasi halaman lebih mudah dipahami mesin pencari.",
    ],
    ctaLabel: "Tanyakan Layanan Ini",
  },
  {
    id: "iklan-online",
    title: "Iklan Online",
    description: "Mengarahkan iklan berdasarkan calon pembeli, pesan penawaran, dan kapasitas anggaran bisnis, disertai pemantauan serta evaluasi agar keputusan promosi lebih terukur.",
    deliverables: [
      "Penentuan target audience sesuai penawaran bisnis.",
      "Konsep iklan yang memiliki pesan dan tujuan jelas.",
      "Arahan creative untuk materi visual dan komunikasi iklan.",
      "Monitoring jalannya iklan.",
      "Evaluasi berkala sebagai dasar perbaikan promosi.",
    ],
    ctaLabel: "Tanyakan Layanan Ini",
  },
  {
    id: "pendampingan-marketing",
    title: "Pendampingan Marketing Bulanan",
    description: "Menjadi partner diskusi dan pelaksanaan marketing secara rutin, dari menyusun strategi serta campaign hingga meninjau hasil dan menentukan langkah pertumbuhan berikutnya.",
    deliverables: [
      "Diskusi dan pendampingan strategi marketing.",
      "Pendampingan eksekusi strategi serta campaign.",
      "Evaluasi kegiatan marketing secara berkala.",
      "Laporan untuk membantu memahami perkembangan kegiatan marketing.",
      "Rekomendasi pertumbuhan sesuai kondisi bisnis.",
    ],
    ctaLabel: "Tanyakan Layanan Ini",
  },
];

export const packages: readonly PackageItem[] = [
  {
    id: "bedah-bisnis-digital",
    name: "Bedah Bisnis Digital",
    subtitle: "Untuk bisnis yang belum tahu prioritas & harus mulai dari mana.",
    priceText: "Mulai Rp350 ribu",
    badge: "Langkah Awal Terbaik",
    features: [
      "Review kondisi brand dan marketing bisnis saat ini.",
      "Identifikasi kendala dan prioritas perbaikan.",
      "Rekomendasi langkah realistis sesuai kondisi serta budget bisnis.",
      "Action plan sebagai panduan langkah berikutnya.",
    ],
    isPopular: false,
  },
  {
    id: "rapikan-brand-konten",
    name: "Rapikan Brand & Konten",
    subtitle: "Untuk bisnis yang ingin tampil lebih rapi dan profesional.",
    priceText: "Mulai Rp750 ribu",
    badge: null,
    features: [
      "Arah visual dan moodboard untuk tampilan brand yang konsisten.",
      "Arahan tone komunikasi dan materi promosi.",
      "Perencanaan ide dan kalender konten bisnis.",
      "Caption dan konsep campaign sesuai kebutuhan bisnis.",
    ],
    isPopular: false,
  },
  {
    id: "website-landing-page-bisnis",
    name: "Website / Landing Page Bisnis",
    subtitle: "Untuk memiliki halaman online profesional yang siap konversi.",
    priceText: "Mulai Rp1,5 juta",
    badge: "Populer untuk UMKM",
    features: [
      "Struktur halaman yang membantu pengunjung memahami penawaran bisnis.",
      "Copywriting persuasif untuk menjelaskan manfaat dan mengarahkan tindakan.",
      "Integrasi CTA WhatsApp untuk memudahkan calon pelanggan menghubungi bisnis.",
      "Basic SEO untuk fondasi informasi website.",
    ],
    isPopular: true,
  },
  {
    id: "marketing-jalan-bulanan",
    name: "Marketing Jalan Bulanan",
    subtitle: "Untuk pendampingan strategi dan eksekusi rutin setiap bulan.",
    priceText: "Mulai Rp2,5 juta/bulan",
    badge: "Partner Pertumbuhan",
    features: [
      "Partner diskusi strategi marketing secara rutin.",
      "Pendampingan eksekusi strategi dan campaign.",
      "Evaluasi berkala dan laporan kegiatan marketing.",
      "Rekomendasi langkah pertumbuhan sesuai kondisi serta kapasitas bisnis.",
    ],
    isPopular: false,
  },
];

export const pricingNote = "Harga bersifat estimasi awal dan dapat disesuaikan dengan cakupan kebutuhan bisnis Anda.";

export const portfolioContentNote = "Nama brand, kategori, pengalaman pengembangan brand, dan angka outlet mengacu pada PRD. Uraian tantangan, cakupan peran, pendekatan, dan insight merupakan kerangka analisis untuk diskusi konsultasi, bukan catatan rinci aktivitas historis yang telah terverifikasi. Pertumbuhan outlet adalah capaian brand, bukan jaminan hasil bagi bisnis lain atau klaim hasil kerja satu orang.";

export const portfolio: readonly PortfolioCaseStudy[] = [
  {
    id: "java-tea",
    brandName: "Java Tea",
    category: "F&B / Minuman & Kemitraan",
    metricHighlight: "Bertumbuh dari 2 menjadi 70+ Outlet",
    challenge: "Tantangan yang menjadi fokus analisis: bagaimana brand minuman dan kemitraan mempertahankan tampilan serta pesan yang konsisten ketika berkembang dari 2 outlet menuju jaringan yang lebih luas.",
    role: "Anggit memiliki pengalaman langsung dalam pengembangan Java Tea. Dalam kerangka konsultasi ini, peran marketing dibahas melalui kaitan strategi bisnis, branding, konten, dan promosi; PRD tidak merinci pembagian tanggung jawab historis pada brand ini.",
    approach: "Kerangka pendekatan untuk diskusi: pahami penawaran minuman dan kemitraan, rapikan pesan serta arah visual, selaraskan konten dengan kebutuhan calon pelanggan dan mitra, lalu evaluasi promosi sesuai kapasitas bisnis. Rangkaian ini merupakan bahan analisis, bukan klaim urutan pekerjaan historis Java Tea.",
    result: "Java Tea bertumbuh dari 2 menjadi 70+ outlet sesuai metrik dalam PRD. Tidak tersedia rincian periode, omzet, atau kontribusi masing-masing aktivitas marketing untuk mengaitkan pertumbuhan tersebut dengan satu tindakan tertentu.",
    insight: "Pelajaran yang dapat dipertimbangkan pemilik UMKM minuman: siapkan pesan penawaran dan tampilan yang konsisten sebelum memperluas promosi, lalu tentukan langkah pertumbuhan sesuai kesiapan bisnis dan kemitraan.",
  },
  {
    id: "javacafe",
    brandName: "Javacafe",
    category: "F&B / Cafe & Kuliner",
    metricHighlight: "Bertumbuh hingga 125+ Outlet",
    challenge: "Tantangan yang menjadi fokus analisis: bagaimana brand cafe dan kuliner menjaga kejelasan identitas serta komunikasi penawaran ketika berkembang menjadi jaringan dengan 125+ outlet.",
    role: "Anggit memiliki pengalaman langsung dalam pengembangan Javacafe. Kerangka pembahasan peran mencakup hubungan marketing, branding, konten, dan creative direction; PRD tidak merinci tugas atau campaign historis yang ditangani pada brand ini.",
    approach: "Kerangka pendekatan untuk diskusi: kenali kebutuhan pelanggan cafe dan kuliner, susun pesan brand yang mudah dipahami, selaraskan materi promosi dengan penawaran, serta gunakan rencana konten dan evaluasi rutin untuk mengarahkan komunikasi. Ini adalah kerangka konsultasi, bukan dokumentasi aktivitas historis Javacafe.",
    result: "Javacafe bertumbuh hingga 125+ outlet sesuai metrik dalam PRD. Angka ini menggambarkan capaian jaringan brand; PRD tidak memberikan data omzet, periode pertumbuhan, atau ukuran efektivitas campaign tertentu.",
    insight: "Pelajaran yang dapat dipertimbangkan pemilik cafe dan usaha kuliner: pastikan pelanggan mudah memahami identitas serta penawaran bisnis, kemudian jaga konsistensi pesan saat menambah kegiatan promosi atau memperluas jaringan.",
  },
  {
    id: "new-story",
    brandName: "New Story",
    category: "F&B / Modern Beverage",
    metricHighlight: "Bertumbuh hingga 30+ Outlet",
    challenge: "Tantangan yang menjadi fokus analisis: bagaimana brand modern beverage membangun identitas yang mudah dikenali dan komunikasi produk yang jelas seiring perkembangan jaringan hingga 30+ outlet.",
    role: "Anggit memiliki pengalaman langsung dalam pengembangan New Story. Kerangka pembahasan peran menghubungkan branding, komunikasi konten, dan arah marketing; PRD tidak merinci tanggung jawab atau pelaksanaan promosi historis pada brand ini.",
    approach: "Kerangka pendekatan untuk diskusi: pahami karakter produk dan calon pembeli, tetapkan arah visual serta gaya komunikasi, susun ide konten yang menjelaskan penawaran, lalu tinjau kebutuhan promosi berdasarkan kondisi bisnis. Ini merupakan bahan diskusi strategi, bukan klaim aktivitas historis New Story.",
    result: "New Story bertumbuh hingga 30+ outlet sesuai metrik dalam PRD. Tidak ada data periode, omzet, atau atribusi hasil iklan dalam PRD untuk menyatakan dampak kuantitatif selain pertumbuhan outlet tersebut.",
    insight: "Pelajaran yang dapat dipertimbangkan pemilik bisnis minuman: tampilan yang menarik perlu didukung pesan produk yang jelas dan rencana konten yang terarah, dengan langkah promosi yang sesuai anggaran serta kesiapan bisnis.",
  },
];

export const consultationSteps: readonly ConsultationStep[] = [
  {
    stepNumber: 1,
    title: "Ceritakan kondisi bisnis",
    description: "Jelaskan profil bisnis, kendala marketing, target, dan kebutuhan saat ini.",
  },
  {
    stepNumber: 2,
    title: "Identifikasi prioritas",
    description: "Menentukan bagian yang paling mendesak untuk diperbaiki: brand, konten, website, promosi, atau strategi.",
  },
  {
    stepNumber: 3,
    title: "Dapatkan rekomendasi",
    description: "Memperoleh gambaran langkah realistis sesuai kondisi dan budget bisnis Anda.",
  },
  {
    stepNumber: 4,
    title: "Tentukan bentuk kerja sama",
    description: "Memilih layanan satuan atau paket pendampingan yang paling sesuai.",
  },
];

export const testimonialDisclosure = "Contoh Ilustrasi Dampak Kerja Sama (Segera diperbarui dengan ulasan langsung klien)";

export const testimonials: readonly TestimonialItem[] = [
  {
    id: "ilustrasi-bisnis-fnb",
    quote: "Mas Anggit membantu kami melihat marketing dengan lebih jelas. Dari yang sebelumnya hanya posting, sekarang kami punya arah konten dan promosi yang lebih terencana.",
    roleLabel: "Ilustrasi Pemilik Bisnis F&B",
  },
  {
    id: "ilustrasi-umkm-berkembang",
    quote: "Yang kami suka adalah pendekatannya praktis. Rekomendasinya tidak hanya terlihat bagus, tetapi bisa disesuaikan dengan kondisi bisnis.",
    roleLabel: "Ilustrasi Pemilik UMKM Berkembang",
  },
  {
    id: "ilustrasi-brand-lokal",
    quote: "Mas Anggit membantu merapikan cara brand kami tampil dan berkomunikasi. Kami jadi lebih percaya diri saat memperkenalkan bisnis kepada pelanggan.",
    roleLabel: "Ilustrasi Brand Lokal",
  },
];

export const faqs: readonly FaqItem[] = [
  {
    id: "layanan-bisnis-kecil",
    question: "Apakah layanan cocok untuk bisnis kecil?",
    answer: "Ya. Layanan dirancang bertahap mengikuti skala, kebutuhan, dan budget UMKM, termasuk bisnis F&B. Kita mulai dari bagian yang paling perlu diperbaiki terlebih dahulu, sehingga Anda tidak harus mengambil semua layanan sekaligus.",
  },
  {
    id: "belum-tahu-layanan",
    question: "Belum tahu butuh layanan yang mana, apakah bisa konsultasi?",
    answer: "Bisa. Ceritakan kondisi bisnis dan kendala Anda melalui konsultasi awal via WhatsApp. Jika membutuhkan peninjauan yang lebih terarah, paket Bedah Bisnis Digital mulai Rp350 ribu dapat menjadi langkah awal untuk mengidentifikasi prioritas dan menyusun action plan.",
  },
  {
    id: "hanya-website",
    question: "Apakah bisa hanya membuat website?",
    answer: "Bisa. Tersedia layanan dan paket khusus Website / Landing Page Bisnis mulai Rp1,5 juta. Cakupannya meliputi struktur halaman, copywriting, integrasi CTA WhatsApp, dan basic SEO, dengan kebutuhan akhirnya disepakati sesuai bisnis Anda.",
  },
  {
    id: "kerja-sama-bulanan",
    question: "Apakah tersedia kerja sama bulanan?",
    answer: "Ya. Paket Marketing Jalan Bulanan mulai Rp2,5 juta/bulan tersedia untuk pendampingan strategi dan eksekusi rutin, termasuk campaign, evaluasi, laporan, serta rekomendasi pertumbuhan. Bentuk kerja sama disesuaikan dengan prioritas dan kapasitas bisnis Anda.",
  },
];

export const contacts: SocialContact = {
  whatsappNumber: "6285870061793",
  whatsappDisplayNumber: "085870061793",
  email: "anggit311@gmail.com",
  instagram: "@anggit_dwip",
  tiktok: "@makanbang.y",
  facebook: "@anggitdwi.prakoso",
};

export const contactLinks = {
  email: `mailto:${contacts.email}`,
  instagram: "https://instagram.com/anggit_dwip",
  tiktok: "https://tiktok.com/@makanbang.y",
  facebook: "https://facebook.com/anggitdwi.prakoso",
} as const;

export const navigation: readonly NavigationItem[] = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Paket", href: "#paket" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "FAQ", href: "#faq" },
];

export const businessTypes: readonly string[] = [
  "Kuliner / F&B & Cafe",
  "Minuman / Franchise",
  "UMKM Produk/Jasa",
  "Lainnya",
];

export const sectionCopy = {
  header: { consultationLabel: "Konsultasi" },
  mobileBar: {
    packagesLabel: "Paket Harga",
    portfolioLabel: "Bukti Karya",
    consultationLabel: "Chat WA",
  },
  problems: {
    title: "Cek Kondisi Bisnis Anda: Mana yang Paling Sering Anda Rasakan?",
    instruction: "Ketuk masalah yang sedang dialami bisnis Anda saat ini (bisa pilih lebih dari satu):",
    selectionSummary: (count: number): string => `Anda memilih ${count} masalah bisnis. Lihat rekomendasi paket atau langsung diskusikan solusinya.`,
    consultationLabel: "Konsultasikan Masalah Ini",
  },
  solutions: { title: "Gambaran Solusi untuk Bisnis Anda" },
  about: { title: "Tentang Anggit", principlesTitle: "Pendekatan Kerja" },
  services: { title: "Layanan untuk Kebutuhan Bisnis Anda" },
  packages: { title: "Paket & Estimasi Investasi", ctaLabel: "Pilih Paket Ini" },
  portfolio: {
    title: "Portofolio & Studi Kasus Nyata",
    tabs: ["Ringkasan", "Strategi & Peran", "Hasil & Insight"],
    fieldLabels: {
      challenge: "Tantangan awal",
      role: "Peran saya",
      approach: "Pendekatan",
      result: "Hasil",
      insight: "Insight",
    },
    ctaLabel: (brandName: string): string => `Ingin diskusi strategi seperti ${brandName}?`,
    applyApproachLabel: "Terapkan Pendekatan Ini di Bisnis Saya",
  },
  consultation: { title: "Mulai dari memahami bisnis Anda terlebih dahulu." },
  testimonials: { title: "Ilustrasi Dampak Kerja Sama", disclosure: testimonialDisclosure },
  faq: { title: "Pertanyaan yang Sering Diajukan" },
  drawer: {
    title: "Konsultasi Bisnis via WhatsApp",
    nameLabel: "Nama",
    businessNameLabel: "Nama Bisnis",
    businessTypeLabel: "Jenis Bisnis",
    needsLabel: "Kebutuhan atau Masalah Utama",
    socialOrWebLabel: "Instagram / Website Bisnis",
    socialOrWebOptional: true,
    submitLabel: "Kirim ke WhatsApp Mas Anggit",
    closeLabel: "Tutup konsultasi",
  },
  finalCta: {
    headline: "Siap membuat bisnis Anda tampil lebih profesional dan promosinya lebih terarah?",
    primaryCtaLabel: "Konsultasi via WhatsApp",
    secondaryCtaLabel: "Email Anggit",
  },
} as const;

export const seo = {
  title: "Anggit Prakoso | Marketing, Branding & Digital Growth Partner UMKM & F&B",
  description: "Anggit Prakoso membantu UMKM dan bisnis F&B merapikan branding, konten, website, serta promosi digital. Temukan layanan, estimasi paket, pengalaman pengembangan brand, dan konsultasikan kebutuhan bisnis Anda via WhatsApp.",
  locale: "id_ID",
} as const;

export function getRecommendedPackage(selectedProblems: readonly string[]): PackageItem {
  const selected = problems.filter((problem) =>
    selectedProblems.some((value) => value.trim() === problem.id || value.trim() === problem.title),
  );
  const packageIds = new Set(selected.map((problem) => problem.recommendedPackageId));
  let recommendedId: PackageId = "bedah-bisnis-digital";

  if (packageIds.has("website-landing-page-bisnis")) {
    recommendedId = "website-landing-page-bisnis";
  } else if (packageIds.size === 1 && packageIds.has("rapikan-brand-konten")) {
    recommendedId = "rapikan-brand-konten";
  }

  const recommendedPackage = packages.find((item) => item.id === recommendedId);

  if (!recommendedPackage) {
    throw new Error(`Paket rekomendasi tidak ditemukan: ${recommendedId}`);
  }

  return recommendedPackage;
}

export const siteData = {
  profile,
  hero,
  problems,
  solutionPillars,
  services,
  packages,
  pricingNote,
  portfolio,
  portfolioContentNote,
  consultationSteps,
  testimonials,
  testimonialDisclosure,
  faqs,
  contacts,
  contactLinks,
  navigation,
  businessTypes,
  sectionCopy,
  seo,
} as const;
