"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Linkedin, Facebook } from "lucide-react";


export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto min-h-[70vh]">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold text-alt-slate dark:text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10">
            Vous avez un projet, une question ou l&apos;envie de collaborer avec nous ? Nous serions ravis d&apos;échanger avec vous.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/icones/icons8-message-100.png" alt="Email" width={32} height={32} className="dark:invert" />
              <span className="text-lg font-medium text-alt-slate dark:text-neutral-200">contact@alt.ga</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/icones/icons8-phone-100 (1).png" alt="Phone" width={32} height={32} className="dark:invert" />
              <span className="text-lg font-medium text-alt-slate dark:text-neutral-200">+241 07 81 32 79</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-alt-blue dark:text-neutral-400" size={32} strokeWidth={1.5} />
              <span className="text-lg font-medium text-alt-slate dark:text-neutral-200">Okala, première pompe</span>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="text-alt-blue dark:text-neutral-400" size={32} strokeWidth={1.5} />
              <span className="text-lg font-medium text-alt-slate dark:text-neutral-200">LinkedIn: @alt-gabon</span>
            </div>
            <div className="flex items-center gap-4">
              <Facebook className="text-alt-blue dark:text-neutral-400" size={32} strokeWidth={1.5} />
              <span className="text-lg font-medium text-alt-slate dark:text-neutral-200">Facebook: Advanced and Logic Technologies</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 transition-colors">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-alt-slate dark:text-neutral-300">Nom et prénom *</label>
              <input type="text" className="border-b border-neutral-300 dark:border-neutral-700 py-2 focus:border-alt-blue bg-transparent dark:text-white outline-none transition-colors" placeholder="Votre nom" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-alt-slate dark:text-neutral-300">Email *</label>
              <input type="email" className="border-b border-neutral-300 dark:border-neutral-700 py-2 focus:border-alt-blue bg-transparent dark:text-white outline-none transition-colors" placeholder="Votre email" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-alt-slate dark:text-neutral-300">Type de demande *</label>
              <select className="border-b border-neutral-300 dark:border-neutral-700 py-2 focus:border-alt-blue bg-transparent dark:text-white outline-none transition-colors" required>
                <option value="" className="dark:bg-[#1E293B]">Sélectionner</option>
                <option value="devis" className="dark:bg-[#1E293B]">Demande de devis</option>
                <option value="question" className="dark:bg-[#1E293B]">Question générale</option>
                <option value="partenariat" className="dark:bg-[#1E293B]">Partenariat</option>
                <option value="autre" className="dark:bg-[#1E293B]">Autre</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-alt-slate dark:text-neutral-300">Message *</label>
              <textarea className="border-b border-neutral-300 dark:border-neutral-700 py-2 focus:border-alt-blue bg-transparent dark:text-white outline-none transition-colors" placeholder="Votre message" rows={3} required></textarea>
            </div>
            <Button className="mt-4 bg-alt-blue hover:brightness-110 text-white w-full py-6 text-lg rounded-xl flex items-center justify-center gap-2 transition-all">
              Envoyer <ArrowRight size={20} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
