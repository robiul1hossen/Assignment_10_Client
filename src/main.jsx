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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Error from "./components/Error";
import Terms from "./components/Terms/Terms";

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
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  ,
  {
    path: "/recipe",
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://foodify-robiul1hossen.vercel.app/recipe/${params.id}`),
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
