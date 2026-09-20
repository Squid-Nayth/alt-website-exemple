"use client";

import { insightBlog } from "@/data/insight";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useStaggerChildren } from "@/library/animations/useStaggerChildren"; 

export default function InsightSection() {
  const [showAll, setShowAll] = useState(false);
  const blogsToShow = showAll ? insightBlog : insightBlog.slice(0, 3);

  const blogRef = useRef<HTMLDivElement>(null);
  
  useStaggerChildren(blogRef, ".insight-item", 0.2);

  return (
    <section className="py-12 px-6 md:px-14 lg:px-20 bg-white dark:bg-[#0F172A] transition-colors duration-300" ref={blogRef}>
      
      {/* Mobile View */}
      <div className="block md:hidden space-y-8">
        {blogsToShow.map((item, index) => (
          <Link key={index} to={item.url}
            className="flex flex-col gap-3 insight-item" 
            style={{ opacity: 0 }} 
          >
            <div className="relative w-full h-[250px] overflow-hidden rounded-xl shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-2xl text-alt-slate dark:text-white mt-2">
              {item.title}
            </h3>
            <p className="text-base text-neutral-500 dark:text-neutral-400">{item.date}</p>
          </Link>
        ))}

        {!showAll && (
          <div className="pt-4 insight-item" style={{ opacity: 0 }}>
            <Button
              variant="outline"
              className="text-lg font-medium text-alt-blue border-alt-blue hover:bg-alt-blue hover:text-white w-full py-6 transition-colors"
              onClick={() => setShowAll(true)}
            >
              Voir plus →
            </Button>
          </div>
        )}
      </div>

      {/* Tablet View */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
        {insightBlog.map((item, index) => (
          <Link key={index} to={item.url}
            className="flex flex-col gap-3 insight-item"
            style={{ opacity: 0 }} 
          >
            <div className="relative w-full h-[240px] overflow-hidden rounded-xl shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-lg text-alt-slate dark:text-white mt-2">{item.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.date}</p>
          </Link>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-10">
        {insightBlog.map((item, index) => (
          <Link key={index} to={item.url}
            className="flex flex-col gap-3 insight-item group"
            style={{ opacity: 0 }}
          >
            <div className="relative w-full h-[300px] overflow-hidden rounded-xl shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-xl text-alt-slate dark:text-white mt-2 group-hover:text-alt-blue transition-colors">{item.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}



