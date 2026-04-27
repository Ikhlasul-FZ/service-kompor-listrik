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
    <section className="relative min-h-screen lg:h-[100dvh] flex flex-col justify-center lg:justify-start pt-28 lg:pt-35 pb-20 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero3.webp"
          alt="Water Heater Service"
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-12 lg:mb-20"
          >
            <ShieldCheck className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-primary" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-8xl font-medium leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-8 tracking-tight text-white"
          >
            {t("hero.title_1")}<span className="text-primary italic font-serif">{t("hero.title_italic")}</span><br className="hidden sm:block" />
            {t("hero.title_2")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base lg:text-xl text-neutral-300 mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6"
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
                <MessageSquare className="w-5 h-5 mr-2 group-hover:text-black transition-colors" />
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
