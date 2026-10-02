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

export interface PricingAddon {
  id: string;
  label: string;
  description: string;
}

interface PricingSectionProps {
  service: string;
  tiers: PricingTier[];
  addons?: PricingAddon[];
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  muted?: boolean;
}

const PricingSection = ({
  service,
  tiers,
  addons,
  eyebrow = "Pricing",
  heading,
  description,
  muted = true,
}: PricingSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");

  const openDialog = (tierName: string) => {
    setSelectedTier(tierName);
    setDialogOpen(true);
  };

  return (
    <>
      <section className={`px-6 py-24 md:py-32 ${muted ? "bg-muted" : "bg-background"}`}>
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <p className="brand-eyebrow mb-5 text-center text-secondary">
              {eyebrow}
            </p>
            <h2 className="mx-auto mb-6 max-w-3xl text-center text-4xl font-heading font-semibold leading-[1.05] md:text-6xl">
              {heading ?? (
                <>
                  Choose the tier that fits{" "}
                  <span className="italic text-secondary">your ambition</span>
                </>
              )}
            </h2>
            {description && (
              <p className="mx-auto mb-16 max-w-2xl text-center font-body text-base leading-7 text-muted-foreground">
                {description}
              </p>
            )}
            {!description && <div className="mb-14" />}
          </AnimatedSection>

          <div
            className={`grid gap-px overflow-hidden border border-border bg-border ${
              tiers.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-3"
            }`}
          >
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className={`relative flex h-full flex-col bg-card p-8 transition-colors duration-500 md:p-10 ${
                    tier.highlighted
                      ? "bg-deep-blue text-deep-blue-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-secondary px-4 py-1 font-body text-[10px] font-semibold uppercase text-secondary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="mb-2 text-2xl font-heading font-semibold">{tier.name}</h3>
                    <p className={`font-body text-sm leading-6 ${tier.highlighted ? "text-deep-blue-foreground/70" : "text-muted-foreground"}`}>{tier.tagline}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-heading font-semibold md:text-5xl">{tier.price}</span>
                    {tier.period && (
                      <span className={`ml-1 font-body text-sm ${tier.highlighted ? "text-deep-blue-foreground/65" : "text-muted-foreground"}`}>/{tier.period}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-10 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span className={`font-body text-sm leading-relaxed ${tier.highlighted ? "text-deep-blue-foreground/75" : "text-muted-foreground"}`}>{feature}</span>
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
        addons={addons}
      />
    </>
  );
};

export default PricingSection;
