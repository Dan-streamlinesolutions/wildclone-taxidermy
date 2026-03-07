import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
    { src: "/images/gallery/1.png", alt: "Mount 1" },
    { src: "/images/gallery/2.png", alt: "Mount 2" },
    { src: "/images/gallery/3.png", alt: "Mount 3" },
    { src: "/images/gallery/4.png", alt: "Mount 4" },
    { src: "/images/gallery/5.png", alt: "Mount 5" },
    { src: "/images/gallery/6.png", alt: "Mount 6" },
    { src: "/images/gallery/7.png", alt: "Mount 7" },
    { src: "/images/gallery/8.png", alt: "Mount 8" },
    { src: "/images/gallery/9.png", alt: "Mount 9" },
    { src: "/images/gallery/10.png", alt: "Mount 10" },
    { src: "/images/gallery/11.png", alt: "Mount 11" },
    { src: "/images/gallery/12.png", alt: "Mount 12" },
    { src: "/images/gallery/13.png", alt: "Mount 13" },
    { src: "/images/gallery/14.png", alt: "Mount 14" },
    { src: "/images/gallery/15.png", alt: "Mount 15" },
    { src: "/images/gallery/16.png", alt: "Mount 16" },
    { src: "/images/gallery/17.png", alt: "Mount 17" },
    { src: "/images/gallery/18.png", alt: "Mount 18" },
    { src: "/images/gallery/19.png", alt: "Mount 19" },
    { src: "/images/gallery/20.png", alt: "Mount 20" },
    { src: "/images/gallery/21.png", alt: "Mount 21" },
    { src: "/images/gallery/22.png", alt: "Mount 22" },

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
                                    className="aspect-square bg-black border border-border rounded-xl flex items-center justify-center p-6 overflow-hidden"
                                >
                                    {img.src ? (
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
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
