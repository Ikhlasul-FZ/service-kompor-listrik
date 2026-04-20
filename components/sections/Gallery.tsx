"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  { 
    id: "01",
    title: "Residential Elite", 
    desc: "Premium Private Installation", 
    color: "bg-slate-50" 
  },
  { 
    id: "02",
    title: "Skyline Tower", 
    desc: "Commercial Centralized System", 
    color: "bg-slate-100" 
  },
  { 
    id: "03",
    title: "Eco Maintenance", 
    desc: "Annual Precision Service", 
    color: "bg-slate-50" 
  },
  { 
    id: "04",
    title: "Industrial Hub", 
    desc: "High Capacity Heating", 
    color: "bg-slate-100" 
  },
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 lg:mb-6">{t("gallery.tag")}</h2>
            <h3 className="text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              {t("gallery.title")}
            </h3>
          </div>
          <button className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all duration-300 pb-2 border-b border-slate-100 hover:border-primary self-start lg:self-auto">
            {t("gallery.viewAll")}
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] rounded-[32px] lg:rounded-[48px] ${project.color} mb-6 lg:mb-8 overflow-hidden relative border border-slate-50 transition-transform duration-700 group-hover:scale-[0.98]`}>
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8 text-[10px] font-bold text-slate-300 tracking-widest">
                  {project.id}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20 backdrop-blur-sm">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-xs lg:text-sm text-slate-400 font-light tracking-wide">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
