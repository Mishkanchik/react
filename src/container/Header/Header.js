import React from "react";
import { HeaderComponent } from "components/HeaderComponent/HeaderComponent";
import { MainLogoImgComponent } from "components/MainLogoImgComponent/MainLogoImgComponent";
import { Routes, Route } from "react-router-dom";
import { LogoCategorys } from "pages/LogoCategorys/LogoCategorys";

export const Header = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainLogoImgComponent />} />
      </Routes>
      <Routes>
        <Route path="/category" element={<LogoCategorys />} />
      </Routes>
    </>
  );
};
