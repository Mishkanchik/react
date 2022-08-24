import React from "react";
import "components/MainLogoImgComponent/MainLogoImgComponent.scss";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/specialists" className="view-more-details">
              View more details
            </NavLink>
            <NavLink to="/contact" className="Contact-us">
              Contact us
            </NavLink>
          </div>
        </Container>
      </main>
    </>
  );
};
