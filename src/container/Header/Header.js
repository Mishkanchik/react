import React from "react";
import { HeaderComponent } from "components/HeaderComponent/HeaderComponent";
import { MainLogoImgComponent } from "components/MainLogoImgComponent/MainLogoImgComponent";
import { Routes, Route } from "react-router-dom";
import { WeTakeContComponent } from "components/MainWeTakeComponent/MainWeTakeComponent";
import { LetsMeetComponent } from "components/MainLetsMeetComponent/MainLetsMeetComponent";

export const Header = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainLogoImgComponent />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<MainLogoImgComponent />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<LetsMeetComponent />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<WeTakeContComponent />} />
      </Routes>
    </>
  );
};
