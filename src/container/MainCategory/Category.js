import React from "react";
import { MainOurNaturalsComponent } from "components/MainSeeOurNaturalComponent/MainSeeOurNaturalsComponent";
import { WeTakeContComponent } from "components/MainWeTakeComponent/MainWeTakeComponent";
import { Route, Routes } from "react-router-dom";
import { Categorys } from "pages/Categorys/Categorys";
import { CategoryMassagesSpa } from "pages/CategoryMassagesSpa/CategoryMassagesSpa";
import { CategoryMeditation } from "pages/CategoryMeditation/CategoryMeditation";
import { CategoryNaturalDiet } from "pages/CategoryNaturalDiet/CategoryNaturalDiet";
import { CategoryComplexTests } from "pages/CategoryComplexTests/CategoryComplexTests";
import { CategoryCleanEnviroment } from "pages/CategoryCleanEnviroment/CategoryCleanEnviroment";

export const Category = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainOurNaturalsComponent />} />\
        <Route path="/category" element={<Categorys />} />
      </Routes>
      <Routes>
        <Route
          path="/category/Messages-spa"
          element={<CategoryMassagesSpa />}
        />
      </Routes>
      <Routes>
        <Route
          path="/category/Natural-diet"
          element={<CategoryNaturalDiet />}
        />
      </Routes>
      <Routes>
        <Route
          path="/category/Clean-enviroment"
          element={<CategoryCleanEnviroment />}
        />
      </Routes>
      <Routes>
        <Route
          path="/category/Complex-tests"
          element={<CategoryComplexTests />}
        />
      </Routes>
      <Routes>
        <Route path="/category/Meditation" element={<CategoryMeditation />} />
      </Routes>
      <Routes>
        <Route path="/" element={<WeTakeContComponent />} />
      </Routes>
    </>
  );
};
