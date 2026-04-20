"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();
  const plans = t("pricing.plans");

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 lg:mb-6">{t("pricing.tag")}</h2>
          <h3 className="text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-6 lg:mb-8">
            {t("pricing.title")}
          </h3>
          <p className="text-base lg:text-lg text-slate-500 font-light">
            {t("pricing.sub")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan: any) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-10 rounded-[32px] lg:rounded-[48px] border flex flex-col h-full transition-all duration-700 ${
                plan.name.includes("Repair") || plan.name.includes("Perbaikan")
                  ? "bg-slate-900 border-slate-900 shadow-2xl shadow-slate-200 md:col-span-2 lg:col-span-1"
                  : "bg-white border-slate-100 hover:border-slate-200"
              }`}
            >
              {(plan.name.includes("Repair") || plan.name.includes("Perbaikan")) && (
                <div className="absolute top-6 right-8 lg:top-8 lg:right-10 text-[10px] font-bold text-primary uppercase tracking-widest">
                  {t("pricing.popular")}
                </div>
              )}
              <h4 className={`text-lg lg:text-xl font-semibold mb-2 ${plan.name.includes("Repair") || plan.name.includes("Perbaikan") ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h4>
              <div className="flex items-baseline gap-1 mb-8 lg:mb-10">
                <span className={`text-[10px] lg:text-xs font-medium ${plan.name.includes("Repair") || plan.name.includes("Perbaikan") ? "text-slate-400" : "text-slate-400"}`}>IDR</span>
                <span className={`text-4xl lg:text-5xl font-medium tracking-tighter ${plan.name.includes("Repair") || plan.name.includes("Perbaikan") ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
              </div>
              
              <ul className="space-y-4 lg:space-y-5 mb-10 lg:mb-12">
                {plan.features.map((f: string) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className={`text-sm font-light ${plan.name.includes("Repair") || plan.name.includes("Perbaikan") ? "text-slate-300" : "text-slate-500"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button
                  variant={plan.name.includes("Repair") || plan.name.includes("Perbaikan") ? "primary" : "outline"}
                  className={`w-full h-14 rounded-full font-bold transition-all duration-500 ${
                    !(plan.name.includes("Repair") || plan.name.includes("Perbaikan")) && "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                  }`}
                  size="lg"
                >
                  {t("pricing.select")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
