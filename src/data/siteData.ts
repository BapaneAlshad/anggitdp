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
  bio: "Saya Anggit Prakoso, CMO / Leader Marketing di Hazna Berkah Indonesia. Saya terlibat langsung dalam pengembangan Java Tea, Javacafe, dan New Story.",
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
  description: "Saya membantu UMKM, bisnis kuliner, dan brand lokal merapikan merek, konten, website, dan promosi agar pelanggan lebih mudah mengenal dan menghubungi Anda.",
  primaryCtaLabel: "Konsultasi via WhatsApp",
  secondaryCtaLabel: "Lihat Paket Harga",
  secondaryCtaHref: "/#paket",
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
    shortLabel: "Konten belum menghasilkan",
    description: "Konten rutin tayang, tapi belum banyak menarik calon pembeli.",
    recommendedPackageId: "rapikan-brand-konten",
  },
  {
    id: "desain-tidak-konsisten",
    title: "Desain konten berubah-ubah",
    shortLabel: "Desain belum konsisten",
    description: "Warna dan gaya yang sering berganti membuat merek sulit dikenali.",
    recommendedPackageId: "rapikan-brand-konten",
  },
  {
    id: "promosi-spontan",
    title: "Promosi berjalan spontan",
    shortLabel: "Promosi belum terencana",
    description: "Promosi baru dipikirkan saat penjualan sepi.",
    recommendedPackageId: "bedah-bisnis-digital",
  },
  {
    id: "brand-belum-profesional",
    title: "Brand belum terlihat profesional",
    shortLabel: "Tampilan merek belum rapi",
    description: "Produk sudah siap, tapi tampilannya belum meyakinkan pelanggan.",
    recommendedPackageId: "rapikan-brand-konten",
  },
  {
    id: "khawatir-budget-iklan",
    title: "Takut budget iklan terbuang",
    shortLabel: "Khawatir iklan boros",
    description: "Ingin beriklan, tapi belum yakin siapa yang perlu dijangkau.",
    recommendedPackageId: "bedah-bisnis-digital",
  },
  {
    id: "belum-punya-website",
    title: "Belum memiliki website yang meyakinkan",
    shortLabel: "Butuh website bisnis",
    description: "Pelanggan belum punya satu tempat untuk melihat penawaran dan menghubungi Anda.",
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
    description: "Ketahui apa yang perlu diperbaiki dulu dan langkah untuk memulainya.",
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
    description: "Buat tampilan dan gaya bahasa merek konsisten agar lebih mudah dikenali.",
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
    description: "Susun ide dan jadwal konten yang membantu pelanggan memahami penawaran Anda.",
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
    description: "Tampilkan penawaran bisnis dalam satu halaman dengan akses langsung ke WhatsApp.",
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
    description: "Arahkan iklan ke calon pembeli yang tepat dan tinjau hasilnya sesuai anggaran.",
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
    description: "Jalankan promosi secara rutin dengan pendampingan dan evaluasi hasil.",
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
    benefit: "Daftar prioritas dan rencana perbaikan bisnis.",
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
    benefit: "Acuan visual dan kalender konten.",
    badge: null,
    features: [
      "Acuan visual brand: arah tampilan dan moodboard.",
      "Arahan gaya bahasa brand dan materi promosi.",
      "Rencana ide dan kalender konten untuk panduan posting.",
      "Caption dan konsep campaign sesuai kebutuhan bisnis.",
    ],
    scopeNote: "Format materi dan jumlah konten disepakati sesuai kebutuhan sebelum kerja sama dimulai.",
    isPopular: false,
  },
  {
    id: "website-landing-page-bisnis",
    name: "Website / Landing Page Bisnis",
    subtitle: "Untuk memiliki halaman online profesional yang siap konversi.",
    priceText: "Mulai Rp1,5 juta",
    benefit: "Halaman penawaran dengan tombol WhatsApp.",
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
    benefit: "Pendampingan promosi dan laporan evaluasi.",
    badge: "Partner Pertumbuhan",
    features: [
      "Diskusi rutin untuk menentukan strategi dan prioritas marketing.",
      "Pendampingan eksekusi strategi dan campaign.",
      "Laporan kegiatan marketing beserta evaluasi berkala.",
      "Rekomendasi langkah berikutnya sesuai kondisi dan kapasitas bisnis.",
    ],
    scopeNote: "Jumlah sesi diskusi, jadwal laporan, dan cakupan eksekusi disepakati sebelum kerja sama dimulai.",
    isPopular: false,
  },
];

export const pricingNote = "Harga bersifat estimasi awal dan dapat disesuaikan dengan cakupan kebutuhan bisnis Anda.";

export const portfolioContentNote = "Pertumbuhan outlet adalah capaian masing-masing brand, bukan hasil kerja satu orang atau jaminan bagi bisnis lain.";
export const portfolioAdviceNote = "Saran ini untuk bisnis serupa, bukan catatan pekerjaan yang dilakukan untuk brand ini.";

