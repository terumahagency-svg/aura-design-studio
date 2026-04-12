import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft } from "lucide-react";
import solutionImg from "@/assets/solution-ad-management.png";

const tiers = [
  {
    name: "Core",
    tagline: "For businesses getting started with ads",
    price: "KSH 20,000",
    period: "month",
    accent: "deep-blue",
    features: [
      "Single platform management (Meta or Google)",
      "Creative Guidance",
      "Basic Lead Nurture Template/guidance",
      "Basic ad copy & targeting",
      "Weekly optimization",
      "Monthly report",
      "Competitor Insight",
      "The Lead-to-Sale Tracker",
      "Separate Ad Spend: KSH 20,000/month (paid by client)",
    ],
  },
  {
    name: "Pro",
    tagline: "For growing brands ready to scale",
    price: "KSH 35,000",
    period: "month",
    accent: "deep-blue",
    highlighted: true,
    features: [
      "Two platforms max (Meta + TikTok/Google)",
      "Full pixel/API setup",
      "Landing Page/Instant Form Optimization",
      "Custom Audience Building",
      "A/B testing of audiences/creative",
      "Monthly performance call",
      "Separate Ad Spend: KSH 60,000/month (paid by client)",
    ],
  },
  {
    name: "Elite",
    tagline: "Full-service ad department replacement",
    price: "KSH 60,000+",
    period: "month",
    accent: "deep-blue",
    features: [
      "Omni-channel funnel management",
      "Lead Scoring & Management",
      "Conversion Rate Optimization (CRO) Audit",
      "Retargeting campaigns",
      "CRM/Google Sheets lead integration",
      "Bi-weekly strategy calls",
      "Priority Support",
      "Separate Ad Spend: KSH 150,000/month (paid by client)",
    ],
  },
];
const ExpertAdManagement = () => (
  <main className="min-h-screen">
    <section className="relative py-32 md:py-44 px-6">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-deep-blue/20 via-secondary/10 to-background" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-sm overflow-hidden">
              <img src={solutionImg} alt="Terumah Targeted" loading="lazy" width={64} height={64} className="w-full h-full object-cover" />
            </div>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">Terumah Targeted</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            Terumah <span className="italic text-secondary">Targeted</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            Terumah Targeted functions as your outsourced ad department, providing the professional management and creative guidance needed to win on social and search.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection service="Expert Ad Management" tiers={tiers} />
  </main>
);

export default ExpertAdManagement;
