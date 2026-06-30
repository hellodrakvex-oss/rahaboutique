"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/images/bg1.png",
  "/images/bg2.png",
  "/images/bg3.png",
  "/images/bg4.png",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const pageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const pageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // Background Slideshow Interval
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Mouse Parallax on Text
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      
      gsap.to(textRef.current, {
        x, y,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Parallax Background Container */}
      <motion.div style={{ y: pageY, opacity: pageOpacity }} className="absolute inset-0 w-full h-full origin-center">
        
        {/* Slideshow Images */}
        {heroImages.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0 w-full h-full origin-center overflow-hidden"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth 2s crossfade
          >
            {/* Independent Ken Burns Effect for each slide */}
            <motion.div
              className="w-full h-full origin-center"
              animate={{
                scale: [1.05, 1.15],
                x: index % 2 === 0 ? ["0%", "-2%"] : ["-2%", "0%"],
                y: index % 2 !== 0 ? ["0%", "-2%"] : ["-2%", "0%"]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Image
                src={src}
                alt={`Luxury Indian Fashion ${index + 1}`}
                fill
                priority // Preload all hero images as requested
                sizes="100vw"
                className="object-cover object-top opacity-90"
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Deep Cinematic Gradients (Always on top of images) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-10 pointer-events-none" />
      </motion.div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-primary-gold rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, -400],
              opacity: [0, Math.random() * 0.8 + 0.2, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content (Animates only once on initial load) */}
      <div className="relative z-30 h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center pt-24 pointer-events-none">
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-3/4 lg:w-2/3 pointer-events-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-primary-gold block" />
            <span className="text-primary-gold font-sans tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Maison de Couture
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[1.05] mb-8 tracking-tight drop-shadow-2xl"
          >
            Redefining<br />
            Indian <span className="italic font-light text-primary-gold relative">
              Luxury
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary-gold opacity-50 blur-[2px]" />
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-white/80 font-sans text-sm md:text-base font-light mb-12 max-w-lg leading-loose tracking-wide drop-shadow-lg"
          >
            Discover meticulously handcrafted ethnic wear woven by master artisans. 
            A curated experience where centuries-old heritage meets contemporary elegance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-6 md:gap-10 flex-wrap">
            <Link href="/collections">
              <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-foreground overflow-hidden rounded-sm font-sans uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(200,163,77,0.3)]">
                <span className="absolute inset-0 w-full h-full bg-primary-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                  Explore Collections
                  <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            <Link href="/collections/wedding">
              <button className="font-sans text-xs uppercase tracking-[0.2em] text-white/80 hover:text-primary-gold transition-colors flex items-center gap-2 group drop-shadow-md">
                <span className="w-8 h-[1px] bg-white/50 group-hover:bg-primary-gold group-hover:w-12 transition-all duration-300" />
                The Bridal Edit
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center z-30 pointer-events-none"
      >
        <span className="text-white/50 text-[9px] tracking-[0.3em] uppercase mb-4 font-sans transform -rotate-90 origin-bottom translate-y-full mb-8 drop-shadow-md">Scroll</span>
        <div className="w-[1px] h-20 bg-white/20 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-full bg-primary-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
