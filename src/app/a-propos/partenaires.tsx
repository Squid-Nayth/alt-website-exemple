import { useRef } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "@/library/animations/useFadeIn";
import { useStaggerChildren } from "@/library/animations/useStaggerChildren";

const PARTNERS = [
  { name: "Olam Gabon", logo: "/icones/olam.png", desc: "Acteur majeur de l'agro-industrie et partenaire clé dans le développement économique et infrastructurel (GSEZ)." },
  { name: "Moov Africa Gabon Telecom", logo: "/icones/Gabon_telecom_logo.png", desc: "Opérateur historique et leader des télécommunications, offrant des solutions innovantes en téléphonie et internet." },
  { name: "Gabon Oil Company (GOC)", logo: "/icones/Logo_goc.png", desc: "Société nationale des hydrocarbures, opérant dans l'exploration, l'exploitation et la commercialisation du pétrole." },
  { name: "Groupe SNEF (Gacyb)", logo: "/icones/groupe_snef_gacyb-962x1024.png", desc: "Leader en ingénierie (électrique, mécanique, climatique et télécoms) pour les grands projets industriels." },
  { name: "Pozi", logo: "/icones/pozi_app_logo.jpeg", desc: "Start-up gabonaise spécialisée dans le suivi GPS de véhicules et la gestion intelligente de flotte." },
  { name: "Rougier", logo: "/icones/les-entreprises-15.png", desc: "Leader des bois tropicaux certifiés, engagé dans la gestion forestière responsable et la transformation industrielle locale." },
  { name: "SIIAG", logo: "/icones/logo-1743700085445.png", desc: "Startup et incubateur agricole innovant visant à moderniser l'agrobusiness grâce à des technologies durables et de précision." },
  { name: "SEEG", logo: "/icones/images.jpeg", desc: "Assure le service public de production, transport et distribution de l'eau potable et de l'électricité sur tout le territoire." },
  { name: "TaxiGab+", logo: "/icones/611250861_122183560658542413_3307531624853381966_n 2.jpg", desc: "Application mobile innovante dédiée aux services de transport et de taxi privé pour faciliter la mobilité." },
];

export default function PartenairesPage() {
    const headRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useFadeIn(headRef, 0.3);
    useStaggerChildren(gridRef, ".partner-card", 0.1);

    return (
        <section className="relative w-full bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300 min-h-[calc(100vh-80px)]">
            
            {/* Header Text Block (Style Réalisations) */}
            <section className="relative w-full pt-32 pb-16 px-6 lg:px-12 xl:px-20 overflow-hidden bg-white dark:bg-[#1E293B] border-b border-neutral-200 dark:border-neutral-800" ref={headRef}>
                <div className="flex flex-col gap-4 text-left max-w-4xl relative z-10">
                    <h1 className="text-4xl lg:text-6xl font-light text-alt-slate dark:text-white leading-[120%] tracking-tight">
                        Nos Partenaires
                    </h1>
                    <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                        En étroite collaboration avec des leaders technologiques, nous concevons des expériences sur-mesure pour accompagner la transformation de nos clients.
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            <div className="max-w-[1400px] mx-auto px-6 py-16" ref={gridRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PARTNERS.map((partner, index) => {
                        const urlSafeName = partner.name.toLowerCase().replace(/\s+/g, '-');
                        return (
                            <Link 
                                to={`/partenaires/${urlSafeName}`} 
                                key={index}
                                className="partner-card flex items-center bg-white dark:bg-[#1E293B] border border-neutral-100 dark:border-neutral-800 p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group"
                                style={{ opacity: 0 }}
                            >
                                {/* Left Logo */}
                                <div className="w-1/3 flex-shrink-0 flex items-center justify-center border-r border-neutral-100 dark:border-neutral-700 pr-6">
                                    <div className="w-full aspect-square overflow-hidden flex items-center justify-center">
                                        <img 
                                            src={partner.logo} 
                                            alt={partner.name} 
                                            className="w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                                {/* Right Content */}
                                <div className="w-2/3 flex flex-col justify-center pl-6">
                                    <h3 className="text-xl font-medium text-alt-slate dark:text-white mb-2 group-hover:text-alt-blue transition-colors">
                                        {partner.name}
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                        {partner.desc}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}
