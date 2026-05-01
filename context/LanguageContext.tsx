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
      title_1: "Amanda House Teknik",

      sub: "Melayani service semua merk kompor listrik free standing dan tanam di area Surabaya dan sekitarnya. Pelayanan ditempat siap dipanggil 24 jam.",
      cta_quote: "Konsultasi Gratis",
      cta_wa: "WhatsApp",
    },
    services: {
      tag: "Permasalahan Umum",
      title: "Masalah kompor listrik free standing dan tanam",
      sub: "Jika Anda mengalami kendala lain di luar daftar ini, jangan ragu untuk berkonsultasi dengan teknisi kami.",
      list: [
        { title: "Api Kecil", desc: "Api pada tungku kompor mengecil tidak seperti biasanya meskipun gas masih penuh." },
        { title: "Mati Total", desc: "Kompor tidak mau menyala sama sekali baik pemantik maupun sistem kelistrikannya." },
        { title: "Pemantik Mati", desc: "Sistem pemantik kompor tidak mengeluarkan percikan atau gagal menyalakan api." },
        { title: "Api Tidak Rata", desc: "Penyebaran api pada tungku tidak merata yang menyebabkan masakan lama matang." },
        { title: "Gagal Menyala", desc: "Kompor tidak bisa hidup padahal stok gas masih banyak dan regulator normal." },
        { title: "Konsleting Body", desc: "Terjadi aliran listrik (nyetrum) pada body kompor saat sedang disentuh atau digunakan." },
        { title: "Api Tidak Awet", desc: "Api kompor sering mati sendiri atau tidak bisa bertahan lama saat sedang memasak." },
        { title: "Ganti Spare Part", desc: "Menyediakan berbagai suku cadang asli untuk semua merk kompor, mulai dari elemen hingga panel kontrol." },
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
      title: "Dokumentasi hasil tim kami di lapangan.",
      viewAll: "Lihat Semua Galeri"
    },
    footer: {
      tagline: "Spesialis kompor listrik andalan Anda. Kami berkomitmen memberikan layanan yang cepat, aman, dan berkualitas tinggi untuk setiap rumah tangga.",
      links_title: "Akses Cepat",
      services_title: "Layanan Unggulan",
      contact_title: "Hubungi Kami",
      rights: "© 2026 Amanda House Teknik. Hak cipta dilindungi undang-undang.",
    },
    testimonials: {
      tag: "Kata Mereka",
      title: "Kepuasan pelanggan adalah kebanggaan kami.",
      list: [
        { name: "Andi Saputra", role: "Pemilik Rumah", text: "Sudah jadi langganan kalau ada kompor listrik ngadat. Soalnya bisa dipanggil kapan aja, saya butuh cepat.", image: "/images/avatar4.png" },
        { name: "Siska Wijaya", role: "Pemilik Kos", text: "Teknisi datang tepat waktu dan jelasin permasalahan dengan rinci. Sekarang kompor saya sudah stabil dan aman.", image: "/images/avatar5.png" },
        { name: "Budi Santoso", role: "Klien Perumahan", text: "Awalnya ragu, tapi ternyata hasilnya memuaskan. Kompor saya jadi normal lagi dan harganya juga transparan, ga ada biaya tambahan aneh-aneh.", image: "/images/avatar6.png" },
        { name: "Joko Susilo", role: "Ibu Rumah Tangga", text: "Senang banget akhirnya nemu tempat servis yang bener. Kompor induksi saya yang mati total sekarang sudah normal lagi.", image: "/images/avatar7.png" },
        { name: "Rita Amalia", role: "Pengusaha", text: "Respon sangat cepat, teknisi profesional. Sangat membantu untuk kebutuhan dapur resto saya yang mendadak.", image: "/images/avatar8.png" },
        { name: "Hendra Gunawan", role: "Pemilik Rumah", text: "Harga sesuai dengan kualitas. Ga cuma benerin, tapi juga dikasih tips perawatan supaya ga gampang rusak lagi.", image: "/images/avatar9.png" },
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
      title_1: "Amanda House Teknik",
      sub: "Repairing all brands of electric stoves in Surabaya and surrounding areas. On-site service, available for calls 24/7.",
      cta_quote: "Free Consultation Now",
      cta_wa: "Chat via WhatsApp",
    },
    services: {
      tag: "Common Issues",
      title: "Common electric stove problems that we handle, and many more.",
      sub: "If you encounter any other issues not listed here, feel free to consult with our technicians.",
      list: [
        { title: "Small Flame", desc: "Burner flame is smaller than usual even when the gas tank is full." },
        { title: "Total Failure", desc: "Stove won't turn on at all, both the igniter and electrical system are unresponsive." },
        { title: "Igniter Failure", desc: "Ignition system fails to spark or ignite the burner flame." },
        { title: "Uneven Flame", desc: "Flame distribution on the burner is uneven, causing inconsistent results." },
        { title: "Failed to Light", desc: "Stove won't light up even though gas levels are sufficient and regulator is fine." },
        { title: "Body Short Circuit", desc: "Electrical leakage or static shock felt on the stove body during operation." },
        { title: "Flame Instability", desc: "Flame keeps going out or fails to stay lit during the cooking process." },
        { title: "Spare Part Replacement", desc: "Providing original spare parts for all stove brands, from heating elements to control panels." },
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
      rights: "© 2026 Amanda House Teknik. All rights reserved.",
    },
    testimonials: {
      tag: "What They Say",
      title: "Customer satisfaction is our ultimate pride.",
      list: [
        { name: "Andi Saputra", role: "Homeowner", text: "They've become my go-to whenever my electric stove acts up. They're available for calls anytime, which is exactly what I need.", image: "/images/avatar4.png" },
        { name: "Siska Wijaya", role: "Property Owner", text: "The technician arrived on time and explained the issues in detail. My stove is now stable and safe to use.", image: "/images/avatar5.png" },
        { name: "Budi Santoso", role: "Client", text: "I was hesitant at first, but the results were satisfying. My stove is back to normal, and the pricing was transparent with no hidden fees.", image: "/images/avatar6.png" },
        { name: "Rina Amelia", role: "Housewife", text: "So happy I finally found a reliable service. My induction stove that was completely dead is now back to normal.", image: "/images/avatar7.png" },
        { name: "Hendra Gunawan", role: "Entrepreneur", text: "Very fast response, professional technicians. Extremely helpful for my restaurant kitchen's urgent needs.", image: "/images/avatar8.png" },
        { name: "Siti Khadijah", role: "Apartment Owner", text: "Quality service for a fair price. Not only did they fix it, but they also gave me maintenance tips to prevent future issues.", image: "/images/avatar9.png" },
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
