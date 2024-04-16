import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../../App";
import { useForm } from "react-hook-form";
import StripePayment from "./StripePayment";

export default function PaymentSection() {
  const [stateData, setStateData] = useContext(StateContext);
  const [userInfo, setUserInfo] = useState({ address: "" });
  const [totalPrice, setTotalPrice] = useState(1);
  useEffect(() => {
    try {
      const sessionCartData = JSON.parse(
        sessionStorage.getItem("cartProducts")
      );
      if (sessionCartData) {
        let totalPrice = 0;
        for (let i = 0; i < sessionCartData.length; i++) {
          const element = sessionCartData[i];
          console.log("ABC", element);
          totalPrice += Number(element.price);
        }
        console.log("totalPrice", totalPrice);
        setTotalPrice(totalPrice);
        setUserInfo({ ...userInfo, totalPrice: totalPrice });
      }
    } catch (error) {
      console.log("error form payment section", error);
    }
  }, []);
  const removeToCart = (product) => {
    const email = sessionStorage.getItem("email");
    if (email) {
      // console.log("Future product will add in cart :", product);
      if (stateData.products) {
        console.log("there is product");
        const allProduct = [...stateData.products];
        const filterProducts = allProduct.filter(
          (fnProduct) => fnProduct._id !== product._id
        );
        console.log("filter products", filterProducts);
        setStateData({ ...stateData, products: [...filterProducts] });
      } else {
        console.log("there is no product");
        setStateData({ products: [product] });
      }
    } else {
      alert("Please Login first to cart this product !!");
    }
    console.log("product remove from cart", stateData);
  };
  const submitOrder = () => {
    console.log("Submit Order info:", userInfo);
  };
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="col">
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      {/* image_url :
                      "https://i.pinimg.com/originals/05/8e/4c/058e4c75d1d0782894790a5759e18535.jpg"
                      name : "Classic Leather Handbag" price : 79.99 rating :
                      4.5 */}
                      <th scope="col" className="px-4 py-3">
                        SN
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Product Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Rating
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stateData.products && stateData.products.length > 0 ? (
                      <>
                        {stateData.products.map((product, index) => (
                          <tr
                            key={product}
                            className="border-b dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {index + 1}
                            </th>
                            <td className="px-4 py-3"> {product?.name}</td>
                            <td className="px-4 py-3">{product?.price}</td>
                            <td className="px-4 py-3">{product?.rating}</td>
                            <td className="px-4 py-3">
                              <img
                                src={product?.image_url}
                                alt=""
                                className="w-4/12"
                              />
                            </td>
                            <td className="px-4 py-3 flex items-center justify-end">
                              <button
                                onClick={() => removeToCart(product)}
                                className="flex items-center text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                <svg
                                  className="w-6 text-white dark:text-white "
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 18 6m0 12L6 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <div className="text-red-800 p-4">
                        There is no product please add !
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col">
        <div className="p-4">
          <h1>Delivery Address</h1>
          <form className="space-y-4 md:space-y-6">
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Total Products Price
            </label>
            <input
              type="text"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={Number(totalPrice || 0.00)}
              readOnly
            />
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Your Address
            </label>
            <input
              type="text"
              name="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Uttara Dhaka"
              value={userInfo.address ? userInfo.address : ""}
              onChange={(e) =>
                setUserInfo({ ...userInfo, address: e.target.value })
              }
            />
          </form>

          {/* stripe payment section start */}
          <StripePayment money={totalPrice} userInfo={userInfo} />
          {/* stripe payment section end */}


          {/* <button
            onClick={() => submitOrder()}
            className="bg-blue-500 p-2 m-2 rounded-xl text-white font-semibold px-4"
          >
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
}
