"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Master Craftsmanship",
    desc: "Every thread tells a story of heritage, woven by artisans who have perfected their art over generations in the holy city of Banaras.",
    img: "/images/kurtis.png",
  },
  {
    title: "Pure Handloom Silk",
    desc: "Sourced from the finest weavers across India, our silks offer an unmatched drape, luminous sheen, and a texture that speaks of pure luxury.",
    img: "/images/salwar.png",
  },
  {
    title: "Intricate Zari Work",
    desc: "Embellished with pure gold and silver zari, our garments create a mesmerizing play of light, reflecting the grandeur of royal Indian courts.",
    img: "/images/wcoll.png",
  },
  {
    title: "Timeless Silhouettes",
    desc: "Rooted in tradition yet designed for the modern woman. Each piece is tailored to ensure you feel empowered and elegant at every occasion.",
    img: "/images/festive.png",
  }
];

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const panels = gsap.utils.toArray(".horizontal-panel");
    const totalWidth = scrollWrapperRef.current.scrollWidth - window.innerWidth;

    // Pin and scroll horizontally
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${totalWidth}`,
      }
    });

    // Parallax on images within panels
    panels.forEach((panel: any) => {
      const img = panel.querySelector('.parallax-img');
      gsap.fromTo(img, 
        { scale: 1.2, xPercent: -15 }, 
        {
          scale: 1,
          xPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.getById(scrollWrapperRef.current?.id || ""), // Note: complex to link, using simple scrub
            scrub: true,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen relative bg-[#111] text-white overflow-hidden">
      
      {/* Fixed Header */}
      <div className="absolute top-12 left-6 md:top-24 md:left-12 z-20 mix-blend-difference pointer-events-none">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white opacity-90">
          The Art of <span className="italic font-light text-primary-gold">Weaving</span>
        </h2>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div ref={scrollWrapperRef} className="flex w-[400vw] h-full items-center">
        {items.map((item, index) => (
          <div key={index} className="horizontal-panel w-[100vw] h-full flex-shrink-0 flex items-center justify-center px-6 md:px-24">
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full max-w-[1400px]">
              
              {/* Image with Parallax */}
              <div className="w-full lg:w-[55%] h-[45vh] lg:h-[75vh] relative overflow-hidden bg-white/5 p-4 md:p-8">
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="parallax-img object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-[40%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-primary-gold block" />
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary-gold">
                    Chapter 0{index + 1}
                  </p>
                </div>
                
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                  {item.title}
                </h3>
                
                <p className="font-sans text-white/70 max-w-md leading-loose text-sm md:text-base font-light mb-12">
                  {item.desc}
                </p>

                {index === items.length - 1 && (
                  <button className="flex items-center gap-4 font-sans text-xs uppercase tracking-[0.2em] text-white hover:text-primary-gold transition-colors w-max group">
                    <span className="w-8 h-[1px] bg-white group-hover:bg-primary-gold transition-colors" />
                    Read Our Story
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
