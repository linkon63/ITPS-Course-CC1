import React, { useEffect, useState } from "react";

export default function OrderProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch(
      `https://cc-ecom-backend-1.vercel.app/orders/${sessionStorage.getItem(
        "email"
      )}`
    );
    const productResponseData = await response.json();
    console.log("productResponseData", productResponseData);
    if (productResponseData.orders.length > 0) {
      setProducts([...productResponseData.orders]);
    }
    console.log("state products", products);
  }

  return (
    <div>
      <h1>Order products will show here !!</h1>
      {products &&
        products.map((product) => (
          <div key={product}>
            <p className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {product.orderId}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {product.email}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {product.address ? product.address : "No Address"}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button className="text-white bg-blue-600 dark:text-white hover:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    View Products
                  </button>
                  ${Math.round(product.payment)}
                  <p>
                    {product?.shipment ? (
                      <p className="bg-green-500 text-white px-2 mx-2 rounded-lg">
                        Order Completed
                      </p>
                    ) : (
                      <p className="bg-red-500 text-white px-2 mx-2 rounded-lg">
                        Shipment
                      </p>
                    )}
                  </p>
                </div>
              </div>
            </p>
          </div>
        ))}
    </div>
  );
}
