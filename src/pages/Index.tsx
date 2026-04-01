import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Target, Camera, Share2, Play, Send } from "lucide-react";

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

const MissingPieceSection = () => {
  const navigate = useNavigate();

  const offerings = [
    {
      title: "Expert Ad Management",
      description: "Strategic, data-driven ad campaigns that maximize every shilling of your budget.",
      icon: Target,
      path: "/expert-ad-management",
      accent: "deep-blue",
    },
    {
      title: "Turn Events into Assets",
      description: "Transform live moments into evergreen content that keeps generating returns.",
      icon: Camera,
      path: "/events-into-assets",
      accent: "secondary",
    },
    {
      title: "Automated Social Media Sales Flow",
      description: "Set up systems that convert followers into paying customers on autopilot.",
      icon: Share2,
      path: "/social-media-sales-flow",
      accent: "light-blue",
    },
    {
      title: "High-Converting Video Ads",
      description: "Cinematic ads engineered to stop the scroll and drive action.",
      icon: Play,
      path: "/video-ads",
      accent: "secondary",
    },
  ];

  return (
    <section id="section-3" className="py-32 md:py-44 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold mb-6">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light leading-[1.15] mb-20 max-w-3xl">
            What is the missing piece in your company's current{" "}
            <span className="italic text-secondary">digital growth</span> strategy?
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {offerings.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.path} delay={i * 0.12}>
                <motion.button
                  onClick={() => navigate(item.path)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className={`group relative w-full text-left border border-border bg-card p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:border-${item.accent}`}
                >
                  {/* Accent top line */}
                  <div className={`absolute top-0 left-0 w-full h-[2px] bg-${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  <div className="flex items-start gap-5 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-sm bg-${item.accent}/10 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 text-${item.accent}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-heading font-medium leading-tight group-hover:text-secondary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <span className={`inline-flex items-center gap-2 text-${item.accent} font-body text-xs tracking-[0.2em] uppercase font-semibold`}>
                    Learn More
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ContactFooter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    business: "",
    question: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.question.trim()) {
      toast({ title: "Please fill in the required fields", variant: "destructive" });
      return;
    }
    setSending(true);

    // Build WhatsApp message with form data
    const msg = [
      `*New Inquiry from ${formData.fullName.trim()}*`,
      formData.business.trim() ? `Business: ${formData.business.trim()}` : "",
      `Email: ${formData.email.trim()}`,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : "",
      `\nQuestion:\n${formData.question.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/254723579077?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setSending(false);
    toast({ title: "Opening WhatsApp…", description: "We'll get back to you shortly!" });
    setFormData({ fullName: "", phone: "", email: "", business: "", question: "" });
  };

  const inputClasses =
    "bg-transparent border-border font-body text-sm placeholder:text-muted-foreground/50 focus:border-secondary focus:ring-secondary/20 transition-colors duration-300";

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-44">
        <div className="grid md:grid-cols-12 gap-16 md:gap-12">
          {/* Left column */}
          <div className="md:col-span-5">
            <AnimatedSection>
              <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold mb-6">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light leading-[1.1] mb-8">
                What can we clear up{" "}
                <span className="italic text-secondary">for you</span>?
              </h2>
              <div className="w-12 h-px bg-secondary mb-10" />
              <p className="text-primary-foreground/60 font-body text-sm leading-relaxed max-w-sm">
                Have a question about our services? Fill in the form and we'll get back to you within 24 hours.
              </p>
            </AnimatedSection>
          </div>

          {/* Right column — form */}
          <div className="md:col-span-7">
            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-foreground/50 font-body text-xs tracking-[0.15em] uppercase mb-2">
                      Full Name <span className="text-secondary">*</span>
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      maxLength={100}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-primary-foreground/50 font-body text-xs tracking-[0.15em] uppercase mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      maxLength={20}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-foreground/50 font-body text-xs tracking-[0.15em] uppercase mb-2">
                      Email <span className="text-secondary">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      maxLength={255}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-primary-foreground/50 font-body text-xs tracking-[0.15em] uppercase mb-2">
                      Business Name
                    </label>
                    <Input
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      maxLength={100}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-primary-foreground/50 font-body text-xs tracking-[0.15em] uppercase mb-2">
                    Your Question <span className="text-secondary">*</span>
                  </label>
                  <Textarea
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to know…"
                    maxLength={1000}
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  className="px-12 py-6 w-full sm:w-auto"
                  disabled={sending}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {sending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-heading text-xl font-light tracking-wide text-primary-foreground/80">
            Terumah Agency
          </p>
          <p className="text-primary-foreground/40 font-body text-xs tracking-wide">
            © {new Date().getFullYear()} Terumah Agency — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};


const Index = () => (
  <main className="min-h-screen">
    <HeroSection />
    <AboutSection />
    <MissingPieceSection />
    <ContactFooter />
    <WhatsAppFAB targetSectionId="about-terumah" />
  </main>
);

export default Index;
