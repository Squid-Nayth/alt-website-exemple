import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LegalPage() {
  const location = useLocation();
  const path = location.pathname;

  let title = "Mentions Légales";
  let content = [];

  if (path === "/politique-de-confidentialite") {
    title = "Politique de Confidentialité";
    content = [
      "Chez ALT, la protection de vos données personnelles est une priorité.",
      "Nous collectons uniquement les informations nécessaires au bon traitement de vos demandes (nom, email, etc.) via notre formulaire de contact.",
      "Vos données ne sont jamais revendues à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données."
    ];
  } else if (path === "/politique-de-cookies") {
    title = "Politique de Cookies";
    content = [
      "Notre site utilise des cookies pour améliorer votre expérience utilisateur et réaliser des statistiques de visite.",
      "Vous pouvez à tout moment configurer votre navigateur pour refuser l'installation de ces cookies.",
      "Cependant, certaines fonctionnalités du site pourraient ne plus être accessibles si vous désactivez l'ensemble des cookies."
    ];
  } else if (path === "/cgu") {
    title = "Conditions Générales d'Utilisation (CGU)";
    content = [
      "L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après.",
      "ALT s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, nous ne pourrons être tenus responsables des oublis, des inexactitudes et des carences dans la mise à jour.",
      "Le site est accessible 24h/24 et 7j/7, sauf interruption pour maintenance."
    ];
  } else {
    // Default to mentions légales
    content = [
      "Ce site est édité par la société Advanced and Logic Technologies (ALT), Entreprise de Services du Numérique (ESN).",
      "Siège social : Libreville, Gabon - Zone OHADA / CEMAC.",
      "Le directeur de la publication est le représentant légal de la société ALT.",
      "Le site est hébergé par des serveurs sécurisés garantissant une haute disponibilité."
    ];
  }

  return (
    <div className="pt-32 pb-20 px-6 lg:px-20 max-w-4xl mx-auto min-h-[70vh]">
      <Link to="/" className="inline-flex items-center gap-2 text-alt-blue font-medium hover:underline mb-8">
        <ArrowLeft className="w-5 h-5" />
        Retour à l'accueil
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold text-alt-slate dark:text-white mb-10">
        {title}
      </h1>
      <div className="flex flex-col gap-6">
        {content.map((paragraph, idx) => (
          <p key={idx} className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
