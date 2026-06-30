import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            Get in <span className="italic text-primary-gold">Touch</span>
          </h1>
          <p className="font-sans text-foreground/60 max-w-lg mx-auto text-sm">
            We are here to assist you with bespoke styling, custom orders, or any inquiries regarding our collections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl mb-8">Visit Our Boutique</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-sans uppercase tracking-widest text-xs font-semibold mb-2">Location</h3>
                    <p className="font-sans text-foreground/70 text-sm">123 Luxury Avenue, Banjara Hills<br/>Hyderabad, Telangana 500034<br/>India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-sans uppercase tracking-widest text-xs font-semibold mb-2">Phone / WhatsApp</h3>
                    <p className="font-sans text-foreground/70 text-sm">+91 9943467778</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-sans uppercase tracking-widest text-xs font-semibold mb-2">Email</h3>
                    <p className="font-sans text-foreground/70 text-sm">concierge@rahaboutique.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-sans uppercase tracking-widest text-xs font-semibold mb-2">Hours</h3>
                    <p className="font-sans text-foreground/70 text-sm">Mon - Sat: 11:00 AM - 8:00 PM<br/>Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-foreground/5 rounded-sm relative overflow-hidden flex items-center justify-center border border-foreground/10">
              <p className="font-sans text-xs uppercase tracking-widest text-foreground/40">Google Maps Integration</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-xl border border-foreground/5">
            <h2 className="font-serif text-3xl mb-8">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-foreground/70">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary-gold transition-colors font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-foreground/70">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary-gold transition-colors font-sans text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-foreground/70">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary-gold transition-colors font-sans text-sm" />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-foreground/70">Subject</label>
                <select className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary-gold transition-colors font-sans text-sm text-foreground/80">
                  <option>General Inquiry</option>
                  <option>Bridal Consultation</option>
                  <option>Order Status</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-foreground/70">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary-gold transition-colors font-sans text-sm resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-primary-gold text-white py-4 font-sans text-xs uppercase tracking-widest hover:bg-primary-dark transition-colors mt-8">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
