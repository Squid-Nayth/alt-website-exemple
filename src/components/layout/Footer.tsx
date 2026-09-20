"use client";

import { Link } from "react-router-dom";
import { navigation } from "@/data/navigation";
import { ArrowRight, ArrowUpIcon, Linkedin, Facebook, Twitter } from "lucide-react";
import { useState, useRef } from "react";
import { z } from "zod";

// validation newsletter
const emailSchema = z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "L'email est requis." })
    .email({ message: "Format d'email invalide." })
    .max(254, { message: "Email trop long." });

export default function Footer() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const letterRef = useRef<HTMLInputElement | null>(null);

    const validate = (value: string) => {
        const result = emailSchema.safeParse(value);
        if (!result.success) {
            setError(result.error.issues[0]?.message ?? "Email invalide.");
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate(email)) {
            setStatus("error");
            letterRef.current?.focus();
            return;
        }

        setStatus("submitting");
        try {
            console.log("Email submitted:", email);
            setStatus("success");
            setEmail("");
        } catch (_) {
            setStatus("error");
        }
    };

    const handleBlur = () => {
        if (email.length) validate(email);
    };

    return (
        <footer className="w-full bg-[#1F2A37] transition-colors duration-300 px-10 lg:px-20 py-20 flex flex-col gap-16">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex flex-col lg:gap-5 gap-3">
                    <img src="/icones/logo-navbar-white.png" alt="ALT Logo" className="h-16 lg:h-20 object-contain self-start" />
                    <p className="leading-[140%] lg:text-3xl text-xl text-neutral-400 lg:text-left font-sans font-normal mt-4">
                        Votre partenaire numérique en zone CEMAC.
                    </p>
                </div>

                {/* Bagian Newsletter */}
                <div className="flex flex-col gap-4 justify-left items-left lg:w-1/3">
                    <p className="text-neutral-400 font-sans font-normal text-xl">
                        Abonnez-vous à notre newsletter
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className={`w-full flex items-center border-b transition ${error
                            ? "border-red-500"
                            : "border-neutral-600 focus-within:border-neutral-300"
                            }`}
                        noValidate
                    >
                        <input
                            ref={letterRef}
                            type="email"
                            placeholder="Votre adresse email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error) setError(null);
                            }}
                            onBlur={handleBlur}
                            className="flex-1 bg-transparent outline-none text-neutral-200 placeholder-neutral-500 text-lg py-3"
                            aria-invalid={!!error}
                            aria-describedby={error ? "email-error" : undefined}
                            inputMode="email"
                            autoComplete="email"
                        />
                        <button
                            type="submit"
                            className="p-2 text-neutral-400 hover:text-white transition disabled:opacity-60"
                            disabled={status === "submitting"}
                        >
                            <ArrowRight size={22} />
                        </button>
                    </form>

                    {error ? (
                        <p id="email-error" className="text-red-400 text-sm mt-1">
                            {error}
                        </p>
                    ) : status === "success" ? (
                        <p className="text-emerald-400 text-sm mt-1">
                            Merci de votre inscription.
                        </p>
                    ) : null}

                    <p className="text-neutral-500 font-sans font-normal text-sm">
                        En vous inscrivant, vous acceptez notre <Link to="/politique-de-confidentialite" className="underline">Politique de confidentialité</Link>.
                    </p>
                </div>
            </div>

            {/* Middle Section */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                {/* Navigation (Top level links) */}
                <ul className="flex flex-col gap-4 justify-start items-start">
                    {navigation.map((item, index) => (
                        <li
                            key={`nav-${index}`}
                            className="font-normal text-neutral-400 text-lg"
                        >
                            <Link to={item.url} className="hover:text-neutral-100 transition-colors">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="font-normal text-neutral-400 text-lg">
                        <Link to="/contact" className="hover:text-neutral-100 transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Footer links (Légales) */}
                <ul className="flex flex-col gap-4 justify-start items-start">
                    {["Mentions légales", "Politique de confidentialité", "Politique de cookies", "CGU"].map((item, index) => {
                        const slug = item.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        return (
                            <li
                                key={`legals-${index}`}
                                className="font-normal text-neutral-400 text-lg"
                            >
                                <Link to={`/${slug}`} className="hover:text-neutral-100 transition-colors">
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Info */}
                <div className="flex flex-col gap-4 col-span-1 lg:col-span-2">
                    <ul className="flex flex-row gap-5">
                        <li className="text-neutral-400 hover:text-white cursor-pointer transition-colors p-2 hover:bg-neutral-800 rounded-full" title="@alt-gabon">
                            <a href="https://linkedin.com/company/alt-gabon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn @alt-gabon"><Linkedin size={24} /></a>
                        </li>
                        <li className="text-neutral-400 hover:text-white cursor-pointer transition-colors p-2 hover:bg-neutral-800 rounded-full" title="Advanced and Logic Technologies">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook Advanced and Logic Technologies"><Facebook size={24} /></a>
                        </li>
                        <li className="text-neutral-400 hover:text-white cursor-pointer transition-colors p-2 hover:bg-neutral-800 rounded-full">
                            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                        </li>
                    </ul>
                    <div className="mt-4 flex flex-col gap-2">
                        <p className="text-neutral-400 font-normal text-lg">Okala, première pompe<br />Libreville, Gabon</p>
                        <p className="text-neutral-400 font-normal text-lg">+241 07 81 32 79</p>
                        <p className="text-neutral-400 font-normal text-lg">contact@alt.ga</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-neutral-700 pt-8 flex flex-col lg:flex-row md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-500 text-sm font-normal">Copyright © {new Date().getFullYear()} Advanced and Logic Technologies</p>
                <div className="flex items-center cursor-pointer gap-2 text-neutral-500 hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="text-sm font-normal">Retour en haut</span>
                    <ArrowUpIcon size={16} />
                </div>
            </div>
        </footer>
    );
}
