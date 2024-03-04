import React, { useContext } from "react";
import { StateContext } from "../../../../App";

export default function PaymentSection() {
  const [stateData, setStateData] = useContext(StateContext);

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

                      {/* <button
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
            </button> */}
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
                                id="apple-imac-27-dropdown-button"
                                data-dropdown-toggle="apple-imac-27-dropdown"
                                className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                type="button"
                              >
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewbox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                              </button>
                              <div
                                id="apple-imac-27-dropdown"
                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                              >
                                <ul
                                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="apple-imac-27-dropdown-button"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Show
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                                <div className="py-1">
                                  <a
                                    href="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
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
      <div className="col"></div>
    </div>
  );
}
