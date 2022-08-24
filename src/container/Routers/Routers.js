import React from "react";
import { HeaderComponent } from "components/HeaderComponent/HeaderComponent";
import { MainLogoImgComponent } from "components/MainLogoImgComponent/MainLogoImgComponent";
import { Routes, Route } from "react-router-dom";
import { LogoCategorys } from "pages/LogoCategorys/LogoCategorys";
import { WeTakeContComponent } from "components/MainWeTakeComponent/MainWeTakeComponent";
import { LetsMeetComponent } from "components/MainLetsMeetComponent/MainLetsMeetComponent";
import Swiper from "components/SliderComponent/Slider";

import { Specialist } from "pages/Specialists/Specialists";
import { LogoSpecialist } from "pages/LogoSpecialist/LogoSpecialist";
import { MainOurNaturalsComponent } from "components/MainSeeOurNaturalComponent/MainSeeOurNaturalsComponent";

import { Categorys } from "pages/Categorys/Categorys";
import { CategoryMassagesSpa } from "pages/CategoryMassagesSpa/CategoryMassagesSpa";
import { CategoryMeditation } from "pages/CategoryMeditation/CategoryMeditation";
import { CategoryNaturalDiet } from "pages/CategoryNaturalDiet/CategoryNaturalDiet";
import { CategoryComplexTests } from "pages/CategoryComplexTests/CategoryComplexTests";
import { CategoryCleanEnviroment } from "pages/CategoryCleanEnviroment/CategoryCleanEnviroment";
import { OneCategorys } from "pages/OneCategorys/OneCategorys";
import { FooterComponent } from "components/FooterComponent/FooterComponent";
import { FooterComponentContent } from "components/FooterComponentContent/FooterComponentContent";
import { MainButtonComponent } from "components/MainButtonComponent/MainButtonComponent";

import { LogoContact } from "pages/LogoContact/LogoContact";
import "container/Routers/erorr.scss";
export const RoutersComponents = () => {
  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<MainLogoImgComponent />} />
      </Routes>

      <Routes>
        <Route path="/" element={<MainOurNaturalsComponent />} />
      </Routes>
      <Routes>
        <Route path="/" element={<WeTakeContComponent />} />
      </Routes>
      <Routes>
        <Route path="/" element={<LetsMeetComponent />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Swiper />} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainButtonComponent />} />
      </Routes>
      <Routes>
        <Route path="/category" element={<LogoCategorys />} />
      </Routes>
      <Routes>
        <Route path="/category" element={<Categorys />} />
      </Routes>
      <Routes>
        <Route
          path="/category/Messages-spa"
          element={<CategoryMassagesSpa />}
        />
        <Route
          path="/category/Natural-diet"
          element={<CategoryNaturalDiet />}
        />
        <Route
          path="/category/Clean-enviroment"
          element={<CategoryCleanEnviroment />}
        />
        <Route
          path="/category/Complex-tests"
          element={<CategoryComplexTests />}
        />
        <Route path="/category/Meditation" element={<CategoryMeditation />} />

        <Route path=":category/:id" element={<OneCategorys />} />
      </Routes>
      <Routes>
        <Route path="/specialists" element={<LogoSpecialist />} />
      </Routes>
      <Routes>
        <Route path="/specialists" element={<Specialist />} />
      </Routes>
      <Routes>
        <Route path="/specialists" element={<LetsMeetComponent />} />
      </Routes>
      <Routes>
        <Route path="/specialists" element={<Swiper />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<LogoContact />} />
      </Routes>

      <FooterComponentContent />

      <FooterComponent />
    </>
  );
};
