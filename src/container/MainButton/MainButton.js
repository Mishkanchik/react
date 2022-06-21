import React from "react";
import { Button } from "@mui/material";

import "container/MainButton/MainButton.scss";

export const MainButton = () => {
  return (
    <>
      <main className="contact-and-ask-about-more-details-content">
        <div className="contact-and-ask-about-more-details-content-logo">
          Contact and ask about more details
        </div>
        <div className="contact-and-ask-about-more-details-content-button">
          <Button variant="contained" color="success" size="large">
            Contact with us
          </Button>
        </div>
      </main>
    </>
  );
};
