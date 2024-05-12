import React, { useEffect, useState } from "react";

export default function AllOrdersIndex() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch(
      `https://cc-ecom-backend-1.vercel.app/admin/orders`
    );
    const orderResponseData = await response.json();
    console.log("orderResponseData", orderResponseData);
    if (orderResponseData.orders.length > 0) {
      setOrders([...orderResponseData.orders]);
    }
    console.log("state products", orders);
  }

  const OrderConfirmed = async (order) => {
    console.log("Order confirmed", order);
    console.log("Order confirmed _id", order._id);
    const updatedOrder = {
      ...order,
      shipment: "Your order has been confirmed",
    };
    console.log("updatedOrder", updatedOrder);
    await postData(
      "https://cc-ecom-backend-1.vercel.app/admin/order/confirm",
      updatedOrder
    ).then((response) => {
      //   console.log("response", response);
      if (response.code == 200) {
        console.log("Response Data : ", response);
        getProducts();
      } else {
        alert("You are not able to change the order request");
      }
    });
  };

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div>
      {orders.length > 0 &&
        orders.map((order) => (
          <div key={order} className="border-2 border-green-300 m-2 p-2">
            <p className="">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {order.orderId}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {order.email}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {order.address ? order.address : "No Address"}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button className="text-white bg-blue-600 dark:text-white hover:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    View Products
                  </button>
                  ${Math.round(order.payment)}
                  <p>
                    {order?.shipment ? (
                      <p className="bg-green-500 text-white px-2 mx-2 rounded-lg">
                        Order Completed
                      </p>
                    ) : (
                      <p className="bg-red-500 text-white px-2 mx-2 rounded-lg">
                        Shipment
                      </p>
                    )}
                  </p>
                  {!order?.shipment && (
                    <>
                      <button
                        className="bg-green-500 rounded-xl p-2 text-white mx-2"
                        onClick={() => OrderConfirmed(order)}
                      >
                        {" "}
                        Order Confirmed
                      </button>
                      <button className="bg-red-500 rounded-xl p-2 text-white mx-2">
                        {" "}
                        Order Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </p>
          </div>
        ))}
    </div>
  );
}
