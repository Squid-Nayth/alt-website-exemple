"use client"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function Insider() {
    
    const headRef = useRef<HTMLHeadingElement>(null);
    const graphRef = useRef<HTMLParagraphElement>(null);

    useFadeIn(headRef, 0.3);
    useFadeIn(graphRef, 0.3);

    return (
        <div className="max-w-full w-full bg-alt-light dark:bg-[#0F172A] transition-colors duration-300 lg:px-20 lg:pt-24 lg:pb-20 md:px-14 md:pt-20 px-8 pt-16 pb-12">
            <div className="w-full justify-between items-start flex flex-col lg:flex-row gap-10">
                <h1 ref={headRef} className="w-full lg:w-[60%] text-left lg:text-5xl md:text-4xl text-3xl font-normal font-sans text-alt-slate dark:text-white leading-[140%]">
                    Ressources & <br />
                    <span className="text-alt-blue">Actualités ALT</span>
                </h1>

                <p ref={graphRef} className="w-full lg:w-[40%] lg:text-right md:text-left text-left text-neutral-600 dark:text-neutral-400 font-sans font-normal lg:text-xl md:text-xl text-lg leading-[160%]">
                    Découvrez nos derniers articles, analyses de tendances et retours d'expérience pour vous accompagner dans votre transformation digitale.
                </p>
            </div>
        </div>
    )
}


