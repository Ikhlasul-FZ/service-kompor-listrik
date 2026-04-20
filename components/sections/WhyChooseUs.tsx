"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, BadgeDollarSign, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Shield, Clock, BadgeDollarSign, Headphones];

export function WhyChooseUs() {
  const { t } = useLanguage();
  const features = t("whyUs.list");

  return (
    <section id="why-us" className="relative min-h-screen lg:h-[100dvh] flex items-center bg-slate-50/50 overflow-hidden py-20 lg:py-0">
      <div className="container mx-auto px-6 relative z-10">
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
            <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] aspect-[4/5] max-h-[50vh] lg:max-h-[80vh] bg-white rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.02),transparent)]" />
              <div className="text-center p-8 lg:p-12 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-[80px] sm:text-[100px] lg:text-[180px] font-serif italic text-slate-100 leading-none mb-4 lg:mb-6"
                >
                  10+
                </motion.div>
                <p className="text-lg lg:text-xl font-medium text-slate-900 tracking-tight">{t("whyUs.years")}</p>
                <p className="text-[10px] lg:text-xs text-slate-400 uppercase tracking-widest mt-2 lg:mt-4">{t("whyUs.trusted")}</p>
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
