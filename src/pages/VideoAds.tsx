import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft, Play } from "lucide-react";

const tiers = [
  {
    name: "Core",
    tagline: "One high-impact video ad",
    price: "KES 35,000",
    accent: "secondary",
    features: [
      "Deliverables: 1 Concept, 1 Final Ad (Up to 30s)",
      "Treatment & Scripting: 1 hook-focused script optimized for social media",
      "Editing: Trendy captions, licensed music, basic color correction",
    ],
  },
  {
    name: "Pro",
    tagline: "Best for SMEs launching a monthly campaign",
    price: "KES 65,000",
    accent: "secondary",
    highlighted: true,
    features: [
      "Deliverables: 2 Creative Concepts, 1 Main Ad (60s) + 2 Cut-downs (15s Hooks)",
      "Treatment & Scripting: Professional scripting with storyboards for both concepts",
      "Production: Half-day shoot (4–5 hours), 2-person crew, professional lighting & audio kit",
      "Editing: Advanced color grading, sound design, and motion graphics (logo/CTA)",
    ],
  },
  {
    name: "Elite",
    tagline: "Full cinematic production suite",
    price: "KES 150,000",
    accent: "secondary",
    features: [
      "Deliverables: 3 Creative Concepts, 1 Cinematic Film (2 mins) + 4 Social Ads (Mix of lengths)",
      "Treatment & Scripting: Full creative direction, scouting, and professional copy",
      "Production: Full-day shoot (8–10 hours), 3-person crew (Director, DP, Sound), 4K Cinema gear + Drone shots",
      "Editing: Premium post-production, multi-platform optimization, and professional Voice-over",
    ],
  },
];

const addons = [
  {
    id: "ab-test",
    label: "A/B Test Variations (+ KES 15,000)",
    description:
      "2 versions of the same ad with different Hooks (first 3 seconds) and CTAs — proven to boost Meta ad ROI.",
  },
  {
    id: "raw-footage",
    label: "RAW Footage Delivery (+ 25% of Package Price)",
    description:
      "Receive all raw clips for your own future Reels and content repurposing.",
  },
  {
    id: "fast-track",
    label: "Fast-Track Delivery within 48 hours (+ 20% rush fee)",
    description: "Priority post-production with delivery in 48 hours.",
  },
];

const VideoAds = () => (
  <main className="min-h-screen">
    <section className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-sm bg-secondary/10 flex items-center justify-center">
              <Play className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">
              Almasi by Terumah
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            Almasi by <span className="italic text-secondary">Terumah</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            Elevate your marketing ROI with high-converting video ads crafted
            with expert scripting and data-driven hooks tailored to your business
            objectives.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Bundling disclaimer */}
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="border border-secondary/30 bg-secondary/5 px-6 py-4 text-center">
            <p className="font-body text-sm text-foreground">
              <span className="font-semibold text-secondary">Bundling:</span>{" "}
              Book an ad every month for 3 months and save 15% on the total cost.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection
      service="Almasi by Terumah"
      tiers={tiers}
      addons={addons}
    />

    {/* Visible add-ons section */}
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold mb-6 text-center">
            Add-ons
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-light leading-[1.15] mb-12 text-center">
            Boost your package with{" "}
            <span className="italic text-secondary">extras</span>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {addons.slice(0, 3).map((addon, i) => (
            <AnimatedSection key={addon.id} delay={i * 0.1}>
              <div className="border border-border bg-card p-6 md:p-8 h-full flex flex-col">
                <h3 className="font-heading text-lg font-medium mb-2 text-foreground">
                  {addon.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {addon.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default VideoAds;
