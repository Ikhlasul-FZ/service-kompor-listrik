"use client";

import React from "react";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const posts = [
  {
    title: "Why Your Water Heater is Not Heating",
    excerpt: "Discover the most common reasons why your unit stopped producing hot water and how to fix them.",
    date: "April 15, 2024",
    slug: "why-water-heater-not-heating",
    category: "Troubleshooting"
  },
  {
    title: "Top 5 Maintenance Tips for Long Lifespan",
    excerpt: "Learn simple maintenance tasks you can do to keep your water heater running efficiently for years.",
    date: "April 10, 2025",
    slug: "maintenance-tips",
    category: "Tips"
  },
  {
    title: "Cost Estimation: Repair vs Replacement",
    excerpt: "Should you repair your old unit or buy a new one? We break down the costs for you.",
    date: "April 5, 2023",
    slug: "cost-estimation",
    category: "Guide"
  }
];

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">{t("blog.tag")}</h2>
          <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-tight">
            {t("blog.title")}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col bg-white border border-slate-100 rounded-[48px] overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
              <div className="aspect-[16/10] bg-slate-50 flex items-center justify-center relative overflow-hidden">
                <span className="text-slate-200 font-black text-6xl absolute -bottom-4 -right-4 italic opacity-20">
                  {post.category}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-500 font-light leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-bold text-slate-900 group/link text-sm uppercase tracking-widest hover:text-primary transition-colors">
                    {t("blog.readMore")}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
