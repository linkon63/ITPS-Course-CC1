import Home from "./components/Home/Home";
import "./App.css";
import { createContext, useState } from "react";
export const ProductArray = createContext();
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <ProductArray.Provider value={[selectedProduct, setSelectedProduct]}>
      <Home />;
    </ProductArray.Provider>
  );
}
