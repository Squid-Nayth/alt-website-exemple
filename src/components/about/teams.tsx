"use client"

import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function Teams() {
    const themeRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useFadeIn(themeRef, 0.3);
    useFadeIn(descRef, 0.3);

    const teamMembers = [
        { name: "Direction", role: "Vision & Stratégie", img: "/icones/consulting.jpg" },
        { name: "Équipe Technique", role: "Développement & Infrastructure", img: "/icones/dev.jpg" },
        { name: "Consultants", role: "Conseil & Accompagnement", img: "/icones/cybersecurity.jpg" },
    ]

    return (
        <section className="w-full bg-alt-light dark:bg-[#1E293B] transition-colors duration-300 lg:px-20 lg:py-24 md:px-14 md:py-16 px-8 py-12">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-6 text-center lg:w-[60%] mx-auto">
                    <h2 ref={themeRef} className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-alt-slate dark:text-white leading-[130%]">
                        Notre Équipe
                    </h2>
                    <p ref={descRef} className="text-lg text-neutral-600 dark:text-neutral-400 leading-[160%]">
                        ALT réunit des experts passionnés par les technologies de l'information. Nos développeurs, ingénieurs systèmes, experts en cybersécurité et consultants collaborent pour concevoir des solutions innovantes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="flex flex-col gap-4 group">
                            <div className="w-full overflow-hidden rounded-xl h-[350px]">
                                <img 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-1 text-center">
                                <h3 className="text-2xl font-medium text-alt-slate dark:text-white">{member.name}</h3>
                                <p className="text-alt-blue font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


