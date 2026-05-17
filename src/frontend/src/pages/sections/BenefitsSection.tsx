import { Activity, Leaf, Shield, Target, Trophy, Zap } from "lucide-react";
import { motion } from "motion/react";

const BENEFITS = [
  {
    icon: Zap,
    title: "Rapid Absorption",
    desc: "Fast-digesting whey formula delivers protein to muscles within 30 minutes of consumption.",
  },
  {
    icon: Shield,
    title: "Immune Support",
    desc: "Rich in immunoglobulins and lactoferrin that naturally boost your immune system.",
  },
  {
    icon: Trophy,
    title: "Peak Performance",
    desc: "Optimized amino acid profile supports maximum strength output and endurance.",
  },
  {
    icon: Leaf,
    title: "Clean Formula",
    desc: "Zero artificial fillers, zero added sugar. Only what your body actually needs.",
  },
  {
    icon: Activity,
    title: "Lean Muscle",
    desc: "Precision protein blend supports lean mass gains without excess calories.",
  },
  {
    icon: Target,
    title: "Body Composition",
    desc: "Helps reduce body fat while preserving hard-earned muscle during cutting phases.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-20 bg-muted/30"
      data-ocid="benefits.section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-black">
            Why <span className="gradient-text">Muscle Fuel</span>?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Six scientifically-backed reasons athletes across India trust Muscle
            Fuel daily.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-primary/40 transition-smooth"
              data-ocid={`benefits.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto glass-card p-8"
          id="ingredients"
          data-ocid="benefits.ingredients_card"
        >
          <h3 className="text-2xl font-display font-black mb-6 gradient-text">
            Ingredients & Usage
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Key Ingredients
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Whey Protein Concentrate (80%)",
                  "Whey Protein Isolate",
                  "Digestive Enzyme Blend",
                  "Natural Flavoring",
                  "Sucralose (trace)",
                  "Soy Lecithin (emulsifier)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                How to Use
              </h4>
              <ol className="space-y-2 text-sm">
                {[
                  "Mix 1 scoop (30g) with 200–250ml cold water or milk",
                  "Consume within 30 min post-workout",
                  "Can also be taken as a morning protein boost",
                  "Up to 2 servings per day maximum",
                ].map((step, idx) => (
                  <li key={step} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">
                      {idx + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
