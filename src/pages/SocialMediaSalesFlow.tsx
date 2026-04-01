import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Share2 } from "lucide-react";

const SocialMediaSalesFlow = () => (
  <main className="min-h-screen">
    <section className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-sm bg-light-blue/10 flex items-center justify-center">
              <Share2 className="w-6 h-6 text-light-blue" />
            </div>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">Automation</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            Automated Social Media <span className="italic text-secondary">Sales Flow</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-12">
            Set up intelligent systems that convert your social media followers into paying customers on autopilot — DMs, funnels, and follow-ups all handled seamlessly.
          </p>
          <Button variant="premium" size="lg" className="px-12 py-6" asChild>
            <a href="https://wa.me/254723579077?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Automated%20Social%20Media%20Sales%20Flow!" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default SocialMediaSalesFlow;
