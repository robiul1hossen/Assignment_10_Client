import React from "react";
import HeaderMenu from "../../Header/Navbar/HeaderMenu";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Main = () => {
  return (
    <div>
      <HeaderMenu></HeaderMenu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
