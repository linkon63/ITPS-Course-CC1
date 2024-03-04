import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import SelectedProductsSection from "./components/SelectedProductsSection";

export default function Cart() {
  return (
    <div className="w-12/12">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-10/12">
          <div className="mb-2">
            <SelectedProductsSection />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
