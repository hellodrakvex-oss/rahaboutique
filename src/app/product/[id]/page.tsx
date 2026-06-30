import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { ProductGallery } from "@/components/product/gallery";
import { ProductActions } from "@/components/product/actions";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="bg-background pt-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        
        {/* Breadcrumb */}
        <div className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-12 flex items-center gap-2">
          <a href="/" className="hover:text-primary-gold transition-colors">Home</a>
          <span>/</span>
          <a href={`/collections/${product.category}`} className="hover:text-primary-gold transition-colors">{product.category}</a>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images || [product.image]} />
          </div>

          {/* Right: Sticky Details */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-8">
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-primary-gold mb-3">
                  {product.category}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="font-sans text-2xl tracking-wider mb-6">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
                </p>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Client Component for interactivity */}
              <ProductActions product={product} />

              {/* Accordions for Details */}
              <div className="border-t border-foreground/10 pt-6 space-y-6">
                <div>
                  <h3 className="font-serif text-xl mb-2 flex justify-between items-center cursor-pointer">
                    Product Details <span className="text-primary-gold">+</span>
                  </h3>
                  <div className="font-sans text-sm text-foreground/70 space-y-2 mt-4">
                    <p><span className="font-medium text-foreground">Fabric:</span> {product.fabric}</p>
                    <p><span className="font-medium text-foreground">Color:</span> {product.color}</p>
                    <p><span className="font-medium text-foreground">Care:</span> Dry Clean Only</p>
                  </div>
                </div>
                <div className="border-t border-foreground/10 pt-6">
                   <h3 className="font-serif text-xl mb-2 flex justify-between items-center cursor-pointer">
                    Shipping & Returns <span className="text-primary-gold">+</span>
                  </h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
