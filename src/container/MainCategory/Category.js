import React from "react";
import { MainOurNaturalsComponent } from "components/MainSeeOurNaturalComponent/MainSeeOurNaturalsComponent";

import { Route, Routes } from "react-router-dom";
import { Categorys } from "pages/Categorys/Categorys";
import { CategoryMassagesSpa } from "pages/CategoryMassagesSpa/CategoryMassagesSpa";
import { CategoryMeditation } from "pages/CategoryMeditation/CategoryMeditation";
import { CategoryNaturalDiet } from "pages/CategoryNaturalDiet/CategoryNaturalDiet";
import { CategoryComplexTests } from "pages/CategoryComplexTests/CategoryComplexTests";
import { CategoryCleanEnviroment } from "pages/CategoryCleanEnviroment/CategoryCleanEnviroment";
import { OneCategorys } from "pages/OneCategorys/OneCategorys";

export const Category = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainOurNaturalsComponent />} />
        <Route path="/category" element={<Categorys />} />
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
      </Routes>
      <Routes>
        <Route path=":category/:id" element={<OneCategorys />} />
      </Routes>
    </>
  );
};
