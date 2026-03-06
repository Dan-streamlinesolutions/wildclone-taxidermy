import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const serviceData: Record<string, { title: string; subtitle: string; description: string[]; highlights: string[]; image: string; galleryImages?: string[]; customGallery?: string[] }> = {
  "professional-communication": {
    title: "Professional Communication",
    subtitle: "Keeping you informed at every stage",
    description: [
      "At Wild Clone, communication is at the heart of everything we do. We believe that every client deserves to be kept informed throughout the entire taxidermy process - from the moment your trophy arrives at our facility to the day it's shipped to your door.",
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
      "Our streamlined workflow across four branches - Port Elizabeth, North West, Free State, and Limpopo - ensures efficient processing from intake through to final delivery.",
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
      "All skins are thoroughly cleaned, salted, and processed through our rigorous preparation pipeline before tanning. This ensures the best possible end result - whether for mounting or as a standalone skin display.",
      "Our tanning process is designed to meet international export standards, making your trophies ready for shipping anywhere in the world with confidence.",
    ],
    highlights: [
      "Industry-leading tanning chemicals",
      "Rigorous skin preparation and cleaning",
      "Export-ready treatment process",
      "Suitable for mounting or display skins",
    ],
    image: "/images/tanning_service.jpg",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
    customGallery: [
      "/images/tanning_process_1.jpg",
      "/images/tanning_process_2.png",
      "/images/tanning_process_3.png",
      "/images/tanning_process_4.jpg",
      "/images/tanning_process_5.png",
    ]
  },
  "dip-pack": {
    title: "Dip & Pack",
    subtitle: "Export-compliant sterilisation & packing",
    description: [
      "Our taxidermy facility is veterinary approved, so should you wish to have your taxidermy processed at home or at a later stage, we offer a professional Dip & Pack service. Once raw trophies are received at our facility, skins are treated, dried, and cleaned to ensure your trophy arrives in the best possible condition.",
      "Dip & Pack is the sterilising process necessary to export any raw animal part across international borders. It involves the removal of all flesh and tissue from skulls, horns, and bones, and the drying and bleaching of skulls and bones.",
      "Skins are dried, cleaned, and treated with anti-bacterial powders to ensure that your trophy animal arrives in a dry and pest-free condition - compliant with all international import regulations.",
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
    customGallery: [
      "/images/dip1.jpg",
      "/images/dip2.jpg",
    ]
  },
  "leatherworks": {
    title: "Leatherworks",
    subtitle: "Handcrafted leather goods for the outdoorsman",
    description: [
      "Our Leatherworks service offers premium, bespoke leather goods handcrafted by skilled artisans. Every piece is made to order, tailored to your specifications, and built to last a lifetime.",
      "From custom slings and rifle belts to decorative leather panels and display accessories, we craft leather goods that complement your trophies and reflect your passion for the outdoors.",
      "We use only the finest hides and traditional leatherworking techniques to ensure every item has the quality, character, and durability that the Wild Clone name stands for.",
    ],
    highlights: [
      "Custom slings, belts, and accessories",
      "Decorative leather panels and display pieces",
      "Finest quality hides and materials",
      "Made-to-order, personalised service",
    ],
    image: "/images/placeholder_image.png",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
    customGallery: [
      "/images/leatherworks_1.jpg",
      "/images/leatherworks_2.jpg",
      "/images/leatherworks_3.jpg",
    ]
  },
  "woodworking": {
    title: "Woodworking",
    subtitle: "Custom woodcraft to showcase your trophies",
    description: [
      "Our Woodworking service produces handcrafted wooden pieces designed to complement and display your trophies. Every item is built to order by our skilled craftsmen using the finest local and imported timbers.",
      "From custom trophy shields and plaques to full habitat bases, display furniture, and bespoke wooden frames, we create pieces that elevate your mount from a trophy into a centrepiece.",
      "Each piece is finished to museum standards, with attention to grain, texture, and detail that sets Wild Clone woodwork apart from mass-produced alternatives.",
    ],
    highlights: [
      "Custom trophy shields and mounting plaques",
      "Handcrafted habitat bases for mounts",
      "Display furniture and bespoke frames",
      "Museum-quality finish using premium timbers",
    ],
    image: "/images/placeholder_image.png",
    galleryImages: [
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
      "/images/placeholder_image.png",
    ],
    customGallery: [
      "/images/woodworking_1.jpg",
    ]
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

          {/* Custom Gallery Rendering */}
          {service.customGallery && service.customGallery.length > 0 && (
            <div className="mt-12 flex flex-col gap-8">
              {service.customGallery.map((src, i) => (
                <AnimatedSection key={i} delay={i * 0.1} scale>
                  <img src={src} className="w-full h-auto rounded-xl object-contain border border-border" alt={`${service.title} custom gallery image ${i + 1}`} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>



      {/* Global Shipping Crate Pricing */}
      {slug === "global-shipping" && (
        <section className="pt-16 pb-24 lg:pb-32 bg-background border-t border-border/40">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Crate Sizing & Pricing</h2>
                <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">Simple. Secure. Stress Free. Typical export rates for USA, Canada, UK, and Europe.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="overflow-x-auto bg-card border border-border rounded-xl">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-border bg-gray-dark/50">
                      <th className="py-4 px-6 font-heading text-sm font-semibold text-foreground uppercase tracking-wider">Crate Size</th>
                      <th className="py-4 px-6 font-heading text-sm font-semibold text-foreground uppercase tracking-wider">USA & Canada</th>
                      <th className="py-4 px-6 font-heading text-sm font-semibold text-foreground uppercase tracking-wider">UK & Europe</th>
                      <th className="py-4 px-6 font-heading text-sm font-semibold text-foreground uppercase tracking-wider">Typical Content</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-gray-dark/20 transition-colors">
                      <td className="py-4 px-6 font-body text-sm text-gray-light whitespace-nowrap">800 x 550 x 550mm</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 780</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 730</td>
                      <td className="py-4 px-6 font-body text-xs text-muted-foreground">2x European Mounts<br />2x Flat / Back Skins</td>
                    </tr>
                    <tr className="hover:bg-gray-dark/20 transition-colors">
                      <td className="py-4 px-6 font-body text-sm text-gray-light whitespace-nowrap">1100 x 1100 x 800mm</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 1950</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 1800</td>
                      <td className="py-4 px-6 font-body text-xs text-muted-foreground">2x European Mounts<br />4x Flat / Back Skins<br />2x Shoulder Mounts</td>
                    </tr>
                    <tr className="hover:bg-gray-dark/20 transition-colors">
                      <td className="py-4 px-6 font-body text-sm text-gray-light whitespace-nowrap">1100 x 1100 x 1100mm</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 2600</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 2200</td>
                      <td className="py-4 px-6 font-body text-xs text-muted-foreground">2x European Mounts<br />6x Flat / Back Skins<br />4x Shoulder Mounts</td>
                    </tr>
                    <tr className="hover:bg-gray-dark/20 transition-colors">
                      <td className="py-4 px-6 font-body text-sm text-gray-light whitespace-nowrap">1100 x 1100 x 1600mm</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 3450</td>
                      <td className="py-4 px-6 font-body text-sm text-foreground font-medium">$ 2800</td>
                      <td className="py-4 px-6 font-body text-xs text-muted-foreground">6x European Mounts<br />8x Flat / Back Skins<br />6x Shoulder Mounts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-8 bg-gray-dark border border-border rounded-xl p-6 lg:p-8">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Excluded in above crate prices per hunter:</h4>
                <ul className="space-y-3 font-body text-sm text-gray-light">
                  <li className="flex justify-between max-w-sm"><span className="text-muted-foreground">Power of Attorney</span> <span className="text-foreground">$ 125</span></li>
                  <li className="flex justify-between max-w-sm"><span className="text-muted-foreground">Destination Bond and ISF Filing</span> <span className="text-foreground">$ 195</span></li>
                  <li className="flex justify-between max-w-sm"><span className="text-muted-foreground">CITES Inspections</span> <span className="text-foreground">$ 120</span></li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50 text-xs text-muted-foreground space-y-2">
                  <p>* Taxes on import goods if applicable - Hunting trophies excluded from tax in USA.</p>
                  <p>* Delivery to Door - Clients need to arrange last mile delivery from our warehouse to their premises.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Wyldecraft Catalog */}
      {slug === "wyldecraft-woodworking" && (
        <section className="pt-16 pb-24 lg:pb-32 bg-background border-t border-border/40">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
                <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">Explore our premium bespoke furniture and leather offerings, hand-crafted to celebrate the beauty of nature.</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Poker Tables */}
              <AnimatedSection delay={0.1}>
                <div className="bg-card border border-border rounded-xl p-8 hover:border-gray-medium transition-colors h-full flex flex-col">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">The Lux Range Poker Tables</h3>
                  <div className="text-gray-light font-body text-sm mb-6 flex-grow">
                    <p className="mb-4">This height adjustable poker table doubles as a coffee table. Keep the cover on for everyday use, then lift it off and raise the height for instant game night.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Custom 8 Seater Poker Table (From $3300)</li>
                      <li>• Custom 6 Seater Poker Table (From $3600)</li>
                    </ul>
                    <p className="mt-4 text-xs tracking-wide">Using a flat skin of your choice, this bespoke piece is fully customizable with various options for legs, wood stains and leather finishes.</p>
                  </div>
                  <div className="aspect-video bg-gray-dark/50 rounded-lg flex items-center justify-center border border-border mt-auto">
                    <span className="font-body text-xs text-muted-foreground">Image Coming Soon</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Auxiliary Tables */}
              <AnimatedSection delay={0.2}>
                <div className="bg-card border border-border rounded-xl p-8 hover:border-gray-medium transition-colors h-full flex flex-col">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Bespoke Tables</h3>
                  <div className="text-gray-light font-body text-sm mb-6 flex-grow space-y-6 mt-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-base">Inner Horn Side Table ($400)</h4>
                      <p className="text-muted-foreground">Featuring two distinctly unique components. A hand carved oak top with a beautiful texture resting on three polished kudu inner horns. This harmonious blend makes a one-of-a-kind piece.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-base">Bedside Table ($500)</h4>
                      <p className="text-muted-foreground">Have a left over backskin? Our oak bedside tables are adorned with your skins that would otherwise go unused. They are a true celebration of the beauty of nature.</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-dark/50 rounded-lg flex items-center justify-center border border-border mt-auto">
                    <span className="font-body text-xs text-muted-foreground">Image Coming Soon</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
