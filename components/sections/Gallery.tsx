"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    id: "01",
    title: "Project 1",
    desc: "Water Heater Installation",
    image: "/images/arsip1.webp"
  },
  {
    id: "02",
    title: "Project 2",
    desc: "Water Heater Installation",
    image: "/images/arsip2.webp"
  },
  {
    id: "03",
    title: "Project 3",
    desc: "Water Heater Service",
    image: "/images/arsip3.webp"
  },
  {
    id: "04",
    title: "Project 4",
    desc: "Water Heater Service",
    image: "/images/arsip4.webp"
  },
];

// Extended list for the "View All" modal
const allArchives = [
  ...projects,
  { id: "05", title: "Project 5", desc: "Water Heater Service", image: "/images/arsip5.webp" },
  { id: "06", title: "Project 6", desc: "Water Heater Service", image: "/images/arsip6.webp" },
  { id: "07", title: "Project 7", desc: "Water Heater Service", image: "/images/arsip7.webp" },
  { id: "08", title: "Project 8", desc: "Water Heater Service", image: "/images/arsip8.webp" },
  { id: "09", title: "Project 9", desc: "Water Heater Service", image: "/images/arsip9.webp" },
  { id: "10", title: "Project 10", desc: "Water Heater Service", image: "/images/arsip10.webp" },
  { id: "11", title: "Project 11", desc: "Water Heater Service", image: "/images/arsip11.webp" },
  { id: "12", title: "Project 12", desc: "Water Heater Service", image: "/images/arsip4.webp" },
];

export function Gallery() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 lg:mb-6">{t("gallery.tag")}</h2>
            <h3 className="text-3xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
              {t("gallery.title")}
            </h3>
          </div>
          <button
            onClick={() => setShowAll(true)}
            className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-primary transition-all duration-300 pb-2 border-b border-neutral-200 hover:border-primary self-start lg:self-auto"
          >
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
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="aspect-[4/5] rounded-[32px] lg:rounded-[48px] bg-neutral-100 mb-6 lg:mb-8 overflow-hidden relative border border-neutral-100 transition-transform duration-700 group-hover:scale-[0.98]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8 text-[10px] font-bold text-white/50 tracking-widest drop-shadow-md">
                  {project.id}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-black mb-1 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-xs lg:text-sm text-neutral-500 font-light tracking-wide">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      <AnimatePresence mode="wait">
        {showAll && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="container mx-auto px-8 md:px-12 lg:px-16 py-10 flex justify-between items-center border-b border-neutral-100">
              <div>
                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">{t("gallery.tag")}</h2>
                <h3 className="text-2xl font-medium text-black tracking-tight">Full Archive</h3>
              </div>
              <button 
                onClick={() => setShowAll(false)}
                className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all duration-500 shadow-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 lg:p-16">
              <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
                  {allArchives.map((item, i) => (
                    <motion.div
                      key={`${item.id}-${i}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <div className="aspect-[4/5] rounded-[24px] lg:rounded-[40px] bg-neutral-100 overflow-hidden relative mb-4 border border-neutral-200">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-black group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all z-[120]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[16/10] lg:aspect-auto lg:h-[80vh] rounded-[40px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullscreen Preview"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
