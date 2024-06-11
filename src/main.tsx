import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "@/pages/signin";
import Dashboard from "@/pages/dashboard";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./components/providers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <Dashboard />,
  },
  {
    path: "/submit",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <Toaster />
    </Providers>
  </React.StrictMode>
);
