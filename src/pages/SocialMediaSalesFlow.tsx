import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft, Share2 } from "lucide-react";

const tiers = [
  {
    name: "Core",
    tagline: "Converting existing interest into sales without the high overhead",
    price: "KSH 30,000",
    period: "month",
    accent: "light-blue",
    features: [
      "Get a list of leads lining up to buy from you",
      "Content: 4 Reels/month (high-quality, conversion-focused hooks)",
      "Ads: Single-platform management (Meta) — Lead Generation focus",
      "Strategy: Monthly Sales Audit — we tell you what's working and what to stop",
      "Recommended Ad Spend: KSH 15,000–30,000/mo (paid by client)",
    ],
  },
  {
    name: "Pro",
    tagline: "Building a brand people recognize and trust before they even talk to you",
    price: "KSH 75,000",
    period: "month",
    accent: "light-blue",
    highlighted: true,
    features: [
      "New leads + Retargeting — we find new people, then chase them with ads until they buy",
      "Content: 8 professional videos (includes 1 day of shooting + B-roll)",
      "Ads: Multi-platform (Meta + TikTok) — split-test audiences to find your \"Gold Mine\"",
      "Strategy: Bi-weekly strategy calls + Lead Tracking Sheet setup",
      "Recommended Ad Spend: KSH 40,000–80,000/mo (paid by client)",
    ],
  },
  {
    name: "Elite",
    tagline: "Total market takeover — we act as your entire marketing department",
    price: "KSH 150,000",
    period: "month",
    accent: "light-blue",
    features: [
      "The Omnichannel Ecosystem — capture leads, nurture via SMS/Email, dominate the search feed",
      "Content: 15 premium videos + 1 cinematic \"Brand Story\" video per quarter",
      "Scriptwriting, lighting & professional editing included",
      "Ads: Full-funnel management (Meta, TikTok & Google Search) — ROI & CAC focus",
      "Strategy: Weekly Performance Oversight + Sales Team Training videos",
      "Recommended Ad Spend: KSH 100,000+/mo (paid by client)",
    ],
  },
];
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
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">Social Media</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            The Terumah <span className="italic text-secondary">Social Flow</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            Support your sales department with a steady stream of high-quality leads generated through professional scripting and targeted social media campaigns. This package works especially well with companies that already have a social media team.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection service="The Terumah Social Flow" tiers={tiers} />
  </main>
);

export default SocialMediaSalesFlow;
