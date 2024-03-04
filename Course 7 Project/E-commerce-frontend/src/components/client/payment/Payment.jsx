import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import PaymentSection from "./components/PaymentSection";

export default function Payment() {
  return (
    <div className="w-12/12">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-10/12">
          <div className="mb-2">
            <PaymentSection />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
