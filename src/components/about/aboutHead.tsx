"use client"
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";

export default function UpperAbout() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useFadeIn(headRef, 0.3);
    useFadeIn(buttonRef, 0.3);
    useFadeIn(imageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-16 lg:pb-20 md:px-14 md:pt-12 md:pb-10 px-8 pt-8 pb-12 bg-white dark:bg-[#0F172A] transition-colors duration-300">
            <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <div className="w-full lg:w-1/2 flex flex-col gap-10">
                    <h1 ref={headRef} className="font-sans font-medium text-left lg:text-5xl md:text-4xl text-3xl text-alt-slate dark:text-white leading-[130%]">
                        ALT, votre partenaire de confiance pour une transformation numérique réussie.
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-[160%]">
                        Nous accompagnons les PME et TPE de la zone CEMAC dans le développement de solutions sur mesure, robustes et innovantes. Notre engagement est de fournir des services d'excellence alliant performance, sécurité et stratégie.
                    </p>

                    <div ref={buttonRef} className="flex flex-col sm:flex-row gap-6 mt-4">
                        <Link to="/contact">
                            <Button className="justify-center gap-2 bg-alt-blue hover:brightness-110 text-white rounded-md px-8 py-6">
                                <p className="text-white text-lg font-medium">Discuter de votre projet</p>
                                <ArrowRight height={20} width={20} />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div ref={imageRef} className="w-full lg:w-1/2">
                    <img
                        src="/icones/dev.jpg"
                        alt="L'équipe ALT en réunion"
                        className="w-full h-auto object-cover rounded-xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}






