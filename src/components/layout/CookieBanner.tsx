import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isVisible || !mounted) return null;

  return createPortal(
    <div className="fixed bottom-6 right-6 z-[9999] w-[380px] bg-[#F8FAFC] dark:bg-[#1E293B] rounded-[4px] p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800 animate-in slide-in-from-bottom-5 duration-500 font-sans">
      <p className="text-neutral-600 dark:text-neutral-300 text-[15px] leading-[1.6] mb-5">
        Nous utilisons des cookies pour améliorer l'expérience de notre site. <Link to="/politique-de-cookies" className="underline hover:text-neutral-900 dark:hover:text-white transition-colors">En savoir plus</Link>
      </p>
      
      <div className="flex items-center gap-3 mb-6">
        <button 
          onClick={() => setMarketingCookies(!marketingCookies)}
          className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${marketingCookies ? 'bg-[#9FE58F]' : 'bg-neutral-300 dark:bg-neutral-600'}`}
          aria-label="Toggle Marketing Cookies"
        >
          <div className={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 ${marketingCookies ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
        <span className="text-neutral-500 dark:text-neutral-400 text-[15px]">
          Cookies Marketing (GA, Segment.com)
        </span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <button 
          onClick={() => setIsVisible(false)}
          className="text-[15px] font-bold text-[#6B7280] dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          Enregistrer mes choix
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-[#3B4CB8] hover:bg-[#2C3A91] text-white text-[15px] font-semibold px-6 py-2.5 rounded-[4px] transition-colors shadow-sm"
        >
          Autoriser
        </button>
      </div>
    </div>,
    document.body
  );
}
