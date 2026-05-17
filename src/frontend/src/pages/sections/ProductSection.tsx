import { buildWhatsAppOrderUrl, openWhatsApp } from "@/lib/whatsapp";
import { FLAVORS, type Flavor, useProductStore } from "@/store/product";
import { Check, Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const SPECS = [
  { label: "Product Name", value: "Muscle Fuel Whey Protein" },
  { label: "Protein per Serving", value: "25g" },
  { label: "Net Weight", value: "1kg (33 servings)" },
  { label: "Concentration", value: "80% Protein Concentrate" },
  { label: "Formula", value: "Grass-fed Whey Protein Blend" },
];

export default function ProductSection() {
  const {
    selectedFlavor,
    quantity,
    salePrice,
    setFlavor,
    incrementQuantity,
    decrementQuantity,
  } = useProductStore();
  const [flavorOpen, setFlavorOpen] = useState(false);

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
      description: `${selectedFlavor} × ${quantity} — Ready to checkout`,
      action: { label: "Checkout via WhatsApp", onClick: handleBuyNow },
    });
  };

  return (
    <section id="buy" className="py-20 bg-muted/30" data-ocid="product.section">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-black text-center mb-12"
        >
          Product <span className="gradient-text">Details</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Flavor Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 space-y-4"
          >
            <h3 className="text-lg font-display font-bold text-muted-foreground uppercase tracking-wider">
              Flavor
            </h3>
            <div className="relative">
              <button
                type="button"
                onClick={() => setFlavorOpen(!flavorOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary rounded-lg border border-border hover:border-primary transition-smooth"
                data-ocid="product.flavor_select"
              >
                <span className="font-semibold">{selectedFlavor}</span>
                <span
                  className={`transition-smooth ${flavorOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
              {flavorOpen && (
                <div
                  className="absolute top-full mt-1 w-full bg-popover border border-border rounded-lg shadow-xl z-20 overflow-hidden"
                  data-ocid="product.flavor_dropdown"
                >
                  {FLAVORS.map((flavor) => (
                    <button
                      key={flavor}
                      type="button"
                      onClick={() => {
                        setFlavor(flavor as Flavor);
                        setFlavorOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-accent text-left transition-smooth"
                      data-ocid={`product.flavor_option.${flavor.toLowerCase().replace(/ & /g, "-")}`}
                    >
                      <span>{flavor}</span>
                      {selectedFlavor === flavor && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="pt-2">
              <h3 className="text-lg font-display font-bold text-muted-foreground uppercase tracking-wider mb-3">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={decrementQuantity}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                  data-ocid="product.quantity_decrement"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span
                  className="text-2xl font-display font-black w-8 text-center"
                  data-ocid="product.quantity_display"
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={incrementQuantity}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                  data-ocid="product.quantity_increment"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-full font-bold hover:opacity-90 transition-smooth"
                data-ocid="product.buy_now_button"
              >
                Buy Now
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-full font-bold hover:bg-accent transition-smooth border border-border"
                data-ocid="product.add_to_cart_button"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 space-y-1"
          >
            <h3 className="text-lg font-display font-bold text-muted-foreground uppercase tracking-wider mb-4">
              Product Specifications
            </h3>
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between py-2.5 border-b border-border last:border-0"
              >
                <span className="text-muted-foreground text-sm">
                  {spec.label}
                </span>
                <span className="font-semibold text-sm text-right max-w-[55%]">
                  {spec.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
