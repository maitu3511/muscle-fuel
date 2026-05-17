import { Star } from "lucide-react";
import { motion } from "motion/react";

const REVIEWS = [
  {
    name: "Rajan M.",
    role: "Powerlifter, Mumbai",
    rating: 5,
    text: "Been using Muscle Fuel for 6 months straight. The chocolate flavor is absolutely premium — no chalky aftertaste. I gained 4kg lean mass in my last bulk cycle.",
    initials: "RM",
  },
  {
    name: "Aaditya S.",
    role: "Bodybuilder, Pune",
    rating: 5,
    text: "The quality is unmatched for this price point. Mixes perfectly, digests cleanly, and my recovery time dropped noticeably within 3 weeks of switching to Muscle Fuel.",
    initials: "AS",
  },
  {
    name: "Gonia P.",
    role: "CrossFit Athlete, Delhi",
    rating: 5,
    text: "Finally a brand that doesn't cut corners. 25g protein per scoop is real — I've tested it. The Cookies & Cream flavor tastes like dessert. 10/10 recommend.",
    initials: "GP",
  },
  {
    name: "Vikram T.",
    role: "Fitness Coach, Bangalore",
    rating: 5,
    text: "I recommend Muscle Fuel to all my clients. Excellent amino acid profile, clean ingredients, and the WhatsApp ordering is super convenient. Delivery in 2 days!",
    initials: "VT",
  },
  {
    name: "Priya N.",
    role: "Marathon Runner, Chennai",
    rating: 5,
    text: "Vanilla flavor is my go-to. Light on the stomach, absorbs fast, and the 1kg lasts a full month with daily use. Best protein I've tried in 5 years of training.",
    initials: "PN",
  },
  {
    name: "Karan D.",
    role: "HIIT Trainer, Hyderabad",
    rating: 5,
    text: "My gym members kept asking what supplement I was on. Told them all about Muscle Fuel. Three of them already ordered. Results speak for themselves.",
    initials: "KD",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static list
        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 bg-background"
      data-ocid="reviews.section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-semibold text-primary mb-4">
            ★ TRUSTED BY 10,000+ ATHLETES
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black">
            Real Results, <span className="gradient-text">Real People</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 space-y-4"
              data-ocid={`reviews.item.${i + 1}`}
            >
              <StarRating rating={r.rating} />
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
