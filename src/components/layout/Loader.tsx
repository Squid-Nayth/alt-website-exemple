import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<SVGPathElement>(null);
  const shapeRef = useRef<SVGPathElement>(null);
  const spinnerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !dropRef.current || !shapeRef.current || !spinnerRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      const pathLength = shapeRef.current?.getTotalLength() || 4000;

      // 1. Initial states
      gsap.set(containerRef.current, { clipPath: "circle(150% at 50% 50%)" });
      gsap.set(dropRef.current, { y: -800, scaleY: 1.2, scaleX: 0.8, transformOrigin: "50% 100%", opacity: 0 });
      gsap.set(shapeRef.current, { 
        fillOpacity: 0, 
        strokeOpacity: 1,
        strokeDasharray: pathLength, 
        strokeDashoffset: pathLength 
      });
      gsap.set(spinnerRef.current, { opacity: 0, rotation: 0, transformOrigin: "50% 50%" });

      tl.to(dropRef.current, {
        opacity: 1,
        duration: 0.1
      }, 0)
      // 2. Blue drop falls and squashes
      .to(dropRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power2.in"
      }, 0)
      .to(dropRef.current, {
        scaleY: 0.6,
        scaleX: 1.4,
        duration: 0.15,
        ease: "power2.out"
      })
      .to(dropRef.current, {
        scaleY: 1.1,
        scaleX: 0.9,
        duration: 0.15,
        ease: "power2.inOut"
      })
      .to(dropRef.current, {
        scaleY: 1,
        scaleX: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.4)"
      })

      // 3. Dark shape is drawn (pencil effect)
      .to(shapeRef.current, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.inOut"
      }, "-=0.2")
      // 4. Dark shape fills in
      .to(shapeRef.current, {
        fillOpacity: 1,
        duration: 0.5,
        ease: "power1.inOut"
      }, "-=0.3")
      // Remove stroke after fill for a clean final logo
      .to(shapeRef.current, {
        strokeOpacity: 0,
        duration: 0.3
      }, "-=0.3")

      // 5. Spinner appears
      .to(spinnerRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      });

      // Infinite rotation for the spinner
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1.2,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%"
      });
      
      // 6. Loader shrinks into a circle revealing the page underneath
      tl.to(spinnerRef.current, { opacity: 0, duration: 0.3, delay: 1.7 }, "-=0.3");
      
      tl.to(containerRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.8,
        ease: "power3.inOut",
        delay: 0
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-white dark:bg-[#020617] flex items-center justify-center overflow-hidden transition-colors duration-300"
    >
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Loading Spinner */}
        <svg 
          ref={spinnerRef}
          className="absolute inset-0 w-full h-full text-[#0064FE]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" strokeDasharray="210" strokeDashoffset="60" strokeLinecap="round" />
        </svg>

        {/* SVG Logo */}
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1254 1254"
          className="w-24 h-24 relative z-10"
        >
          {/* Dark Shape */}
          <path 
            ref={shapeRef}
            id="alt-dark-shape"
            d="M 607.0,214.0 L 603.0,214.0 L 600.0,218.0 L 600.0,227.0 L 599.0,228.0 L 597.0,250.0 L 592.0,272.0 L 585.0,293.0 L 581.0,300.0 L 579.0,307.0 L 559.0,345.0 L 536.0,380.0 L 480.0,454.0 L 392.0,563.0 L 356.0,611.0 L 342.0,633.0 L 329.0,658.0 L 318.0,686.0 L 310.0,715.0 L 307.0,731.0 L 306.0,747.0 L 305.0,748.0 L 306.0,789.0 L 314.0,825.0 L 322.0,847.0 L 330.0,863.0 L 349.0,892.0 L 366.0,912.0 L 380.0,926.0 L 415.0,954.0 L 448.0,974.0 L 450.0,974.0 L 454.0,971.0 L 458.0,933.0 L 461.0,923.0 L 461.0,919.0 L 463.0,915.0 L 464.0,907.0 L 471.0,885.0 L 483.0,855.0 L 505.0,813.0 L 531.0,775.0 L 708.0,544.0 L 718.0,529.0 L 728.0,510.0 L 738.0,486.0 L 744.0,465.0 L 746.0,449.0 L 747.0,448.0 L 747.0,441.0 L 748.0,440.0 L 748.0,403.0 L 747.0,402.0 L 746.0,388.0 L 743.0,373.0 L 734.0,346.0 L 719.0,316.0 L 699.0,288.0 L 671.0,259.0 L 638.0,233.0 Z"
            className="text-alt-slate dark:text-white fill-current stroke-current"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Blue Drop */}
          <path 
            ref={dropRef}
            id="alt-blue-drop"
            d="M 824.0,621.0 L 821.0,623.0 L 755.0,704.0 L 748.0,711.0 L 745.0,716.0 L 717.0,749.0 L 709.0,761.0 L 701.0,776.0 L 693.0,798.0 L 689.0,819.0 L 688.0,844.0 L 689.0,845.0 L 690.0,860.0 L 694.0,877.0 L 705.0,903.0 L 720.0,925.0 L 740.0,945.0 L 763.0,960.0 L 791.0,971.0 L 807.0,974.0 L 815.0,974.0 L 816.0,975.0 L 838.0,975.0 L 839.0,974.0 L 846.0,974.0 L 865.0,970.0 L 881.0,964.0 L 895.0,957.0 L 915.0,943.0 L 932.0,926.0 L 946.0,906.0 L 953.0,892.0 L 959.0,876.0 L 964.0,850.0 L 964.0,821.0 L 963.0,820.0 L 961.0,802.0 L 952.0,776.0 L 940.0,754.0 L 896.0,700.0 L 837.0,631.0 L 834.0,626.0 L 829.0,621.0 Z"
            fill="#0064FE"
          />
        </svg>
      </div>
    </div>
  );
}

