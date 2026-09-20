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
        label: "Accueil",
        url: "/"
    },
    {
        label: "Expertises",
        url: "/#expertises",
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
        url: "/#realisations",
        megaMenu: [
            {
                title: "Types de projet",
                items: [
                    { label: "E-commerce", url: "/projets?type=E-commerce", iconName: "Store" },
                    { label: "Site vitrine", url: "/projets?type=Site vitrine", iconName: "AppWindow" },
                    { label: "Application Métier", url: "/projets?type=Application Métier", iconName: "MonitorCog" },
                    { label: "Infrastructure Réseau", url: "/projets?type=Infrastructure Réseau", iconName: "Network" },
                    { label: "Migration Cloud", url: "/projets?type=Migration Cloud", iconName: "Cloud" },
                ]
            },
            {
                title: "Secteurs",
                items: [
                    { label: "Arts & Culture", url: "/projets?secteur=Arts %26 Culture", iconName: "Palette" },
                    { label: "Avocats", url: "/projets?secteur=Avocats", iconName: "Scale" },
                    { label: "B2B", url: "/projets?secteur=B2B", iconName: "Handshake" },
                    { label: "Finance", url: "/projets?secteur=Finance", iconName: "Coins" },
                    { label: "Immobilier", url: "/projets?secteur=Immobilier", iconName: "Home" },
                    { label: "Mode & Beauté", url: "/projets?secteur=Mode %26 Beauté", iconName: "Shirt" },
                    { label: "Santé & Bien-être", url: "/projets?secteur=Santé %26 Bien-être", iconName: "HeartPulse" },
                    { label: "Associations", url: "/projets?secteur=Associations", iconName: "HeartHandshake" },
                    { label: "Communication", url: "/projets?secteur=Communication", iconName: "Megaphone" },
                    { label: "Éducation", url: "/projets?secteur=Éducation", iconName: "GraduationCap" },
                    { label: "Horticulture", url: "/projets?secteur=Horticulture", iconName: "Leaf" },
                    { label: "Industrie & Logistique", url: "/projets?secteur=Industrie %26 Logistique", iconName: "Factory" },
                    { label: "Restauration", url: "/projets?secteur=Restauration", iconName: "Utensils" },
                    { label: "Sport & Loisirs", url: "/projets?secteur=Sport %26 Loisirs", iconName: "Dumbbell" },
                ]
            }
        ]
    },
    {
        label: "À propos",
        url: "/#a-propos",
        children: [
            { label: "Notre équipe", url: "/a-propos/equipe" }
        ]
    },
    {
        label: "Ressources",
        url: "/#ressources",
        children: [
            { label: "Actualités", url: "/ressources/actualites" }
        ]
    }
];
