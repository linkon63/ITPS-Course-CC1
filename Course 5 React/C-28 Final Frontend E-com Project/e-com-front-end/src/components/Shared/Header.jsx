import { useContext, useEffect, useState } from "react";
import { ProductArray } from "../../App";
export default function Header() {
  // state
  const [selectedProduct, setSelectedProduct] = useContext(ProductArray);
  const [visibleModal, setVisibleModal] = useState(false);

  const [amount, setAmount] = useState({
    amount: 0,
    discount: 0,
    totalAmount: 0,
  });

  // useeffect
  useEffect(() => {
    let amount = 0;
    let discountAmount = 0;
    let totalAmount = 0;
    if (selectedProduct && selectedProduct.length > 0) {
      for (let i = 0; i < selectedProduct.length; i++) {
        const singleProduct = selectedProduct[i];
        amount += singleProduct.Price;
        if (singleProduct.discount) {
          discountAmount += singleProduct.discount;
        }
      }
    }
    totalAmount = amount - discountAmount;
    setAmount({
      amount: amount,
      discount: discountAmount,
      totalAmount: totalAmount,
    });
  }, [selectedProduct]);

  // normal function
  const removeFromCart = (id, index) => {
    const filterItem = [];
    for (let i = 0; i < selectedProduct.length; i++) {
      const prd = selectedProduct[i];
      if (prd.ID == id && i == index) {
        continue;
      } else {
        filterItem.push(prd);
      }
    }
    setSelectedProduct(filterItem);
  };

  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
          </svg>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              &#128092;{" "}
              {selectedProduct.length > 0 ? selectedProduct.length : 0}
            </a>
          </li>
          <li className="flex" onClick={() => setVisibleModal(!visibleModal)}>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              View
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Modal Open */}
      {visibleModal && (
        <div className="modalClass">
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">
              Your selected products cart
            </h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              {selectedProduct.length > 0 ? (
                selectedProduct.map((prd, index) => (
                  <div key={prd.ID}>
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                      <div className="flex w-full space-x-2 sm:space-x-4">
                        <img
                          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                          src={prd?.ImageSrc}
                          alt="Polaroid camera"
                        />
                        <div className="flex flex-col justify-between w-full pb-4">
                          <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                              <h3 className="text-lg font-semibold leadi sm:pr-8">
                                {prd?.Name}
                              </h3>
                              <p className="text-sm dark:text-gray-400">
                                Classic
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold">
                                {" "}
                                {prd?.Price}
                                .99€
                              </p>
                              <p className="text-sm line-through dark:text-gray-600">
                                {prd?.discount ? (
                                  <span>{prd?.discount}.99€</span>
                                ) : (
                                  <span></span>
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex text-sm divide-x">
                            <button
                              type="button"
                              className="flex items-center px-2 py-1 pl-0 space-x-1"
                              onClick={() => removeFromCart(prd.ID, index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-4 h-4 fill-current"
                              >
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect
                                  width="32"
                                  height="200"
                                  x="168"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="240"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="312"
                                  y="216"
                                ></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                              </svg>
                              <span>Remove</span>
                            </button>
                            <button
                              type="button"
                              className="flex items-center px-2 py-1 space-x-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-4 h-4 fill-current"
                              >
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                              </svg>
                              <span>Add to favorites</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                ))
              ) : (
                <p>No Products</p>
              )}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Amount :
                <span className="font-semibold"> {amount.amount} €</span>
              </p>
              <p>
                Discount :
                <span className="font-semibold">{amount.discount} €</span>
              </p>
              <p>
                Total amount:
                <span className="font-semibold">{amount.totalAmount} €</span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 border rounded-md dark:border-violet-400"
                onClick={() => setVisibleModal(false)}
              >
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </button>
              <button
                type="button"
                className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
              >
                <span className="sr-only sm:not-sr-only">Continue to</span>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
