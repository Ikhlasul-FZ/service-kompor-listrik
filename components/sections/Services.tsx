"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Zap, Droplets, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Wrench, Zap, Droplets, Search];

export function Services() {
  const { t } = useLanguage();
  const servicesList = t("services.list");

  return (
    <section id="services" className="py-20 lg:py-32 bg-white border-t border-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 lg:mb-6">{t("services.tag")}</h2>
          <h3 className="text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
            {t("services.title")}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {servicesList.map((service: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col group"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 lg:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h4 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-slate-900">{service.title}</h4>
                <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-light">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
