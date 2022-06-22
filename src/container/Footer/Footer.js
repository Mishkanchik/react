import React from "react";

import { FooterComponent } from "components/FooterComponent/FooterComponent";
import { FooterComponentContent } from "components/FooterComponentContent/FooterComponentContent";
import { MainButtonComponent } from "components/MainButtonComponent/MainButtonComponent";
import { Route, Routes } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainButtonComponent />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<FooterComponentContent />} />
      </Routes>

      <FooterComponent />
    </>
  );
};
