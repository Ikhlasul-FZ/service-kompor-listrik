"use client";

import React from "react";
import { motion } from "framer-motion";
import { Power, Flame, Zap, AlertCircle, Settings2, Timer, Activity, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Flame, Power, Zap, Activity, AlertCircle, Settings2, Timer, Wrench];

export function Services() {
  const { t } = useLanguage();
  const servicesList = t("services.list");

  return (
    <section id="services" className="py-20 lg:py-32 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 lg:mb-6">{t("services.tag")}</h2>
          <h3 className="text-3xl lg:text-5xl font-medium tracking-tight text-black leading-tight mb-6 lg:mb-8">
            {t("services.title")}
          </h3>
          <p className="text-base lg:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            {t("services.sub")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-x-12 lg:gap-y-16">
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
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-500 mb-4 sm:mb-6 lg:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-black line-clamp-1">{service.title}</h4>
                <p className="text-[10px] sm:text-sm lg:text-base text-neutral-600 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
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
