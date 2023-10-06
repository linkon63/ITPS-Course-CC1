import AllBlog from "../allBlog/AllBlog";
import Login from "../auth/login/Login";
import PrivateRoute from "../auth/private/PrivateRoute";
import Registration from "../auth/registration/Registration";
import Home from "../home/Home";
import SingleBlog from "../singleBlog/SingleBlog";

export const Allrouter = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/blogs",
    element: (
      <PrivateRoute>
        <AllBlog />
      </PrivateRoute>
    ),
  },
  {
    path: "/blogs/:id",
    element: (
      <PrivateRoute>
        {" "}
        <SingleBlog />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: <div>Hello about!</div>,
  },
  {
    path: "/contact",
    element: <div>Hello contact!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
];
