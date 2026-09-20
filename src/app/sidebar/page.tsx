"use client"
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"

import { useFadeIn } from "@/library/animations/useFadeIn"
import { useRef, useEffect, MutableRefObject } from "react"
import { useStaggerZoom } from "@/library/animations/useStaggerZoom"
import { navigation } from "@/data/navigation"

export default function SidebarPage() {
    const closeRef = useRef<HTMLDivElement>(null);
    const mageRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null); 
    const addRef = useRef<HTMLDivElement>(null);

    const menuItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const toggleMenu = (label: string) => {
        setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
    }

    const setMenuRef = (el: HTMLDivElement | null, index: number) => {
        if (el) {
            menuItemRefs.current[index] = el;
        }
    };
    
    useEffect(() => {
        return () => {
            menuItemRefs.current = [];
        };
    }, []);

    useFadeIn(closeRef, 0.3)
    useFadeIn(mageRef, 0.3)
    useFadeIn(addRef, 0.3)
    
    useStaggerZoom(menuItemRefs as MutableRefObject<(HTMLDivElement | null)[]>, 0.5);

    return (
        <div className="fixed inset-0 z-[9999] w-[100vw] h-[100vh] bg-alt-slate flex flex-col lg:px-10 lg:pt-10 md:px-10 md:py-7 lg:gap-2 px-7 py-7 overflow-y-auto">

            {/* Top-right Contact + Close */}
            <div ref={closeRef} className="flex lg:justify-end items-center lg:gap-8 lg:pr-10 justify-between shrink-0">
                <Link to="/contact" className="flex items-center gap-2 text-lg font-sans hover:text-alt-blue transition text-white">
                    Contact
                    <ArrowRight size={18} />
                </Link>
                <div className="w-[2px] h-[20px] bg-neutral-600 lg:visible md:invisible invisible" />
                <Link to="/" className="p-2">
                    <HiX className="w-8 h-8 text-white hover:text-alt-blue transition" />
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col lg:gap-15 gap-10 px-5 md:px-8 lg:px-12 md:py-8 pt-10 pb-12">
                <div className="flex lg:flex-row flex-col lg:justify-between gap-8">
                    <div ref={mageRef} className="lg:w-1/2 flex justify-center lg:justify-start lg:visible md:visible invisible">
                        <img
                            src="/icones/hero3.jpg"
                            alt="ALT Image"
                            className="rounded-md object-cover w-[600px] h-[400px] lg:mr-50 lg:mt-5 opacity-80"
                        />
                    </div>

                    <div ref={listRef} className="flex flex-col lg:items-end lg:gap-6 gap-4 lg:mt-0 md:mt-0 mt-[-200px] w-full lg:w-1/2">
                        {navigation.map((item, index) => (
                            <div 
                                key={item.label}
                                ref={(el: HTMLDivElement | null) => setMenuRef(el, index)}
                                className="w-full lg:text-right text-left flex flex-col items-start lg:items-end"
                                style={{ opacity: 0 }}
                            >
                                {item.children ? (
                                    <div className="w-full">
                                        <div className="flex justify-between lg:justify-end items-center w-full">
                                            <Link 
                                                to={item.url}
                                                className="text-white hover:text-alt-blue lg:text-5xl text-3xl font-sans font-normal transition-colors lg:order-2"
                                            >
                                                {item.label}
                                            </Link>
                                            <button onClick={() => toggleMenu(item.label)} className="lg:order-1 lg:ml-4 lg:mr-0 mr-4">
                                                <ChevronDown className={`w-8 h-8 text-white transition-transform ${openMenus[item.label] ? "rotate-180" : ""}`} />
                                            </button>
                                        </div>
                                        <div className={`flex flex-col gap-3 mt-4 lg:items-end items-start overflow-hidden transition-all duration-300 ${openMenus[item.label] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                            {item.children.map(child => (
                                                <Link 
                                                    key={child.url} 
                                                    to={child.url}
                                                    className="text-neutral-400 hover:text-white lg:text-2xl text-xl transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.url}
                                        className="text-white hover:text-alt-blue lg:text-5xl text-3xl font-sans font-normal w-full block transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex lg:flex-row md:flex-col flex-col lg:gap-8 md:gap-8 gap-4 lg:justify-between md:justify-center mt-10 lg:mt-auto border-t border-neutral-700 pt-8 shrink-0">
                    <div ref={addRef} className="flex flex-col lg:flex-row gap-5 lg:gap-20 w-full justify-between items-start lg:items-end">
                        <img src="/icones/logo-navbar.png" alt="ALT Logo" className="h-16 lg:h-20 object-contain" />
                        <div className="flex flex-col lg:items-end gap-1">
                            <p className="text-neutral-300 font-sans font-normal text-lg lg:text-right">
                                Libreville, Gabon
                            </p>
                            <p className="text-neutral-400 font-sans font-normal text-base lg:text-right">
                                +241 00 00 00 00 | contact@alt-gabon.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
