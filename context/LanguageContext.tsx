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
      badge: "Keunggulan Terverifikasi",
      title_1: "Seni dalam ",
      title_italic: "kenyamanan.",
      title_2: " Ahli pemanas air.",
      sub: "Rasakan layanan premium untuk rumah Anda. Kami spesialis dalam pemasangan dan perbaikan cepat dengan fokus pada ketahanan dan keamanan.",
      cta_quote: "Dapatkan Penawaran",
      cta_wa: "Chat via WhatsApp",
      trust: ["Suku Cadang Premium", "Layanan Hari yang Sama", "Garansi 1 Tahun", "Teknisi Berlisensi"],
    },
    services: {
      tag: "Layanan Kami",
      title: "Solusi komprehensif untuk kebutuhan pemanas air Anda.",
      list: [
        { title: "Perbaikan", desc: "Diagnosis dan perbaikan ahli untuk semua model pemanas air." },
        { title: "Pemasangan", desc: "Pemasangan profesional dengan fokus pada keamanan dan efisiensi." },
        { title: "Perawatan", desc: "Pembersihan rutin untuk mencegah kebocoran dan memperpanjang umur unit." },
        { title: "Troubleshooting", desc: "Layanan diagnosa tingkat lanjut untuk masalah efisiensi." },
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
      tag: "Kontak",
      title: "Siap mengembalikan kenyamanan Anda?",
      sub: "Baik itu perbaikan darurat atau pemasangan baru, tim kami siap membantu Anda hari ini.",
      form: {
        name: "Nama Anda",
        phone: "Nomor Telepon",
        message: "Pesan",
        submit: "Kirim Permintaan",
      }
    },
    whyUs: {
      tag: "Keunggulan Kami",
      title: "Membangun kenyamanan melalui keunggulan teknis.",
      sub: "Kami percaya bahwa layanan berkualitas dimulai dengan kepercayaan. Tim bersertifikat kami berdedikasi untuk memberikan perawatan terbaik bagi rumah Anda.",
      list: [
        { title: "Pengalaman", desc: "Lebih dari 10 tahun layanan spesialis dalam industri pemanas air." },
        { title: "Efisiensi", desc: "Layanan hari yang sama untuk memastikan kenyamanan rumah Anda tidak terganggu." },
        { title: "Transparansi", desc: "Harga di depan tanpa biaya tersembunyi atau biaya tak terduga." },
        { title: "Dukungan", desc: "Tindak lanjut dedikasi dan garansi 1 tahun untuk semua layanan." },
      ],
      years: "Tahun Pengalaman",
      trusted: "Dipercaya oleh 5.000+ Klien"
    },
    gallery: {
      tag: "Proyek Kami",
      title: "Bukti komitmen kami terhadap kesempurnaan teknis.",
      viewAll: "Lihat Semua Arsip"
    },
    footer: {
      tagline: "Penyedia layanan pemanas air paling terpercaya di kawasan ini. Kualitas, keamanan, dan kecepatan adalah prioritas utama kami.",
      links_title: "Tautan Cepat",
      services_title: "Layanan Kami",
      contact_title: "Hubungi Kami",
      rights: "© 2026 Amanda House Tehnik Pro. Hak cipta dilindungi undang-undang.",
    },
    testimonials: {
      tag: "Testimoni",
      title: "Suara kepuasan pelanggan.",
      list: [
        { name: "Andi Saputra", role: "Pemilik Rumah", text: "Layanan luar biasa. Teknisi tepat waktu, sangat profesional, dan memperbaiki unit kami kurang dari satu jam. Sangat mengesankan." },
        { name: "Siska Wijaya", role: "Manajer Properti", text: "Saya mempercayakan semua unit apartemen kami kepada mereka. Program perawatan mereka telah menyelamatkan kami jutaan rupiah dari potensi perbaikan." },
        { name: "Budi Santoso", role: "Klien", text: "Harga paling transparan yang pernah saya temukan. Tidak ada kejutan, hanya pekerjaan berkualitas tinggi dan tim yang sangat sopan." },
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
      badge: "Certified Excellence",
      title_1: "The art of ",
      title_italic: "comfort.",
      title_2: " Expert water heating.",
      sub: "Experience premium service for your home. We specialize in fast, reliable installation and repair with a focus on longevity and safety.",
      cta_quote: "Get a Free Quote",
      cta_wa: "Chat via WhatsApp",
      trust: ["Premium Parts", "Same-Day Service", "1-Year Warranty", "Licensed Pros"],
    },
    services: {
      tag: "Our Services",
      title: "Comprehensive solutions for your water heating needs.",
      list: [
        { title: "Repair Service", desc: "Expert diagnosis and repair for all water heater models." },
        { title: "Installation", desc: "Professional setup for new units with focus on safety and efficiency." },
        { title: "Maintenance", desc: "Regular cleaning and inspections to prevent leaks and extend lifespan." },
        { title: "Troubleshooting", desc: "Advanced diagnostic services to identify efficiency issues." },
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
      tag: "Contact",
      title: "Ready to restore your comfort?",
      sub: "Whether it's an emergency repair or a new installation, our team is ready to help you today.",
      form: {
        name: "Your Name",
        phone: "Phone Number",
        message: "Message",
        submit: "Send Request",
      }
    },
    whyUs: {
      tag: "Why Choose Us",
      title: "Crafting comfort through technical excellence.",
      sub: "We believe that quality service starts with trust. Our certified team is dedicated to providing the highest level of care for your home.",
      list: [
        { title: "Experience", desc: "Over 10 years of specialized service in the water heating industry." },
        { title: "Efficiency", desc: "Same-day service to ensure your home's comfort is never compromised." },
        { title: "Transparency", desc: "Upfront pricing with no hidden fees or unexpected costs." },
        { title: "Support", desc: "Dedicated follow-up and 1-year warranty on all services." },
      ],
      years: "Years of Expertise",
      trusted: "Trusted by 5,000+ Clients"
    },
    gallery: {
      tag: "Our Projects",
      title: "Evidence of our commitment to technical perfection.",
      viewAll: "View All Archive"
    },
    footer: {
      tagline: "The most trusted water heater service provider in the region. Quality, safety, and speed are our top priorities.",
      links_title: "Quick Links",
      services_title: "Our Services",
      contact_title: "Contact Us",
      rights: "© 2026 Amanda House Tehnik Pro. All rights reserved.",
    },
    testimonials: {
      tag: "Testimonials",
      title: "Voices of satisfaction.",
      list: [
        { name: "Andi Saputra", role: "Homeowner", text: "Exemplary service. The technician was punctual, highly professional, and fixed our unit in under an hour. Truly impressive." },
        { name: "Siska Wijaya", role: "Property Manager", text: "I trust them with all our apartment units. Their maintenance program has saved us thousands in potential repairs." },
        { name: "Budi Santoso", role: "Client", text: "The most transparent pricing I've encountered. No surprises, just high-quality work and a very polite team." },
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
