export interface NavigationItem {
    label: string;
    url: string;
    children?: NavigationItem[];
    megaMenu?: {
        title: string;
        items: { label: string; url: string; iconName: string }[];
    }[];
}

export const navigation: NavigationItem[] = [
    {
        label: "Expertises",
        url: "/expertises-index", // This path doesn't exist, will 404
        megaMenu: [
            {
                title: "Ingénierie & Conseil",
                items: [
                    { label: "Développement informatique", url: "/expertises/developpement", iconName: "Code" },
                    { label: "IT Consulting", url: "/expertises/it-consulting", iconName: "Briefcase" },
                    { label: "Stratégie SEO", url: "/expertises/seo", iconName: "TrendingUp" },
                ]
            },
            {
                title: "Infrastructure & Sécurité",
                items: [
                    { label: "Infogérance", url: "/expertises/infogerance", iconName: "Headset" },
                    { label: "Administration réseau & SI", url: "/expertises/reseau-si", iconName: "Network" },
                    { label: "Cybersécurité", url: "/expertises/cybersecurite", iconName: "ShieldCheck" },
                ]
            }
        ]
    },
    {
        label: "Réalisations",
        url: "/realisations-index", // This path doesn't exist, will 404
        children: [
            { label: "Voir toutes les réalisations", url: "/realisations" }
        ]
    },
    {
        label: "À propos",
        url: "/a-propos-index", // This path doesn't exist, will 404
        children: [
            { label: "Notre équipe", url: "/a-propos/equipe" },
            { label: "Partenaires", url: "/a-propos/partenaires" }
        ]
    },
    {
        label: "Ressources",
        url: "/ressources-index", // This path doesn't exist, will 404
        children: [
            { label: "Actualités", url: "/ressources/actualites" }
        ]
    }
];
