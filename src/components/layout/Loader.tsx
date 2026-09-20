import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const txt1Ref = useRef<HTMLSpanElement>(null);
  const txt2Ref = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !txt1Ref.current || !txt2Ref.current || !barRef.current || !wrapperRef.current) return;

    let ctx = gsap.context(() => {
      const t2 = gsap.utils.toArray('.char');
      const color2 = '#1769FF'; // ALT blue

      const moveBar = () => {
        gsap.set(barRef.current, { left: gsap.getProperty(txt1Ref.current, 'width') as number + 1 });
      };

      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => {
          onComplete();
        }
      });

      // We calculate widths dynamically based on the rendered font size
      const txt1Width = gsap.getProperty(txt1Ref.current, 'width') as number;
      const txt2Width = gsap.getProperty(txt2Ref.current, 'width') as number;
      
      // Set the wrapper width to exactly fit the full text "www.alt.ga"
      gsap.set(wrapperRef.current, { width: txt1Width + txt2Width });
      
      // To center "www." initially, we shift the container right by half of the remaining text width
      const shiftX = txt2Width / 2;

      tl.set(txt1Ref.current, { fontWeight: '400' })
        .set(txt2Ref.current, { color: color2, fontWeight: '700', opacity: 0, x: () => gsap.getProperty(txt1Ref.current, 'width') as number - 2, immediateRender: true })
        .set(barRef.current, { left: 1, immediateRender: true })

        .to(barRef.current, { duration: 0.1, opacity: 0, ease: "expo.in", yoyo: true, repeat: 5, repeatDelay: 0.3 }, 0)
        .from(txt1Ref.current, { duration: 1.1, width: 0, ease: "steps(4)", onUpdate: moveBar }, 2.5) // steps(4) because 'www.' has 4 chars
        .to(barRef.current, { duration: 0.05, backgroundColor: color2 }, '+=0.15')
        .to(barRef.current, { duration: 1.0, width: txt2Width, ease: "power4.inOut" }, '+=0.1')
        .from(wrapperRef.current, { duration: 1.0, x: shiftX, ease: "power4.inOut" }, '-=1.0')
        .to(txt2Ref.current, { duration: 0.01, opacity: 1 }, '-=0.1')
        .to(barRef.current, { duration: 0.4, x: txt2Width, width: 0, ease: "power4.in" })
        .from(t2, { duration: 0.6, opacity: 0, ease: "power3.inOut", stagger: 0.04 }, '-=0.5')
        .to(txt1Ref.current, { duration: 1.5, opacity: 0.25, ease: "power3.inOut" }, '-=1.2')
        // Final fade out of the loader
        .to(containerRef.current, { duration: 0.8, opacity: 0, ease: "power2.inOut", delay: 0.5 });
        
      tl.timeScale(1.45);
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const text2 = "alt.ga";

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-alt-light dark:bg-[#0F172A] flex items-center justify-center overflow-hidden transition-colors duration-300"
    >
      <div 
        ref={wrapperRef}
        className="relative text-[40px] font-sans tracking-[1.5px] h-[50px] whitespace-nowrap"
      >
        <span ref={txt1Ref} className="inline-block overflow-hidden absolute left-0 top-0 text-alt-slate dark:text-white">www.</span>
        <span ref={txt2Ref} className="inline-block absolute top-0 whitespace-nowrap">
          {text2.split("").map((char, index) => (
            <span key={index} className="char inline-block">{char}</span>
          ))}
        </span>
        <div ref={barRef} className="absolute w-[3px] h-[49px] top-[-1px] left-0 bg-alt-slate dark:bg-white"></div>
      </div>
    </div>
  );
}
