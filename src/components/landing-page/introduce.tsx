"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Waves from "@/components/layout/Waves"

import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function Introduce() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useFadeIn(headRef, 0.3)
  useFadeIn(buttonRef, 0.3)
  useFadeIn(bottomRef, 0.3)

  return (
    <section className="relative w-full max-w-full bg-alt-light dark:bg-[#0F172A] transition-colors duration-300 lg:px-20 md:px-14 px-8 lg:pt-24 pt-14 lg:pb-0 pb-10 overflow-hidden">
      <div className="flex flex-col justify-between gap-16 relative z-10">
        {/* Heading + Button */}
        <div className="flex flex-col gap-8 lg:gap-16">
          <h1
            ref={headRef}
            className="font-sans text-alt-slate dark:text-white font-medium leading-[130%] w-full lg:w-[80%] text-xl md:text-3xl lg:text-5xl"
          >
            Votre ESN généraliste pour accélérer votre transformation numérique. Développement informatique, infogérance, cybersécurité et stratégie SI.
          </h1>

          <div ref={buttonRef}>
            <a href="#expertises">
              <Button className="flex items-center gap-2 border-b-2 border-alt-blue px-0 bg-transparent hover:bg-transparent rounded-none">
                <p className="text-alt-blue text-lg md:text-xl lg:text-3xl font-medium">
                  Découvrir nos expertises
                </p>
                <ArrowRight
                  height={22}
                  width={22}
                  className="mt-[2px] text-alt-blue"
                />
              </Button>
            </a>
          </div>
        </div>

        {/* Images Section */}
        <div
          ref={bottomRef}
          className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-12 lg:pt-[200px] w-full lg:w-[55%]">
            <p className="text-alt-slate dark:text-neutral-300 font-medium leading-[140%] text-base md:text-xl lg:w-[80%] lg:text-2xl text-left">
              Des solutions concrètes et transparentes, centrées sur vos objectifs d&apos;affaires.
            </p>
          </div>

          {/* Hide this image completely in mobile (not invisible, to avoid white space) */}
          <div className="hidden lg:block lg:w-[45%] relative lg:left-20">
            <img
              src="/icones/hero4.jpg"
              alt="contributors clients"
              width="1200"
              height="800"
              className="w-full h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Waves at the bottom of the section */}
      <Waves className="absolute bottom-0 left-0 w-full" />
    </section>
  )
}
