import React from "react";
import "components/MainLogoImgComponent/MainLogoImgComponent.scss";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

export const MainLogoImgComponent = () => {
  return (
    <>
      <main className="main-logo-img">
        <Container maxWidth="lg">
          <div className="logo-img-text">
            <h2> We take care of mental & physical health </h2>
          </div>
          <div className="logo-img-button">
            <Button variant="contained" color="success" size="medium">
              Watch the presentation
            </Button>
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
