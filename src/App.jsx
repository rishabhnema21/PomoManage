// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import PomoTimer from "./PomoTimer";

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
  return <RouterProvider router={router} />;
};

export default App;
