import React from "react";
import Navbar from "../Header/Navbar/HeaderMenu";
import HeaderMenu from "../Header/Navbar/HeaderMenu";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <HeaderMenu></HeaderMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
