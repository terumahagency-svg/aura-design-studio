import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft, Play } from "lucide-react";

const tiers = [
  {
    name: "Core",
    tagline: "One high-impact video ad",
    price: "KSH 50,000",
    accent: "secondary",
    features: [
      "1 video ad (up to 30 seconds)",
      "Scriptwriting & storyboarding",
      "Professional filming (half day)",
      "Post-production & editing",
      "Delivery in 10 business days",
      "1 round of revisions",
    ],
  },
  {
    name: "Pro",
    tagline: "A campaign-ready video suite",
    price: "KSH 100,000",
    accent: "secondary",
    highlighted: true,
    features: [
      "3 video ads (15–60 sec each)",
      "Full creative direction & scripting",
      "Full-day professional shoot",
      "Motion graphics & sound design",
      "Delivery in 7 business days",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Elite",
    tagline: "End-to-end video ad engine",
    price: "KSH 200,000",
    accent: "secondary",
    features: [
      "5+ video ads, multiple formats",
      "Cinematic production & direction",
      "Multi-day / multi-location shoots",
      "UGC-style + polished versions",
      "Platform-optimized cuts (Reels, Stories, YouTube)",
      "Priority delivery & unlimited revisions",
    ],
  },
];

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
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            Cinematic, scroll-stopping video ads engineered to capture attention and drive action. From concept to final cut, we craft stories that sell.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection service="High-Converting Video Ads" tiers={tiers} />
  </main>
);

export default VideoAds;
