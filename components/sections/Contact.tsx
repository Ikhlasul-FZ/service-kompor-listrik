"use client";

import React from "react";
import { MapPin, MessageSquare, PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">{t("contact.tag")}</h2>
            <h3 className="text-4xl lg:text-5xl font-medium mb-10 leading-tight text-black tracking-tight">
              {t("contact.title")}
            </h3>
            <p className="text-lg text-neutral-600 mb-12 font-light leading-relaxed max-w-md">
              {t("contact.sub")}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold mb-1">Number</p>
                  <p className="text-black font-semibold">085190876262</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-black font-semibold">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[60px] border border-neutral-100 shadow-[0_40px_100px_rgba(0,0,0,0.02)] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4463886463022!2d112.72363597537674!3d-7.303641671802792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb835ad5ba07%3A0x21e2cf98ef703d2c!2sJl.%20Gunungsari%20No.15%2C%20RT.06%2FRW.08%2C%20Sawunggaling%2C%20Kec.%20Wonokromo%2C%20Surabaya%2C%20Jawa%20Timur%2060242!5e0!3m2!1sen!2sid!4v1777634841942!5m2!1sen!2sid" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Office Address</p>
              <p className="text-black font-semibold text-sm">Jl. Gunungsari No.15, RT.06/RW.08, Sawunggaling, Kec. Wonokromo, Surabaya, Jawa Timur 60242</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
