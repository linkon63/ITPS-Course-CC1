import { products } from "../../data/Data";
import ProductCard from "../Card/ProductCard";

export default function Products() {
  const allProduct = products;

  return (
    <div className="h-4/6 w-full">
      <div className="grid grid-cols-4 gap-1">
        {allProduct.length > 0 ? (
          allProduct.map((prd, i) => (
            <div key={prd.ID}>
              <ProductCard key={i} product={prd} />
            </div>
          ))
        ) : (
          <p>No Products</p>
        )}
      </div>
    </div>
  );
}
