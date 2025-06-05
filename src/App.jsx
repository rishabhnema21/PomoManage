// App.jsx
import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import PomoTimer from "./PomoTimer";
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pomoTimer",
    element: <PomoTimer />,
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },1500)

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <RouterProvider router={router} />;
};

export default App;
