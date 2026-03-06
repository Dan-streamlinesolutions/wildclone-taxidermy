import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import AnimatedSection from "@/components/AnimatedSection";

const policyItems = [
  "It is the responsibility of the client to ensure that trophies are subjected to field preparation to acceptable standards.",
  "All Taxidermy work requires a 50% deposit before any work will commence, and the balance is due on completion of the trophies, before collection or shipping.",
  "Please note that no items will be exchanged or refunded. All goods not collected or final payment received, 3 months after completion will be sold to recoup costs.",
  "All goods remain the property of Wild Clone Taxidermy until fully paid. Wild Clone Taxidermy shall be entitled to sell such goods to cover the outstanding amount owed.",
  "Prices do not include VAT, Packaging, Transport, Admin, Documentation Fees & Crating, neither delivery nor postage.",
  "Work done is at the owner's risk. We are not responsible for any loss or damage to goods due to power or refrigeration failure, fire, strike, theft or act of God.",
  "Although great care is taken, we indemnify ourselves against hair slip and bacterial defects or damage which may occur.",
  "Products will be completed within 12 months from deposit payment received.",
  "Products will either be shipped via ocean or air, although great care is taken when preparing trophies for shipping, Wild Clone Taxidermy is not responsible for damage caused by freight forwarders or last-mile logistics providers.",
];

const FulfillmentPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground tracking-tight mb-8">
              Fulfilment Policy
            </h1>
            <p className="font-body text-base md:text-lg text-gray-light max-w-2xl mx-auto mb-8">
              Please read through our policies regarding taxidermy work and global shipping.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 hover:border-gray-medium transition-colors duration-500">
              <ul className="space-y-6">
                {policyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-heading text-sm text-gray-medium mt-0.5 shrink-0 w-6 text-right">
                      {i + 1}.
                    </span>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default FulfillmentPolicy;
