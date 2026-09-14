import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft } from "lucide-react";
import solutionImg from "@/assets/solution-video-ads.png";

const tiers = [
  {
    name: "Core",
    tagline: "A direct-response social package designed for immediate conversion",
    price: "KES 42,000",
    accent: "secondary",
    features: [
      "Deliverables: 1 Main Ad (up to 30s) + 2 Alternative Hooks for Meta/TikTok A/B testing, delivered in 9:16 and 1:1",
      "Treatment & Scripting: 1 hook-focused script optimized for social media engagement",
      "Production: 2-hour shoot, single-man crew (mirrorless setup), natural lighting + on-camera bounce",
      "Editing: Trendy captions, licensed royalty-free music, standard C-Log3 to Rec.709 colour correction",
      "Includes 1 round of revisions",
    ],
  },
  {
    name: "Pro",
    tagline: "A robust multi-platform campaign package for SMEs",
    price: "KES 78,000",
    accent: "secondary",
    highlighted: true,
    features: [
      "Deliverables: 2 Creative Concepts — 1 Main Ad (60s) + 2 Cut-downs (15s hooks), delivered in 16:9, 9:16 and 1:1",
      "Treatment & Scripting: Professional scripting, storyboarding for both concepts, and a pre-production call",
      "Production: Half-day shoot (4–5 hours), 2-person crew, professional lighting & wireless audio kit",
      "Editing: Advanced C-Log3 colour grading, basic sound design, motion graphics (animated logo/CTA)",
      "Includes 2 rounds of revisions",
    ],
  },
  {
    name: "Elite",
    tagline: "A cinematic brand film package for serious corporate entities",
    price: "KES 180,000",
    accent: "secondary",
    features: [
      "Deliverables: 3 Creative Concepts — 1 Cinematic Film (2 mins) + 4 Social Ads (mix of lengths)",
      "Treatment & Scripting: Full creative direction, location scouting, professional copywriting, 1-hour ad distribution strategy call",
      "Production: Full-day shoot (8–10 hours), 3-person crew (Director, DP, Sound/Grip), 4K cinema gear + drone shots where permitted",
      "Editing: Premium post-production in DaVinci Resolve, multi-platform optimization, professional local voice-over",
      "Includes 3 rounds of revisions",
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
    <section className="relative py-32 md:py-44 px-6">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-deep-blue/10 to-background" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-sm overflow-hidden">
              <img src={solutionImg} alt="Almasi by Terumah" loading="lazy" width={64} height={64} className="w-full h-full object-cover" />
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

    {/* Standard terms */}
    <section className="pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="border border-border bg-card/50 p-6 md:p-8">
            <h3 className="font-heading text-lg font-medium mb-3 text-foreground">
              Standard terms, disclaimers & variable costs
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Almasi base rates cover creative direction, standard Terumah Agency crew, in-house
              equipment and post-production. Rates do not include location hiring fees, KCAA drone
              permits for restricted zones, on-screen acting talent or models, specialized props,
              wardrobe, or premium celebrity voiceovers. Where your project requires these, they are
              quoted separately as variable costs and must be approved before production. Additional
              editing revisions beyond the stated package limit are billed at KES 5,000 per hour.
              RAW footage is not included but can be purchased via a 25% buy-out fee.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default VideoAds;
