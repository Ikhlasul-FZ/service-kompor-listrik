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
      badge: "Spesialis Kompor Listrik",
      title_1: "Dapur Lancar, ",
      title_italic: "Kompor Listrik ",
      title_2: "Siap Pakai",
      sub: "Perbaikan & perawatan cepat, aman, dan bergaransi oleh teknisi berpengalaman.",
      cta_quote: "Konsultasi Gratis",
      cta_wa: "WhatsApp",
    },
    services: {
      tag: "Layanan Kami",
      title: "Solusi lengkap dan terpercaya untuk segala kebutuhan kompor listrik Anda.",
      list: [
        { title: "Perbaikan Cepat", desc: "Atasi berbagai kendala kompor listrik Anda seperti mati total, tidak panas, atau korsleting." },
        { title: "Pemasangan Baru", desc: "Instalasi kompor tanam atau induksi sesuai standar keamanan untuk kinerja optimal." },
        { title: "Servis Berkala", desc: "Pembersihan dan pengecekan komponen internal untuk menjaga kestabilan suhu dan keamanan." },
        { title: "Konsultasi & Pengecekan", desc: "Pemeriksaan menyeluruh untuk memastikan instalasi listrik di dapur Anda aman digunakan." },
      ]
    },
    pricing: {
      tag: "Harga",
      title: "Harga jujur dan sederhana.",
      sub: "Kami memberikan estimasi jelas sebelum pekerjaan dimulai.",
      select: "Pilih Paket",
      popular: "Populer",
      plans: [
        { name: "Perawatan", price: "200rb", features: ["Pembersihan Sistem", "Cek Komponen", "Tes Kelistrikan", "Inspeksi Penuh"] },
        { name: "Layanan Perbaikan", price: "300rb", features: ["Biaya Diagnosa", "Cek Suku Cadang", "Selesai Hari Ini", "Garansi Layanan"] },
        { name: "Pemasangan Baru", price: "450rb", features: ["Pemasangan Ahli", "Koneksi Kabel", "Tes Keamanan", "Panduan Penggunaan"] },
      ]
    },
    contact: {
      tag: "Hubungi Kami",
      title: "Butuh bantuan dengan kompor listrik Anda?",
      sub: "Jangan biarkan kegiatan memasak terhenti karena kompor rusak. Teknisi kami siap datang ke rumah Anda hari ini juga.",
      form: {
        name: "Nama Anda",
        phone: "Nomor WhatsApp",
        message: "Jelaskan Kendala Kompor Anda",
        submit: "Kirim Pesan",
      }
    },
    whyUs: {
      tag: "Mengapa Memilih Kami",
      title: "Keamanan dan kenyamanan dapur Anda adalah prioritas kami.",
      sub: "Lebih dari sekadar servis, kami memberikan ketenangan pikiran. Dengan teknisi berpengalaman dan pelayanan jujur, kami memastikan setiap pekerjaan selesai dengan sempurna.",
      list: [
        { title: "Berpengalaman", desc: "Ditangani langsung oleh teknisi spesialis yang telah bertahun-tahun menangani berbagai merk kompor listrik." },
        { title: "Respons Cepat", desc: "Layanan panggil ke rumah di hari yang sama untuk memastikan Anda bisa segera memasak kembali." },
        { title: "Transparan", desc: "Penjelasan masalah yang jujur dan estimasi biaya yang jelas sebelum pengerjaan dimulai." },
        { title: "Bergaransi", desc: "Kami memberikan jaminan kepuasan dengan garansi perbaikan dan pemasangan untuk setiap unit." },
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
      tagline: "Spesialis kompor listrik andalan Anda. Kami berkomitmen memberikan layanan yang cepat, aman, dan berkualitas tinggi untuk setiap rumah tangga.",
      links_title: "Akses Cepat",
      services_title: "Layanan Unggulan",
      contact_title: "Hubungi Kami",
      rights: "© 2026 Amanda House Tehnik. Hak cipta dilindungi undang-undang.",
    },
    testimonials: {
      tag: "Kata Mereka",
      title: "Kepuasan pelanggan adalah kebanggaan kami.",
      list: [
        { name: "Andi Saputra", role: "Pemilik Rumah", text: "Pelayanannya mantap! Teknisi datang tepat waktu, kerjanya rapi, dan kompor listrik saya langsung bisa dipakai lagi. Sangat direkomendasikan." },
        { name: "Siska Wijaya", role: "Pemilik Kos", text: "Sudah langganan pakai jasa Amanda House Tehnik untuk dapur umum di kos saya. Servis berkalanya bikin kompor awet dan tidak cepat rusak. Terima kasih!" },
        { name: "Budi Santoso", role: "Klien Perumahan", text: "Pelayanannya sangat jujur dan transparan dari awal. Teknisi juga ramah dan menjelaskan cara penggunaan yang aman dengan sabar. Puas banget!" },
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
      badge: "Professional Electric Stove Specialists",
      title_1: "Smooth Cooking with  ",
      title_italic: "Electric Stoves ",
      title_2: "Always Ready to Use",
      sub: "Restore your cooking convenience without interruption. Backed by experienced technicians, we are ready to provide fast, safe, and guaranteed electric stove repair and maintenance services.",
      cta_quote: "Free Consultation Now",
      cta_wa: "Chat via WhatsApp",
    },
    services: {
      tag: "Our Services",
      title: "Comprehensive and reliable solutions for all your electric stove needs.",
      list: [
        { title: "Quick Repairs", desc: "Resolve your electric stove issues such as total failure, insufficient heat, or short circuits with expert handling." },
        { title: "New Installations", desc: "Safe and standard-compliant installation of built-in or induction stoves for optimal performance." },
        { title: "Regular Maintenance", desc: "Internal cleaning and component checks to maintain temperature stability and overall safety." },
        { title: "Consultation & Inspection", desc: "Thorough check-ups to ensure your kitchen's electrical setup is perfectly safe to use." },
      ]
    },
    pricing: {
      tag: "Pricing",
      title: "Simple, honest pricing.",
      sub: "We provide clear estimates before any work begins.",
      select: "Select Plan",
      popular: "Popular",
      plans: [
        { name: "Maintenance", price: "200k", features: ["System Cleaning", "Component Check", "Wiring Test", "Full Inspection"] },
        { name: "Repair Service", price: "300k", features: ["Diagnostic Fee", "Parts Check", "Same-Day Fix", "Service Warranty"] },
        { name: "New Installation", price: "450k", features: ["Expert Mounting", "Cable Connection", "Safety Testing", "Usage Guidance"] },
      ]
    },
    contact: {
      tag: "Contact Us",
      title: "Need help with your electric stove?",
      sub: "Don't let broken stoves stop your cooking activities. Our technicians are ready to come to your home today.",
      form: {
        name: "Your Name",
        phone: "WhatsApp Number",
        message: "Describe your issue",
        submit: "Send Message",
      }
    },
    whyUs: {
      tag: "Why Choose Us",
      title: "Your kitchen's safety and convenience is our top priority.",
      sub: "More than just a service, we deliver peace of mind. With experienced technicians and honest service, we ensure every job is done perfectly.",
      list: [
        { title: "Experienced", desc: "Handled directly by specialized technicians with years of experience across all electric stove brands." },
        { title: "Fast Response", desc: "Same-day home service to ensure you can get back to cooking as soon as possible." },
        { title: "Transparent", desc: "Honest explanation of issues and clear cost estimates before any work begins." },
        { title: "Guaranteed", desc: "We ensure your satisfaction with formal warranties for every repair and installation service." },
      ],
      years: "Years of Experience",
      trusted: "Happy Clients"
    },
    gallery: {
      tag: "Our Portfolio",
      title: "Documentation of our team's professional electric stove service in the field.",
      viewAll: "View All Gallery"
    },
    footer: {
      tagline: "Your reliable electric stove specialist. We are committed to providing fast, safe, and high-quality services for every household.",
      links_title: "Quick Links",
      services_title: "Key Services",
      contact_title: "Contact Us",
      rights: "© 2026 Amanda House Tehnik. All rights reserved.",
    },
    testimonials: {
      tag: "What They Say",
      title: "Customer satisfaction is our ultimate pride.",
      list: [
        { name: "Andi Saputra", role: "Homeowner", text: "Excellent service! The technician arrived on time, worked neatly, and my electric stove was back to normal in no time. Highly recommended." },
        { name: "Siska Wijaya", role: "Property Owner", text: "I've been using Amanda House Tehnik's services for the communal kitchen in my boarding house. Their regular maintenance keeps the stoves durable. Thank you!" },
        { name: "Budi Santoso", role: "Client", text: "The service was very honest and transparent from the start. The technician was friendly and patiently explained safe usage steps. Very satisfied!" },
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
