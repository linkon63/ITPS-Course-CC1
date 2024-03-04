import Footer from "../../shared/footer/Footer";
import HeroSection from "./components/hero_section/HeroSection";
import Navbar from "../../shared/navbar/Navbar";
import ProductsSection from "./components/products/ProductsSection";
import SocialProof from "./components/social_proof/SocialProof";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="w-12/12">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-10/12">
          <HeroSection />
          <ProductsSection />
          <Testimonials />
          <SocialProof />
          <Footer />
        </div>
      </div>
    </div>
  );
}
