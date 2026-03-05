import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const serviceData: Record<string, { title: string; subtitle: string; description: string[]; highlights: string[]; image: string; galleryImages?: string[] }> = {
  "professional-communication": {
    title: "Professional Communication",
    subtitle: "Keeping you informed at every stage",
    description: [
      "At Wild Clone, communication is at the heart of everything we do. We believe that every client deserves to be kept informed throughout the entire taxidermy process — from the moment your trophy arrives at our facility to the day it's shipped to your door.",
      "Our team provides real-time photo updates at every stage of the mounting process. You'll see your trophy as it progresses through preparation, sculpting, finishing, and final quality assurance.",
      "We use modern digital communication tools to ensure you're never left wondering about the status of your order. Whether you're across the country or across the globe, you're always connected to your trophy's journey.",
    ],
    highlights: [
      "Real-time photo updates at every stage",
      "Dedicated project manager for your order",
      "Digital communication tools for global clients",
      "Outfitter portal access for trade clients",
    ],
    image: "/images/HH8GLs9hiwlxJTmnlCc9i0L2fXM-39ce814654dd8.png",
  },
  "expert-craftsmanship": {
    title: "Expert Craftsmanship",
    subtitle: "Where precision meets artistry",
    description: [
      "Our mounts are built by artisans who live and breathe the wild. Every piece that leaves our 14,000 sq ft facility in Port Elizabeth is a testament to the skill, dedication, and passion of our team.",
      "Where precision, artistry, and respect for the animal come together in every detail. Our craftsmen and craftswomen undergo rigorous training and quality assurance processes to ensure every mount meets the highest standards.",
      "From anatomical accuracy to lifelike finishing, we use a combination of traditional handcrafting techniques and cutting-edge technology to create mounts that truly capture the essence of the animal.",
    ],
    highlights: [
      "Hand-crafted by expert artisans",
      "14,000 sq ft state-of-the-art facility",
      "Rigorous quality assurance process",
      "Museum-quality finishing and detail",
    ],
    image: "/images/029577_cd394e0a1be342418cc9b2e4a06302acmv2.jpg",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
  },
  "global-shipping": {
    title: "Global Shipping",
    subtitle: "Delivering your trophies worldwide",
    description: [
      "Bringing your trophies to any corner of the globe, with the same care, precision, and craftsmanship as in our studio. Wild Clone handles every aspect of international trophy shipping.",
      "We manage full CITES documentation, custom crating designed specifically for each mount, and coordinate with international shipping partners to ensure safe delivery to your door.",
      "Our team has decades of experience navigating the complexities of international trophy export. From compliance documentation to custom packaging, we handle it all so you don't have to.",
    ],
    highlights: [
      "Full CITES documentation management",
      "Custom crating for every mount",
      "Worldwide delivery to your door",
      "Export compliance expertise",
    ],
    image: "/images/23FVknLJGGuivl7ZZLQFdiXZFbI.jpg",
    galleryImages: [
      "/images/crate_DSC02598.jpg",
      "/images/crate_DSC02600.jpg",
      "/images/crate_DSC02603.jpg",
      "/images/crate_DSC02606.jpg",
    ],
  },
  "turnaround-time-guarantee": {
    title: "Turnaround Time Guarantee",
    subtitle: "12 months. No exceptions.",
    description: [
      "We are committed to delivering your mount within 12 months of intake. No exceptions. This guarantee reflects our confidence in our team, our processes, and our capacity to deliver on time, every time.",
      "Our streamlined workflow across four branches — Port Elizabeth, North West, Free State, and Limpopo — ensures efficient processing from intake through to final delivery.",
      "We understand that waiting for your trophy is part of the anticipation, but we also know that timely delivery matters. That's why we've invested in facilities, training, and processes to honour our 12-month commitment.",
    ],
    highlights: [
      "12-month delivery guarantee",
      "Streamlined multi-branch workflow",
      "Regular progress updates throughout",
      "On-time delivery track record",
    ],
    image: "/images/XW6ZqhR2B6gGRCwq9bnFr7ES8.jpg",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
  },
  "tanning": {
    title: "Tanning",
    subtitle: "Professional skin preparation & tanning",
    description: [
      "Our professional tanning service ensures every hide is treated to the highest standard for durability, suppleness, and a natural finish. We use industry-leading techniques and chemicals to preserve your trophy's skin to museum quality.",
      "All skins are thoroughly cleaned, salted, and processed through our rigorous preparation pipeline before tanning. This ensures the best possible end result — whether for mounting or as a standalone skin display.",
      "Our tanning process is designed to meet international export standards, making your trophies ready for shipping anywhere in the world with confidence.",
    ],
    highlights: [
      "Industry-leading tanning chemicals",
      "Rigorous skin preparation and cleaning",
      "Export-ready treatment process",
      "Suitable for all species and hide types",
    ],
    image: "/images/029577_335b93f9a9d74912bd9e93f8a923b54fmv2.png",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
  },
  "dip-pack": {
    title: "Dip & Pack",
    subtitle: "Export-compliant sterilisation & packing",
    description: [
      "Our taxidermy facility is veterinary approved, so should you wish to have your taxidermy processed at home or at a later stage, we offer a professional Dip & Pack service. Once raw trophies are received at our facility, skins are treated, dried, and cleaned to ensure your trophy arrives in the best possible condition.",
      "Dip & Pack is the sterilising process necessary to export any raw animal part across international borders. It involves the removal of all flesh and tissue from skulls, horns, and bones, and the drying and bleaching of skulls and bones.",
      "Skins are dried, cleaned, and treated with anti-bacterial powders to ensure that your trophy animal arrives in a dry and pest-free condition — compliant with all international import regulations.",
    ],
    highlights: [
      "Veterinary-approved facility",
      "Full skull and bone cleaning & bleaching",
      "Anti-bacterial skin treatment",
      "Compliant with international import standards",
    ],
    image: "/images/029577_b33402f874b4491bb8d0373ee046a314mv2.jpg",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
  },
  "wild-craft": {
    title: "Wild Craft",
    subtitle: "Where art meets the wild",
    description: [
      "Wild Craft is our bespoke artistic taxidermy service — for clients who want something truly extraordinary. We combine traditional craftsmanship with creative vision to produce one-of-a-kind pieces that become centrepieces in any room.",
      "From custom habitat bases and dioramas to rare and unusual species, our team works closely with you to design a mount that reflects your personal story and the unique character of your trophy.",
      "Every Wild Craft piece is handcrafted from scratch, with no two mounts ever the same. We take on a limited number of Wild Craft commissions per year, ensuring each piece receives the full attention and care it deserves.",
    ],
    highlights: [
      "Bespoke custom habitat bases & dioramas",
      "Artistic pose design & sculpting",
      "Rare & unusual species welcome",
      "Limited commissions — personalised service",
    ],
    image: "/images/placeholder_image.png",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
  },
};


