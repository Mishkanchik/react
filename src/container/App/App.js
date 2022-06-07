import React from "react";
import { Header } from "container/Header/Header";
import "container/Header/reset.css";
import { MainLogoImg } from "container/MainLogoImg/MainLogo";
import { MainOurNaturals } from "container/MainSeeOurNatural/MainSeeOurNaturals";

const App = () => {
  return (
    <>
      <Header />
      <MainLogoImg />
      <MainOurNaturals />
    </>
  );
};

export default App;
