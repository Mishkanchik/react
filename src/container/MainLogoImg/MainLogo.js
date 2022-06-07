import React from "react";
import "container/MainLogoImg/MainLogo.scss";
import { Container } from "@mui/material";

export const MainLogoImg = () => {
  return (
    <>
      <main className="main-logo-img">
        <Container maxWidth="lg">
          <div className="logo-img-text">
            <h2> We take care of mental & physical health </h2>
          </div>
          <div className="logo-img-button">
            <button>Watch the presentation </button>
          </div>
          <div className="logo-img-contacts">
            <div className="view-more-details">View more details</div>
            <div className="Contact-us">Contact us</div>
          </div>
        </Container>
      </main>
    </>
  );
};
