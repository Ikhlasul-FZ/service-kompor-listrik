"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ID" | "EN";

type Dictionary = {
  [key: string]: {
    [key: string]: any;
  };
};

const dictionary: Dictionary = {
  ID: {
    nav: {
      services: "Layanan",
      whyUs: "Keunggulan",
      pricing: "Harga",
      projects: "Proyek",
      contact: "Hubungi Kami",
    },
    hero: {
      badge: "Spesialis Water Heater Profesional",
      title_1: "Solusi Nyaman untuk ",
      title_italic: "Air Hangat ",
      title_2: "di Setiap Momen Anda",
      sub: "Rasakan kenyamanan mandi air hangat kapan saja tanpa khawatir. Didukung teknisi berpengalaman, kami siap memberikan layanan pemasangan dan perbaikan yang cepat, aman, dan bergaransi.",
      cta_quote: "Konsultasi Gratis Sekarang",
      cta_wa: "Chat via WhatsApp",
    },
    services: {
      tag: "Layanan Kami",
      title: "Solusi lengkap dan terpercaya untuk segala kebutuhan water heater Anda.",
      list: [
        { title: "Perbaikan Cepat", desc: "Atasi berbagai kendala water heater Anda dengan penanganan cepat dan tepat dari teknisi ahli." },
        { title: "Pemasangan Baru", desc: "Instalasi unit baru sesuai standar keamanan untuk kinerja mesin yang optimal dan awet." },
        { title: "Servis Berkala", desc: "Layanan cuci dan perawatan rutin untuk menjaga kebersihan air dan mencegah kerusakan." },
        { title: "Konsultasi & Pengecekan", desc: "Pemeriksaan menyeluruh untuk memastikan instalasi water heater di rumah Anda sangat aman digunakan." },
      ]
    },
    pricing: {
      tag: "Harga",
      title: "Harga jujur dan sederhana.",
      sub: "Kami memberikan estimasi jelas sebelum pekerjaan dimulai.",
      select: "Pilih Paket",
      popular: "Populer",
      plans: [
        { name: "Perawatan", price: "250rb", features: ["Pembersihan Sistem", "Cek Anode Rod", "Tes Termostat", "Inspeksi Penuh"] },
        { name: "Layanan Perbaikan", price: "350rb", features: ["Biaya Diagnosa", "Cek Suku Cadang", "Selesai Hari Ini", "Garansi Layanan"] },
        { name: "Pemasangan Baru", price: "500rb", features: ["Pemasangan Ahli", "Koneksi Pipa", "Tes Keamanan", "Panduan Penggunaan"] },
      ]
    },
    contact: {
      tag: "Hubungi Kami",
      title: "Butuh bantuan dengan water heater Anda?",
      sub: "Jangan biarkan air dingin mengganggu aktivitas Anda. Teknisi kami siap datang dan menyelesaikan masalah Anda hari ini juga.",
      form: {
        name: "Nama Anda",
        phone: "Nomor WhatsApp",
        message: "Jelaskan Kendala Anda",
        submit: "Kirim Pesan",
      }
    },
    whyUs: {
      tag: "Mengapa Memilih Kami",
      title: "Kenyamanan dan keamanan keluarga Anda adalah prioritas kami.",
      sub: "Lebih dari sekadar servis, kami memberikan ketenangan pikiran. Dengan teknisi berpengalaman dan pelayanan jujur, kami memastikan setiap pekerjaan selesai dengan sempurna.",
      list: [
        { title: "Berpengalaman", desc: "Ditangani langsung oleh teknisi spesialis yang telah bertahun-tahun menangani berbagai merk water heater." },
        { title: "Respons Cepat", desc: "Layanan panggil cepat di hari yang sama untuk mengembalikan kenyamanan mandi Anda secepat mungkin." },
        { title: "Transparan", desc: "Penjelasan masalah yang jujur dan estimasi biaya yang jelas sebelum pengerjaan dimulai." },
        { title: "Bergaransi", desc: "Kami memberikan jaminan kepuasan dengan garansi perbaikan dan pemasangan untuk setiap klien." },
      ],
      years: "Tahun Pengalaman",
      trusted: "Klien yang Terbantu"
    },
    gallery: {
      tag: "Portofolio Kami",
      title: "Dokumentasi hasil kerja keras tim kami di lapangan.",
      viewAll: "Lihat Semua Galeri"
    },
    footer: {
      tagline: "Spesialis water heater andalan Anda. Kami berkomitmen memberikan layanan yang cepat, aman, dan berkualitas tinggi untuk setiap keluarga.",
      links_title: "Akses Cepat",
      services_title: "Layanan Unggulan",
      contact_title: "Hubungi Kami",
      rights: "© 2026 Amanda House Tehnik. Hak cipta dilindungi undang-undang.",
    },
    testimonials: {
      tag: "Kata Mereka",
      title: "Kepuasan pelanggan adalah kebanggaan kami.",
      list: [
        { name: "Andi Saputra", role: "Pemilik Rumah", text: "Pelayanannya mantap! Teknisi datang tepat waktu, kerjanya rapi, dan water heater saya langsung bisa dipakai lagi. Sangat direkomendasikan." },
        { name: "Siska Wijaya", role: "Pemilik Kos", text: "Sudah langganan pakai jasa Amanda House Tehnik untuk kos-kosan saya. Servis berkalanya bikin mesin awet dan jarang rewel. Terima kasih!" },
        { name: "Budi Santoso", role: "Klien Perumahan", text: "Pelayanannya sangat jujur dan transparan dari awal. Teknisi juga ramah dan menjelaskan cara perawatannya dengan sabar. Puas banget!" },
      ]
    }
  },
  EN: {
    nav: {
      services: "Services",
      whyUs: "Why Us",
      pricing: "Pricing",
      projects: "Projects",
      contact: "Contact Us",
    },
    hero: {
      badge: "Professional Water Heater Specialists",
      title_1: "Convenient Solutions for  ",
      title_italic: "Hot Water ",
      title_2: "Anytime You Need It",
      sub: "Enjoy the comfort of a hot shower anytime without worry. Backed by experienced technicians, we’re ready to provide fast, safe, and guaranteed installation and repair services.",
      cta_quote: "Free Consultation Now",
      cta_wa: "Chat via WhatsApp",
    },
    services: {
      tag: "Our Services",
      title: "Comprehensive and reliable solutions for all your water heater needs.",
      list: [
        { title: "Quick Repairs", desc: "Resolve your water heater issues with fast and precise handling by our expert technicians." },
        { title: "New Installations", desc: "Safe and standard-compliant installation for optimal performance and machine durability." },
        { title: "Regular Maintenance", desc: "Routine cleaning and servicing to maintain water hygiene and prevent unexpected breakdowns." },
        { title: "Consultation & Inspection", desc: "Thorough check-ups to ensure your home's water heating system is perfectly safe to use." },
      ]
    },
    pricing: {
      tag: "Pricing",
      title: "Simple, honest pricing.",
      sub: "We provide clear estimates before any work begins.",
      select: "Select Plan",
      popular: "Popular",
      plans: [
        { name: "Maintenance", price: "250k", features: ["System Cleaning", "Anode Rod Check", "Thermostat Test", "Full Inspection"] },
        { name: "Repair Service", price: "350k", features: ["Diagnostic Fee", "Parts Check", "Same-Day Fix", "Service Warranty"] },
        { name: "New Installation", price: "500k", features: ["Expert Mounting", "Pipe Connections", "Safety Testing", "Usage Guidance"] },
      ]
    },
    contact: {
      tag: "Contact Us",
      title: "Need help with your water heater?",
      sub: "Don't let cold water disrupt your day. Our technicians are ready to come and solve your problems today.",
      form: {
        name: "Your Name",
        phone: "WhatsApp Number",
        message: "Describe your issue",
        submit: "Send Message",
      }
    },
    whyUs: {
      tag: "Why Choose Us",
      title: "Your family's comfort and safety is our top priority.",
      sub: "More than just a service, we deliver peace of mind. With experienced technicians and honest service, we ensure every job is done perfectly.",
      list: [
        { title: "Experienced", desc: "Handled directly by specialized technicians with years of experience across all water heater brands." },
        { title: "Fast Response", desc: "Same-day service to restore your shower's comfort as quickly as possible." },
        { title: "Transparent", desc: "Honest explanation of issues and clear cost estimates before any work begins." },
        { title: "Guaranteed", desc: "We ensure your satisfaction with formal warranties for every repair and installation service." },
      ],
      years: "Years of Experience",
      trusted: "Happy Clients"
    },
    gallery: {
      tag: "Our Portfolio",
      title: "Documentation of our team's hard work in the field.",
      viewAll: "View All Gallery"
    },
    footer: {
      tagline: "Your reliable water heater specialist. We are committed to providing fast, safe, and high-quality services for every family.",
      links_title: "Quick Links",
      services_title: "Key Services",
      contact_title: "Contact Us",
      rights: "© 2026 Amanda House Tehnik. All rights reserved.",
    },
    testimonials: {
      tag: "What They Say",
      title: "Customer satisfaction is our ultimate pride.",
      list: [
        { name: "Andi Saputra", role: "Homeowner", text: "Excellent service! The technician arrived on time, worked neatly, and my water heater was back to normal in no time. Highly recommended." },
        { name: "Siska Wijaya", role: "Property Owner", text: "I've been using Amanda House Tehnik's services for my boarding houses. Their regular maintenance keeps the machines durable and trouble-free. Thank you!" },
        { name: "Budi Santoso", role: "Client", text: "The service was very honest and transparent from the start. The technician was friendly and patiently explained the maintenance steps. Very satisfied!" },
      ]
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ID");

  // Load preferred language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let result = dictionary[lang];
    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
