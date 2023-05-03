import React from "react";
import HeaderMenu from "../../Header/Navbar/HeaderMenu";
import { Outlet } from "react-router-dom";

const RecipeLayout = () => {
  return (
    <div>
      <HeaderMenu></HeaderMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default RecipeLayout;
