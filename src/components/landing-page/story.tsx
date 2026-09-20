"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";

export default function Story() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const oneRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<HTMLDivElement>(null);

  useFadeIn(headRef, 0.3);
  useFadeIn(buttonRef, 0.3);
  useFadeIn(oneRef, 0.3);
  useFadeIn(twoRef, 0.3);

  return (
    <section id="a-propos" className="relative w-full overflow-x-hidden bg-alt-light dark:bg-[#0F172A] transition-colors duration-300 lg:px-20 lg:py-24 md:px-14 md:py-16 px-6 py-12 scroll-mt-32">
      <div className="flex flex-col gap-14 lg:gap-24 mx-auto max-w-[1400px]">
        {/* Qui nous sommes */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-10">
          <div className="w-full lg:w-1/2">
            <img src="/icones/consulting.jpg" alt="Équipe ALT" className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-alt-slate dark:text-white">Qui sommes-nous ?</h2>
            <p className="text-lg text-alt-slate dark:text-neutral-400 leading-relaxed">
              Nous sommes une Entreprise de Services du Numérique (ESN) basée à Libreville, Gabon, dédiée à l'accompagnement des entreprises dans leur transformation digitale. Notre expertise couvre toute la chaîne de valeur IT pour garantir votre succès.
            </p>
            <Link to="/a-propos">
              <Button className="w-fit flex items-center gap-2 bg-alt-blue hover:brightness-110 text-white rounded-md mt-4">
                Découvrir notre équipe
                <ArrowRight height={18} width={18} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Heading + Button for Insights */}
        <div id="ressources" className="flex flex-col md:flex-row lg:flex-row justify-between items-start gap-8 border-t border-neutral-300 pt-16 scroll-mt-32">
          <h3
            ref={headRef}
            className="text-left text-3xl md:text-4xl lg:text-5xl font-normal font-sans text-alt-slate dark:text-white leading-[140%] w-full md:w-[45%]"
          >
            Dernières actualités et ressources ALT
          </h3>

          <div ref={buttonRef} className="md:mt-10 lg:mt-[100px] mt-4">
            <Link to="/ressources">
              <Button className="flex items-center justify-center gap-3 bg-transparent border border-alt-slate dark:border-white hover:bg-alt-slate dark:hover:bg-white rounded-md px-6 group transition-colors">
                <span className="text-alt-slate dark:text-white lg:text-xl md:text-base text-base font-normal group-hover:text-white dark:group-hover:text-alt-slate transition-colors">
                  Explorer les ressources
                </span>
                <ArrowRight height={22} width={22} className="mt-[2px] text-alt-slate dark:text-white group-hover:text-white dark:group-hover:text-alt-slate transition-colors" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Story Cards */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-12 lg:gap-20 w-full">
          {/* Card 1 */}
          <div
            ref={oneRef}
            className="flex flex-col gap-6 w-full cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="/icones/cybersecurity.jpg"
                alt="Cybersécurité"
                className="w-full h-[300px] object-cover transition-all duration-500"
              />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[85%]">
              <h4 className="text-alt-slate dark:text-white text-2xl md:text-3xl leading-[140%] font-medium">
                Les enjeux de la cybersécurité en zone CEMAC
              </h4>
              <p className="text-base md:text-lg font-normal text-alt-slate dark:text-neutral-400 leading-relaxed opacity-80">
                Découvrez comment les entreprises s'adaptent face aux nouvelles menaces numériques en 2024.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={twoRef}
            className="flex flex-col gap-6 w-full lg:pt-20 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="/icones/server.jpg"
                alt="Infogérance"
                className="w-full h-[300px] object-cover transition-all duration-500"
              />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[85%]">
              <h4 className="text-alt-slate dark:text-white text-2xl md:text-3xl leading-[140%] font-medium">
                Pourquoi externaliser son SI avec l'infogérance ?
              </h4>
              <p className="text-base md:text-lg font-normal text-alt-slate dark:text-neutral-400 leading-relaxed opacity-80">
                Optimisez vos coûts et concentrez-vous sur votre cœur de métier grâce à nos solutions d'infogérance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



