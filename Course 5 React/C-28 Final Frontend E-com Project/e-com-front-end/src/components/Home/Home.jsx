import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";
import Products from "./Products";

export default function Home() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full h-6/6">
        <Header />
        <Products />
        <Footer />
      </div>
    </div>
  );
}
