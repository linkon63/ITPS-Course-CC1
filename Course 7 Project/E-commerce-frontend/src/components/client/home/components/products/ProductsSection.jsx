import Card from "./components/Card";
import { products } from "./data/data";

export default function ProductsSection() {
  //   console.log("Product Section data 🚨🚨 ", products);
  return (
    <div className="pt-2">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Our recent products{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          are available !
        </span>
      </h1>

      <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-4 lg:grid-rows-2 pt-2">
        {products && products.length > 0 ? (
          <>
            {products.map((product) => (
              <span key={product}>
                <Card product={product} />
              </span>
            ))}
          </>
        ) : (
          <div>
            <h1>There is no products available !</h1>
          </div>
        )}
      </div>
    </div>
  );
}
