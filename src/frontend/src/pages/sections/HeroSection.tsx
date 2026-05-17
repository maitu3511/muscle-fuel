import { buildWhatsAppOrderUrl, openWhatsApp } from "@/lib/whatsapp";
import { useProductStore } from "@/store/product";
import { ChevronDown, MessageCircle, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function HeroSection() {
  const { selectedFlavor, quantity, salePrice } = useProductStore();

  const handleBuyNow = () => {
    const url = buildWhatsAppOrderUrl({
      productName: "Muscle Fuel Whey Protein",
      flavor: selectedFlavor,
      quantity,
      price: `₹${salePrice * quantity}`,
    });
    openWhatsApp(url);
  };

  const handleAddToCart = () => {
    toast.success("Product added successfully!", {
      description: `${selectedFlavor} × ${quantity} added to cart`,
      action: {
        label: "Checkout via WhatsApp",
        onClick: handleBuyNow,
      },
    });
  };

  const scrollToProduct = () => {
    document.querySelector("#buy")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      data-ocid="hero.section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.55 0.25 45 / 0.08) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-semibold text-primary"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              LIMITED TIME OFFER — 20% OFF
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight"
            >
              MUSCLE FUEL{" "}
              <span className="gradient-text block">WHEY PROTEIN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-md"
            >
              Premium non-isolate single-whey protein. 25g of pure protein per
              serving. Built for champions who refuse to settle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={handleBuyNow}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:opacity-90 hover:scale-105 transition-smooth shadow-lg"
                data-ocid="hero.buy_now_button"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center gap-2 glass-card px-8 py-4 rounded-full text-base font-bold text-foreground hover:opacity-80 transition-smooth"
                data-ocid="hero.add_to_cart_button"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                WhatsApp Order
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 pt-2"
            >
              {[
                { val: "25g", label: "Protein/Serving" },
                { val: "5g", label: "BCAA" },
                { val: "0g", label: "Added Sugar" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-black text-primary">
                    {stat.val}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 blur-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.55 0.25 45), transparent 70%)",
                }}
              />
              <img
                src="/assets/generated/muscle-fuel-hero.dim_800x900.png"
                alt="Muscle Fuel Whey Protein"
                className="relative z-10 w-72 md:w-96 lg:w-[420px] object-contain drop-shadow-2xl"
              />
              {/* Offer Badge */}
              <div className="absolute top-4 right-0 glass-card bg-primary/10 border-primary/40 px-5 py-3 text-center">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  Limited Offer
                </p>
                <p className="text-2xl font-display font-black text-primary">
                  20% OFF
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          type="button"
          onClick={scrollToProduct}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-smooth"
          aria-label="Scroll down"
          data-ocid="hero.scroll_button"
        >
          <span className="text-xs">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
