import PricingSection from "@/components/PricingSection";
import ServiceHero from "@/components/ServiceHero";
import solutionImg from "@/assets/solution-social.png";

const shootingTiers = [
  {
    name: "Shooting Core",
    tagline: "8 raw video files from one half-day shoot",
    price: "KSh 20,000",
    accent: "light-blue",
    features: [
      "8 Raw Video Files",
      "1 virtual strategy & scripting session to align on shot lists",
      "1 half-day shoot (up to 4 hours) on location in Nairobi",
      "Professional 4K capture with standard lighting and wireless audio",
      "Same-day raw file transfer via hard drive or cloud",
    ],
  },
  {
    name: "Shooting Pro",
    tagline: "Best value — 12 raw files with hook writing",
    price: "KSh 35,000",
    accent: "light-blue",
    highlighted: true,
    features: [
      "12 Raw Video Files",
      "1 strategy session + dedicated hook writing for maximum retention",
      "1 half-day shoot (up to 4 hours) using efficient batch recording",
      "Advanced multi-point lighting and premium audio capture",
      "Premium capture in C-Log3 for dynamic range",
      "Handoff of all raw video and isolated audio stems",
    ],
  },
  {
    name: "Shooting Elite",
    tagline: "20 raw files across two full shoot days",
    price: "KSh 50,000",
    accent: "light-blue",
    features: [
      "20 Raw Video Files",
      "Full creative direction and scriptwriting",
      "2 full-day shoots (multiple locations and outfit changes)",
      "Cinema-grade stabilization (3-axis gimbal) for dynamic movement",
      "Dedicated time for capturing a generic B-roll library",
      "Next-morning organized cloud delivery of all assets",
    ],
  },
];

const contentTiers = [
  {
    name: "Content Core",
    tagline: "8 fully edited videos (~KSh 5,625 per video)",
    price: "KSh 45,000",
    accent: "light-blue",
    features: [
      "8 Fully Edited Videos",
      "Scripting and trend research for short-form platforms (TikTok, Reels)",
      "Standard post-production: pacing, trimming and basic captions",
      "Standard colour correction and audio mixing",
      "Google Drive delivery, ready to publish",
    ],
  },
  {
    name: "Content Pro",
    tagline: "Best value — 12 fully edited videos (~KSh 6,250 per video)",
    price: "KSh 75,000",
    accent: "light-blue",
    highlighted: true,
    features: [
      "12 Fully Edited Videos",
      "Advanced scripting with dedicated A/B hook variations",
      "1 half-day shoot with professional lighting and wireless audio",
      "Cinematic colour grading",
      "Advanced post-production",
      "1 round of client revisions",
    ],
  },
  {
    name: "Content Elite",
    tagline: "20 fully edited videos (~KSh 5,500 per video)",
    price: "KSh 110,000",
    accent: "light-blue",
    features: [
      "20 Fully Edited Videos",
      "Deep-dive monthly content calendar and full scriptwriting",
      "Premium editing: retention visual effects, sound design and custom brand graphics",
      "Custom thumbnail designs for relevant platforms",
      "Split delivery: Batch 1 (mid-month), Batch 2 (end-of-month)",
    ],
  },
];

const completeTiers = [
  {
    name: "Complete Core",
    tagline: "8 videos + organic management + 1 ad campaign",
    price: "KSh 95,000",
    accent: "light-blue",
    features: [
      "Includes the Core Content tier (8 edited videos)",
      "Scheduling and posting across 2 platforms (e.g. Meta and TikTok)",
      "Setup and management of 1 traffic or engagement ad campaign (Meta or Google Ads)",
      "Basic end-of-month performance report",
      "Excludes client ad spend",
    ],
  },
  {
    name: "Complete Pro",
    tagline: "Best value — 12 videos + cross-platform ads + basic automation",
    price: "KSh 160,000",
    accent: "light-blue",
    highlighted: true,
    features: [
      "Includes the Pro Content tier (12 premium edited videos)",
      "Optimized scheduling across Meta, TikTok and YouTube Shorts",
      "Management of 2 targeted ad campaigns",
      "Lead automation: turns engagement into captured leads",
      "Bi-weekly check-ins and performance reporting",
      "Excludes client ad spend",
    ],
  },
  {
    name: "Complete Elite",
    tagline: "20 videos + omnichannel ads + full CRM pipeline",
    price: "KSh 260,000",
    accent: "light-blue",
    features: [
      "Includes the Elite Content tier (20 premium videos)",
      "Full community management (active response to comments and DMs)",
      "Multi-platform ad scaling across Meta, TikTok and Google Ads",
      "Advanced CRM pipeline setup (click-to-lead flow directly into CRM)",
      "Comprehensive analytics dashboard and weekly strategy calls",
      "Excludes client ad spend",
    ],
  },
];

const SocialMediaSalesFlow = () => (
  <main className="min-h-screen">
    <ServiceHero
      brand="The Terumah Social Flow"
      title={<>Content built to <span className="italic text-secondary">move people.</span></>}
      description="Support your sales department with high-quality leads through professional scripting and targeted social media campaigns—whether you need the shoot, finished content or the complete revenue system."
      image={solutionImg}
    />

    <PricingSection
      service="The Terumah Social Flow"
      tiers={shootingTiers}
      eyebrow="1. Social Flow Shooting"
      heading={
        <>
          Pristine footage, <span className="italic text-secondary">your editors</span>
        </>
      }
      description="For businesses and agencies with in-house editors who need high-quality scripts and raw footage without investing in production equipment. Pre-production planning + on-set recording."
    />

    <PricingSection
      service="The Terumah Social Flow"
      tiers={contentTiers}
      muted={false}
      eyebrow="2. Social Flow Content"
      heading={
        <>
          Ready-to-publish <span className="italic text-secondary">content</span>
        </>
      }
      description="For businesses with in-house social media managers who need high-retention videos without handling filming or editing. Pre-production planning + on-set recording + finished edits."
    />

    <PricingSection
      service="The Terumah Social Flow"
      tiers={completeTiers}
      eyebrow="3. Social Flow Complete"
      heading={
        <>
          The full <span className="italic text-secondary">revenue system</span>
        </>
      }
      description="For businesses that want direct revenue from social media without juggling contractors for production, management and paid ads. All tiers exclude client ad spend."
    />
  </main>
);

export default SocialMediaSalesFlow;
