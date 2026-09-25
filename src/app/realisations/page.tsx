import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";

type Project = {
  id: string;
  clientName: string;
  image: string;
  type: string;
  secteur: string;
  description: string;
  imageClassName?: string;
  imageContainerClassName?: string;
};

const MOCK_PROJECTS: Project[] = [
  { 
    id: "hubency", 
    clientName: "Hubency", 
    image: "/icones/hero1.avif", 
    type: "Plateformes E-Commerce",
    secteur: "Industrie & Logistique",
    description: "Digitalisation complète des processus de gestion des déchets avec une plateforme sur-mesure connectée." 
  },
  { 
    id: "myunisoft", 
    clientName: "MyUnisoft", 
    image: "/icones/upbeat-software-engineer-utilizing-cloud-computing-tech.jpg", 
    type: "Applications Métiers",
    secteur: "Finance & Assurance",
    description: "Développement d'une application de gestion comptable performante et sécurisée pour experts-comptables.",
    imageClassName: "object-cover",
  },
  { 
    id: "groupe-gr", 
    clientName: "Groupe GR", 
    image: "/icones/hero2.avif", 
    type: "Sites Vitrines",
    secteur: "B2B & Services",
    description: "Création d'une identité numérique moderne avec un site vitrine orienté vers l'expérience candidat." 
  },
  { 
    id: "ministere-economie", 
    clientName: "Ministère de l'Économie", 
    image: "/icones/server.jpg", 
    type: "Infrastructures",
    secteur: "Secteur Public",
    description: "Déploiement d'une architecture réseau sécurisée de nouvelle génération certifiée par l'ANSSI.",
    imageClassName: "object-cover",
  },
];

const TYPES = ["Tous", "Sites Vitrines", "Applications Métiers", "Plateformes E-Commerce", "Infrastructures"];
const SECTEURS = ["Tous", "B2B & Services", "Finance & Assurance", "Industrie & Logistique", "Secteur Public", "Santé & Médical"];

