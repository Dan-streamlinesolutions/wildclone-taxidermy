import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
    { src: "/images/K33Pq9a36R5DDduBQ751wca4jk.png", alt: "Springbok shoulder mount" },
    { src: "/images/QWS9E07qeaf2sP2VkEWJZpb2ixY-9c8c79f8590188.png", alt: "European skull mount on shield" },
    { src: "/images/vssE31UBI0lmPD0HAgfheuCQVio.png", alt: "Zebra Africa-shaped mount" },
    { src: "/images/vFw6cbMbJtpWT5dpzB2jWFup5fk.png", alt: "African shield mount" },
    { src: "/images/waterbuck_mount_nobg.png", alt: "Waterbuck full mount" },
    { src: "/images/zebra_mount_nobg.png", alt: "Zebra shoulder mount" },
    { src: "/images/kudu_mount_nobg.png", alt: "Kudu shoulder mount" },
    { src: "/images/wildebeest_mount_nobg.png", alt: "Wildebeest shoulder mount" },
    { src: "/images/impala_mount_nobg.png", alt: "Impala shoulder mount" },
    { src: "/images/steenbok_mount_nobg.png", alt: "Steenbok shoulder mount" },
    { src: "/images/sable_mount_nobg.png", alt: "Sable full mount" },
    { src: "/images/dikdik_mount_nobg.png", alt: "Small antelope full mount" },
    { src: "/images/giraffe_mount_nobg.png", alt: "Giraffe shoulder mount" },
    { src: "/images/springbok_trio_mount_nobg.png", alt: "Springbok trio mount" },
    { src: "/images/caracal_mount_nobg.png", alt: "Caracal full mount" },
    { src: "/images/warthog_mount_nobg.png", alt: "Warthog shoulder mount" },
    // Placeholders for future images
    { src: null, alt: "Coming soon" },
    { src: null, alt: "Coming soon" },
    { src: null, alt: "Coming soon" },
    { src: null, alt: "Coming soon" },
];

const Gallery = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section ref={heroRef} className="pt-40 pb-16 bg-background overflow-hidden">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-12 text-center">
                    <AnimatedSection>
                        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-2">
                            Gallery
                        </h1>
                        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-gray-light tracking-tight mb-8">
                            Our Work
                        </h2>
                        <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
                            A showcase of some of the finest mounts and trophies produced by the Wild Clone Taxidermy team.
                        </p>
                    </AnimatedSection>
                </motion.div>
            </section>

            <section className="pb-32 bg-background">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {galleryImages.map((img, i) => (
                            <AnimatedSection key={i} delay={i * 0.05} scale>
                                <motion.div
                                    whileHover={{ scale: img.src ? 1.02 : 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="aspect-square border border-border rounded-xl overflow-hidden"
                                >
                                    {img.src ? (
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-dark flex flex-col items-center justify-center gap-2">
                                            <span className="text-gray-medium text-3xl">+</span>
                                            <span className="font-body text-xs text-gray-medium">Coming Soon</span>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </div>
    );
};

export default Gallery;