export const portfolio: readonly PortfolioCaseStudy[] = [
  {
    id: "java-tea",
    brandName: "Java Tea",
    category: "F&B / Minuman & Kemitraan",
    metricValue: "70+",
    metricLabel: "outlet, dari 2 outlet",
    challenge: "Bagaimana menjaga tampilan dan pesan tetap konsisten saat jaringan outlet bertambah?",
    role: "Anggit terlibat langsung dalam pengembangan Java Tea.",
    approach: "Perjelas penawaran produk dan kemitraan, lalu gunakan arah visual dan pesan yang sama di materi promosi setiap outlet.",
    result: "Jaringan Java Tea bertumbuh dari 2 menjadi 70+ outlet.",
    insight: "Sebelum memperluas promosi, siapkan acuan tampilan dan pesan yang bisa digunakan oleh tim dan mitra.",
  },
  {
    id: "javacafe",
    brandName: "Javacafe",
    category: "F&B / Cafe & Kuliner",
    metricValue: "125+",
    metricLabel: "outlet",
    challenge: "Bagaimana membuat identitas dan penawaran kafe tetap jelas saat jaringan berkembang?",
    role: "Anggit terlibat langsung dalam pengembangan Javacafe.",
    approach: "Kenali kebutuhan pelanggan kafe, susun pesan penawaran yang mudah dipahami, lalu evaluasi hasil promosi secara berkala.",
    result: "Jaringan Javacafe bertumbuh hingga 125+ outlet.",
    insight: "Pastikan pelanggan bisa memahami penawaran yang sama saat melihat konten, promosi, atau mengunjungi outlet.",
  },
  {
    id: "new-story",
    brandName: "New Story",
    category: "F&B / Modern Beverage",
    metricValue: "30+",
    metricLabel: "outlet",
    challenge: "Bagaimana membuat merek minuman mudah dikenali tanpa membuat penawaran produk sulit dipahami?",
    role: "Anggit terlibat langsung dalam pengembangan New Story.",
    approach: "Tentukan calon pembeli dan keunggulan produknya, lalu susun gaya visual dan ide konten yang menjelaskan penawaran.",
    result: "Jaringan New Story bertumbuh hingga 30+ outlet.",
    insight: "Lengkapi tampilan yang menarik dengan pesan produk yang jelas dan pilih promosi sesuai anggaran.",
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
  { label: "Tentang", href: "/#tentang" },
  { label: "Paket", href: "/#paket" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Portofolio", href: "/portofolio/" },
  { label: "FAQ", href: "/#faq" },
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
    title: "Apa kendala bisnis Anda?",
    instruction: "Ketuk kendala untuk membuka formulir dengan kebutuhan yang sudah terisi.",
    selectionSummary: (count: number): string => `Anda memilih ${count} masalah bisnis. Lihat rekomendasi paket atau langsung diskusikan solusinya.`,
    consultationLabel: "Konsultasikan Masalah Ini",
  },
  solutions: { title: "Gambaran Solusi untuk Bisnis Anda" },
  about: { title: "Tentang Anggit", principlesTitle: "Pendekatan Kerja" },
  services: { title: "Layanan untuk Kebutuhan Bisnis Anda" },
  packages: { title: "Paket & Estimasi Investasi", deliverablesLabel: "Apa yang didapat", ctaLabel: "Pilih Paket Ini" },
  portfolio: {
    title: "Pengalaman & Portofolio",
    fieldLabels: {
      challenge: "Topik analisis",
      role: "Pengalaman Anggit",
      approach: "Saran strategi untuk bisnis serupa",
      result: "Capaian brand",
      insight: "Pelajaran untuk bisnis Anda",
    },
    ctaLabel: (brandName: string): string => `Diskusi dengan referensi ${brandName}`,
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
    secondaryCtaLabel: "Lihat Paket Harga",
    secondaryCtaHref: "#paket",
  },
} as const;

export const seo = {
  title: "Anggit Prakoso | Marketing, Branding & Digital Growth Partner UMKM & F&B",
  description: "Anggit Prakoso membantu UMKM dan bisnis F&B merapikan branding, konten, website, serta promosi digital. Temukan layanan, estimasi paket, pengalaman pengembangan brand, dan konsultasikan kebutuhan bisnis Anda via WhatsApp.",
  locale: "id_ID",
} as const;

export const presentation = {
  hero: {
    titleFirst: "Brand lebih kuat.",
    titleSecond: "Bisnis siap",
    titleAccent: "bertumbuh.",
    mobileCta: "Konsultasi via WA",
    photoLabel: "STRATEGI → EKSEKUSI",
    metricLabel: "Total outlet brand",
    metricNote: "dalam pengalaman pengembangan",
  },
  about: { title: "Pengalaman di bisnis F&B" },
  diagnostic: { label: "Mulai dari bisnis Anda" },
  services: {
    label: "Dari strategi ke eksekusi",
    description: "Pilih bantuan yang paling dibutuhkan bisnis Anda sekarang.",
    scopeLabel: "Lihat cakupan layanan",
  },
  portfolio: {
    label: "Pengalaman & perspektif",
    description: "Pengalaman pengembangan brand dan pelajaran untuk bisnis serupa.",
    noteLabel: "Konteks pengalaman & angka pertumbuhan",
  },
  packages: {
    label: "Investasi untuk langkah berikutnya",
    description: "Mulai dari yang paling dibutuhkan. Pilih bantuan yang sesuai dengan tahap dan prioritas bisnis Anda.",
  },
  process: { label: "Cara kita bekerja sama" },
  faq: { label: "Sebelum mulai berdiskusi", cta: "Masih ada pertanyaan? Mari diskusi" },
  closing: { label: "Langkah berikutnya dimulai dari obrolan", title: "Bisnis Anda layak", titleAccent: "naik kelas." },
  footer: { backToTop: "Kembali ke atas" },
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
  presentation,
} as const;
