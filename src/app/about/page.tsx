import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative w-full h-[60vh] bg-primary-dark">
        <Image
          src="https://images.unsplash.com/photo-1583391265517-35bbdad01209?q=80&w=2000&auto=format&fit=crop"
          alt="About Raha Boutique"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold mb-4">
            Our Heritage
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            The Story of Raha
          </h1>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-24 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight">
          &ldquo;We believe true luxury lies in the <span className="italic text-primary-gold">details</span> and the hands that weave them.&rdquo;
        </h2>
        <p className="font-sans text-lg text-foreground/70 leading-relaxed mb-16">
          Founded with a vision to preserve and elevate traditional Indian craftsmanship, Raha Boutique represents the pinnacle of modern ethnic wear. Every piece in our collection is a testament to centuries-old weaving techniques, reimagined for the contemporary woman.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
          <div>
             <h3 className="font-serif text-2xl text-primary-gold mb-4">Master Craftsmanship</h3>
             <p className="font-sans text-foreground/70 leading-relaxed">
               We partner exclusively with master weavers across India. From the looms of Banaras to the delicate embroideries of Lucknow, our artisans dedicate hundreds of hours to create garments that are not just clothes, but heirloom pieces meant to be cherished across generations.
             </p>
          </div>
          <div>
             <h3 className="font-serif text-2xl text-primary-gold mb-4">Sustainable Luxury</h3>
             <p className="font-sans text-foreground/70 leading-relaxed">
               Our commitment to sustainability is woven into our fabric. We embrace slow fashion, producing limited batches to ensure the highest quality while minimizing waste. By supporting artisan communities, we help sustain traditional crafts that are at risk of fading away.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
