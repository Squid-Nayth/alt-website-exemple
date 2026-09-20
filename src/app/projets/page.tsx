import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

// Types
type Project = {
  id: string;
  clientName: string;
  image: string;
  types: string[];
  secteurs: string[];
};

// Constantes pour les filtres
const PROJECT_TYPES = [
  "E-commerce",
  "Site vitrine",
  "Application Métier",
  "Infrastructure Réseau",
  "Migration Cloud",
];

const SECTEURS = [
  "Arts & Culture",
  "Avocats",
  "B2B",
  "Finance",
  "Immobilier",
  "Mode & Beauté",
  "Santé & Bien-être",
  "Associations",
  "Communication",
  "Éducation",
  "Horticulture",
  "Industrie & Logistique",
  "Restauration",
  "Sport & Loisirs",
];

// Données simulées
const MOCK_PROJECTS: Project[] = [
  { id: "hubency", clientName: "Hubency", image: "/icones/hero1.avif", types: ["Site vitrine", "E-commerce"], secteurs: ["Industrie & Logistique", "B2B"] },
  { id: "myunisoft", clientName: "MyUnisoft", image: "/icones/work1.png", types: ["Site vitrine", "Application Métier"], secteurs: ["Finance", "B2B"] },
  { id: "groupe-gr", clientName: "Groupe GR", image: "/icones/hero2.avif", types: ["Site vitrine"], secteurs: ["Arts & Culture", "B2B"] },
  { id: "ministere-economie", clientName: "Ministère de l'Économie", image: "/icones/1729150870563.png", types: ["Infrastructure Réseau"], secteurs: ["Finance", "Communication"] },
  { id: "groupe-financier", clientName: "Groupe Financier CEMAC", image: "/icones/finance.jpg", types: ["Application Métier"], secteurs: ["Finance", "B2B"] },
  { id: "startup-logistique", clientName: "Startup Logistique", image: "/icones/hero1.avif", types: ["Migration Cloud"], secteurs: ["Industrie & Logistique"] },
  { id: "project-7", clientName: "L'Oréal Pro", image: "/icones/work1.png", types: ["E-commerce"], secteurs: ["Mode & Beauté", "B2B"] },
  { id: "project-8", clientName: "Klinik Santé", image: "/icones/hero2.avif", types: ["Site vitrine", "Application Métier"], secteurs: ["Santé & Bien-être"] },
  { id: "project-9", clientName: "Decathlon Pro", image: "/icones/1729150870563.png", types: ["E-commerce"], secteurs: ["Sport & Loisirs", "B2B"] },
];

export default function ProjetsFilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const typeParam = searchParams.get("type");
  const secteurParam = searchParams.get("secteur");

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(MOCK_PROJECTS);

  // Filtrer les projets
  useEffect(() => {
    let result = MOCK_PROJECTS;
    if (typeParam) {
      result = result.filter(p => p.types.includes(typeParam));
    }
    if (secteurParam) {
      result = result.filter(p => p.secteurs.includes(secteurParam));
    }
    setFilteredProjects(result);
    // Scroll en haut lors du changement de filtre
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [typeParam, secteurParam]);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      searchParams.set("type", val);
    } else {
      searchParams.delete("type");
    }
    setSearchParams(searchParams);
  };

  const handleSecteurChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      searchParams.set("secteur", val);
    } else {
      searchParams.delete("secteur");
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    navigate("/projets");
  };

  // Titres dynamiques
  let titleTop = "Nos réalisations";
  let titleBottom = "Projets";
  let subtitle = "Découvrez nos dernières réalisations sur mesure pour valoriser votre image et atteindre vos objectifs.";

  if (secteurParam && !typeParam) {
    titleTop = "Création de site internet et IT";
    titleBottom = secteurParam;
    subtitle = `Des solutions sur mesure pour valoriser la création et renforcer la visibilité des acteurs du secteur ${secteurParam}.`;
  } else if (typeParam && !secteurParam) {
    titleTop = "Nos réalisations";
    titleBottom = typeParam.toLowerCase();
    subtitle = `Découvrez nos meilleurs projets de type ${typeParam.toLowerCase()} pour attirer de nouveaux clients.`;
  } else if (typeParam && secteurParam) {
    titleTop = typeParam;
    titleBottom = secteurParam;
    subtitle = `Des projets de type ${typeParam.toLowerCase()} spécialement conçus pour le secteur ${secteurParam}.`;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300 pt-32 pb-24 px-6 lg:px-20 md:px-14">
      {/* En-tête dynamique */}
      <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-[54px] font-bold text-alt-slate dark:text-white mb-2 tracking-tight">
          {titleTop}
        </h1>
        <h2 className="text-4xl lg:text-[54px] font-bold text-[#0080FF] mb-6">
          {titleBottom}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          {subtitle}
        </p>
      </div>

      {/* Barre de filtres */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative">
        <button 
          onClick={clearFilters}
          className="flex items-center gap-2 text-alt-blue font-medium hover:underline text-sm md:absolute left-0"
        >
          <ChevronLeft className="w-4 h-4" />
          Tous les projets
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-4 mx-auto w-full max-w-xl">
          <select 
            value={typeParam || ""} 
            onChange={handleTypeChange}
            className={`w-full sm:w-1/2 p-3.5 rounded-lg border dark:bg-[#1E293B] dark:border-neutral-800 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer ${typeParam ? 'border-alt-blue dark:border-alt-blue text-alt-blue' : 'border-neutral-200 text-neutral-600 dark:text-neutral-300'}`}
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230080FF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
          >
            <option value="">Types de projet</option>
            {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>

          <select 
            value={secteurParam || ""} 
            onChange={handleSecteurChange}
            className={`w-full sm:w-1/2 p-3.5 rounded-lg border dark:bg-[#1E293B] dark:border-neutral-800 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer ${secteurParam ? 'border-alt-blue dark:border-alt-blue text-alt-blue' : 'border-neutral-200 text-neutral-600 dark:text-neutral-300'}`}
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230080FF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
          >
            <option value="">Secteurs</option>
            {SECTEURS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Grille de projets */}
      {filteredProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
          <p className="text-xl">Aucun projet ne correspond à ces critères.</p>
          <button onClick={clearFilters} className="mt-4 text-alt-blue underline">Voir tous les projets</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={`/realisations/${project.id}`} className="group flex flex-col cursor-pointer">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.clientName} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Badges / Tags */}
                <div className="absolute top-4 left-0 w-full flex justify-center flex-wrap gap-2 px-4 pointer-events-none">
                  {[...project.types, ...project.secteurs].slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white/95 backdrop-blur-sm text-[#0080FF] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-1">
                <h3 className="text-xl font-semibold text-alt-slate dark:text-neutral-200 group-hover:text-alt-blue dark:group-hover:text-alt-blue transition-colors">{project.clientName}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
