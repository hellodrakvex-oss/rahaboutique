"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const collectionItems = [
  {
    title: "The Bridal Edit",
    subtitle: "Heritage Couture",
    href: "/collections/wedding",
    image: "/images/wcoll.png",
  },
  {
    title: "Pure Handlooms",
    subtitle: "Banarasi Silks",
    href: "/collections/sarees",
    image: "/images/sarees.png",
  },
  {
    title: "Modern Ethnic",
    subtitle: "Ready to Wear",
    href: "/collections/kurtis",
    image: "/images/salwar.png",
  },
];

export function EditorialCollections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header reveal
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    // Staggered cards reveal
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-primary-gold block" />
              <span className="text-primary-gold font-sans tracking-[0.3em] uppercase text-[10px]">Curated</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground">
              Editorial <span className="italic text-primary-gold">Selections</span>
            </h2>
          </div>
          <Link href="/collections" className="mt-8 md:mt-0">
            <button className="group flex items-center font-sans text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-primary-gold transition-colors pb-2 border-b border-foreground/20 hover:border-primary-gold">
              Explore All Collections
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {collectionItems.map((collection, index) => (
            <div 
              key={collection.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <Link href={collection.href} className="block relative overflow-hidden aspect-[3/4] mb-6">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-6 py-3 font-sans text-[10px] uppercase tracking-[0.2em]">
                    Discover
                  </span>
                </div>
              </Link>

              {/* Typography */}
              <div className="text-center">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary-gold mb-3">
                  {collection.subtitle}
                </p>
                <Link href={collection.href}>
                  <h3 className="font-serif text-3xl text-foreground group-hover:text-primary-gold transition-colors">
                    {collection.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
