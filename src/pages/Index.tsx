import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import BrandHeader from "@/components/BrandHeader";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import solutionAdImg from "@/assets/solution-ad-management.png";
import solutionEventsImg from "@/assets/solution-events.png";
import solutionSocialImg from "@/assets/solution-social.png";
import solutionVideoImg from "@/assets/solution-video-ads.png";

const heroVideo = "/__l5e/assets-v1/2fbdf5a8-8085-4514-83ad-c7c4dd4acdfe/hero-butterfly.mp4";

const HeroSection = () => (
  <section className="relative isolate flex min-h-[680px] h-[calc(100svh-2rem)] max-h-[900px] items-center overflow-hidden bg-deep-blue text-deep-blue-foreground">
    <BrandHeader overlay />
    <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 h-full w-full object-cover">
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/90 to-deep-blue/25" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-foreground/20" />

    <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:pb-20 md:pt-32 lg:px-10">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="brand-eyebrow mb-6 text-secondary"
        >
          Strategy · Storytelling · Growth
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-5xl font-heading font-semibold leading-[0.92] sm:text-6xl md:text-8xl lg:text-9xl"
        >
          Ready to transform your <span className="italic text-secondary">business?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 max-w-xl font-body text-sm leading-6 text-deep-blue-foreground/75 md:mt-8 md:text-lg md:leading-7"
        >
          We unite data-driven strategy and professional storytelling to turn attention into measurable business growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-7 flex flex-wrap items-center gap-5 md:mt-10 md:gap-6"
        >
          <Button variant="premium" size="lg" className="h-14 px-9" asChild>
            <a href="#section-3">Show me how <ArrowRight /></a>
          </Button>
          <div className="border-l border-deep-blue-foreground/25 pl-6">
            <p className="font-heading text-4xl font-semibold text-light-blue md:text-5xl">
              <AnimatedCounter target={105000} duration={2.8} />+
            </p>
            <p className="brand-eyebrow mt-1 text-deep-blue-foreground/60">KSh revenue generated</p>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 grid h-3 grid-cols-3">
      <div className="bg-secondary" />
      <div className="bg-deep-blue" />
      <div className="bg-light-blue" />
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about-terumah" className="overflow-hidden bg-background px-6 py-24 md:py-32 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <AnimatedSection>
          <p className="brand-eyebrow mb-5 text-deep-blue">About Terumah</p>
          <h2 className="max-w-xl text-5xl font-heading font-semibold leading-[0.96] md:text-7xl">
            Our best work is an <span className="italic text-secondary">offering.</span>
          </h2>
          <p className="mt-8 max-w-lg font-body text-base leading-8 text-muted-foreground">
            Founded on Christian values of integrity, stewardship and excellence, we treat your marketing budget as a sacred trust, not simply another media spend.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative overflow-hidden bg-secondary p-8 text-secondary-foreground sm:p-10 md:p-12">
            <img src="/favicon.png" alt="" className="absolute -bottom-20 -right-16 h-72 w-72 object-contain opacity-10" />
            <p className="brand-eyebrow text-secondary-foreground/65">The meaning behind our name</p>
            <p className="mt-6 font-heading text-5xl font-semibold md:text-6xl">תְּרוּמָה</p>
            <p className="mt-4 max-w-lg font-body text-base leading-7 text-secondary-foreground/80">
              Terumah is a Hebrew word meaning “offering” or “gift.” For us, it means giving our best work in service to our clients and our Creator.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.18} className="mt-16 border-l-4 border-light-blue bg-deep-blue px-8 py-10 text-deep-blue-foreground md:px-12 md:py-12">
        <p className="brand-eyebrow text-light-blue">Our mission</p>
        <p className="mt-5 max-w-5xl font-heading text-3xl font-medium leading-snug md:text-4xl">
          Our mission is to make heaven here on earth by changing the lives of business owners, making their businesses profitable, and partnering with God in His mission of spreading the Gospel with excellence in digital marketing and video production.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-20">
        <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Terumah Targeted", "Your outsourced ad department"],
            ["02", "Terumah Sherehe", "Events transformed into lasting assets"],
            ["03", "The Social Flow", "Content that fuels your sales pipeline"],
            ["04", "Almasi", "High-converting video advertising"],
          ].map(([number, title, description], index) => (
            <div key={title} className={`py-8 sm:px-7 ${index > 0 ? "sm:border-l sm:border-border" : ""}`}>
              <p className="font-heading text-3xl font-semibold text-light-blue">{number}</p>
              <h3 className="mt-4 text-xl font-heading font-semibold">{title}</h3>
              <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-14 max-w-4xl">
        <p className="font-heading text-3xl font-medium leading-snug text-deep-blue md:text-4xl">
          We solve the “leaky bucket” by pairing data-driven strategy with professional storytelling, so your message reaches the right hearts and minds.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

const offerings = [
  {
    title: "Expert Ad Management",
    brandName: "Terumah Targeted",
    image: solutionAdImg,
    description: "Strategic campaigns that maximize every shilling and build a dependable lead-to-sale system.",
    path: "/expert-ad-management",
    tone: "bg-deep-blue text-deep-blue-foreground",
  },
  {
    title: "Turn Events into Assets",
    brandName: "Terumah Sherehe",
    image: solutionEventsImg,
    description: "Transform live moments into evergreen content that keeps generating value long after the day ends.",
    path: "/events-into-assets",
    tone: "bg-secondary text-secondary-foreground",
  },
  {
    title: "Grow With Social Media",
    brandName: "The Terumah Social Flow",
    image: solutionSocialImg,
    description: "Build a steady stream of high-quality leads through strategic scripting, production and campaigns.",
    path: "/social-media-sales-flow",
    tone: "bg-light-blue text-light-blue-foreground",
  },
  {
    title: "High-Converting Video Ads",
    brandName: "Almasi by Terumah",
    image: solutionVideoImg,
    description: "Cinematic, conversion-focused ads engineered to stop the scroll and inspire action.",
    path: "/video-ads",
    tone: "bg-deep-blue text-deep-blue-foreground",
  },
];

const MissingPieceSection = () => (
  <section id="section-3" className="bg-muted px-6 py-24 md:py-32 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <AnimatedSection className="grid gap-8 border-b border-border pb-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <p className="brand-eyebrow text-secondary">Our Solutions</p>
        <h2 className="max-w-4xl text-5xl font-heading font-semibold leading-[0.98] md:text-7xl">
          What is the missing piece in your <span className="italic text-deep-blue">growth strategy?</span>
        </h2>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offerings.map((item, index) => (
          <AnimatedSection key={item.path} delay={index * 0.08}>
            <Link to={item.path} className="group block h-full overflow-hidden bg-card shadow-sm transition-transform duration-500 hover:-translate-y-1">
              <div className="aspect-[16/8] overflow-hidden">
                <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className={`relative min-h-64 p-8 md:p-10 ${item.tone}`}>
                <p className="brand-eyebrow opacity-70">{item.brandName}</p>
                <h3 className="mt-4 text-4xl font-heading font-semibold leading-none md:text-5xl">{item.title}</h3>
                <p className="mt-5 max-w-md font-body text-sm leading-6 opacity-75">{item.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-body text-xs font-bold uppercase">
                  Explore package <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const ContactFooter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", business: "", question: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.question.trim()) {
      toast({ title: "Please fill in the required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    const { error } = await supabase.from("contact_submissions").insert({
      full_name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      business_name: formData.business.trim() || null,
      question: formData.question.trim(),
    });
    setSending(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      return;
    }
    toast({ title: "Message received!", description: "Thank you for reaching out. We'll get back to you within 24 hours." });
    setFormData({ fullName: "", phone: "", email: "", business: "", question: "" });
  };

  const fieldClass = "border-deep-blue-foreground/20 bg-transparent text-deep-blue-foreground placeholder:text-deep-blue-foreground/35 focus:border-light-blue focus:ring-light-blue/20";
  const labelClass = "mb-2 block font-body text-xs font-semibold uppercase text-deep-blue-foreground/60";

  return (
    <footer id="contact" className="bg-deep-blue text-deep-blue-foreground">
      <div className="grid h-3 grid-cols-3"><div className="bg-secondary" /><div className="bg-deep-blue" /><div className="bg-light-blue" /></div>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <AnimatedSection>
            <p className="brand-eyebrow text-light-blue">Get in touch</p>
            <h2 className="mt-5 text-5xl font-heading font-semibold leading-[0.96] md:text-7xl">
              What can we clear up <span className="italic text-secondary">for you?</span>
            </h2>
            <p className="mt-8 max-w-md font-body text-sm leading-7 text-deep-blue-foreground/65">
              Tell us what you are working toward. Our team will get back to you within 24 hours.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <div><label className={labelClass}>Full Name *</label><Input required name="fullName" value={formData.fullName} onChange={handleChange} maxLength={100} className={fieldClass} /></div>
              <div><label className={labelClass}>Phone Number</label><Input name="phone" value={formData.phone} onChange={handleChange} maxLength={20} className={fieldClass} /></div>
              <div><label className={labelClass}>Email *</label><Input required type="email" name="email" value={formData.email} onChange={handleChange} maxLength={255} className={fieldClass} /></div>
              <div><label className={labelClass}>Business Name</label><Input name="business" value={formData.business} onChange={handleChange} maxLength={100} className={fieldClass} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Your Question *</label><Textarea required name="question" value={formData.question} onChange={handleChange} maxLength={1000} rows={5} className={`${fieldClass} resize-none`} /></div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="premium" size="lg" className="h-14 w-full px-10 sm:w-auto" disabled={sending}>
                  <Send /> {sending ? "Sending…" : "Send Message"}
                </Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>

      <div className="border-t border-deep-blue-foreground/15 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="" className="h-14 w-14 bg-background object-contain" />
            <div><p className="font-heading text-xl font-semibold leading-none">TERUMAH</p><p className="mt-1 font-body text-[9px] font-bold uppercase text-light-blue">Agency</p></div>
          </div>
          <p className="font-body text-xs text-deep-blue-foreground/45">© {new Date().getFullYear()} Terumah Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Index = () => (
  <main className="min-h-screen overflow-x-hidden">
    <HeroSection />
    <AboutSection />
    <MissingPieceSection />
    <ContactFooter />
    <WhatsAppFAB targetSectionId="about-terumah" />
  </main>
);

export default Index;