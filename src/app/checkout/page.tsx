export default function CheckoutPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="font-serif text-4xl mb-6">Secure Checkout</h1>
        <p className="font-sans text-foreground/70 mb-8">
          This is a demonstration environment. For actual purchases, please use the &ldquo;Order on WhatsApp&rdquo; functionality available on our product pages.
        </p>
        <a href="/" className="inline-block bg-primary-gold text-white px-8 py-4 uppercase tracking-widest text-xs font-sans hover:bg-primary-dark transition-colors">
          Return to Boutique
        </a>
      </div>
    </div>
  );
}
