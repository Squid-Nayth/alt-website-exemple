import React from "react";

export default function Waves({ className = "absolute bottom-0 left-0 w-full" }: { className?: string }) {
  return (
    <div className={`overflow-hidden leading-[0] z-0 pointer-events-none opacity-80 dark:opacity-50 ${className}`}>
      <svg 
        className="relative block w-[200%] md:w-full h-[8vh] min-h-[50px] max-h-[100px]" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="auto"
      >
        <defs>
          <path 
            id="gentle-wave" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
          />
        </defs>
        <g className="parallax-waves">
          {/* Teal / Sky */}
          <use href="#gentle-wave" x="48" y="0" fill="rgba(45, 212, 191, 0.7)" /> 
          {/* Indigo / Purple */}
          <use href="#gentle-wave" x="48" y="3" fill="rgba(99, 102, 241, 0.5)" />
          {/* ALT Blue light */}
          <use href="#gentle-wave" x="48" y="5" fill="rgba(23, 105, 255, 0.3)" />
          {/* ALT Blue solid */}
          <use href="#gentle-wave" x="48" y="7" fill="#1769FF" />
        </g>
      </svg>
    </div>
  );
}
