export default function ShippingPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            Shipping & <span className="italic text-primary-gold">Returns</span>
          </h1>
          <p className="font-sans text-foreground/60 text-sm">Last updated: June 2025</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
          <div>
            <h2 className="font-serif text-3xl mb-6 pb-4 border-b border-foreground/10">Shipping Policy</h2>
            <div className="space-y-6 font-sans text-sm text-foreground/80 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Standard Delivery", value: "5–7 Business Days", sub: "Free on orders over ₹5,000" },
                  { label: "Express Delivery", value: "2–3 Business Days", sub: "Additional ₹499" },
                  { label: "International", value: "10–15 Business Days", sub: "Duties may apply" },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-6 border border-foreground/5 text-center shadow-sm">
                    <p className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-2">{item.label}</p>
                    <p className="font-serif text-2xl text-primary-gold mb-1">{item.value}</p>
                    <p className="text-xs text-foreground/60">{item.sub}</p>
                  </div>
                ))}
              </div>
              <p>All orders are processed within 1–2 business days. You will receive a shipping confirmation email with a tracking number once your order is dispatched.</p>
              <p>We partner with trusted courier services including Blue Dart, FedEx, and India Post for domestic orders, and DHL and FedEx for international shipments.</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-6 pb-4 border-b border-foreground/10">Returns & Exchanges</h2>
            <div className="space-y-4 font-sans text-sm text-foreground/80 leading-relaxed">
              <p>We accept returns within <strong>14 days of delivery</strong> provided the item is:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unworn, unwashed, and unaltered</li>
                <li>In its original packaging with all tags attached</li>
                <li>Not a custom, bespoke, or made-to-measure order</li>
                <li>Not a sale item</li>
              </ul>
              <p>To initiate a return, please WhatsApp us at +91 9943467778 with your order number and reason for return. Our team will guide you through the process within 24 hours.</p>
              <p>Refunds are processed to the original payment method within 7–10 business days of receiving the returned item.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
