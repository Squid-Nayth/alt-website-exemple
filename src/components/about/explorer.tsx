"use client"

import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function AboutExplor() {
    const headeRef = useRef<HTMLHeadingElement>(null);
    const describeRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useFadeIn(headeRef, 0.3);
    useFadeIn(describeRef, 0.3);
    useFadeIn(buttonRef, 0.3);
    useFadeIn(imageRef, 0.3);

    return (
        <div className="max-w-full w-full bg-alt-slate dark:bg-[#0F172A] transition-colors duration-300 lg:px-20 lg:py-24 md:px-14 md:py-20 px-8 py-16">
            <div className="w-full flex flex-col gap-16">
                <div className="w-full flex flex-col gap-10">
                    <h2 ref={headeRef} className="font-sans font-medium text-start text-white lg:text-4xl md:text-3xl text-3xl leading-[140%]">
                        Nos Partenaires & Clients <br />
                        <span className="text-alt-blue">Un réseau de confiance</span>
                    </h2>

                    <div className="w-full flex flex-col lg:pl-[30%] lg:gap-10 gap-8">
                        <p ref={describeRef} className="text-neutral-300 font-normal font-sans lg:text-xl md:text-lg text-base leading-[160%]">
                            Nous collaborons avec les leaders technologiques mondiaux pour vous offrir des solutions de pointe. Nos clients, allant des PME aux institutions gouvernementales, nous font confiance pour sécuriser et optimiser leur avenir numérique.
                        </p>

                        <div ref={buttonRef} className="lg:ml-[10%]">
                            <Button className="justify-center gap-2 border-b border-transparent hover:border-white bg-transparent hover:bg-transparent px-0 transition-colors">
                                <p className="text-white text-lg font-medium">Devenir partenaire</p>
                                <ArrowRight height={20} width={20} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div ref={imageRef} className="w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="/icones/consulting.jpg"
                        alt="Réunion avec nos partenaires"
                        className="w-full aspect-[16/9] md:aspect-[21/9] object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
        </div>
    )
}


