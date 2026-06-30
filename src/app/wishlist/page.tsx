"use client";

import { useAppStore } from "@/lib/store";
import { formatPrice } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useAppStore();

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground flex justify-center items-center gap-4">
            <Heart className="w-8 h-8" /> Your Wishlist
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-sans text-foreground/60 mb-6">Your wishlist is currently empty.</p>
            <Link href="/collections">
              <button className="border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors">
                Explore Collections
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div key={product.id} className="group block relative">
                <button 
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-[3/4] bg-foreground/5 mb-6 overflow-hidden rounded-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-2 text-foreground">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm tracking-wider text-foreground/80 mb-4">
                    {formatPrice(product.price)}
                  </p>
                  <button 
                    onClick={() => addToCart({ ...product, quantity: 1, size: 'M' })}
                    className="w-full flex items-center justify-center gap-2 border border-foreground/20 py-3 text-xs uppercase tracking-widest hover:border-primary-gold hover:text-primary-gold transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" /> Move to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
