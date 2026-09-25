"use client"

import { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { useFadeIn } from "@/library/animations/useFadeIn"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Linkedin, Twitter, Github } from "lucide-react"

interface TeamMember {
    name: string;
    role: string;
    img: string;
    bio: string;
    details: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        name: "Tariq Adebayo",
        role: "Directeur Général",
        img: "/icones/victor-loureiro-N03eNgzKpMA-unsplash.jpg",
        bio: "Visionnaire avec plus de 15 ans d'expérience dans la transformation numérique des entreprises.",
        details: "Tariq a fondé ALT avec la conviction que la technologie doit être un levier de croissance, et non une contrainte. Il supervise la stratégie globale et l'innovation.",
        socials: { linkedin: "#", twitter: "#" }
    },
    { 
        name: "Amina Diallo", 
        role: "Directrice Technique (CTO)", 
        img: "/icones/francis-odeyemi-76YVAKqDFuo-unsplash.jpg", 
        bio: "Experte en architectures cloud et en développement sur mesure, Amina pilote l'équipe technique.",
        details: "Ancienne architecte chez un grand éditeur de logiciels, Amina apporte son expertise en méthodologies agiles et en sécurité applicative pour garantir des livrables de haute qualité.",
        socials: { linkedin: "#", github: "#" }
    },
    { 
        name: "Jamal Jackson", 
        role: "Lead Cybersécurité", 
        img: "/icones/fray-bekele-CMMvunmYcXo-unsplash.jpg", 
        bio: "Garant de la sécurité des infrastructures, Jamal audite et sécurise les SI de nos clients.",
        details: "Spécialisé en tests d'intrusion et en gestion de crise cyber, il accompagne nos partenaires dans la mise en conformité et la protection de leurs données sensibles.",
        socials: { linkedin: "#", twitter: "#" }
    },
    { 
        name: "Nia Robinson", 
        role: "Lead Consultante IT", 
        img: "/icones/neil-de-souza-NdQVNXuZEEo-unsplash.jpg", 
        bio: "Nia accompagne les décideurs dans leur stratégie digitale et l'optimisation de leurs processus.",
        details: "Avec un parcours en conseil stratégique, elle fait le pont entre les besoins métiers complexes et les solutions techniques apportées par nos ingénieurs.",
        socials: { linkedin: "#" }
    }
]

