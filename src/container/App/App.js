import React from "react";
import { Header } from "container/Header/Header";
import "container/Header/reset.css";
import { MainLogoImg } from "container/MainLogoImg/MainLogo";
import { MainOurNaturals } from "container/MainSeeOurNatural/MainSeeOurNaturals";

import { LetsMeet } from "container/MainLetsMeet/MainLetsMeet";

import { Footer } from "container/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      <MainOurNaturals />

      <LetsMeet />

      <Footer />
    </>
  );
};

export default App;
