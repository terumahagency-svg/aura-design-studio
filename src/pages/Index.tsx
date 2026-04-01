import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Luxury abstract background"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-secondary tracking-[0.3em] uppercase text-sm font-body font-medium mb-6"
      >
        Welcome
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-primary-foreground leading-[1.1] mb-8"
      >
        Crafted with
        <br />
        <span className="italic text-secondary">intention</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed"
      >
        Where timeless elegance meets modern sensibility. Every detail, purposefully considered.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <Button variant="premium" size="lg" className="px-12 py-6">
          Discover More
        </Button>
      </motion.div>
    </div>
  </section>
);

const PhilosophySection = () => (
  <section className="py-32 md:py-44 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <AnimatedSection>
          <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold mb-6">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light leading-[1.15] mb-8">
            Less, but{" "}
            <span className="italic text-secondary">better</span>
          </h2>
          <div className="w-12 h-px bg-secondary mb-8" />
          <p className="text-muted-foreground font-body text-base leading-[1.8] mb-6">
            We believe in the power of restraint. Every element serves a purpose, every space breathes with intention. This is design stripped to its essence — nothing more, nothing less.
          </p>
          <p className="text-muted-foreground font-body text-base leading-[1.8]">
            Our approach honours the beauty of simplicity while delivering experiences that resonate on a deeper level.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="aspect-[4/5] bg-muted relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/10" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="w-8 h-px bg-secondary mb-4" />
              <p className="text-muted-foreground font-body text-sm tracking-wide">
                Detail-oriented design
              </p>
            </div>
          </div>
        </AnimatedSection>
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
    <section className="py-32 md:py-44 px-6 bg-muted/50">
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
