import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Target } from "lucide-react";

const ExpertAdManagement = () => (
  <main className="min-h-screen">
    <section className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-sm bg-deep-blue/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-deep-blue" />
            </div>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">Terumah Targeted</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            Expert Ad <span className="italic text-secondary">Management</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-12">
            Your outsourced ad department. We manage your campaigns end-to-end — strategy, creative, optimization, and reporting — so every shilling works harder for your business.
          </p>
          <Button variant="premium" size="lg" className="px-12 py-6" asChild>
            <a href="https://wa.me/254723579077?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Expert%20Ad%20Management!" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default ExpertAdManagement;
