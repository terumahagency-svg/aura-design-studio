import PricingSection from "@/components/PricingSection";
import ServiceHero from "@/components/ServiceHero";
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
    <ServiceHero
      brand="Terumah Sherehe"
      title={<>Turn events into <span className="italic text-secondary">lasting assets.</span></>}
      description="Professional-grade coverage that transforms one-time gatherings into permanent tools for growth, connection and industry authority."
      image={solutionImg}
    />

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
