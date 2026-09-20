"use client"

import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function Worksheet() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)
  const figeRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const sagaRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const tangoRef = useRef<HTMLDivElement>(null)

  useFadeIn(headRef, 0.3)
  useFadeIn(buttonRef, 0.3)
  useFadeIn(firstRef, 0.3)
  useFadeIn(figeRef, 0.3)
  useFadeIn(secondRef, 0.3)
  useFadeIn(sagaRef, 0.3)
  useFadeIn(thirdRef, 0.3)
  useFadeIn(tangoRef, 0.3)

  return (
    <section id="realisations" className="w-full max-w-full bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300 overflow-x-hidden lg:px-20 md:px-14 px-8 lg:py-24 md:py-16 py-12 scroll-mt-32">
      <div className="flex flex-col gap-12 lg:gap-20">
        
        {/* Header */}
        <div className="flex lg:flex-row md:flex-col flex-col justify-between gap-10">
          <h2
            ref={headRef}
            className="font-sans text-alt-slate dark:text-white font-normal leading-[140%] w-full md:w-[60%] lg:w-[50%] text-3xl md:text-4xl lg:text-5xl"
          >
            Nos réalisations : <br/>
            <span className="text-alt-blue font-semibold">Ils nous font confiance</span>
          </h2>

          <div ref={buttonRef} className="lg:mt-[100px] md:mt-6">
            <Link to="/projets">
              <Button className="flex flex-row justify-center gap-3 bg-transparent hover:bg-alt-blue hover:text-white transition-colors border border-alt-slate dark:border-white hover:border-alt-blue rounded-md px-6 group">
                <p className="text-alt-slate dark:text-white group-hover:text-white text-lg font-normal transition-colors">Tous nos projets</p>
                <ArrowRight height={22} width={22} className="text-alt-slate dark:text-white group-hover:text-white transition-colors" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col w-full lg:gap-36 md:gap-24 gap-16">
          
          {/* Case 1 */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-start items-start gap-8 lg:gap-0">
            <div ref={firstRef} className="flex flex-col gap-6 bg-transparent lg:ml-[10px] z-10 bg-white/90 dark:bg-[#0F172A]/90 p-6 lg:p-0">
              <h5 className="text-2xl font-normal text-left text-alt-blue">/ MINISTÈRE DE L'ÉCONOMIE</h5>
              <h4 className="lg:text-4xl text-2xl font-normal text-left text-alt-slate dark:text-white leading-[140%] lg:w-[80%]">
                Déploiement d'une infrastructure réseau sécurisée et modernisation du SI.
              </h4>
              <Link to="/realisations/ministere-economie">
                <Button className="justify-start gap-[9px] mt-2 bg-transparent hover:bg-transparent px-0">
                  <p className="text-alt-slate dark:text-white hover:text-alt-blue lg:text-xl md:text-lg text-base font-normal transition-colors border-b border-alt-slate dark:border-white hover:border-alt-blue">En savoir plus</p>
                  <ArrowRight height={23} width={23} className="text-alt-slate dark:text-white" />
                </Button>
              </Link>
            </div>

            <div ref={figeRef} className="lg:w-[80%] md:w-[50%] lg:ml-[-250px] lg:mr-[180px] w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src="/icones/hero1.avif"
                alt="Projet Réseau"
                className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Case 2 */}
          <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col-reverse lg:items-end lg:justify-end md:justify-end md:items-end justify-start lg:ml-[200px] gap-8">
            <div ref={sagaRef} className="lg:w-[65%] md:w-[50%] w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src="/icones/finance.jpg"
                alt="Développement sur mesure"
                className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div ref={secondRef} className="flex flex-col gap-6 bg-transparent z-10 bg-white/90 dark:bg-[#0F172A]/90 p-6 lg:p-0">
              <h5 className="text-2xl font-normal text-left text-alt-blue">/ GROUPE FINANCIER CEMAC</h5>
              <h4 className="lg:text-3xl text-2xl font-normal text-left text-alt-slate dark:text-white leading-[140%]">
                Développement d'une application <br />
                de gestion financière <br />
                sur mesure.
              </h4>
              <Link to="/realisations/groupe-financier">
                <Button className="justify-start gap-[9px] mt-2 bg-transparent hover:bg-transparent px-0">
                  <p className="text-alt-slate dark:text-white hover:text-alt-blue lg:text-xl md:text-lg text-base font-normal transition-colors border-b border-alt-slate dark:border-white hover:border-alt-blue">En savoir plus</p>
                  <ArrowRight height={23} width={23} className="text-alt-slate dark:text-white" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Case 3 */}
          <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col-reverse justify-start items-start lg:ml-[-200px] gap-10">
            <div ref={thirdRef} className="flex flex-col gap-6 bg-transparent z-10 bg-white/90 dark:bg-[#0F172A]/90 p-6 lg:p-0">
              <h5 className="text-2xl font-normal text-left text-alt-blue">/ STARTUP LOGISTIQUE</h5>
              <h4 className="lg:text-3xl text-xl font-normal text-left text-alt-slate dark:text-white leading-[140%]">
                Migration cloud complète <br />
                et mise en place <br />
                d'un plan de reprise <br />
                d'activité (PRA).
              </h4>
              <Link to="/realisations/startup-logistique">
                <Button className="justify-start gap-[9px] mt-2 bg-transparent hover:bg-transparent px-0">
                  <p className="text-alt-slate dark:text-white hover:text-alt-blue lg:text-xl md:text-lg text-base font-normal transition-colors border-b border-alt-slate dark:border-white hover:border-alt-blue">En savoir plus</p>
                  <ArrowRight height={23} width={23} className="text-alt-slate dark:text-white" />
                </Button>
              </Link>
            </div>

            <div ref={tangoRef} className="lg:w-[60%] md:w-[50%] w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src="/icones/hero2.avif"
                alt="Migration Cloud"
                className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
