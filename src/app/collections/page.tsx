import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/data";

export default function CollectionsPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            Curated <span className="italic text-primary-gold">Collections</span>
          </h1>
          <p className="font-sans text-foreground/60 max-w-lg mx-auto text-sm">
            Explore our handpicked selections featuring master craftsmanship and timeless designs across all categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link key={collection.id} href={`/collections/${collection.id}`} className="group relative overflow-hidden bg-primary-dark aspect-[4/5] rounded-sm flex flex-col items-center justify-center text-center p-8">
              {/* Note: I would use distinct images from data, but reusing a fallback for the UI list */}
              <Image
                src={`https://images.unsplash.com/photo-1583391733958-693630fbc358?q=80&w=1000&auto=format&fit=crop&sig=${index}`} // Using index to bypass cache visually if needed, though ideal is actual different images
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              
              <div className="absolute inset-4 border border-primary-gold/0 group-hover:border-primary-gold/40 transition-colors duration-700 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                  {collection.name}
                </h3>
                <p className="font-sans text-xs uppercase tracking-widest text-primary-gold opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                  Explore Collection
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
