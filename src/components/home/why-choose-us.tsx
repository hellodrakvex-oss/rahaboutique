"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gem, Truck, RefreshCw, MessageCircle, ShieldCheck, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Gem,
    title: "Certified Authenticity",
    desc: "Every garment comes with a certificate of authenticity, guaranteeing 100% genuine handwoven craftsmanship.",
  },
  {
    icon: Star,
    title: "Master Artisan Network",
    desc: "Sourced directly from over 200 master weavers across Banaras, Kanchipuram, Lucknow, and Chanderi.",
  },
  {
    icon: Truck,
    title: "Premium Packaging & Delivery",
    desc: "Your order ships in luxury branded packaging with complimentary saree folding and garment care instruction.",
  },
  {
    icon: RefreshCw,
    title: "Hassle-Free Returns",
    desc: "15-day easy returns on all standard garments. Custom pieces are exchange-only with full design guidance.",
  },
  {
    icon: MessageCircle,
    title: "Personal Stylist Support",
    desc: "Book a private styling consultation via WhatsApp. Our experts help you find the perfect ensemble for any occasion.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    desc: "Shop with complete confidence. We use industry-grade encryption and a 100% secure checkout experience.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
    );

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: cardsRef.current, start: "top 65%" } }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-background border-t border-foreground/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-8 h-[1px] bg-primary-gold" />
            <span className="text-primary-gold font-sans tracking-[0.35em] uppercase text-[10px]">The Raha Promise</span>
            <span className="w-8 h-[1px] bg-primary-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Why Choose <span className="italic text-primary-gold">Raha?</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group p-8 border border-foreground/8 hover:border-primary-gold/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,163,77,0.05)] bg-white"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary-gold/10 mb-7 group-hover:bg-primary-gold transition-colors duration-500">
                  <Icon className="w-5 h-5 text-primary-gold group-hover:text-white transition-colors duration-500" strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-tight">{reason.title}</h3>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed font-light">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
