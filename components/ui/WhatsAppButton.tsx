"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Sticky Mobile CTA - More Elegant */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-6 pointer-events-none">
         <motion.a
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            href="https://wa.me/6281234567890"
            className="flex items-center justify-center gap-3 bg-slate-900 text-white h-16 w-full rounded-2xl font-bold shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95 transition-transform pointer-events-auto"
         >
            <MessageCircle className="w-6 h-6 text-primary" />
            {lang === "ID" ? "Konsultasi Gratis via WhatsApp" : "Free Consultation via WhatsApp"}
         </motion.a>
      </div>

      {/* Floating Button for Desktop/Tablet */}
      <div className="hidden md:block fixed bottom-10 right-10 z-50">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-green-500/20",
            "hover:scale-110 active:scale-95 transition-all duration-300",
            "relative group border-4 border-white"
          )}
        >
          <MessageCircle className="w-8 h-8" />
          
          {/* Label Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
            <div className="bg-white text-slate-900 text-xs font-bold px-5 py-3 rounded-xl shadow-2xl border border-slate-100 whitespace-nowrap flex items-center gap-3">
              <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
              {lang === "ID" ? "Chat dengan teknisi kami" : "Chat with our expert"}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
