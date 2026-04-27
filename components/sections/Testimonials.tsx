"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t("testimonials.list");

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">{t("testimonials.tag")}</h2>
          <h3 className="text-4xl lg:text-5xl font-medium tracking-tight">
            {t("testimonials.title")}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {testimonials.map((t: any, i: number) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex gap-1 mb-8 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-serif italic mb-10 text-neutral-300 leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
