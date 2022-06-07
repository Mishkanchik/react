import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { MainSeeOurNatural } from "container/MainSeeOurNatural/MainSeeOur";
import MainSeeOurNaturalContent from "utils/MainSeeOurNaturalContent";
import "container/MainSeeOurNatural/MainSeeOur.scss";

export const MainOurNaturals = () => {
  return (
    <>
      <main className="see-our-natural">
        <Container maxWidth="lg">
          <div className="see-our-natural-logo-text">
            See our natural healing program
          </div>
          <Grid container gap="50px">
            {MainSeeOurNaturalContent.map(({ id, image, name, text }) => (
              <Grid key={id}>
                <MainSeeOurNatural image={image} name={name} text={text} />
              </Grid>
            ))}
            <div className="see-our-natural-content">
              <div className="see-our-natural-button">
                <button>
                  <img src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-dots.png" />
                </button>

                <h3 className="see-our-natural-button-text">See more</h3>
              </div>
            </div>
          </Grid>
        </Container>
      </main>
    </>
  );
};
