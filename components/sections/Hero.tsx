"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Electric Stove Service"
          fill
          className="object-cover opacity-75 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-12 lg:mb-16"
          >
            <ShieldCheck className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-primary" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[8.5vw] sm:text-5xl md:text-6xl lg:text-8xl font-medium leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-10 tracking-tight text-white whitespace-nowrap"
          >
            {t("hero.title_1")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 mb-10 lg:mb-14 max-w-2xl leading-relaxed font-light px-4 sm:px-0"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 w-full sm:w-auto px-4"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="h-14 lg:h-16 w-full px-10 rounded-full text-base font-semibold shadow-2xl shadow-primary/20 group">
                {t("hero.cta_quote")}
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://wa.me/6285190876262"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" size="lg" className="h-14 lg:h-16 w-full px-10 rounded-full text-base font-semibold text-white hover:text-black hover:bg-white transition-all bg-white/5 backdrop-blur-sm border border-white/10 group">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5 mr-2 group-hover:text-[#25D366] transition-colors"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("hero.cta_wa")}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative minimalist lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
