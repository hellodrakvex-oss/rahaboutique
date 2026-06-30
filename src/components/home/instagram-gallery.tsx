"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const igImages = [
  { src: "/images/bg1.png", span: "row-span-2" },
  { src: "/images/bg2.png", span: "" },
  { src: "/images/bg3.png", span: "" },
  { src: "/images/bg4.png", span: "col-span-2" },
  ];

export function InstagramGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
    });

    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children, { opacity: 0, scale: 0.96 }, {
        opacity: 1, scale: 1, duration: 1, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 70%" },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-primary-gold" />
              <span className="text-primary-gold font-sans tracking-[0.35em] uppercase text-[10px]">Instagram</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              @<span className="italic text-primary-gold">raha</span>boutique
            </h2>
          </div>
          <a
            href="https://www.instagram.com/rahaboutique__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/50 hover:text-primary-gold transition-colors border-b border-foreground/15 hover:border-primary-gold pb-1 w-max"
          >
            Follow Our Journey
          </a>
        </div>

        {/* Masonry-style Grid */}
        <div ref={gridRef} className="grid grid-cols-3 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3 md:gap-4">
          {igImages.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/rahaboutique__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden bg-foreground/5 ${img.span}`}
            >
              <Image
                src={img.src}
                alt="Instagram Post"
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500 flex items-center justify-center">
                <Heart className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
