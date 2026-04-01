import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft, Share2 } from "lucide-react";

const tiers = [
  {
    name: "Core",
    tagline: "Kickstart your social lead gen",
    price: "KSH 25,000",
    period: "month",
    accent: "light-blue",
    features: [
      "1 social platform managed",
      "Professional content scripting",
      "8 posts per month",
      "Basic lead generation campaigns",
      "Monthly analytics report",
    ],
  },
  {
    name: "Pro",
    tagline: "Consistent pipeline of leads",
    price: "KSH 55,000",
    period: "month",
    accent: "light-blue",
    highlighted: true,
    features: [
      "2 social platforms managed",
      "Advanced scripting & content calendar",
      "16 posts per month",
      "Targeted lead campaigns with funnels",
      "Bi-weekly reports & optimizations",
      "DM outreach sequences",
    ],
  },
  {
    name: "Elite",
    tagline: "Your full social sales engine",
    price: "KSH 100,000",
    period: "month",
    accent: "light-blue",
    features: [
      "All major platforms managed",
      "Premium scripting & video content",
      "Unlimited posts",
      "Full-funnel lead campaigns",
      "Weekly strategy calls",
      "CRM integration & lead scoring",
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
            Grow With <span className="italic text-secondary">Social Media</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            Support your sales team with high-quality leads through professional scripting and targeted social media campaigns.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection service="Grow With Social Media" tiers={tiers} />
  </main>
);

export default SocialMediaSalesFlow;
