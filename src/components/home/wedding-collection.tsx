"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WeddingCollection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Parallax on images
    gsap.fromTo(image1Ref.current,
      { y: 100 },
      {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    gsap.fromTo(image2Ref.current,
      { y: 50 },
      {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Fade up text
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      }
    );

  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typography */}
          <div ref={textRef} className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 lg:pr-12 z-10">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-8">
              The<br />
              Bridal <span className="italic text-primary-gold">Edit</span>
            </h2>
            <p className="font-sans text-foreground/70 text-sm leading-relaxed mb-10 max-w-sm">
              Discover our masterfully crafted bridal collection. Intricate zardozi work, pure raw silks, and heritage silhouettes designed for your most precious moments.
            </p>
            <Link href="/collections/wedding">
              <button className="font-sans text-xs uppercase tracking-[0.2em] text-foreground hover:text-primary-gold transition-colors pb-2 border-b border-foreground/30 hover:border-primary-gold w-max">
                Explore The Collection
              </button>
            </Link>
          </div>

          {/* Images */}
          <div className="lg:col-span-8 order-1 lg:order-2 relative h-[70vh] md:h-[90vh]">
            <div 
              ref={image1Ref} 
              className="absolute top-0 right-0 w-[85%] h-[85%] z-10 overflow-hidden shadow-2xl bg-foreground/5"
            >
              <Image
                src="/images/wcoll.png"
                alt="Bridal Lehenga"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top"
              />
            </div>
            <div 
              ref={image2Ref} 
              className="absolute bottom-0 left-0 w-[45%] h-[55%] z-20 overflow-hidden shadow-2xl border-[12px] border-white bg-foreground/5"
            >
              
              <Image
                src="/images/bg1.png"
                alt="Bridal Details"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
