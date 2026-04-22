"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Clock, BadgeDollarSign, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Shield, Clock, BadgeDollarSign, Headphones];

export function WhyChooseUs() {
  const { t } = useLanguage();
  const features = t("whyUs.list");

  return (
    <section id="why-us" className="relative min-h-screen lg:h-[100dvh] flex items-center bg-slate-50/50 overflow-hidden py-20 lg:py-0">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 lg:mb-6">{t("whyUs.tag")}</h2>
            <h3 className="text-3xl lg:text-5xl font-medium mb-6 lg:mb-10 leading-tight text-slate-900 tracking-tight">
              {t("whyUs.title")}
            </h3>
            <p className="text-base lg:text-lg text-slate-500 mb-10 lg:mb-16 font-light leading-relaxed max-w-lg">
              {t("whyUs.sub")}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {features.map((f: any, index: number) => {
                const Icon = icons[index];
                return (
                  <div key={f.title} className="group">
                    <div className="flex items-center gap-3 mb-3 lg:mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-base lg:text-lg font-semibold text-slate-900">{f.title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] aspect-[4/5] max-h-[50vh] lg:max-h-[80vh] bg-slate-100 rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-100 relative group">
              <Image
                src="/images/wcu.webp"
                alt="Our Expertise"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 }
                  }}
                  className="glass p-6 lg:p-10 rounded-[40px] border border-white/30 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] flex items-center gap-6 relative"
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl rotate-12 z-20">
                    <Shield className="w-6 h-6" />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <span className="relative text-5xl lg:text-7xl font-serif italic text-primary leading-none">10+</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <p className="text-lg lg:text-xl font-bold text-slate-900 leading-tight mb-1">{t("whyUs.years")}</p>
                    <p className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{t("whyUs.trusted")}</p>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Subtle floating decorative element */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-32 h-32 lg:w-48 lg:h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
