import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: string;
  tier: string;
}

const LeadCaptureDialog = ({ open, onOpenChange, service, tier }: LeadCaptureDialogProps) => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    business: "",
    successVision: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.successVision.trim()) {
      toast({ title: "Please fill in the required fields", variant: "destructive" });
      return;
    }

    setSending(true);
    const { error } = await supabase.from("lead_submissions").insert({
      full_name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      business_name: formData.business.trim() || null,
      success_vision: formData.successVision.trim(),
      service,
      tier,
    });
    setSending(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      return;
    }

    toast({
      title: "We've got your details!",
      description: "Our team will reach out to you within 24 hours.",
    });
    setFormData({ fullName: "", phone: "", email: "", business: "", successVision: "" });
    onOpenChange(false);
  };

  const inputClasses =
    "bg-transparent border-border font-body text-sm placeholder:text-muted-foreground/50 focus:border-secondary focus:ring-secondary/20 transition-colors duration-300";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-light">
            Get Started — <span className="italic text-secondary">{tier}</span>
          </DialogTitle>
          <DialogDescription className="font-body text-sm text-muted-foreground">
            {service} • {tier} Tier
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-muted-foreground font-body text-xs tracking-[0.15em] uppercase mb-1.5">
                Full Name <span className="text-secondary">*</span>
              </label>
              <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" maxLength={100} className={inputClasses} />
            </div>
            <div>
              <label className="block text-muted-foreground font-body text-xs tracking-[0.15em] uppercase mb-1.5">
                Phone Number
              </label>
              <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" maxLength={20} className={inputClasses} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-muted-foreground font-body text-xs tracking-[0.15em] uppercase mb-1.5">
                Email <span className="text-secondary">*</span>
              </label>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" maxLength={255} className={inputClasses} />
            </div>
            <div>
              <label className="block text-muted-foreground font-body text-xs tracking-[0.15em] uppercase mb-1.5">
                Business Name
              </label>
              <Input name="business" value={formData.business} onChange={handleChange} placeholder="Your Company Ltd." maxLength={100} className={inputClasses} />
            </div>
          </div>

          <div>
            <label className="block text-muted-foreground font-body text-xs tracking-[0.15em] uppercase mb-1.5">
              What would success look like? <span className="text-secondary">*</span>
            </label>
            <Textarea
              name="successVision"
              value={formData.successVision}
              onChange={handleChange}
              placeholder="Describe your ideal outcome…"
              maxLength={1000}
              rows={3}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <Button type="submit" variant="premium" size="lg" className="w-full py-5" disabled={sending}>
            <Send className="w-4 h-4 mr-2" />
            {sending ? "Sending…" : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
