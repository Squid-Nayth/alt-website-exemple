"use client";

import { insightBlog } from "@/data/insight";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useStaggerChildren } from "@/library/animations/useStaggerChildren"; 

const CATEGORIES = [
  "Cybersécurité",
  "Cloud & Infra",
  "Stratégie",
  "Management",
  "Innovation",
  "Réseau"
];

export default function InsightSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useStaggerChildren(containerRef, ".insight-animate", 0.15);

  const featured = insightBlog[0];
  const subFeatured = [insightBlog[1], insightBlog[2]];
  const allArticles = insightBlog.slice(3); // The rest of the articles

  return (
    <section className="py-16 md:py-24 px-6 md:px-14 lg:px-20 bg-white dark:bg-[#0F172A] transition-colors duration-300" ref={containerRef}>
      
      {/* SECTION 1: Dernières actualités (Grand angle layout) */}
      <div className="max-w-[1400px] mx-auto mb-32 insight-animate" style={{ opacity: 0 }}>
        <h2 className="text-3xl md:text-4xl font-light text-alt-slate dark:text-white mb-10 tracking-tight">
          Dernières actualités
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Featured Article (Left) */}
          <Link to={featured.url} className="lg:col-span-8 flex flex-col gap-4 group">
            <div className="w-full overflow-hidden">
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="w-full aspect-[16/10] md:aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">— {CATEGORIES[0]}</span>
              <h3 className="text-2xl md:text-4xl font-medium text-alt-slate dark:text-white leading-[120%] group-hover:text-alt-blue transition-colors">
                {featured.title}
              </h3>
              <p className="text-neutral-500 mt-2">{featured.date}</p>
            </div>
          </Link>

          {/* Sub Featured Articles (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {subFeatured.map((item, idx) => (
              <Link key={item.id} to={item.url} className="flex flex-col gap-3 group">
                <div className="w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">— {CATEGORIES[idx + 1]}</span>
                  <h4 className="text-xl font-medium text-alt-slate dark:text-white leading-[130%] group-hover:text-alt-blue transition-colors">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 2: Toutes les actualités (List layout) */}
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-alt-slate dark:text-white mb-10 tracking-tight insight-animate" style={{ opacity: 0 }}>
          Toutes les actualités
        </h2>
        
        <div className="flex flex-col w-full border-t border-neutral-200 dark:border-neutral-800">
          {allArticles.map((item, idx) => (
            <div 
              key={item.id} 
              className="flex flex-col md:flex-row gap-6 md:gap-10 py-8 border-b border-neutral-200 dark:border-neutral-800 insight-animate"
              style={{ opacity: 0 }}
            >
              {/* Image */}
              <Link to={item.url} className="w-full md:w-[350px] shrink-0 overflow-hidden group block">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              
              {/* Content */}
              <div className="flex-grow flex flex-col justify-between py-1">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">— {CATEGORIES[idx + 3] || "Actualité"}</span>
                  <Link to={item.url} className="group">
                    <h3 className="text-2xl lg:text-3xl font-medium text-alt-slate dark:text-white leading-[130%] group-hover:text-alt-blue transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-8 sm:mt-0 gap-4">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{item.date}</span>
                  <Link to={item.url} className="inline-flex items-center justify-center gap-2 px-6 py-2 border border-alt-slate dark:border-neutral-600 rounded-full text-sm font-medium text-alt-slate dark:text-neutral-200 hover:bg-alt-blue hover:border-alt-blue hover:text-white transition-all w-fit">
                    Lire la suite <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}



