import React from "react";
import { Header } from "container/Header/Header";
import "container/Header/reset.css";
import { MainLogoImg } from "container/MainLogoImg/MainLogo";
import { MainOurNaturals } from "container/MainSeeOurNatural/MainSeeOurNaturals";
import { WeTakeCont } from "container/MainWeTake/MainWeTake";
import { LetsMeet } from "container/MainLetsMeet/MainLetsMeet";
import Swiper from "container/Slider/Slider";
import { MainButton } from "container/MainButton/MainButton";
import { FooterContent } from "container/FooterContact/FooterContent";
import { Footer } from "container/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <MainLogoImg />
      <MainOurNaturals />
      <WeTakeCont />
      <LetsMeet />
      <Swiper />
      <MainButton />
      <FooterContent />
      <Footer />
    </>
  );
};

export default App;
