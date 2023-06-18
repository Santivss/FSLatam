import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./routes/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <h1>Hubo un error</h1>,
  },
  {
    path: "/*",
    element: <Loading />,
    errorElement: <h1>Hubo un error</h1>,
  },
]);

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
