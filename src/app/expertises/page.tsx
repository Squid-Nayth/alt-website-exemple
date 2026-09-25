import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Briefcase, TrendingUp, Headset, Network, ShieldCheck } from "lucide-react";

const EXPERTISES = [
  { id: "developpement", title: "Développement informatique", description: "Création d'applications sur-mesure web et mobiles.", icon: Code },
  { id: "it-consulting", title: "IT Consulting", description: "Accompagnement stratégique pour votre transformation numérique.", icon: Briefcase },
  { id: "seo", title: "Stratégie SEO", description: "Optimisation de votre visibilité sur les moteurs de recherche.", icon: TrendingUp },
  { id: "infogerance", title: "Infogérance", description: "Gestion et maintenance de votre parc informatique.", icon: Headset },
  { id: "reseau-si", title: "Administration réseau & SI", description: "Architecture et gestion de systèmes d'information sécurisés.", icon: Network },
  { id: "cybersecurite", title: "Cybersécurité", description: "Protection de vos données et audits de sécurité complets.", icon: ShieldCheck },
];

export default function ExpertisesIndexPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-alt-light dark:bg-[#0F172A] transition-colors duration-300 relative pb-40">
      <section className="relative w-full pt-32 pb-20 px-8 lg:px-20 md:px-14 overflow-hidden">
        <div className="flex flex-col gap-6 text-left lg:w-[60%] relative z-10">
          <h1 className="text-4xl lg:text-6xl font-sans font-medium text-alt-slate dark:text-white leading-[120%] tracking-tight">
            Toutes nos expertises
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-[160%] max-w-2xl">
            Découvrez l'ensemble de nos domaines de compétences pour vous accompagner dans votre stratégie digitale.
          </p>
        </div>
      </section>

      <section className="w-full px-8 lg:px-20 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {EXPERTISES.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <Link key={exp.id} to={`/expertises/${exp.id}`} className="group bg-white dark:bg-[#1E293B] p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-alt-blue">
              <div className="w-16 h-16 bg-[#F8FAFC] dark:bg-[#0F172A] flex items-center justify-center rounded-none text-alt-blue group-hover:scale-110 transition-transform duration-500">
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-alt-slate dark:text-white">{exp.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 flex-grow">{exp.description}</p>
              <div className="flex items-center gap-2 text-alt-blue font-medium mt-4">
                <span>Découvrir</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
