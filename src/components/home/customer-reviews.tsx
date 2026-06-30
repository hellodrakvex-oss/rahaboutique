"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Priya Mehta",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely breathtaking. My Banarasi saree arrived wrapped in silk paper with a handwritten note. The craftsmanship is extraordinary — I wore it to my cousin's wedding and received compliments all evening.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&facepad=3",
    product: "Midnight Silk Zari Saree",
  },
  {
    name: "Anika Sharma",
    location: "Delhi",
    rating: 5,
    text: "Raha Boutique has set the gold standard for luxury ethnic wear. The lehenga I ordered for my reception was absolutely stunning. The team even helped me style it over WhatsApp — personal touches that you simply don't find elsewhere.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop&facepad=3",
    product: "Ruby Red Bridal Lehenga",
  },
  {
    name: "Kavitha Nair",
    location: "Bangalore",
    rating: 5,
    text: "I was hesitant to order ethnic wear online, but Raha made the experience seamless. The Kanchipuram silk saree matched the photos exactly — vibrant, rich, and perfectly woven. The packaging was luxurious too!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&facepad=3",
    product: "Mustard Yellow Silk Saree",
  },
];

export function CustomerReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
    });

    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 65%" },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-[#faf7f2]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-8 h-[1px] bg-primary-gold" />
            <span className="text-primary-gold font-sans tracking-[0.35em] uppercase text-[10px]">Client Stories</span>
            <span className="w-8 h-[1px] bg-primary-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Worn with <span className="italic text-primary-gold">Love</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white p-8 md:p-10 flex flex-col justify-between shadow-sm border border-foreground/5 hover:shadow-md hover:border-primary-gold/20 transition-all duration-500">
              <div>
                <Quote className="w-8 h-8 text-primary-gold/30 mb-6" strokeWidth={1} />
                <p className="font-sans text-foreground/70 text-sm leading-relaxed font-light mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary-gold text-primary-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="font-serif text-base text-foreground">{review.name}</p>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-0.5">{review.location} · {review.product}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
