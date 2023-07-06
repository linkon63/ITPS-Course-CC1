import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { allrouter } from "./components/routes/allrouter";
function App() {
  const router = createBrowserRouter(allrouter);
  return <RouterProvider router={router} />;
}

export default App;
