import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import ProductsSection from "./components/ProductsSection";


export default function Product() {
  return (
    <div className="w-12/12">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-10/12">
          <div className="mb-2">
            <ProductsSection />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
