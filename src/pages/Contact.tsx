import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "Australia",
  "South Africa", "Namibia", "Mozambique", "Tanzania", "Zimbabwe", "Zambia",
  "Botswana", "Spain", "Italy", "Netherlands", "Sweden", "Norway", "Denmark",
  "Austria", "Switzerland", "New Zealand", "Mexico", "Argentina", "Brazil", "Other",
];

const animalCategories = [
  "Big Game", "Plains Game", "Predator", "Small Game or Primates", "Fish",
  "Exotic / International Species", "Other",
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    animalCategory: "",
    message: "",
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We'll be in touch shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section ref={heroRef} className="pt-32 pb-8 bg-background overflow-hidden">
        <motion.div style={{ y: heroY }} className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-2">
              Contact Wild Clone
            </h1>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-gray-light tracking-tight mb-8">
              Taxidermy
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
              Reach out to our team to discuss your project, request a quote, or get expert advice on shipping and specimen preparation.
            </p>
          </AnimatedSection>
        </motion.div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection scale>
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto hover:border-gray-medium transition-colors duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">First name*</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-gray-dark border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-gray-medium focus:outline-none focus:border-gray-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Last Name*</label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-gray-dark border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-gray-medium focus:outline-none focus:border-gray-light transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">How can we reach you?*</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-dark border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-gray-medium focus:outline-none focus:border-gray-light transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Where Are you from?*</label>
                    <select
                      required
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full bg-gray-dark border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gray-light transition-colors appearance-none"
                    >
                      <option value="">Select your country…</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">What kind of animal are you looking to preserve?</label>
                    <select
                      value={form.animalCategory}
                      onChange={(e) => setForm({ ...form, animalCategory: e.target.value })}
                      className="w-full bg-gray-dark border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gray-light transition-colors appearance-none"
                    >
                      <option value="">Select category</option>
                      {animalCategories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">Message*</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Type your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-gray-dark border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-gray-medium focus:outline-none focus:border-gray-light transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full font-body text-sm px-8 py-4 bg-foreground text-background hover:bg-background hover:text-foreground border border-foreground transition-all duration-300"
                >
                  Submit Now
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Contact;
