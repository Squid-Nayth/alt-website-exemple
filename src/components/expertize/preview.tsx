"use client"

import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type Work = {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
};

const works: Work[] = [
  {
    id: 1,
    title: "Développement informatique",
    description: "Création d'applications sur mesure adaptées à vos besoins métiers.",
    icon: "/icones/icons8-code-100.png",
    details: ["Sites web vitrine et e-commerce", "Applications web complexes", "Applications mobiles natives et hybrides", "Intégration d'API et microservices"]
  },
  {
    id: 2,
    title: "Infogérance",
    description: "Déléguez la gestion de votre parc informatique en toute sérénité.",
    icon: "/icones/icons8-cloud-100.png",
    details: ["Supervision proactive 24/7", "Maintenance préventive et curative", "Gestion des sauvegardes et PRA", "Support utilisateur réactif"]
  },
  {
    id: 3,
    title: "Administration réseau & SI",
    description: "Conception et maintien d'infrastructures performantes et sécurisées.",
    icon: "/icones/icons8-dashboard-100.png",
    details: ["Audit d'infrastructure réseau", "Architecture et déploiement LAN/WAN", "Optimisation des performances", "Gestion des serveurs sur site et cloud"]
  },
  {
    id: 4,
    title: "Cybersécurité",
    description: "Protégez vos données et votre activité contre les cybermenaces.",
    icon: "/icones/icons8-message-100.png",
    details: ["Audit de sécurité complet", "Mise en conformité (RGPD, etc.)", "Protection contre les attaques", "Sensibilisation des collaborateurs"]
  },
  {
    id: 5,
    title: "IT Consulting",
    description: "Accompagnement stratégique pour réussir votre transformation digitale.",
    icon: "/icones/icons8-team-members-100.png",
    details: ["Élaboration de schémas directeurs", "Audit technologique", "Gestion de projet IT", "Accompagnement au changement"]
  },
  {
    id: 6,
    title: "Stratégie SEO",
    description: "Améliorez votre visibilité en ligne et attirez un trafic qualifié.",
    icon: "/icones/icons8-search-128.png",
    details: ["Audit technique SEO", "Optimisation On-site et Off-site", "Stratégie de contenu", "Suivi et reporting des performances"]
  },
];

export default function ExpertiseGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  useFadeIn(gridRef, 0.3);

  return (
    <div className="w-full bg-alt-light lg:px-20 lg:py-24 md:px-14 md:py-16 px-8 py-12">
      <div className="flex flex-col gap-16">
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {works.map((work) => (
            <div key={work.id} className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:border-alt-blue hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-alt-slate rounded-xl flex items-center justify-center p-3 group-hover:bg-alt-blue transition-colors">
                <img
                  src={work.icon}
                  alt={work.title}
                  className="w-full h-full object-contain filter invert"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium text-alt-slate">{work.title}</h3>
                <p className="text-neutral-600 leading-[160%]">{work.description}</p>
              </div>
              <ul className="flex flex-col gap-2 mt-2">
                {work.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-alt-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-500">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}




