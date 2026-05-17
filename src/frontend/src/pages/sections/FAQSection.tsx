import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "We deliver across India in 2–5 business days. Metro cities (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune) typically receive orders within 2 days.",
  },
  {
    q: "How should I use Muscle Fuel Whey Protein?",
    a: "Mix 1 scoop (30g) with 200–250ml of cold water or milk. Best consumed within 30 minutes post-workout. Can also be taken in the morning as a breakfast protein boost. Do not exceed 2 servings per day.",
  },
  {
    q: "Is there a refund or return policy?",
    a: "We offer a 7-day return policy for damaged or incorrect products. If you receive a product that is damaged in transit or different from what you ordered, contact us on WhatsApp within 7 days with photos and we'll resolve it immediately.",
  },
  {
    q: "Is this product suitable for beginners?",
    a: "Absolutely. Muscle Fuel Whey Protein is formulated for all fitness levels. Beginners benefit from the clean protein source to support early muscle development, while advanced athletes appreciate the optimized amino acid profile.",
  },
  {
    q: "What makes Muscle Fuel different from other brands?",
    a: "Zero fillers, no artificial colors, and a transparent label. We don't hide behind proprietary blends — every ingredient and its quantity is listed. Our manufacturing facility is GMP-certified and third-party tested.",
  },
  {
    q: "How do I place an order?",
    a: "Simply click any 'Buy Now' or 'Order via WhatsApp' button on this page. You'll be redirected to WhatsApp with a pre-filled message including your order details. Our team responds within minutes during business hours (9am–9pm IST).",
  },
];

function FAQItem({ faq, index }: { faq: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="glass-card overflow-hidden"
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent/20 transition-smooth"
        data-ocid={`faq.toggle.${index + 1}`}
      >
        <span className="font-display font-semibold pr-4">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-smooth ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted/30" data-ocid="faq.section">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-black">
            Frequently <span className="gradient-text">Asked</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Got questions? We've got answers.
          </p>
        </motion.div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
