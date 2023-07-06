import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { allRouters } from "./component/router/allroute";

function App() {
  const router = createBrowserRouter(allRouters);
  return <RouterProvider router={router} />;
}

export default App;
