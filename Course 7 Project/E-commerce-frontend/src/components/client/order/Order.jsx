import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import OrderProducts from "./components/OrderProducts";

export default function Order() {
  return (
    <div className="w-12/12">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-10/12">
          <OrderProducts />
          <Footer />
        </div>
      </div>
    </div>
  );
}
