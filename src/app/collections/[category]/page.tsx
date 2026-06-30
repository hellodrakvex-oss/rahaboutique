import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, collections, formatPrice } from "@/lib/data";

export function generateStaticParams() {
  return collections.map((c) => ({
    category: c.id,
  }));
}

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const collection = collections.find((c) => c.id === category);

  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter((p) => p.category === category);

  return (
    <div className="bg-background pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-primary-dark">
        <Image
          src="/images/wcoll.png"
          alt={collection.name}
          fill
          priority
          className="object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold mb-4">
            The Edit
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            {collection.name}
          </h1>
          <p className="font-sans text-white/80 max-w-md">
            {collection.desc}
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-foreground/10 gap-6">
          <p className="font-sans text-xs text-foreground/60 uppercase tracking-widest">
            Showing {collectionProducts.length} Results
          </p>
          <div className="flex gap-8 font-sans text-xs uppercase tracking-widest">
            <button className="flex items-center gap-2 hover:text-primary-gold transition-colors">
              Filter <span className="text-primary-gold">+</span>
            </button>
            <button className="flex items-center gap-2 hover:text-primary-gold transition-colors">
              Sort By <span className="text-primary-gold">+</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group block">
                <div className="relative aspect-[3/4] bg-foreground/5 mb-6 overflow-hidden rounded-sm">
                  <Image
                    src={product.images?.[0] || product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Secondary Image Reveal */}
                  {product.images && product.images.length > 1 && (
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} Alternate`}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 absolute inset-0"
                    />
                  )}
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
          <div className="text-center py-24">
            <h3 className="font-serif text-3xl mb-4">Coming Soon</h3>
            <p className="font-sans text-foreground/60">We are curating masterpieces for this collection.</p>
          </div>
        )}
      </div>
    </div>
  );
}
