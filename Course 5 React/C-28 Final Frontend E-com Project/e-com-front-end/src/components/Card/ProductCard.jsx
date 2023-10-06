import { useContext } from "react";
import { ProductArray } from "../../App";
export default function ProductCard({ product }) {
  const [selectedProduct, setSelectedProduct] = useContext(ProductArray);
  const addToCart = (product) => {
    console.log("addTocard", product);
    setSelectedProduct([...selectedProduct, product]);
    console.log("selectedProduct", selectedProduct);
  };
  return (
    <div className="p-3">
      <li className="flex flex-col py-6 sm:flex-row sm:justify-between border border-1 border-gray-400 rounded p-2">
        <div className="flex w-full space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
            src={product?.ImageSrc}
            alt="Polaroid camera"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leadi sm:pr-8">
                  {product?.Name}
                </h3>
                <p className="text-sm dark:text-gray-400">Classic</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{product?.Price}.99€</p>
                <p className="text-sm line-through dark:text-gray-600">
                  75.50€
                </p>
              </div>
            </div>
            <div className="flex text-sm divide-x">
              <button
                type="button"
                className="flex items-center px-2 py-1 space-x-1 hover:bg-gray-700 hover:text-white hover:rounded"
                onClick={() => addToCart(product)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
