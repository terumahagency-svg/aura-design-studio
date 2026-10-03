import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BrandHeaderProps {
  overlay?: boolean;
}

const BrandHeader = ({ overlay = false }: BrandHeaderProps) => (
  <header
    className={`z-40 w-full border-b ${
      overlay
        ? "absolute inset-x-0 top-0 border-primary-foreground/20 bg-foreground/20 text-primary-foreground backdrop-blur-md"
        : "relative border-border bg-background/95 text-foreground backdrop-blur-md"
    }`}
  >
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
      <Link to="/" aria-label="Terumah Agency home" className="shrink-0">
        <span className="flex items-center gap-3">
          <img src="/favicon.png" alt="" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          <span className="hidden sm:block">
            <span className="block font-heading text-xl font-semibold leading-none">TERUMAH</span>
            <span className="mt-1 block font-body text-[9px] font-bold uppercase text-light-blue">Agency</span>
          </span>
        </span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        <Link className="brand-nav-link" to="/#about-terumah">About</Link>
        <Link className="brand-nav-link" to="/#section-3">Solutions</Link>
        <Link className="brand-nav-link" to="/#contact">Contact</Link>
      </nav>
      <Button variant="premium" size="sm" asChild>
        <Link to="/#contact">Let&apos;s talk</Link>
      </Button>
    </div>
  </header>
);

export default BrandHeader;