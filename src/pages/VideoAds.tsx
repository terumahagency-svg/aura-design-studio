import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Play } from "lucide-react";

const VideoAds = () => (
  <main className="min-h-screen">
    <section className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-sm bg-secondary/10 flex items-center justify-center">
              <Play className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">Almasi</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            High-Converting <span className="italic text-secondary">Video Ads</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-12">
            Cinematic, scroll-stopping video ads engineered to capture attention and drive action. From concept to final cut, we craft stories that sell.
          </p>
          <Button variant="premium" size="lg" className="px-12 py-6" asChild>
            <a href="https://wa.me/254723579077?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20High-Converting%20Video%20Ads!" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default VideoAds;
