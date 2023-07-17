import AllBlog from "../allBlog/AllBlog";
import Login from "../auth/login/Login";
import Home from "../home/Home";
import SingleBlog from "../singleBlog/SingleBlog";

export const Allrouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <AllBlog />,
  },
  {
    path: "/blogs/:id",
    element: <SingleBlog />,
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
];
