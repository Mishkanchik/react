import React from "react";
import { Header } from "container/Header/Header";
import "components/HeaderComponent/reset.css";
import { Category } from "container/MainCategory/Category";
import { MainPersonal } from "container/MainPerconal/MainPersonal";
import { Footer } from "container/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Category />
      <MainPersonal />
      <Footer />
    </>
  );
};

export default App;
