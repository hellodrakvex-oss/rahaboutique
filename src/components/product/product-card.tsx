"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Product, useAppStore } from "@/lib/store";
import { formatPrice } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { wishlist, toggleWishlist, addToCart } = useAppStore();
  
  const isWishlisted = wishlist.some((w) => w.id === product.id);
  const primaryImage = product.image;
  const secondaryImage = product.images && product.images.length > 0 ? product.images[0] : primaryImage;

  return (
    <div 
      className="group flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-foreground/5 mb-6">
        {/* New Arrival Badge */}
        {product.isNewArrival && (
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-sans shadow-sm text-foreground">
            New In
          </div>
        )}

        {/* Wishlist Button (Always visible on mobile, hover on desktop) */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-sm md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
        >
          <Heart className={cn("w-4 h-4 transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "text-foreground")} />
        </button>

        <Link href={`/product/${product.id}`} className="block w-full h-full">
          {/* Primary Image */}
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-all duration-700 ease-[0.16,1,0.3,1]",
              isHovered && secondaryImage !== primaryImage ? "opacity-0 scale-105" : "opacity-100 scale-100 group-hover:scale-105"
            )}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* Secondary Image (Hover Swap) */}
          {secondaryImage !== primaryImage && (
            <Image
              src={secondaryImage}
              alt={`${product.name} Alternate`}
              fill
              className={cn(
                "object-cover transition-all duration-700 ease-[0.16,1,0.3,1] scale-105 absolute inset-0",
                isHovered ? "opacity-100 scale-100" : "opacity-0"
              )}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}
        </Link>

        {/* Quick Actions (Hover Overlay) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20 hidden md:flex gap-2">
          <button 
            className="flex-1 bg-white text-foreground py-3 text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-primary-gold hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg"
            onClick={() => addToCart({ ...product, quantity: 1, size: 'M' })}
          >
            <ShoppingBag className="w-3 h-3" /> Add
          </button>
          <Link href={`/product/${product.id}`} className="flex-1">
            <button className="w-full bg-foreground text-white py-3 text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg">
              <Eye className="w-3 h-3" /> View
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center flex flex-col items-center px-2">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-2">{product.category.replace('-', ' ')}</p>
        <Link href={`/product/${product.id}`} className="block group/title">
          <h3 className="font-serif text-xl text-foreground mb-2 group-hover/title:text-primary-gold transition-colors">{product.name}</h3>
        </Link>
        <p className="font-sans text-sm tracking-wider text-foreground/80">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
