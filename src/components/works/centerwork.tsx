"use client"

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";

export default function CenterWork() {
    const fibeRef = useRef<HTMLDivElement>(null);
    const fimageRef = useRef<HTMLDivElement>(null);
    const secobeRef = useRef<HTMLDivElement>(null);
    const seimageRef = useRef<HTMLDivElement>(null);

    useFadeIn(fimageRef, 0.3);
    useFadeIn(fibeRef, 0.3);
    useFadeIn(secobeRef, 0.3);
    useFadeIn(seimageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-24 md:px-14 md:py-16 px-10 py-12 bg-alt-slate">
            <div className="w-full flex flex-col gap-24">
                
                {/* Project 2 */}
                <div className="w-full justify-start items-center flex lg:flex-row md:flex-row flex-col-reverse gap-12 lg:gap-20">
                    <div ref={fimageRef} className="lg:w-[50%] w-full overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src="/icones/work1.png"
                            alt="Application Financière"
                            className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div ref={fibeRef} className="lg:w-[40%] justify-start items-start flex flex-col gap-6">
                        <h5 className="text-xl font-medium text-alt-blue uppercase tracking-wider">Développement Web</h5>
                        <h4 className="lg:text-4xl text-2xl font-normal text-white leading-[140%]">
                            Groupe Financier CEMAC
                        </h4>
                        <p className="text-neutral-300 leading-[160%] text-lg">
                            Développement d'une application de gestion financière sur mesure pour digitaliser les processus et optimiser le reporting multisites.
                        </p>
                        <Button className="justify-start gap-2 w-fit bg-transparent hover:bg-transparent px-0 border-b border-white hover:border-alt-blue rounded-none mt-4 transition-colors group">
                            <p className="text-white group-hover:text-alt-blue lg:text-lg text-base font-medium transition-colors">Voir l'étude de cas</p>
                            <ArrowRight height={20} width={20} className="text-white group-hover:text-alt-blue transition-colors" />
                        </Button>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="w-full lg:justify-end lg:items-center flex lg:flex-row md:flex-row flex-col gap-12 lg:gap-20 mt-10">
                    <div ref={secobeRef} className="lg:w-[40%] justify-start items-start flex flex-col gap-6">
                        <h5 className="text-xl font-medium text-alt-blue uppercase tracking-wider">Cloud & Infogérance</h5>
                        <h4 className="lg:text-4xl text-2xl font-normal text-white leading-[140%]">
                            Startup Logistique
                        </h4>
                        <p className="text-neutral-300 leading-[160%] text-lg">
                            Migration complète vers le cloud et mise en place d'un Plan de Reprise d'Activité (PRA) pour garantir une haute disponibilité des services 24/7.
                        </p>
                        <Button className="justify-start gap-2 w-fit bg-transparent hover:bg-transparent px-0 border-b border-white hover:border-alt-blue rounded-none mt-4 transition-colors group">
                            <p className="text-white group-hover:text-alt-blue lg:text-lg text-base font-medium transition-colors">Voir l'étude de cas</p>
                            <ArrowRight height={20} width={20} className="text-white group-hover:text-alt-blue transition-colors" />
                        </Button>
                    </div>

                    <div ref={seimageRef} className="lg:w-[50%] w-full overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src="/icones/hero2.avif"
                            alt="Migration Cloud"
                            className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}








