import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layouts/Main/Main";
import Banner from "./components/Header/Banner/Banner";
import Recipes from "./components/Recipes/Recipes";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import RecipeLayout from "./components/layouts/RecipeLayout/RecipeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/recipe",
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: "/recipe/:id",
        element: <Recipes></Recipes>,
        loader: ({ params }) => fetch(`http://localhost:5000/recipe/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
