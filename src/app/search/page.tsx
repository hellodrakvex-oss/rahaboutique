"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { products, formatPrice } from "@/lib/data";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const results = products.filter((product) => {
    if (!initialQuery) return false;
    const searchStr = initialQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchStr) ||
      product.category.toLowerCase().includes(searchStr) ||
      product.fabric.toLowerCase().includes(searchStr) ||
      product.color.toLowerCase().includes(searchStr)
    );
  });

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Search</h1>
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for Sarees, Colors, or Fabrics..."
              className="w-full bg-transparent border-b border-foreground pb-4 outline-none font-sans text-lg md:text-xl placeholder:text-foreground/30 focus:border-primary-gold transition-colors"
              autoFocus
            />
            <button type="submit" className="absolute right-0 bottom-4 hover:text-primary-gold transition-colors">
              <SearchIcon className="w-6 h-6" />
            </button>
          </form>
        </div>

        {initialQuery && (
          <div>
            <p className="font-sans text-xs text-foreground/60 uppercase tracking-widest mb-12 border-b border-foreground/10 pb-4">
              {results.length} Results found for &ldquo;{initialQuery}&rdquo;
            </p>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="group block">
                    <div className="relative aspect-[3/4] bg-foreground/5 mb-6 overflow-hidden rounded-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif text-lg mb-2 group-hover:text-primary-gold transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm tracking-wider text-foreground/80">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="font-sans text-foreground/60 mb-6">We couldn&apos;t find anything matching your search.</p>
                <Link href="/collections">
                  <button className="border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors">
                    Explore Collections
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background pt-32 text-center">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
