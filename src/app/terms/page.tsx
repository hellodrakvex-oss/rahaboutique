export default function TermsPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            Terms & <span className="italic text-primary-gold">Conditions</span>
          </h1>
          <p className="font-sans text-foreground/60 text-sm">Last updated: June 2025</p>
        </div>

        <div className="space-y-10 font-sans text-sm text-foreground/80 leading-relaxed">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing and using the Raha Boutique website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services."
            },
            {
              title: "2. Products and Pricing",
              content: "All product descriptions, images, and pricing are as accurate as possible. We reserve the right to modify prices without prior notice. In the event of a pricing error, we will notify you before processing your order. All prices are displayed in Indian Rupees (INR) inclusive of applicable taxes."
            },
            {
              title: "3. Order Processing",
              content: "Orders are subject to availability and acceptance. We reserve the right to refuse or cancel any order at our discretion. You will receive an email confirmation when your order is received and another when it is dispatched."
            },
            {
              title: "4. Intellectual Property",
              content: "All content on this website, including text, graphics, logos, images, and product designs, is the property of Raha Boutique and is protected by applicable copyright and trademark laws. Unauthorized use of any content is strictly prohibited."
            },
            {
              title: "5. Limitation of Liability",
              content: "Raha Boutique shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid for the specific product or service."
            },
            {
              title: "6. Governing Law",
              content: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana."
            },
            {
              title: "7. Changes to Terms",
              content: "We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the new terms."
            }
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-2xl text-foreground mb-4 pb-3 border-b border-foreground/10">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
