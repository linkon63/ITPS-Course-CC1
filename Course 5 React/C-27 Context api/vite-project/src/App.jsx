import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCom from "./MainCom";
import { createContext, useState } from "react";
export const GlobalObj = createContext();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainCom />,
    },
    {
      path: "/comp1",
      element: <Comp1 />,
    },
    {
      path: "/comp2",
      element: <Comp2 />,
    },
  ]);
  const [obj, setObj] = useState({
    name: "Main Component",
    age: 0,
  });
  return <GlobalObj.Provider value={[obj,setObj]}>
    <RouterProvider router={router} />
  </GlobalObj.Provider> ;
}

export default App;
