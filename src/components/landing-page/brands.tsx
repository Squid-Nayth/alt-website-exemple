"use client"
import { Button } from "../ui/button"
import { ArrowRight, Code, CloudCog, Server, Mail, Users, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function VisionBrand() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const graphRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const factsRef = useRef<HTMLDivElement>(null)

  useFadeIn(headRef, 0.3)
  useFadeIn(graphRef, 0.3)
  useFadeIn(gridRef, 0.3)
  useFadeIn(factsRef, 0.3)

  const expertises = [
    { title: "Développement informatique", desc: "Solutions sur mesure pour vos besoins métiers.", icon: Code },
    { title: "Infogérance", desc: "Gestion externalisée de votre parc informatique.", icon: CloudCog },
    { title: "Administration réseau & SI", desc: "Performance et stabilité de vos infrastructures.", icon: Server },
    { title: "Cybersécurité", desc: "Protection avancée contre les menaces numériques.", icon: Mail },
    { title: "IT Consulting", desc: "Accompagnement stratégique et transformation digitale.", icon: Users },
    { title: "Stratégie SEO", desc: "Visibilité et acquisition de trafic qualifié.", icon: Search },
  ]

  return (
    <section id="expertises" className="w-full max-w-full bg-alt-slate dark:bg-[#0F172A] transition-colors duration-300 overflow-x-hidden lg:px-20 md:px-14 px-8 lg:py-24 md:py-16 py-12 scroll-mt-32">
      <div className="flex flex-col gap-12 lg:gap-20">
        {/* Heading */}
        <div className="w-full">
          <h2
            ref={headRef}
            className="font-sans text-white font-normal leading-[140%] w-full md:w-[80%] lg:w-[70%] text-3xl md:text-4xl lg:text-5xl"
          >
            Ce que nous faisons : <br/>
            <span className="text-alt-blue">Expertise et Innovation</span> au service de votre croissance
          </h2>
        </div>

        {/* Intro text + button */}
        <div className="flex flex-col gap-10">
          <div
            ref={graphRef}
            className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-neutral-700 pb-10"
          >
            <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-20 w-full lg:w-[70%]">
              <p className="text-neutral-300 text-lg lg:text-base leading-[160%] lg:w-1/3">
                Solutions Numériques Globales
              </p>
              <p className="text-neutral-300 text-base lg:w-2/3 w-full leading-[160%]">
                Nous concevons des solutions technologiques robustes et évolutives, 
                adaptées aux réalités des PME et grandes entreprises de la zone CEMAC.
              </p>
            </div>
          </div>

          {/* Expertises Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {expertises.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col gap-5 p-8 rounded-xl transition-all duration-300 group bg-[#1E293B] hover:bg-[#1A222C] cursor-pointer">
                  <Icon className="w-9 h-9 text-alt-blue stroke-[1.5]" />
                  <div className="flex flex-col gap-2 mt-2">
                    <h4 className="text-white text-lg font-semibold tracking-wide">{item.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Preuve par les faits */}
          <div ref={factsRef} className="mt-16 pt-16 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl lg:text-5xl font-semibold text-alt-blue">+10 ans</h3>
              <p className="text-neutral-400 font-medium">d'expérience cumulée</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl lg:text-5xl font-semibold text-alt-blue">50+</h3>
              <p className="text-neutral-400 font-medium">Projets déployés</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl lg:text-5xl font-semibold text-alt-blue">98%</h3>
              <p className="text-neutral-400 font-medium">Clients satisfaits</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl lg:text-5xl font-semibold text-alt-blue">24/7</h3>
              <p className="text-neutral-400 font-medium">Support technique</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}












