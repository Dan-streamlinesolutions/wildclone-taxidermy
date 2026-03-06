import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mountTypes = [
    {
        title: "Shoulder Mounts",
        slug: "shoulder-mounts",
        desc: "The timeless classic. A beautifully detailed presentation extending to the shoulder.",
        image: "/images/K33Pq9a36R5DDduBQ751wca4jk.png",
    },
    {
        title: "Custom / Full Mounts",
        slug: "custom-mounts",
        desc: "A stunning, lifelike full-body display, often paired with custom-built habitat bases.",
        image: "/images/QWS9E07qeaf2sP2VkEWJZpb2ixY-9c8c79f8590188.png",
    },
    {
        title: "European Mounts",
        slug: "european-mounts",
        desc: "Clean, elegant skull and horn preservation. The perfect minimalist approach.",
        image: "/images/QWS9E07qeaf2sP2VkEWJZpb2ixY.png",
    },
    {
        title: "Wall Pedestal",
        slug: "wall-pedestal",
        desc: "Extending slightly from the wall, adding depth and dramatic presence.",
        image: "/images/vssE31UBI0lmPD0HAgfheuCQVio.png",
    },
    {
        title: "Floor Pedestal",
        slug: "floor-pedestal",
        desc: "A freestanding centerpiece, bringing your trophy into the heart of the room.",
        image: "/images/vssE31UBI0lmPD0HAgfheuCQVio.png",
    },
    {
        title: "Half Mounts",
        slug: "half-mounts",
        desc: "The perfect middle ground between a shoulder and full mount, showing powerful motion.",
        image: "/images/K33Pq9a36R5DDduBQ751wca4jk.png",
    },
    {
        title: "African 3D Shield",
        slug: "african-3d-shield",
        desc: "A historic and bold display mapping horns onto custom-made African shields.",
        image: "/images/vFw6cbMbJtpWT5dpzB2jWFup5fk.png",
    },
];

const Mounts = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section ref={heroRef} className="pt-40 pb-16 bg-background overflow-hidden relative border-b border-border">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-12 text-center relative z-10">
                    <AnimatedSection>
                        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-4">
                            Mount Styles
                        </h1>
                        <p className="font-body text-base md:text-lg text-gray-light max-w-2xl mx-auto mb-8">
                            Explore the different taxidermy presentations crafted by our artisans, from traditional shoulder mounts to intricate full-body habitats.
                        </p>
                    </AnimatedSection>
                </motion.div>
            </section>

            {/* Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mountTypes.map((mount, i) => (
                            <AnimatedSection key={mount.slug} delay={i * 0.1} scale>
                                <Link to={`/mounts/${mount.slug}`}>
                                    <motion.div
                                        whileHover={{ y: -6 }}
                                        transition={{ duration: 0.4 }}
                                        className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-gray-medium transition-colors duration-500 flex flex-col h-full"
                                    >
                                        <div className="aspect-[4/3] w-full bg-white p-6 flex items-center justify-center overflow-hidden border-b border-border">
                                            <img
                                                src={mount.image}
                                                alt={mount.title}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="font-heading text-2xl font-semibold text-foreground">
                                                    {mount.title}
                                                </h3>
                                                <div className="w-8 h-8 rounded-full bg-gray-dark flex items-center justify-center group-hover:bg-foreground transition-colors duration-300">
                                                    <ArrowRight className="w-4 h-4 text-gray-light group-hover:text-background transition-colors duration-300" />
                                                </div>
                                            </div>
                                            <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                                                {mount.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
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

export default Mounts;
