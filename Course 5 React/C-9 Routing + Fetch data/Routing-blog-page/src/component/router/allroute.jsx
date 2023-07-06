import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import SingleBlog from "../Blogs/SingleBlog";

export const allRouters = [
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
    element: <Blogs />,
  },
  {
    path: "/blogs/:id",
    element: <SingleBlog />,
  },
];
