import React from "react";

import { FooterComponent } from "components/FooterComponent/FooterComponent";
import { FooterComponentContent } from "components/FooterComponentContent/FooterComponentContent";
import { MainButtonComponent } from "components/MainButtonComponent/MainButtonComponent";
import { Route, Routes } from "react-router-dom";
import { LogoContact } from "pages/LogoContact/LogoContact";

export const Footer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainButtonComponent />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<LogoContact />} />
      </Routes>

      <Routes>
        <Route path="/*" element={<h1>ERORR 404</h1>} />
      </Routes>
      <FooterComponentContent />

      <FooterComponent />
    </>
  );
};
