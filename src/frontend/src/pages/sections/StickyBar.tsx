import { buildWhatsAppOrderUrl, openWhatsApp } from "@/lib/whatsapp";
import { useProductStore } from "@/store/product";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export default function StickyBar() {
  const { selectedFlavor, quantity, salePrice } = useProductStore();

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

  const handleWhatsApp = () => {
    toast.success("Redirecting to WhatsApp...", { duration: 1500 });
    setTimeout(handleBuyNow, 500);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3"
      data-ocid="sticky_bar.section"
    >
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-smooth"
          data-ocid="sticky_bar.buy_now_button"
        >
          <ShoppingCart className="w-4 h-4" />
          Buy Now
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 glass-card py-3.5 rounded-full font-bold text-sm text-foreground hover:opacity-80 transition-smooth"
          data-ocid="sticky_bar.whatsapp_button"
        >
          <MessageCircle className="w-4 h-4 text-primary" />
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
