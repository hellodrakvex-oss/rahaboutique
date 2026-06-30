"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";

gsap.registerPlugin(ScrollTrigger);

export function BestSellers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const bestSellers = products.slice(0, 4);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
    );

    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-white border-t border-foreground/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-5">
            <span className="w-8 h-[1px] bg-primary-gold" />
            <span className="text-primary-gold font-sans tracking-[0.35em] uppercase text-[10px]">Most Loved</span>
            <span className="w-8 h-[1px] bg-primary-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            Best <span className="italic text-primary-gold">Sellers</span>
          </h2>
          <p className="font-sans text-foreground/55 max-w-md text-sm leading-relaxed font-light">
            The pieces our clients return to again and again. Handwoven masterpieces that define modern Indian elegance.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex justify-center">
          <Link href="/collections">
            <button className="group border border-foreground px-12 py-4 font-sans text-[10px] uppercase tracking-[0.2em] text-foreground hover:bg-foreground hover:text-white transition-all duration-500 flex items-center gap-4">
              View Entire Collection <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
