import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import React from "react";
import Models from "../Pages/Models";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/models",
        element: <Models />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

export default router;
