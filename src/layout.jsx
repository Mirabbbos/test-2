import React from "react";

import Header from "./components/header";
import { Outlet } from "react-router-dom";

import "./App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./components/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
      
    </>
  );
}
