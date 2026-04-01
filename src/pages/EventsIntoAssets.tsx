import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft, Camera } from "lucide-react";

const tiers = [
  {
    name: "Core",
    tagline: "Capture the highlights",
    price: "KSH 40,000",
    accent: "secondary",
    features: [
      "Half-day event coverage",
      "Highlight reel (60–90 sec)",
      "10 edited photos for social media",
      "Delivery within 7 business days",
      "1 round of revisions",
    ],
  },
  {
    name: "Pro",
    tagline: "Full event, full impact",
    price: "KSH 80,000",
    accent: "secondary",
    highlighted: true,
    features: [
      "Full-day event coverage",
      "Highlight reel + 2 short-form clips",
      "25 edited photos",
      "Behind-the-scenes content",
      "Delivery within 5 business days",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Elite",
    tagline: "Evergreen content engine",
    price: "KSH 150,000",
    accent: "secondary",
    features: [
      "Multi-day or multi-camera coverage",
      "Full highlight reel + 5 social clips",
      "50+ edited photos",
      "Speaker/interview segments",
      "Content calendar for 30 days post-event",
      "Priority delivery & unlimited revisions",
    ],
  },
];

const EventsIntoAssets = () => (
  <main className="min-h-screen">
    <section className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-sm bg-secondary/10 flex items-center justify-center">
              <Camera className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">Content Creation</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            Turn Events into <span className="italic text-secondary">Assets</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            Transform your live moments — conferences, product launches, team events — into evergreen marketing content that keeps generating returns long after the event is over.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection service="Turn Events into Assets" tiers={tiers} />
  </main>
);

export default EventsIntoAssets;
