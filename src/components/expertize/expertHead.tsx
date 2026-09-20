"use client"
import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";

export default function ExpertWorks() {
    const headerRef = useRef<HTMLDivElement>(null);

    useFadeIn(headerRef, 0.3);

    return (
        <div className="max-w-full w-full bg-alt-slate lg:px-20 lg:py-24 md:px-14 md:py-20 px-8 py-16">
            <div className="w-full flex flex-col gap-10">
                <h1 ref={headerRef} className="text-white font-sans font-normal lg:text-5xl md:text-4xl text-3xl leading-[140%] text-center lg:text-left">
                    Nos Expertises <br/>
                    <span className="text-alt-blue">Un accompagnement complet et sur mesure</span>
                </h1>
                <p className="text-neutral-300 text-lg md:text-xl leading-[160%] lg:w-[70%] text-center lg:text-left mx-auto lg:mx-0">
                    Chez ALT, nous combinons savoir-faire technique et vision stratégique pour répondre aux défis numériques de votre entreprise. De la conception à la maintenance, nous sommes votre partenaire technologique de confiance en zone CEMAC.
                </p>
            </div>
        </div>
    )
}




