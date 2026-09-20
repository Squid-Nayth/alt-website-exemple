import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type DetailedWork = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
};

const expertises: DetailedWork[] = [
  {
    id: "developpement",
    title: "Développement Informatique",
    subtitle: "Des applications sur mesure pour accélérer vos processus.",
    description: "Nous concevons et développons des solutions logicielles robustes, évolutives et parfaitement alignées avec vos processus métiers. Qu'il s'agisse d'une application métier complexe, d'un portail web B2B ou d'une application mobile, notre équipe d'ingénieurs vous accompagne de l'architecture jusqu'au déploiement, en garantissant un code propre et maintenable.",
    points: [
      "Développement Front-End et Back-End sur mesure",
      "Architecture logicielle et conception de bases de données",
      "Développement d'applications mobiles (iOS / Android)",
      "Intégration d'API et refonte de systèmes existants"
    ],
    image: "/icones/dev.jpg",
  },
  {
    id: "infogerance",
    title: "Infogérance",
    subtitle: "Déléguez la gestion de votre infrastructure en toute sérénité.",
    description: "Notre offre d'infogérance vous permet de vous concentrer pleinement sur votre cœur de métier. Nous assurons la supervision proactive de votre parc informatique, la maintenance préventive et curative, ainsi que le support de vos équipes. Une gestion déléguée qui garantit haute disponibilité et sécurité pour l'ensemble de votre système d'information.",
    points: [
      "Supervision continue 24/7 de vos serveurs et équipements",
      "Assistance aux utilisateurs (Helpdesk)",
      "Gestion des sauvegardes (Backup) et Plan de Reprise d'Activité (PRA)",
      "Maintenance matérielle et logicielle"
    ],
    image: "/icones/server.jpg",
  },
  {
    id: "reseau-si",
    title: "Administration Réseau & SI",
    subtitle: "Le socle de votre performance digitale.",
    description: "Un réseau performant et un système d'information bien structuré sont les fondations de toute entreprise moderne. Nous auditons, concevons et déployons des architectures réseaux (LAN/WAN) sécurisées, adaptées à vos volumes de données et à l'évolution de vos effectifs. Nos administrateurs optimisent en continu vos flux d'information.",
    points: [
      "Audit complet et cartographie de votre SI",
      "Déploiement et configuration d'architectures réseaux",
      "Gestion des serveurs sur site (On-Premise) et Cloud",
      "Optimisation de la bande passante et de la connectivité"
    ],
    image: "/icones/server.jpg",
  },
  {
    id: "cybersecurite",
    title: "Cybersécurité",
    subtitle: "Protégez vos actifs critiques contre les menaces modernes.",
    description: "Face à la recrudescence des cyberattaques, sécuriser vos données n'est plus une option. Nous mettons en œuvre des stratégies de défense en profondeur : tests d'intrusion, sécurisation des accès, cryptage des données et sensibilisation de vos collaborateurs. Notre objectif est de rendre votre infrastructure résiliente face à tout type de vulnérabilité.",
    points: [
      "Audits de sécurité et tests d'intrusion (Pentest)",
      "Mise en place de pares-feux et solutions EDR/XDR",
      "Accompagnement à la conformité (RGPD, normes ISO)",
      "Formation et sensibilisation des équipes internes"
    ],
    image: "/icones/cybersecurity.jpg",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    subtitle: "L'expertise stratégique pour guider votre transformation.",
    description: "Prendre les bonnes décisions technologiques requiert une vision claire des enjeux métiers. Nos consultants vous accompagnent dans la définition de votre schéma directeur informatique, le choix de vos solutions logicielles (ERP, CRM) et le pilotage de vos projets de transformation digitale, avec une méthodologie rigoureuse.",
    points: [
      "Élaboration de schémas directeurs IT",
      "Aide au choix de solutions logicielles (AMOA)",
      "Audit organisationnel et technologique",
      "Pilotage de projets complexes (Méthodes Agiles / Cycle en V)"
    ],
    image: "/icones/consulting.jpg",
  },
  {
    id: "seo",
    title: "Stratégie SEO",
    subtitle: "Optimisez votre visibilité et votre acquisition client.",
    description: "Une présence en ligne ne suffit pas si vous n'êtes pas visible. Nos experts en référencement naturel déploient des stratégies SEO complètes, combinant optimisation technique de votre plateforme, structuration de contenus sémantiques et stratégies d'acquisition de liens (Netlinking) pour positionner votre entreprise en tête des résultats de recherche.",
    points: [
      "Audits techniques et sémantiques approfondis",
      "Optimisation de la structure et de la vitesse de votre site",
      "Rédaction de contenus optimisés SEO",
      "Suivi des performances et ajustements stratégiques"
    ],
    image: "/icones/dev.jpg",
  }
];

export default function ExpertiseDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Find the requested expertise based on URL ID
  const exp = expertises.find((item) => item.id === id);

  if (!exp) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-[#0F172A] transition-colors duration-300">
        <h1 className="text-4xl font-bold text-alt-slate dark:text-white mb-4">Expertise non trouvée</h1>
        <Link to="/#expertises">
          <Button className="bg-alt-blue hover:brightness-110 text-white flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Retour aux expertises
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-[#0F172A] transition-colors duration-300 lg:px-20 lg:py-24 md:px-14 md:py-16 px-6 py-12">
      <div className="flex flex-col gap-24 lg:gap-32">
        {/* Back Link */}
        <div>
            <Link to="/#expertises" className="inline-flex items-center gap-2 text-alt-blue font-medium hover:underline">
                <ArrowLeft className="w-5 h-5" />
                Voir toutes nos expertises
            </Link>
        </div>

        <div className="flex flex-col gap-10 lg:gap-16 items-center lg:flex-row">
          {/* Contenu Texte */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-alt-slate dark:text-white">{exp.title}</h1>
            <h2 className="text-xl lg:text-2xl text-neutral-800 dark:text-neutral-200 font-medium leading-snug">
              {exp.subtitle}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed text-justify lg:text-left">
              {exp.description}
            </p>
            
            <ul className="flex flex-col gap-4 mt-4">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-alt-blue shrink-0 mt-0.5" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-alt-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={exp.image} 
              alt={exp.title} 
              className="w-full h-auto lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col items-center justify-center text-center mt-10 p-10 bg-alt-slate dark:bg-[#1E293B] rounded-2xl shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">Un projet de {exp.title.toLowerCase()} ?</h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
             Contactez-nous dès aujourd'hui pour discuter de vos besoins avec nos experts et obtenir un accompagnement sur mesure.
          </p>
          <Link to="/contact">
            <Button className="bg-alt-blue hover:brightness-110 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
