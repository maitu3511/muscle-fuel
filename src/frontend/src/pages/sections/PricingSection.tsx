import { buildWhatsAppOrderUrl, openWhatsApp } from "@/lib/whatsapp";
import { useProductStore } from "@/store/product";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

export default function PricingSection() {
  const { selectedFlavor, quantity, mrpPrice, salePrice, discountPercent } =
    useProductStore();

  const [target] = useState(() => new Date(Date.now() + 18 * 3600 * 1000));
  const { hours, minutes, seconds } = useCountdown(target);

  const pad = (n: number) => String(n).padStart(2, "0");

  const handleBuyNow = () => {
    openWhatsApp(
      buildWhatsAppOrderUrl({
        productName: "Muscle Fuel Whey Protein",
        flavor: selectedFlavor,
        quantity,
        price: `₹${salePrice * quantity}`,
      }),
    );
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-background relative overflow-hidden"
      data-ocid="pricing.section"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, oklch(0.55 0.25 45), transparent 50%)",
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-semibold text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            FLASH SALE — LIMITED TIME
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
            <span className="gradient-text">Unbeatable</span> Price
          </h2>

          <div className="glass-card p-8 mt-8 space-y-6">
            <div className="flex items-end justify-center gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground line-through">
                  MRP ₹{mrpPrice.toLocaleString("en-IN")}
                </p>
                <p className="text-6xl font-display font-black text-primary">
                  ₹{salePrice.toLocaleString("en-IN")}
                </p>
                <p className="text-sm text-muted-foreground">
                  per kg | incl. of all taxes
                </p>
              </div>
              <div className="glass-card bg-primary/10 border-primary/30 px-4 py-2 text-center mb-4">
                <p className="text-3xl font-black text-primary">
                  {discountPercent}%
                </p>
                <p className="text-xs text-muted-foreground">OFF</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Offer ends in:
              </p>
              <div
                className="flex justify-center gap-4"
                data-ocid="pricing.countdown"
              >
                {[
                  { v: pad(hours), l: "Hours" },
                  { v: pad(minutes), l: "Min" },
                  { v: pad(seconds), l: "Sec" },
                ].map((unit) => (
                  <div
                    key={unit.l}
                    className="glass-card px-4 py-3 text-center min-w-[64px]"
                  >
                    <p className="text-2xl font-display font-black text-primary">
                      {unit.v}
                    </p>
                    <p className="text-xs text-muted-foreground">{unit.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-bold text-lg hover:opacity-90 hover:scale-[1.02] transition-smooth"
                data-ocid="pricing.buy_now_button"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy Now — ₹{(salePrice * quantity).toLocaleString("en-IN")}
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                aria-label="Order via WhatsApp"
                className="flex items-center gap-2 glass-card px-6 py-4 rounded-full font-bold hover:opacity-80 transition-smooth"
                data-ocid="pricing.whatsapp_button"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
