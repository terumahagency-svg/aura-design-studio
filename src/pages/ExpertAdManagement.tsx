import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft, Target } from "lucide-react";

const tiers = [
  {
    name: "Core",
    tagline: "For businesses getting started with ads",
    price: "KSH 30,000",
    period: "month",
    accent: "deep-blue",
    features: [
      "1 ad platform (Meta or Google)",
      "Campaign setup & launch",
      "Monthly performance report",
      "Basic audience targeting",
      "Up to KSH 50K ad spend managed",
    ],
  },
  {
    name: "Pro",
    tagline: "For growing brands ready to scale",
    price: "KSH 60,000",
    period: "month",
    accent: "deep-blue",
    highlighted: true,
    features: [
      "2 ad platforms (Meta + Google)",
      "A/B testing & creative optimization",
      "Bi-weekly performance reports",
      "Retargeting & lookalike audiences",
      "Up to KSH 150K ad spend managed",
      "Dedicated account strategist",
    ],
  },
  {
    name: "Elite",
    tagline: "Full-service ad department replacement",
    price: "KSH 120,000",
    period: "month",
    accent: "deep-blue",
    features: [
      "All platforms (Meta, Google, TikTok, LinkedIn)",
      "Full-funnel strategy & execution",
      "Weekly reports & strategy calls",
      "Custom audience & conversion tracking",
      "Unlimited ad spend managed",
      "Priority support & creative direction",
    ],
  },
];

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
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            Your outsourced ad department. We manage your campaigns end-to-end — strategy, creative, optimization, and reporting — so every shilling works harder for your business.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection service="Expert Ad Management" tiers={tiers} />
  </main>
);

export default ExpertAdManagement;
