"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.whyUs"), href: "#why-us" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-8 md:px-12 lg:px-16",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <div
          className={cn(
            "container mx-auto px-0 py-2.5 flex items-center justify-between transition-all duration-500",
            isScrolled
              ? "glass rounded-full shadow-lg border border-white/20 max-w-5xl px-8"
              : "max-w-7xl"
          )}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "relative transition-all duration-500 group-hover:scale-105",
              isScrolled ? "w-10 h-10 lg:w-12 lg:h-12" : "w-16 h-16 lg:w-20 lg:h-20"
            )}>
              <Image src="/images/log.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <span className={cn(
              "font-bold tracking-tight transition-all duration-500",
              isScrolled ? "text-black text-base" : "text-white text-lg"
            )}>
              Amanda<span className="text-primary">HouseTeknik</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors relative group",
                  isScrolled ? "text-neutral-600 hover:text-black" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <button
                onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
                className={cn(
                  "flex items-center gap-1.5 text-xs font-bold transition-colors uppercase tracking-widest",
                  isScrolled ? "text-neutral-400 hover:text-black" : "text-white/50 hover:text-white"
                )}
              >
                <Globe className="w-3.5 h-3.5" />
                {lang}
              </button>

              <a href="https://wa.me/6285190876262" target="_blank" rel="noopener noreferrer">
                <Button
                  variant={isScrolled ? "primary" : "outline"}
                  size="sm"
                  className={cn(
                    "gap-2 rounded-full px-6 font-bold transition-all duration-500",
                    !isScrolled && "border-white/20 text-white hover:bg-white/10"
                  )}
                >
                  <Phone className="w-4 h-4" />
                  {t("nav.contact")}
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-xl transition-colors",
              isScrolled ? "text-black hover:bg-neutral-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Half Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-2xl flex flex-col pt-24 px-10 pb-10 rounded-b-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-b border-neutral-100 max-h-[70vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-medium text-black hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto space-y-8">
              <div className="flex items-center justify-between py-5 border-y border-neutral-100">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Language</span>
                <div className="flex gap-3">
                  {["ID", "EN"].map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l as any)}
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[10px] transition-all",
                        lang === l ? "bg-black text-white shadow-lg" : "bg-neutral-100 text-neutral-400"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a href="https://wa.me/6285190876262" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" className="w-full h-14 rounded-full gap-3 text-sm shadow-xl shadow-primary/20">
                    <Phone className="w-4 h-4" />
                    {t("nav.contact")}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
