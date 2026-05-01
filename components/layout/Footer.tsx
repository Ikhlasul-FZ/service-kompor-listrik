"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-32 h-32 transition-transform group-hover:scale-105">
                <Image src="/images/log.png" alt="Logo" fill className="object-contain" priority />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                Amanda <span className="text-primary">House Teknik</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white tracking-tight">{t("footer.links_title")}</h4>
            <ul className="space-y-5">
              {[
                { name: t("nav.services"), href: "#services" },
                { name: t("nav.whyUs"), href: "#why-us" },
                { name: t("nav.projects"), href: "#gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white tracking-tight">{t("footer.services_title")}</h4>
            <ul className="space-y-5 text-muted-foreground">
              {t("services.list").map((service: any) => (
                <li key={service.title} className="hover:text-primary transition-colors cursor-pointer">{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white tracking-tight">{t("footer.contact_title")}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <a href="https://wa.me/6285190876262" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Call Us</p>
                    <p className="text-white font-bold">085190876262</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <a href="mailto:amandahouseteknik@gmail.com" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Email Us</p>
                    <p className="text-white font-bold">amandahouseteknik@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-white font-medium">Surabaya, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            {t("footer.rights")}
          </p>
          <div className="flex gap-8">
            <span className="text-sm text-muted-foreground">Certified Partner</span>
            <span className="text-sm text-muted-foreground">Licensed Plumber</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
