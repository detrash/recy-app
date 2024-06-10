import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/pages/app";
import Dashboard from "@/pages/dashboard";
import { Toaster } from "@/components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
