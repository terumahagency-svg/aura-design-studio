import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const HeroSection = () => {
  const handleScrollToSection3 = () => {
    const el = document.getElementById("section-3");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pb-24 md:pb-32">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-semibold text-primary-foreground leading-[1.05] tracking-tight mb-12 max-w-4xl"
        >
          READY TO
          <br />
          TRANSFORM
          <br />
          YOUR <span className="italic text-secondary font-light">BUSINESS</span>?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end gap-10 sm:gap-16"
        >
          <div>
            <p className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-secondary leading-none mb-2">
              <AnimatedCounter target={105000} duration={2.8} />
            </p>
            <p className="text-primary-foreground/70 font-body text-sm md:text-base tracking-[0.15em] uppercase font-medium">
              KSH. 100,000+ Revenue Generated
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              variant="premium"
              size="lg"
              className="px-12 py-6"
              onClick={handleScrollToSection3}
            >
              SHOW ME HOW
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about-terumah" className="py-32 md:py-44 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 md:gap-12">
        {/* Left column — headline + Hebrew word */}
        <div className="md:col-span-5">
          <AnimatedSection>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold mb-6">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-[1.1] mb-8">
              About{" "}
              <span className="italic text-secondary">Terumah</span>
              <br />
              Agency
            </h2>
            <div className="w-12 h-px bg-secondary mb-10" />

            {/* Hebrew highlight card */}
            <div className="border border-border p-8 relative">
              <p className="text-secondary tracking-[0.2em] uppercase text-[10px] font-body font-semibold mb-4">
                Did You Know?
              </p>
              <p className="font-heading text-3xl md:text-4xl text-foreground/90 mb-1">
                תְּרוּמָה
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                <span className="text-foreground font-medium">Terumah</span> is a Hebrew word meaning{" "}
                <span className="text-secondary font-medium">"offering"</span> or{" "}
                <span className="text-secondary font-medium">"gift."</span>
              </p>
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-secondary opacity-30" />
            </div>
          </AnimatedSection>
        </div>

        {/* Right column — body text */}
        <div className="md:col-span-7 md:pt-20">
          <AnimatedSection delay={0.15}>
            <p className="text-foreground font-body text-base md:text-lg leading-[1.9] mb-8">
              For us, it represents our commitment to giving our best work as an offering of service to our clients and our Creator.
            </p>
            <p className="text-muted-foreground font-body text-base leading-[1.9] mb-8">
              Founded on Christian values of integrity, stewardship, and excellence, we don't just "run ads."
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-deep-blue pl-6 py-2">
                <p className="font-heading text-xl md:text-2xl text-foreground mb-2">Terumah Targeted</p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Your outsourced ad department
                </p>
              </div>
              <div className="border-l-2 border-light-blue pl-6 py-2">
                <p className="font-heading text-xl md:text-2xl text-foreground mb-2">Almasi</p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Our high-converting video ads
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-muted-foreground font-body text-base leading-[1.9] mb-6">
              Whether it's through Terumah Targeted or Almasi, we treat your marketing budget as a{" "}
              <span className="text-secondary font-medium">sacred trust</span>.
            </p>
            <p className="text-foreground font-body text-base md:text-lg leading-[1.9] font-medium">
              We solve the "leaky bucket" problem by combining data-driven strategy with professional-grade storytelling to ensure your message reaches the right hearts and minds.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    { number: "01", title: "Strategy", description: "Defining the vision and roadmap for meaningful outcomes." },
    { number: "02", title: "Design", description: "Crafting visual experiences that captivate and communicate." },
    { number: "03", title: "Development", description: "Building with precision, performance, and purpose." },
  ];

  return (
    <section id="section-3" className="py-32 md:py-44 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold mb-6">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-light leading-[1.15] mb-20">
            Core Disciplines
          </h2>
        </AnimatedSection>
        <div className="space-y-0">
          {services.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 0.15}>
              <div className="group border-t border-border py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 cursor-pointer transition-all duration-500 hover:pl-4">
                <span className="text-secondary font-body text-sm tracking-widest">
                  {service.number}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-light group-hover:text-secondary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm md:ml-auto md:max-w-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-32 md:py-44 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <AnimatedSection>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light leading-[1.1] mb-8">
          Ready to create something{" "}
          <span className="italic text-secondary">extraordinary</span>?
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          Let's bring your vision to life with purpose and precision.
        </p>
        <Button variant="outline-dark" size="lg" className="px-12 py-6">
          Get in Touch
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="font-heading text-2xl font-light tracking-wide">Atelier</p>
      <p className="text-muted-foreground font-body text-sm tracking-wide">
        © {new Date().getFullYear()} — All rights reserved
      </p>
    </div>
  </footer>
);

const Index = () => (
  <main className="min-h-screen">
    <HeroSection />
    <PhilosophySection />
    <ServicesSection />
    <CTASection />
    <Footer />
  </main>
);

export default Index;
