import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BrandHeader from "@/components/BrandHeader";

interface ServiceHeroProps {
  brand: string;
  title: React.ReactNode;
  description: string;
  image: string;
}

const ServiceHero = ({ brand, title, description, image }: ServiceHeroProps) => (
  <>
    <BrandHeader />
    <section className="relative isolate overflow-hidden border-b border-border bg-deep-blue text-deep-blue-foreground">
      <div className="absolute inset-0 opacity-35">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/95 to-deep-blue/50" />
      <img
        src="/favicon.png"
        alt=""
        className="absolute -bottom-40 right-0 h-[34rem] w-[34rem] object-contain opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <Link to="/" className="mb-14 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase text-deep-blue-foreground/70 transition-colors hover:text-secondary">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <AnimatedSection className="max-w-4xl">
          <p className="brand-eyebrow text-secondary">{brand}</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-heading font-semibold leading-[0.98] md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <div className="mt-8 h-px w-24 bg-secondary" />
          <p className="mt-8 max-w-2xl font-body text-base leading-8 text-deep-blue-foreground/75 md:text-lg">
            {description}
          </p>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ServiceHero;