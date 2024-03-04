import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./components/routes/routes";
import { createContext, useState } from "react";
export const StateContext = createContext({});

function App() {
  const router = createBrowserRouter([...routes]);
  const [stateData, setStateData] = useState({});
  return (
    <StateContext.Provider value={[stateData, setStateData]}>
      <RouterProvider router={router} />
    </StateContext.Provider>
  );
}

export default App;
