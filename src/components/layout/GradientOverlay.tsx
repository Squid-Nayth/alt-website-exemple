"use client"

import { useLocation as usePathname } from "react-router-dom";

export default function GradientOverlay() {
  const pathname = usePathname();
  if (pathname.pathname !== "/") return null;

  return (
    <div className="absolute inset-0 bg-gradient-custom backdrop-blur-md h-[70vh] z-[-10]">
      <div className="absolute w-full h-full shadow-blur z-[-5]" />
    </div>
  );
}

