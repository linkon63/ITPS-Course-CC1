import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";

export default function Order() {
  return (
    <div className="w-12/12">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-10/12">
          <h1>Orders section</h1>
          <Footer />
        </div>
      </div>
    </div>
  );
}
