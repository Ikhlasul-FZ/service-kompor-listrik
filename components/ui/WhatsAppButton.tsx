"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[60] flex flex-col items-end gap-4">
      {/* Universal Floating Button (Mobile & Desktop) */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.3)]",
          "hover:scale-110 active:scale-95 transition-all duration-300",
          "relative group border-4 border-white"
        )}
      >
        <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8" />
        
        {/* Minimalist Label Tooltip (Hidden on small mobile, visible on tablet/desktop hover) */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 hidden sm:block">
          <div className="bg-white text-slate-900 text-[10px] lg:text-xs font-bold px-4 py-2 lg:px-5 lg:py-3 rounded-xl shadow-2xl border border-slate-100 whitespace-nowrap flex items-center gap-2 lg:gap-3">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#25D366] rounded-full animate-pulse" />
            {lang === "ID" ? "Chat Sekarang" : "Chat Now"}
          </div>
        </div>
      </motion.a>
    </div>
  );
}
