import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "@/lib/data";

const newArrivals = products.filter((p) => p.isNewArrival);

export default function NewArrivalsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Editorial Banner */}
      <div className="relative w-full h-[50vh] bg-primary-dark overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596455607563-ad6193f76b19?q=80&w=2574&auto=format&fit=crop"
          alt="New Arrivals at Raha Boutique"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-24">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary-gold mb-4">
            Just Arrived
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">
            New <span className="italic font-light">Arrivals</span>
          </h1>
          <p className="font-sans text-white/70 max-w-md text-sm">
            The season&apos;s most coveted pieces, freshly crafted by our master artisans.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-foreground/10 gap-4">
          <p className="font-sans text-xs text-foreground/60 uppercase tracking-widest">
            {newArrivals.length} New Pieces
          </p>
          <div className="flex gap-6 font-sans text-xs uppercase tracking-widest">
            <button className="hover:text-primary-gold transition-colors">Latest First</button>
            <button className="hover:text-primary-gold transition-colors">Price: Low to High</button>
            <button className="hover:text-primary-gold transition-colors">Price: High to Low</button>
          </div>
        </div>

        {/* Grid */}
        {newArrivals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {newArrivals.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group block">
                <div className="relative aspect-[3/4] bg-foreground/5 mb-5 overflow-hidden rounded-sm">
                  <div className="absolute top-4 left-4 z-10 bg-primary-gold text-white text-[10px] uppercase tracking-widest px-2 py-1 font-sans">
                    New
                  </div>
                  <Image
                    src={product.images?.[0] || product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.images && product.images.length > 1 && (
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} alt`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 absolute inset-0"
                    />
                  )}
                </div>
                <div className="text-center">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-primary-gold mb-2">{product.category}</p>
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
          <div className="text-center py-24">
            <p className="font-sans text-foreground/60">New arrivals coming soon. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
}
