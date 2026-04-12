import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft } from "lucide-react";
import solutionImg from "@/assets/solution-events.png";

const tiers = [
  {
    name: "Core",
    tagline: "Workshops, half-day seminars, or small networking mixers",
    price: "KES 35,000",
    accent: "secondary",
    features: [
      "1 Videographer | Up to 4 hours of coverage",
      "1 x Cinematic Highlight Reel (60–90s): High-energy, music-driven summary of the event",
      '3 x "Key Moment" Vertical Clips: Short 15–30s clips (TikTok/Reels style) of a speaker\'s best quote or a crowd reaction',
    ],
  },
  {
    name: "Pro",
    tagline: "Full-day conferences, product launches, or AGMs",
    price: "KES 80,000",
    accent: "secondary",
    highlighted: true,
    features: [
      "2 Videographers (stage + vibe/crowd) | Full-day coverage",
      "1 x Corporate Wrap Video (3 mins): Includes soundbites from speakers and high-quality b-roll",
      '5 x Interview/Vox-Pop Videos: Quick "talking head" interviews with attendees or VIPs',
      "10 x Social Media clips: Short vertical clips optimized for mobile",
    ],
  },
  {
    name: "Elite",
    tagline: "Multi-day summits, international expos, or high-stakes brand launches",
    price: "KES 200,000",
    accent: "secondary",
    features: [
      "3-Person Crew (Lead, B-Roll Specialist, Sound/Lighting Tech) + Drone | Multi-day/Full-day coverage",
      "1 x Executive Summary Film (5–7 mins): Documentary-style film of the event's impact",
      '"Same-Day Edit" (SDE): 60s teaser delivered during the event for the closing ceremony',
      "Raw Footage Delivery: Organized library of all speeches for internal records",
      'Unlimited Social Clips: Every major "aha!" moment turned into a Reel',
    ],
  },
];

const EventsIntoAssets = () => (
  <main className="min-h-screen">
    <section className="relative py-32 md:py-44 px-6">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-accent/10 to-background" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm tracking-wide hover:text-secondary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-sm overflow-hidden">
              <img src={solutionImg} alt="Terumah Sherehe" loading="lazy" width={64} height={64} className="w-full h-full object-cover" />
            </div>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold">Terumah Sherehe</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-8">
            Turn Events into <span className="italic text-secondary">Assets</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl">
            The Terumah Sherehe provides the professional-grade video coverage needed to turn one-time gatherings into permanent tools for business growth and industry dominance.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <PricingSection service="Terumah Sherehe" tiers={tiers} />
  </main>
);

export default EventsIntoAssets;
