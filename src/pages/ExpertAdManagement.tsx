import PricingSection from "@/components/PricingSection";
import ServiceHero from "@/components/ServiceHero";
import solutionImg from "@/assets/solution-ad-management.png";

const tiers = [
  {
    name: "Core",
    tagline: "Micro-businesses, solopreneurs and local shops starting with ads",
    price: "KSh 24,000",
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
      'The "Lead-to-Sale" Tracker',
      "Separate Ad Spend: KSh 20,000/month (paid by client)",
    ],
  },
  {
    name: "Pro",
    tagline: "Growing SMEs with proven product-market fit, ready to scale",
    price: "KSh 42,000",
    period: "month",
    accent: "deep-blue",
    highlighted: true,
    features: [
      "Everything in Core, plus:",
      "Two platforms max (Meta + TikTok/Google)",
      "Full pixel/API setup",
      "Landing Page/Instant Form Optimization",
      "Custom Audience Building",
      "A/B testing of audiences/creative",
      "Monthly performance call",
      "Separate Ad Spend: KSh 60,000/month (paid by client)",
    ],
  },
  {
    name: "Elite",
    tagline: "Established businesses and high-ticket sellers dominating their market",
    price: "KSh 72,000",
    period: "month",
    accent: "deep-blue",
    features: [
      "Everything in Core and Pro, plus:",
      "Omni-channel funnel management",
      "Lead Scoring & Management",
      "Conversion Rate Optimization (CRO) Audit, finding the leaky bucket",
      "Retargeting campaigns",
      "CRM/Google Sheets lead integration",
      "Bi-weekly strategy calls",
      "Priority Support",
      "Separate Ad Spend: KSh 150,000/month (paid by client)",
    ],
  },
];

const ExpertAdManagement = () => (
  <main className="min-h-screen">
    <ServiceHero
      brand="Terumah Targeted"
      title={<>Your outsourced <span className="italic text-secondary">ad department.</span></>}
      description="Professional campaign management and creative guidance built to help your business win on social and search."
      image={solutionImg}
    />

    <PricingSection service="Terumah Targeted" tiers={tiers} />
  </main>
);

export default ExpertAdManagement;
