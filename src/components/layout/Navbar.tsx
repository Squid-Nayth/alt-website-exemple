"use client"

import { Link } from "react-router-dom";
import { FiMenu, FiChevronDown } from "react-icons/fi"
import { ArrowRight, Search, Moon, Sun } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { navigation } from "@/data/navigation"

export default function Navbar() {
  const [lang, setLang] = useState<"FR" | "EN">("FR")
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage on mount
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  })

  // Gérer le toggle dark mode simple et persistance
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors duration-300">
      <nav className="flex justify-between items-center lg:px-20 md:px-14 px-6 py-4">
        {/* Logo */}
          <Link to="/" className="cursor-pointer z-50 pt-2 pb-2 mr-4">
            <img 
              src={isDarkMode ? "/icones/logo-navbar-white.png" : "/icones/logo-navbar.png"} 
              alt="ALT Logo" 
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" 
            />
          </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navigation.map((item, idx) => (
            <li key={idx} className="relative group">
              {(item.children || item.megaMenu) ? (
                <Link 
                  to={item.url} 
                  className="flex items-center gap-1 cursor-pointer text-alt-slate dark:text-neutral-200 font-medium text-sm hover:text-alt-blue dark:hover:text-alt-blue transition-colors py-2"
                  onClick={() => {
                    if (item.url.includes('#')) {
                      const id = item.url.split('#')[1];
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                >
                  {item.label}
                  <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
              ) : (
                <Link 
                  to={item.url} 
                  className="text-alt-slate dark:text-neutral-200 font-medium text-sm hover:text-alt-blue dark:hover:text-alt-blue transition-colors py-2 block"
                  onClick={() => {
                    if (item.url.includes('#')) {
                      const id = item.url.split('#')[1];
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu (Standard) */}
              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#1E293B] border border-neutral-200 dark:border-neutral-700 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
                  {item.children.map((child, cIdx) => (
                    <Link key={cIdx} to={child.url} className="px-4 py-2 text-sm text-alt-slate dark:text-neutral-200 hover:bg-alt-light dark:hover:bg-[#0F172A] hover:text-alt-blue dark:hover:text-alt-blue transition-colors">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mega Menu */}
              {item.megaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-5xl bg-white dark:bg-[#1E293B] border border-neutral-200 dark:border-neutral-700 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-10 flex gap-16">
                  {item.megaMenu.map((col, cIdx) => (
                    <div key={cIdx} className="flex flex-col">
                      <h4 className="text-lg font-bold text-alt-slate dark:text-white mb-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ transitionDelay: `${cIdx * 100}ms` }}>
                        {col.title}
                      </h4>
                      <div className={`grid gap-x-12 gap-y-3 ${col.title === 'Secteurs' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {col.items.map((child, idx) => {
                          const IconComponent = (LucideIcons as any)[child.iconName];
                          return (
                            <Link 
                              key={idx} 
                              to={child.url} 
                              className="flex items-center gap-4 text-[15px] text-neutral-600 dark:text-neutral-300 hover:text-alt-blue dark:hover:text-alt-blue transition-colors group/link p-2 -ml-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-[#0F172A] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-500"
                              style={{ transitionDelay: `${cIdx * 100 + (idx + 1) * 50}ms` }}
                            >
                              {IconComponent && (
                                <IconComponent className="w-5 h-5 text-[#3b82f6] group-hover/link:text-alt-blue transition-colors shrink-0" strokeWidth={1.5} />
                              )}
                              <span className="font-medium">{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 lg:gap-5">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 w-4 h-4 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="bg-neutral-100 dark:bg-neutral-800 border-none rounded-full pl-9 pr-4 py-1.5 text-sm text-alt-slate dark:text-neutral-200 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-alt-blue/30 w-40 xl:w-48 transition-all"
            />
          </div>

          {/* Dark Mode Toggle Animé */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex relative items-center w-[60px] h-8 rounded-full p-1 bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300 overflow-hidden group"
            aria-label="Toggle Dark Mode"
          >
            {/* Background slider */}
            <div className={`absolute w-[26px] h-[26px] bg-white dark:bg-alt-blue rounded-full shadow-md transition-transform duration-500 ease-out flex items-center justify-center ${isDarkMode ? 'translate-x-[26px]' : 'translate-x-0'}`}>
              <Sun className={`w-4 h-4 text-amber-500 transition-all duration-500 absolute ${isDarkMode ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
              <Moon className={`w-4 h-4 text-white transition-all duration-500 absolute ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} />
            </div>
          </button>

          {/* Garis pemisah */}
          <div className="hidden lg:block w-[1px] h-[24px] bg-neutral-300" />

          {/* Language Switcher */}
          <button 
            onClick={() => setLang(l => l === "FR" ? "EN" : "FR")}
            className="hidden lg:flex items-center text-sm font-bold text-alt-slate dark:text-neutral-200 hover:text-alt-blue dark:hover:text-alt-blue transition-colors"
          >
            {lang}
          </button>

          <Link to="/contact">
            <Button className="hidden lg:flex items-center gap-2 bg-alt-blue hover:brightness-110 text-white rounded-md transition-all duration-300">
              <span className="text-sm font-semibold">Contact</span>
              <ArrowRight height={16} width={16} className="mt-[1px]" />
            </Button>
          </Link>

          {/* Sidebar / Menu Button for Mobile */}
          <Link to="/sidebar" className="lg:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200">
            <FiMenu className="w-6 h-6 text-alt-slate dark:text-neutral-200" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
