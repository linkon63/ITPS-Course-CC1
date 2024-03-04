import Login from "../client/auth/login/Login";
import Signup from "../client/auth/registration/Signup";
import Cart from "../client/cart/Cart";
import Home from "../client/home/Home";
import Order from "../client/order/Order";
import Payment from "../client/payment/Payment";
import Product from "../client/product/Product";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/orders",
    element: <Order />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