const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <Link to="/services" className="inline-block font-body text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 uppercase tracking-wider">
              ← Back to Services
            </Link>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="font-body text-lg text-gray-light max-w-xl mx-auto">
              {service.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <AnimatedSection direction="left">
              <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-6">
                {service.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Key Highlights</h3>
                <div className="space-y-4">
                  {service.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground mt-1.5 shrink-0" />
                      <p className="font-body text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {slug !== "professional-communication" && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 aspect-video border border-border rounded-xl overflow-hidden"
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </motion.div>
              )}
            </AnimatedSection>
          </div>

          {/* Service Photos Gallery inline */}
          {service.galleryImages && service.galleryImages.length > 0 && (
            <div className="mt-8 border-t border-border/40 pt-16">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {slug === "global-shipping" ? "Custom Crating & Packing" : "Service Gallery"}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
                    {slug === "global-shipping"
                      ? "Every mount is carefully packed in custom-built crates, engineered to protect your trophy through international transit."
                      : "A closer look at our process and commitment to quality."}
                  </p>
                </div>
              </AnimatedSection>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {service.galleryImages.map((src, i) => (
                  <AnimatedSection key={i} delay={i * 0.1} scale>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="aspect-square border border-border rounded-xl overflow-hidden"
                    >
                      <img src={src} alt={`${service.title} gallery format ${i + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Fulfilment Policy (global shipping only) */}
      {slug === "global-shipping" && (
        <section className="pt-16 pb-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto hover:border-gray-medium transition-colors duration-500">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Fulfilment Policy</h2>
                <ul className="space-y-5">
                  {policyItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-heading text-xs text-gray-medium mt-0.5 shrink-0 w-5 text-right">{i + 1}.</span>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Professional Communication Portal Diagrams */}
      {slug === "professional-communication" && (
        <section className="pt-16 pb-24 lg:pb-32 bg-background border-t border-border/40">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Wild Clone Outfitters Portal</h2>
                <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">Providing outfitters and clients with full visibility and real-time tracking of their trophies.</p>
              </div>
            </AnimatedSection>

            <div className="space-y-16">
              <AnimatedSection delay={0.1}>
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden border border-border bg-[#0a0a0a]">
                  <img src="/images/portal_status.png" alt="Live Status Updates" className="w-full h-auto object-contain [image-rendering:-webkit-optimize-contrast]" />
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden border border-border bg-[#0a0a0a]">
                  <img src="/images/portal_photos.png" alt="Stage-by-Stage Photos" className="w-full h-auto object-contain [image-rendering:-webkit-optimize-contrast]" />
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden border border-border bg-[#0a0a0a]">
                  <img src="/images/portal_visibility.png" alt="Visibility and Client Documentation" className="w-full h-auto object-contain [image-rendering:-webkit-optimize-contrast]" />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
