import React from "react";
import { WeTakeContComponent } from "components/MainWeTakeComponent/MainWeTakeComponent";
import { LetsMeetComponent } from "components/MainLetsMeetComponent/MainLetsMeetComponent";
import Swiper from "components/SliderComponent/Slider";
import { Route, Routes } from "react-router-dom";
import { Specialist } from "pages/Specialists/Specialists";
import { LogoSpecialist } from "pages/LogoSpecialist/LogoSpecialist";

export const MainPersonal = () => {
  return (
    <>
      <Routes>
        <Route path="/specialists" element={<LogoSpecialist />} />
      </Routes>
      <Routes>
        <Route path="/specialists" element={<Specialist />} />
      </Routes>

      <Routes>
        <Route path="/" element={<WeTakeContComponent />} />
      </Routes>

      <Routes>
        <Route path="/specialists" element={<LetsMeetComponent />} />
        <Route path="/" element={<LetsMeetComponent />} />
      </Routes>

      <Routes>
        <Route path="/specialists" element={<Swiper />} />
        <Route path="/" element={<Swiper />} />
      </Routes>
    </>
  );
};
