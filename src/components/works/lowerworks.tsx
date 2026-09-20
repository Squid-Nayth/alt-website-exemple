"use client"

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";


export default function LowerSection() {
    const describeRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useFadeIn(describeRef, 0.3);
    useFadeIn(imageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-24 md:px-14 md:py-20 px-8 py-16 bg-white">
            <div className="w-full flex lg:flex-row md:flex-row flex-col-reverse lg:gap-20 gap-12 items-center mb-16">
                
                <div ref={imageRef} className="lg:w-[50%] w-full overflow-hidden rounded-2xl shadow-xl">
                    <img
                        src="/icones/hero3.jpg"
                        alt="Projet E-commerce"
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div ref={describeRef} className="lg:w-[45%] justify-start items-start flex flex-col gap-6 bg-alt-light p-8 rounded-2xl shadow-sm border border-neutral-100 z-10 lg:-ml-20">
                    <h5 className="text-xl font-medium text-alt-blue uppercase tracking-wider">IT Consulting & Stratégie</h5>
                    <h4 className="lg:text-4xl text-2xl font-normal text-alt-slate leading-[140%]">
                        Leader e-Commerce Gabon
                    </h4>
                    <p className="text-neutral-600 leading-[160%] text-lg">
                        Accompagnement à la transformation digitale, refonte complète de la plateforme e-commerce et optimisation de la stratégie SEO pour doubler le trafic organique.
                    </p>
                    <Button className="justify-start gap-2 w-fit bg-transparent hover:bg-transparent px-0 border-b border-alt-slate hover:border-alt-blue rounded-none mt-4 transition-colors group">
                        <p className="text-alt-slate group-hover:text-alt-blue lg:text-lg text-base font-medium transition-colors">Voir l'étude de cas</p>
                        <ArrowRight height={20} width={20} className="text-alt-slate group-hover:text-alt-blue transition-colors" />
                    </Button>
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center text-center p-12 bg-alt-slate rounded-2xl mt-12 shadow-2xl">
                <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">Un projet en tête ?</h2>
                <p className="text-neutral-300 text-lg mb-8 max-w-2xl">
                    Parlons de vos défis et découvrons ensemble comment nos solutions peuvent propulser votre entreprise.
                </p>
                <Link to="/contact">
                    <Button className="bg-alt-blue hover:brightness-110 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2">
                        Contactez-nous
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}



