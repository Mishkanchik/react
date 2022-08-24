import React from "react";
import "./LogoSpecialist.scss";
import { Container } from "@mui/system";

export const LogoSpecialist = () => {
  return (
    <div className="bg-Specialist">
      <main className="specialist-logo-img">
        <Container maxWidth="lg">
          <div className="logo-img-text">
            <h2>Our specialists</h2>
          </div>
        </Container>
      </main>
    </div>
  );
};
