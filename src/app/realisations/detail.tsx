import { useParams, Link } from "react-router-dom";
import { ArrowRight, Quote, ArrowLeft, Target, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type RealisationDetail = {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  tags: string[];
  presentation: string;
  enjeux: string;
  impact: string;
  avis: {
    author: string;
    role: string;
    text: string;
  };
  image: string;
};

const realisations: RealisationDetail[] = [
  {
    id: "hubency",
    client: "Hubency",
    title: "Hubency",
    subtitle: "Leader français de la gestion des déchets multi-sites",
    tags: ["Site vitrine", "B2B", "Industrie & Logistique"],
    presentation: "Hubency est un acteur majeur et innovant dans le domaine de la gestion des déchets pour les entreprises multi-sites. Ils accompagnent les grands groupes dans la transition écologique en optimisant le recyclage et la revalorisation des matériaux.",
    enjeux: "L'enjeu principal était de moderniser l'image de marque d'Hubency à travers un nouveau site vitrine premium, tout en digitalisant le parcours client B2B. Il fallait une plateforme performante capable de présenter clairement des services complexes tout en générant des leads qualifiés.",
    impact: "Le nouveau site a permis d'augmenter le taux de conversion B2B de 45% en 6 mois. L'architecture technique robuste et le design orienté utilisateur ont positionné Hubency comme un leader incontesté de l'innovation écologique sur le web.",
    avis: {
      author: "Jean Dupont",
      role: "Directeur Marketing, Hubency",
      text: "L'équipe d'ALT a su capter l'essence de notre métier. Le site vitrine est non seulement magnifique, mais il est devenu notre meilleur outil commercial."
    },
    image: "/icones/hero1.avif",
  },
  {
    id: "myunisoft",
    client: "MyUnisoft",
    title: "MyUnisoft",
    subtitle: "La solution logicielle des experts-comptables",
    tags: ["Site vitrine", "Application Métier", "Finance"],
    presentation: "MyUnisoft est une plateforme logicielle cloud dédiée aux cabinets d'expertise comptable, offrant des outils de gestion financière et de productivité de pointe.",
    enjeux: "Il fallait concevoir à la fois le site vitrine pour attirer les cabinets, et repenser certaines interfaces de l'application métier pour améliorer l'expérience utilisateur des comptables, réputés très exigeants sur la fluidité des interfaces.",
    impact: "Une interface unifiée et une identité de marque forte. Le temps d'onboarding des nouveaux clients a été divisé par deux grâce à la clarté de la nouvelle application.",
    avis: {
      author: "Sophie Laurent",
      role: "Product Manager, MyUnisoft",
      text: "Une collaboration exceptionnelle. Le design de l'application métier a révolutionné la manière dont nos clients interagissent avec la donnée financière."
    },
    image: "/icones/work1.png",
  },
  {
    id: "groupe-gr",
    client: "Groupe GR",
    title: "Groupe GR",
    subtitle: "L'excellence du recrutement spécialisé",
    tags: ["Site vitrine", "B2B", "Arts & Culture"],
    presentation: "Le Groupe GR est un cabinet de recrutement prestigieux, spécialisé dans la mise en relation entre talents de haut niveau et entreprises d'excellence, notamment dans l'accueil et l'assistanat bilingue.",
    enjeux: "Le groupe souhaitait un site vitrine qui reflète son positionnement haut de gamme tout en permettant aux candidats de postuler facilement depuis leur mobile. L'intégration avec leur ATS (système de gestion des candidatures) était primordiale.",
    impact: "Augmentation de 60% des candidatures qualifiées via mobile. Le site reflète désormais parfaitement l'élégance et le professionnalisme du groupe.",
    avis: {
      author: "Marc Lemaire",
      role: "CEO, Groupe GR",
      text: "Le résultat dépasse nos attentes. Le site est un véritable écrin pour nos offres d'emploi, et techniquement, tout est fluide et rapide."
    },
    image: "/icones/hero2.avif",
  },
  {
    id: "ministere-economie",
    client: "Ministère de l'Économie",
    title: "Ministère de l'Économie",
    subtitle: "Déploiement d'une infrastructure réseau sécurisée",
    tags: ["Infrastructure Réseau", "Finance", "Communication"],
    presentation: "Institution gouvernementale majeure, le Ministère de l'Économie gère des données hautement sensibles et nécessite une disponibilité de ses services informatiques 24h/7j.",
    enjeux: "Moderniser complètement le système d'information vieillissant tout en assurant une protection maximale contre les cybermenaces souveraines. Le défi était de réaliser cette migration sans la moindre interruption de service.",
    impact: "Déploiement réussi d'une architecture réseau de nouvelle génération, certifiée par l'ANSSI. La résilience du système a été prouvée et la vitesse des échanges internes a été multipliée par trois.",
    avis: {
      author: "DSI",
      role: "Ministère de l'Économie",
      text: "Un travail d'ingénierie remarquable. La sécurité et la performance sont au rendez-vous, avec un accompagnement sans faille."
    },
    image: "/icones/1729150870563.png",
  }
];

export default function RealisationDetail() {
  const { id } = useParams<{ id: string }>();
  
  const projet = realisations.find((item) => item.id === id) || realisations[0]; // fallback pour la démo

  return (
    <div className="w-full bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300 min-h-screen">
      {/* HEADER SECTION (Style Maquette) */}
      <section className="relative w-full lg:h-[85vh] h-auto bg-gradient-to-br from-[#F4F9FF] to-white dark:from-[#111827] dark:to-[#0F172A] flex flex-col lg:flex-row items-center justify-between lg:pl-20 md:pl-14 px-6 pt-32 lg:pt-0 overflow-hidden">
        
        <div className="lg:w-1/2 w-full flex flex-col justify-center gap-6 z-10 py-12 lg:py-0">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {projet.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#EBF4FF] text-[#0080FF] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1A2352] dark:text-white tracking-tight">
            {projet.title}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-md font-medium leading-relaxed">
            {projet.subtitle}
          </p>

          <div className="mt-8">
            <Link to="/projets" className="inline-flex items-center gap-3 text-[#1A2352] dark:text-white font-semibold text-lg hover:text-[#0080FF] transition-colors group">
              Voir tous les projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full h-[50vh] lg:h-full relative z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F4F9FF] z-10 hidden lg:block" />
          <img 
            src={projet.image} 
            alt={projet.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-20">
        
        {/* Présentation */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3 flex items-center gap-3">
            <User className="w-8 h-8 text-[#0080FF]" />
            <h2 className="text-3xl font-bold text-[#1A2352] dark:text-white">Le client</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              {projet.presentation}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />

        {/* Enjeux */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3 flex items-center gap-3">
            <Target className="w-8 h-8 text-[#0080FF]" />
            <h2 className="text-3xl font-bold text-[#1A2352] dark:text-white">Les enjeux</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              {projet.enjeux}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />

        {/* Impact */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/3 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-[#0080FF]" />
            <h2 className="text-3xl font-bold text-[#1A2352] dark:text-white">L'impact</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              {projet.impact}
            </p>
          </div>
        </div>

      </section>

      {/* AVIS CLIENT */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-xl p-10 md:p-16 relative overflow-hidden border border-neutral-100 dark:border-neutral-800 transition-colors">
          <Quote className="absolute top-10 right-10 w-24 h-24 text-blue-50 dark:text-blue-900/20 opacity-50 rotate-180" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="text-sm font-bold text-[#0080FF] uppercase tracking-widest mb-8">L'avis du client</h3>
            
            <p className="text-2xl md:text-3xl font-medium text-[#1A2352] dark:text-neutral-200 leading-snug mb-10 italic">
              "{projet.avis.text}"
            </p>
            
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg text-neutral-900 dark:text-white">{projet.avis.author}</span>
              <span className="text-neutral-500">{projet.avis.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (Next Steps) */}
      <section className="w-full bg-[#1A2352] py-20 px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">Prêt à propulser votre entreprise ?</h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
          Comme {projet.client}, confiez-nous vos défis technologiques et atteignez vos objectifs.
        </p>
        <Link to="/contact">
          <Button className="bg-[#0080FF] hover:bg-blue-600 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 mx-auto">
            Démarrer un projet
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </section>

    </div>
  );
}