export default function Teams() {
    const themeRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    useFadeIn(themeRef, 0.3);
    useFadeIn(descRef, 0.3);

    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; }
    }, [selectedMember]);

    return (
        <section className="relative w-full bg-alt-light dark:bg-[#0F172A] transition-colors duration-300 lg:px-20 lg:py-32 md:px-14 md:py-24 px-8 py-16 min-h-screen overflow-hidden">
            <div className="flex flex-col gap-24 relative z-10 max-w-[1400px] mx-auto">
                <div className="flex flex-col gap-6 text-center lg:w-[60%] mx-auto mb-10">
                    <h2 ref={themeRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-alt-slate dark:text-white leading-[120%] tracking-tight">
                        Nos Têtes Pensantes
                    </h2>
                    <p ref={descRef} className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-[160%]">
                        L'expertise d'ALT repose avant tout sur les femmes et les hommes qui la composent.
                    </p>
                </div>

                {/* Disposition en escalier (Zig-Zag) */}
                <div className="flex flex-col gap-32 lg:gap-48">
                    {teamMembers.map((member, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div 
                                key={idx} 
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-16 lg:gap-24 cursor-pointer group`}
                                onClick={() => setSelectedMember(member)}
                            >
                                {/* Côté Visuel - La Goutte Créative */}
                                <div className="w-full lg:w-1/2 flex justify-center relative">
                                    <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                                        {/* Ombre / Goutte de fond animée */}
                                        <div className="absolute inset-0 bg-alt-blue/20 dark:bg-alt-blue/30 rounded-[0_50%_50%_50%] rotate-45 transition-all duration-700 group-hover:scale-110 group-hover:bg-alt-blue/30" />
                                        
                                        {/* Image contenue dans la goutte CSS pure */}
                                        <div className="absolute inset-0 rounded-[0_50%_50%_50%] rotate-45 overflow-hidden border-8 border-white dark:border-[#1E293B] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] bg-alt-slate z-10">
                                            <img 
                                                src={member.img} 
                                                alt={member.name} 
                                                className="absolute top-1/2 left-1/2 w-[142%] h-[142%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-45 object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Petit élément graphique de décoration */}
                                        <div className={`absolute -z-10 w-24 h-24 bg-alt-blue/10 dark:bg-alt-blue/20 rounded-full blur-2xl ${isEven ? '-bottom-12 -right-12' : '-top-12 -left-12'} transition-all duration-700 group-hover:scale-150 group-hover:bg-alt-blue/30`} />
                                    </div>
                                </div>
                                
                                {/* Côté Texte */}
                                <div className={`w-full lg:w-1/2 flex flex-col gap-6 ${isEven ? 'text-left lg:pr-20' : 'text-left lg:text-right lg:pl-20'}`}>
                                    <span className="text-alt-blue font-bold tracking-widest uppercase text-lg lg:text-xl">
                                        {member.role}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-alt-slate dark:text-white leading-[110%] tracking-tight group-hover:text-alt-blue transition-colors duration-500">
                                        {member.name}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-[150%] italic mt-4">
                                        "{member.bio}"
                                    </p>
                                    <div className={`flex items-center gap-2 mt-6 text-alt-slate dark:text-white font-medium text-lg border-b-2 border-transparent group-hover:border-alt-blue transition-colors w-fit pb-1 ${!isEven && 'lg:ml-auto'}`}>
                                        <span>Découvrir son profil</span>
                                        <ArrowRight className="w-5 h-5 text-alt-blue group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Creative Full-screen Modal */}
            {typeof document !== "undefined" && createPortal(
                <AnimatePresence>
                    {selectedMember && (
                        <div className="fixed inset-0 z-[99999] flex pointer-events-auto">
                            {/* Dramatic Circular Reveal Background */}
                            <motion.div 
                                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                                animate={{ clipPath: "circle(150% at 50% 50%)" }}
                                exit={{ clipPath: "circle(0% at 50% 50%)" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#0B1221]"
                            />
                            
                            {/* Close Button */}
                            <motion.button 
                                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 lg:top-10 lg:right-10 p-4 rounded-full bg-white dark:bg-[#1E293B] shadow-2xl hover:bg-alt-blue hover:text-white dark:hover:bg-alt-blue text-alt-slate dark:text-white transition-all flex items-center justify-center z-50 cursor-pointer"
                            >
                                <X size={32} />
                            </motion.button>

                            {/* Modal Content - Editorial Style */}
                            <div className="relative z-10 w-full h-full max-w-[1500px] mx-auto p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 overflow-y-auto">
                                
                                {/* Left Side: Massive Drop Masked Image */}
                                <motion.div 
                                    initial={{ opacity: 0, y: -150, scaleY: 1.1, scaleX: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scaleY: 1, scaleX: 1 }}
                                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 100, bounce: 0.5, duration: 0.8, delay: 0.1 }}
                                    className="w-full lg:w-1/2 flex justify-center items-center relative mt-16 lg:mt-0 shrink-0"
                                >
                                    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                                        {/* Decorative background shadow drop */}
                                        <div className="absolute inset-0 bg-alt-blue/20 dark:bg-alt-blue/30 rounded-[0_50%_50%_50%] rotate-45 translate-x-6 translate-y-8" />
                                        
                                        {/* Main Image Border */}
                                        <div className="absolute inset-0 rounded-[0_50%_50%_50%] rotate-45 overflow-hidden border-8 border-white dark:border-[#1E293B] shadow-2xl bg-alt-slate z-10">
                                            <img 
                                                src={selectedMember.img} 
                                                alt={selectedMember.name} 
                                                className="absolute top-1/2 left-1/2 w-[142%] h-[142%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-45 object-cover" 
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Side: Giant Typography & Content */}
                                <motion.div 
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                                        hidden: {}
                                    }}
                                    className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 justify-center pb-16 lg:pb-0 text-left"
                                >
                                    <div className="flex flex-col">
                                        <motion.span 
                                            variants={{
                                                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                                            }}
                                            className="text-alt-blue font-bold tracking-widest uppercase text-base lg:text-xl mb-3"
                                        >
                                            {selectedMember.role}
                                        </motion.span>
                                        <motion.h3 
                                            variants={{
                                                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                                            }}
                                            className="text-5xl md:text-7xl lg:text-[90px] font-bold text-alt-slate dark:text-white leading-[100%] tracking-tight"
                                        >
                                            {selectedMember.name}
                                        </motion.h3>
                                    </div>

                                    <motion.div 
                                        variants={{
                                            hidden: { opacity: 0, width: 0 },
                                            visible: { opacity: 1, width: "120px", transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="h-2 bg-alt-blue rounded-full my-6"
                                    />

                                    <motion.p 
                                        variants={{
                                            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                                        }}
                                        className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-800 dark:text-neutral-200 leading-[140%] italic"
                                    >
                                        "{selectedMember.bio}"
                                    </motion.p>
                                    
                                    <motion.p 
                                        variants={{
                                            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                                        }}
                                        className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 leading-[170%] mt-4"
                                    >
                                        {selectedMember.details}
                                    </motion.p>

                                    {selectedMember.socials && (
                                        <motion.div 
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                                            }}
                                            className="flex gap-4 mt-8"
                                        >
                                            {selectedMember.socials.linkedin && (
                                                <a href={selectedMember.socials.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-[#1E293B] flex items-center justify-center text-alt-slate dark:text-white hover:bg-alt-blue dark:hover:bg-alt-blue hover:text-white transition-colors duration-300">
                                                    <Linkedin size={22} />
                                                </a>
                                            )}
                                            {selectedMember.socials.twitter && (
                                                <a href={selectedMember.socials.twitter} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-[#1E293B] flex items-center justify-center text-alt-slate dark:text-white hover:bg-alt-blue dark:hover:bg-alt-blue hover:text-white transition-colors duration-300">
                                                    <Twitter size={22} />
                                                </a>
                                            )}
                                            {selectedMember.socials.github && (
                                                <a href={selectedMember.socials.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-[#1E293B] flex items-center justify-center text-alt-slate dark:text-white hover:bg-alt-blue dark:hover:bg-alt-blue hover:text-white transition-colors duration-300">
                                                    <Github size={22} />
                                                </a>
                                            )}
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    )
}


