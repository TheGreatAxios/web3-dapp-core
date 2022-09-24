import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import LandingPage from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  }
]);


const Router = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;