export default function RealisationsPage() {
  const [selectedType, setSelectedType] = useState<string>("Tous");
  const [selectedSecteur, setSelectedSecteur] = useState<string>("Tous");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchType = selectedType === "Tous" || project.type === selectedType;
    const matchSecteur = selectedSecteur === "Tous" || project.secteur === selectedSecteur;
    return matchType && matchSecteur;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300 relative pb-40">
      
      {/* En-tête */}
      <section className="relative w-full pt-32 pb-16 px-6 lg:px-12 xl:px-20 overflow-hidden bg-white dark:bg-[#1E293B] border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col gap-4 text-left max-w-4xl relative z-10">
          <h1 className="text-4xl lg:text-6xl font-light text-alt-slate dark:text-white leading-[120%] tracking-tight">
            Toutes nos réalisations
          </h1>
          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            Découvrez comment nous accompagnons nos clients dans leur transformation numérique à travers des solutions sur-mesure, innovantes et performantes.
          </p>
        </div>
      </section>

      {/* Contenu avec Sidebar de Filtres */}
      <section className="w-full px-6 lg:px-12 xl:px-20 py-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Sidebar Filtres */}
        <div className="w-full lg:w-1/4 flex flex-col gap-10">
          <div className="flex items-center gap-3 text-alt-slate dark:text-white mb-2">
            <Filter className="w-5 h-5" />
            <h2 className="text-xl font-medium">Filtres</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">Types de projet</h3>
            <div className="flex flex-col gap-2">
              {TYPES.map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 flex items-center justify-center border transition-colors ${selectedType === type ? 'bg-alt-blue border-alt-blue' : 'bg-transparent border-neutral-300 dark:border-neutral-600 group-hover:border-alt-blue'}`}>
                    {selectedType === type && <div className="w-2.5 h-2.5 bg-white" />}
                  </div>
                  <span className={`text-base transition-colors ${selectedType === type ? 'text-alt-slate dark:text-white font-medium' : 'text-neutral-600 dark:text-neutral-400 group-hover:text-alt-slate dark:group-hover:text-neutral-200'}`}>
                    {type}
                  </span>
                  {/* Invisible radio input for accessibility */}
                  <input type="radio" name="projectType" value={type} checked={selectedType === type} onChange={(e) => setSelectedType(e.target.value)} className="hidden" />
                </label>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">Secteurs d'activité</h3>
            <div className="flex flex-col gap-2">
              {SECTEURS.map((secteur) => (
                <label key={secteur} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 flex items-center justify-center border transition-colors ${selectedSecteur === secteur ? 'bg-alt-blue border-alt-blue' : 'bg-transparent border-neutral-300 dark:border-neutral-600 group-hover:border-alt-blue'}`}>
                    {selectedSecteur === secteur && <div className="w-2.5 h-2.5 bg-white" />}
                  </div>
                  <span className={`text-base transition-colors ${selectedSecteur === secteur ? 'text-alt-slate dark:text-white font-medium' : 'text-neutral-600 dark:text-neutral-400 group-hover:text-alt-slate dark:group-hover:text-neutral-200'}`}>
                    {secteur}
                  </span>
                  <input type="radio" name="projectSecteur" value={secteur} checked={selectedSecteur === secteur} onChange={(e) => setSelectedSecteur(e.target.value)} className="hidden" />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Grille des Projets */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6 flex justify-between items-end">
            <h2 className="text-2xl font-medium text-alt-slate dark:text-white">
              {filteredProjects.length} résultat{filteredProjects.length !== 1 && 's'}
            </h2>
            {(selectedType !== "Tous" || selectedSecteur !== "Tous") && (
              <button 
                onClick={() => { setSelectedType("Tous"); setSelectedSecteur("Tous"); }}
                className="text-sm font-medium text-alt-blue hover:underline"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="flex flex-col gap-24 relative z-10 mt-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className={`flex flex-col xl:flex-row gap-10 xl:gap-12 items-center ${index % 2 !== 0 ? 'xl:flex-row-reverse' : ''}`}>
                  {/* Visuel */}
                  <Link to={`/realisations/${project.id}`} className={`w-full xl:w-[60%] group overflow-hidden rounded-none shadow-none relative block border border-neutral-200 dark:border-neutral-800 ${project.imageContainerClassName || ''}`}>
                    <div className="absolute inset-0 bg-alt-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.clientName} 
                      className={`w-full aspect-[4/3] lg:aspect-[16/10] transition-transform duration-700 group-hover:scale-105 ${project.imageClassName || 'object-cover'}`}
                    />
                  </Link>

                  {/* Infos */}
                  <div className="w-full xl:w-[40%] flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2 text-sm font-bold text-alt-blue uppercase tracking-wider">
                      <span>{project.type}</span>
                      <span className="text-neutral-400">•</span>
                      <span>{project.secteur}</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-alt-slate dark:text-white leading-[120%]">
                      {project.clientName}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-[160%]">
                      {project.description}
                    </p>
                    
                    <Link to={`/realisations/${project.id}`} className="inline-flex items-center gap-2 mt-4 text-alt-slate dark:text-white group w-fit">
                      <span className="text-lg font-medium border-b-2 border-transparent group-hover:border-alt-blue transition-colors pb-1">
                        En savoir plus
                      </span>
                      <ArrowRight className="w-5 h-5 text-alt-blue group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 bg-white dark:bg-[#1E293B] border border-neutral-200 dark:border-neutral-800 text-center px-6 mt-8">
              <p className="text-xl font-medium text-alt-slate dark:text-white mb-2">Aucun projet ne correspond à vos critères.</p>
              <p className="text-neutral-500 mb-6">Essayez de modifier vos filtres pour voir plus de résultats.</p>
              <button 
                onClick={() => { setSelectedType("Tous"); setSelectedSecteur("Tous"); }}
                className="px-6 py-3 bg-alt-blue text-white font-medium hover:bg-blue-600 transition-colors"
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>

      </section>
    </div>
  );
}
