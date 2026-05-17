import { Layout } from "@/components/Layout";
import BenefitsSection from "@/pages/sections/BenefitsSection";
import FAQSection from "@/pages/sections/FAQSection";
import HeroSection from "@/pages/sections/HeroSection";
import PricingSection from "@/pages/sections/PricingSection";
import ProductSection from "@/pages/sections/ProductSection";
import ReviewsSection from "@/pages/sections/ReviewsSection";
import StickyBar from "@/pages/sections/StickyBar";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ProductSection />
      <PricingSection />
      <BenefitsSection />
      <ReviewsSection />
      <FAQSection />
      <StickyBar />
    </Layout>
  );
}
