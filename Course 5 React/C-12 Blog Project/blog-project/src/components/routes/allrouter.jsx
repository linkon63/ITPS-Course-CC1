import AllBlog from "../AllBlog/AllBlog";
import Home from "../Home/Home";
import SingleBlog from "../SingleBlog/SingleBlog";

export const allrouter = [
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
];
