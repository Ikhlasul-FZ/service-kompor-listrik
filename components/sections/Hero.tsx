"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen lg:h-[100dvh] flex flex-col justify-center lg:justify-start pt-28 lg:pt-35 pb-20 overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.03),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-12 lg:mb-20"
          >
            <ShieldCheck className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-primary" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-8xl font-medium leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-8 tracking-tight text-slate-900"
          >
            {t("hero.title_1")}<span className="text-primary italic font-serif">{t("hero.title_italic")}</span><br className="hidden sm:block" />
            {t("hero.title_2")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base lg:text-xl text-slate-500 mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6"
          >
            <Button variant="primary" size="lg" className="h-14 lg:h-16 w-full sm:w-auto px-10 rounded-full text-base font-semibold shadow-2xl shadow-primary/20 group">
              {t("hero.cta_quote")}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="lg" className="h-14 lg:h-16 w-full sm:w-auto px-10 rounded-full text-base font-semibold text-slate-600 hover:text-primary transition-colors">
              <MessageSquare className="w-5 h-5 mr-2" />
              {t("hero.cta_wa")}
            </Button>
          </motion.div>

          {/* Minimalist Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 lg:mt-24 pt-10 border-t border-slate-50 flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-16 gap-y-6 lg:gap-y-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            {t("hero.trust").map((text: string) => (
              <span key={text} className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-900">
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative minimalist lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
    </section>
  );
}
