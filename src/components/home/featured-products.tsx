"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { products, formatPrice } from "@/lib/data";
import { useAppStore } from "@/lib/store";

const featuredProducts = products.slice(0, 4);

export function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const { toggleWishlist, addToCart, wishlist } = useAppStore();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-foreground mb-4"
          >
            Featured <span className="italic text-primary-gold">Arrivals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-foreground/60 max-w-lg mx-auto text-sm"
          >
            Explore our latest masterpieces, crafted with precision and passion for the modern connoisseur.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => {
            const isWishlisted = wishlist.some((w) => w.id === product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="group cursor-pointer flex flex-col"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-primary-dark/5 mb-6 rounded-sm">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.images?.[0] || product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`object-cover transition-all duration-700 ease-in-out ${hoveredProduct === product.id ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                    />
                    {product.images && product.images.length > 1 && (
                      <Image
                        src={product.images[1]}
                        alt={`${product.name} Alternate`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`object-cover transition-all duration-700 ease-in-out ${hoveredProduct === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                      />
                    )}
                  </Link>

                  {/* Floating Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/90 text-foreground hover:bg-primary-gold hover:text-white'}`}
                    >
                      <Heart className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                    <Link href={`/product/${product.id}`}>
                      <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary-gold hover:text-white transition-colors shadow-sm">
                        <Eye className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>

                  {/* Quick Add Bottom Bar */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <button
                      onClick={() => addToCart({ ...product, quantity: 1, size: 'M' })}
                      className="w-full bg-white/95 backdrop-blur-sm text-foreground py-3 flex items-center justify-center gap-2 hover:bg-primary-gold hover:text-white transition-colors text-xs font-sans tracking-widest uppercase"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center flex flex-col flex-grow">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary-gold transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-sans text-sm text-foreground/80 tracking-wider">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/collections">
            <button className="border border-foreground/20 px-10 py-4 text-xs font-sans tracking-widest uppercase hover:bg-foreground hover:text-white transition-colors duration-300">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
