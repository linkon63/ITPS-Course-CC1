import { useContext } from "react";
import { StateContext } from "../../../../App";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function SelectedProductsSection() {
  const [stateData, setStateData] = useContext(StateContext);
  console.log("state data from cart", stateData);
  return (
    <div>
      <div className="pt-2">
        <div className="flex items-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your cart products{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              are available !
            </span>
          </h1>
          {stateData.products && stateData.products.length > 0 ? (
            <Link
              to="/payment"
              type="button"
              className="ms-5 animate-pulse inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Order Now
              <span className="inline-flex items-center justify-center w-4  ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                !
              </span>
            </Link>
          ) : (
            <span></span>
          )}
        </div>

        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-4 lg:grid-rows-2 pt-2">
          {stateData.products && stateData.products.length > 0 ? (
            <>
              {stateData.products.map((product) => (
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
    </div>
  );
}
