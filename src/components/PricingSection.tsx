import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import LeadCaptureDialog from "@/components/LeadCaptureDialog";

export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  accent: string;
}

interface PricingSectionProps {
  service: string;
  tiers: PricingTier[];
}

const PricingSection = ({ service, tiers }: PricingSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");

  const openDialog = (tierName: string) => {
    setSelectedTier(tierName);
    setDialogOpen(true);
  };

  return (
    <>
      <section className="py-24 md:py-32 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-body font-semibold mb-6 text-center">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light leading-[1.15] mb-16 text-center max-w-2xl mx-auto">
              Choose the tier that fits{" "}
              <span className="italic text-secondary">your ambition</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className={`relative flex flex-col h-full border bg-card p-8 md:p-10 transition-colors duration-500 ${
                    tier.highlighted
                      ? "border-secondary shadow-[0_0_40px_-12px_hsl(var(--secondary)/0.25)]"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-secondary text-secondary-foreground font-body text-[10px] tracking-[0.2em] uppercase font-semibold px-4 py-1">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-medium mb-1">{tier.name}</h3>
                    <p className="text-muted-foreground font-body text-sm">{tier.tagline}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl md:text-5xl font-heading font-light">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground font-body text-sm ml-1">/{tier.period}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-10 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-body text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.highlighted ? "premium" : "outline-dark"}
                    size="lg"
                    className="w-full py-5"
                    onClick={() => openDialog(tier.name)}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        service={service}
        tier={selectedTier}
      />
    </>
  );
};

export default PricingSection;
