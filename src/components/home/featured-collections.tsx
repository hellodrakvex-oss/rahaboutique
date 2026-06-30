"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedCollections() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".collection-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-[1px] bg-primary-gold" />
              <span className="text-primary-gold font-sans tracking-[0.35em] uppercase text-[10px]">Shop Collections</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Explore Our <span className="italic text-primary-gold">Universe</span>
            </h2>
          </div>
          <Link href="/collections" className="mt-8 md:mt-0">
            <button className="group flex items-center font-sans text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-primary-gold transition-colors border-b border-foreground/20 hover:border-primary-gold pb-2">
              All Collections <ArrowRight className="ml-3 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Asymmetric Luxury Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[260px] md:auto-rows-[320px]">
          {/* Large Feature */}
          <Link href={`/collections/${collections[4].id}`} className="collection-card lg:col-span-5 row-span-2 group relative overflow-hidden bg-foreground/5">
            <Image src={collections[4].img} alt={collections[4].name} fill className="object-cover transition-transform duration-[1.6s] ease-[0.16,1,0.3,1] group-hover:scale-110" sizes="(max-width:768px) 50vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-6 border border-white/0 group-hover:border-primary-gold/30 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-primary-gold mb-2">{collections[4].desc}</p>
              <h3 className="font-serif text-3xl md:text-4xl text-white">{collections[4].name}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-white/60 font-sans text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>

          {/* Top Row Right */}
          {collections.slice(0, 2).map((col) => (
            <Link key={col.id} href={`/collections/${col.id}`} className="collection-card lg:col-span-3 group relative overflow-hidden bg-foreground/5 col-span-1">
              <Image src={col.img} alt={col.name} fill className="object-cover transition-transform duration-[1.6s] ease-[0.16,1,0.3,1] group-hover:scale-110" sizes="(max-width:768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-7">
                <h3 className="font-serif text-xl md:text-2xl text-white">{col.name}</h3>
              </div>
            </Link>
          ))}

          {/* Bottom Row Right */}
          {collections.slice(2, 4).map((col) => (
            <Link key={col.id} href={`/collections/${col.id}`} className="collection-card lg:col-span-3 group relative overflow-hidden bg-foreground/5 col-span-1">
              <Image src={col.img} alt={col.name} fill className="object-cover transition-transform duration-[1.6s] ease-[0.16,1,0.3,1] group-hover:scale-110" sizes="(max-width:768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-7">
                <h3 className="font-serif text-xl md:text-2xl text-white">{col.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
