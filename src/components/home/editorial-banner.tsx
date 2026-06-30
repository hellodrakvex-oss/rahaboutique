"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function EditorialBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { scale: 1.08 },
      {
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-[#0d0d0d] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[70vh]">
          {/* Image */}
          <div ref={imgRef} className="relative overflow-hidden min-h-[50vh] lg:min-h-full bg-foreground/10">
            <Image
              src="/images/festive.png"
              alt="Festive Collection"
              fill
              className="object-cover object-top opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]/60" />
          </div>

          {/* Text */}
          <div ref={textRef} className="flex flex-col justify-center px-0 lg:pl-20 py-16 lg:py-0">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-primary-gold" />
              <span className="text-primary-gold font-sans tracking-[0.35em] uppercase text-[10px]">Festive 2025</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-8">
              Dressed for <span className="italic text-primary-gold">Every</span><br />
              Celebration
            </h2>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-md mb-12 font-light">
              Handwoven silks, hand-embroidered organzas, and festive-ready kurta sets — curated exclusively for the modern Indian woman who celebrates in style.
            </p>
            <Link href="/collections/festive">
              <button className="group w-max border border-white/30 px-10 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-white hover:bg-primary-gold hover:border-primary-gold transition-all duration-500 flex items-center gap-4">
                Shop Festive Edit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
