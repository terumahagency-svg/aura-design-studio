import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppFABProps {
  targetSectionId: string;
  phoneNumber?: string;
  message?: string;
}

const WhatsAppFAB = ({
  targetSectionId,
  phoneNumber = "254723579077",
  message = "Hi, I'd like to learn more about Terumah Agency!",
}: WhatsAppFABProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById(targetSectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [targetSectionId]);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-deep-blue px-5 py-3.5 font-body text-sm font-semibold text-deep-blue-foreground shadow-xl transition-colors hover:bg-light-blue md:bottom-8 md:right-8"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Chat with us</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFAB;
