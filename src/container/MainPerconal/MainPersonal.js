import React from "react";

import { LetsMeetComponent } from "components/MainLetsMeetComponent/MainLetsMeetComponent";
import Swiper from "components/SliderComponent/Slider";
import { Route, Routes } from "react-router-dom";

export const MainPersonal = () => {
  return (
    <>
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
