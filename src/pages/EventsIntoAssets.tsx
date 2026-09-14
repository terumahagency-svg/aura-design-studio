import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PricingSection from "@/components/PricingSection";
import { ArrowLeft } from "lucide-react";
import solutionImg from "@/assets/solution-events.png";

const corporateTiers = [
  {
    name: "Corporate Core",
    tagline: "Workshops, half-day seminars, or small networking mixers",
    price: "KSh 42,000",
    accent: "secondary",
    features: [
      "1 Videographer | Up to 4 hours of coverage",
      "1 x Cinematic Highlight Reel (60–90s): high-energy, music-driven summary of the event",
      '3 x "Key Moment" Vertical Clips: 15–30s TikTok/Reels-style clips of a speaker\'s best quote or a crowd reaction',
      "3 Key Moment clips delivered within 24 hours",
      "Value: instant social proof for WhatsApp Status and LinkedIn",
    ],
  },
  {
    name: "Corporate Pro",
    tagline: "Full-day conferences, product launches, or AGMs",
    price: "KSh 96,000",
    accent: "secondary",
    highlighted: true,
    features: [
      "2 Videographers (stage + vibe/crowd) | Full-day coverage",
      "1 x Corporate Wrap Video (3 mins): soundbites from speakers and high-quality b-roll",
      "5 x Interview/Vox-Pop Videos with attendees or VIPs",
      '10 x Social Media "Snacks": short vertical clips optimized for mobile',
      "Value: legacy content — testimonials for your next event and a portfolio piece for your website",
    ],
  },
  {
    name: "Corporate Elite",
    tagline: "Multi-day summits, international expos, or high-stakes brand launches",
    price: "KSh 240,000",
    accent: "secondary",
    features: [
      "3-Person Crew (Lead, B-Roll Specialist, Lighting Tech) + Licensed Drone Pilot | Up to 2 days' coverage",
      "1 x Executive Summary Film (5–7 mins): documentary-style film of the event's impact",
      '"Same-Day Edit" (SDE): 60s teaser delivered during the event for the closing ceremony',
      "Raw Footage Delivery: organized library of all speeches handed over on a physical 1TB SSD",
      'Unlimited Social Clips: every major "aha!" moment turned into a Reel',
    ],
  },
];

const milestoneTiers = [
  {
    name: "Milestone Core",
    tagline: "Bridal showers, baby showers, intimate birthdays, graduation dinners, proposals",
    price: "KSh 28,000",
    accent: "secondary",
    features: [
      "1 Videographer | Up to 3 hours of coverage (strictly personal events — no corporate branding)",
      "1 x Aesthetic Highlight Reel (60–90s)",
      "3 x Vertical Reels (15s) pre-edited for Instagram, TikTok and WhatsApp Status",
      "Mini documentary of the event (8–15 mins) as a keepsake",
      "20 colour-graded stills from the event",
    ],
  },
  {
    name: "Milestone Elite",
    tagline: "Intimate weddings, Ruracios, corporate award galas, anniversary dinners",
    price: "KSh 85,000",
    accent: "secondary",
    highlighted: true,
    features: [
      "2 Videographers | Full-day coverage (up to 10 hours)",
      "1 x Cinematic Trailer (3–5 mins): the emotional core of the event, highly stylized",
      "1 x Full Documentary Cut (40–60 mins): complete ceremony, speeches or awards in sequence",
      "1 x 60s Teaser delivered within 48 hours for immediate social sharing",
      "Value: complete emotional legacy preservation — no vow, speech or milestone missed",
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

    <PricingSection
      service="Terumah Sherehe"
      tiers={corporateTiers}
      eyebrow="Corporate Packages"
      heading={
        <>
          Coverage that works for <span className="italic text-secondary">your business</span>
        </>
      }
      description="Conferences, launches, AGMs and summits — captured as assets you can market with long after the day ends."
    />

    <PricingSection
      service="Terumah Sherehe"
      tiers={milestoneTiers}
      muted={false}
      eyebrow="Private & Milestone Packages"
      heading={
        <>
          Moments kept as a <span className="italic text-secondary">legacy</span>
        </>
      }
      description="Reserved for personal celebrations, focusing on cinematic pacing and emotional storytelling rather than corporate branding."
    />
  </main>
);

export default EventsIntoAssets;
