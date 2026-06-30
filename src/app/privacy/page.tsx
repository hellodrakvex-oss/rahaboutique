export default function PrivacyPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            Privacy <span className="italic text-primary-gold">Policy</span>
          </h1>
          <p className="font-sans text-foreground/60 text-sm">Last updated: June 2025</p>
        </div>

        <div className="space-y-10 font-sans text-sm text-foreground/80 leading-relaxed">
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly, such as your name, email address, phone number, shipping address, and payment information when you make a purchase or create an account. We also automatically collect certain information when you visit our website, including your IP address, browser type, and pages viewed."
            },
            {
              title: "2. How We Use Your Information",
              content: "We use the information we collect to process your orders, send you transactional emails, provide customer support, send marketing communications (with your consent), improve our website and services, and comply with legal obligations."
            },
            {
              title: "3. Information Sharing",
              content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to those parties agreeing to keep this information confidential."
            },
            {
              title: "4. Data Security",
              content: "We implement a variety of security measures to maintain the safety of your personal information. All transactions are processed through secure payment gateways and are not stored or processed on our servers."
            },
            {
              title: "5. Your Rights",
              content: "You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at concierge@rahaboutique.com."
            },
            {
              title: "6. Cookies",
              content: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser. Please note that disabling cookies may affect website functionality."
            },
            {
              title: "7. Contact Us",
              content: "If you have any questions about this Privacy Policy, please contact us at: concierge@rahaboutique.com | +91 98765 43210 | 123 Luxury Avenue, Banjara Hills, Hyderabad 500034."
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
