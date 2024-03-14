import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./components/routes/routes";
import { createContext, useEffect, useState } from "react";
export const StateContext = createContext({});

function App() {
  const router = createBrowserRouter([...routes]);
  const [stateData, setStateData] = useState({});
  useEffect(() => {
    console.log("Running when reload the page");
    const cartData = sessionStorage.getItem("cartProducts");
    if (cartData) {
      const cartDataObj = JSON.parse(cartData);
      setStateData({ ...stateData, products: [...cartDataObj] });
    }
  }, []);
  return (
    <StateContext.Provider value={[stateData, setStateData]}>
      <RouterProvider router={router} />
    </StateContext.Provider>
  );
}

export default App;
