"use client"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function UpperWorks() {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const describeRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useFadeIn(headerRef, 0.3)
  useFadeIn(describeRef, 0.3)
  useFadeIn(imageRef, 0.3)

  return (
    <section className="w-full bg-alt-light overflow-hidden">
      <div className="max-w-full w-full lg:px-20 lg:py-24 md:px-14 md:py-20 px-8 py-16">
        <div className="flex flex-col gap-20">
          <h1
            ref={headerRef}
            className="lg:text-5xl md:text-4xl text-3xl leading-[140%] lg:w-[70%] md:w-[85%] font-normal font-sans text-alt-slate"
          >
            Nos Réalisations <br/>
            <span className="text-alt-blue">Des succès partagés avec nos clients.</span>
          </h1>

          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-12 gap-10 items-center">
            {/* Left text */}
            <div
              ref={describeRef}
              className="lg:w-[45%] lg:ml-[10%] w-full flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 z-10 lg:-mr-20"
            >
              <h5 className="text-xl font-medium text-alt-blue uppercase tracking-wider">Réseau & Sécurité</h5>
              <h4 className="lg:text-4xl text-2xl font-normal text-alt-slate leading-[140%]">
                Ministère de l'Économie
              </h4>
              <p className="text-neutral-600 leading-[160%] text-lg">
                Déploiement d'une infrastructure réseau hautement sécurisée et modernisation complète du système d'information pour garantir la souveraineté des données.
              </p>
              <Button className="justify-start gap-2 w-fit bg-transparent hover:bg-transparent px-0 border-b border-alt-slate hover:border-alt-blue rounded-none mt-4 transition-colors group">
                <p className="text-alt-slate group-hover:text-alt-blue lg:text-lg text-base font-medium transition-colors">Voir l'étude de cas</p>
                <ArrowRight height={20} width={20} className="text-alt-slate group-hover:text-alt-blue transition-colors" />
              </Button>
            </div>

            {/* Right image */}
            <div
              ref={imageRef}
              className="lg:w-[55%] w-full overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src="/icones/hero1.avif"
                alt="Projet Ministère de l'Économie"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





