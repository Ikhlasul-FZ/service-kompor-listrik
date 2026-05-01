"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThumbsUp, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t("testimonials.list");
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Progress bar logic
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth * 0.4, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth * 0.4, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-[#050505] text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 opacity-30" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[10px] md:text-sm font-bold text-primary uppercase tracking-[0.3em]">{t("testimonials.tag")}</span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.2] md:leading-[1.1]"
            >
              {t("testimonials.title")}
            </motion.h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-3 md:gap-4"
          >
            <button
              onClick={scrollPrev}
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all duration-500 group shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.5)]"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-8 lg:gap-12 overflow-x-auto pb-12 md:pb-20 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testi: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="min-w-[85vw] md:min-w-[48vw] lg:min-w-[32vw] snap-start"
            >
              <div className="h-full p-8 md:p-10 lg:p-14 rounded-[32px] md:rounded-[50px] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/20 backdrop-blur-xl hover:border-primary transition-all duration-700 flex flex-col group relative overflow-hidden">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 md:top-10 md:right-10 w-8 h-8 md:w-12 md:h-12 text-white/5 group-hover:text-primary/10 transition-colors duration-700" />

                <div className="mb-6 md:mb-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
                  >
                    <ThumbsUp className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  </motion.div>
                </div>

                <p className="text-base md:text-xl lg:text-2xl font-light leading-relaxed text-neutral-200 mb-8 md:mb-12 relative z-10">
                  &quot;{testi.text}&quot;
                </p>

                <div className="mt-auto flex items-center gap-4 md:gap-6 relative z-10">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-[16px] md:rounded-[22px] overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-700 group-hover:rotate-3 group-hover:scale-110 shadow-xl">
                    <Image
                      src={testi.image}
                      alt={testi.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-xl text-white tracking-tight">{testi.name}</p>
                    <p className="text-[9px] md:text-xs text-primary font-bold uppercase tracking-[0.25em] mt-1 md:mt-1.5">{testi.role}</p>
                  </div>
                </div>

                {/* Subtle card number */}
                <span className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-[10px] md:text-sm font-mono text-white/10 group-hover:text-primary/20 transition-colors duration-700">
                  REF-{String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar Container */}
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary" 
              style={{ scaleX, originX: 0 }} 
            />
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
