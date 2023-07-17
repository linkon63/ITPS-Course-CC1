import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Allrouter } from "./components/routes/Allrouter";
function App() {
  const router = createBrowserRouter(Allrouter);
  return <RouterProvider router={router} />;
}

export default App;
