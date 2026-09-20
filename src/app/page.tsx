import VisionBrand from "@/components/landing-page/brands";
import Introduce from "@/components/landing-page/introduce";
import Worksheet from "@/components/landing-page/projects";
import Story from "@/components/landing-page/story";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RootPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="max-w-full">
      <Introduce/>
      <VisionBrand/>
      <Worksheet/>
      <Story/>
    </div>
  );
}



