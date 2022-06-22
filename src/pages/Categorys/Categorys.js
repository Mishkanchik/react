import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { MainSeeOurNaturalComponent } from "components/MainSeeOurNaturalComponent/MainSeeOurComponent";
import MainSeeOurNaturalContent from "utils/MainSeeOurNaturalContent";
import "components/MainSeeOurNaturalComponent/MainSeeOurComponent.scss";

export const Categorys = () => {
  return (
    <>
      <main className="see-our-natural">
        <Container maxWidth="lg">
          <div className="see-our-natural-logo-text">
            See our natural healing program
          </div>
          <Grid container gap="50px">
            {MainSeeOurNaturalContent.map(({ id, image, category, text }) => (
              <Grid key={id}>
                <MainSeeOurNaturalComponent
                  image={image}
                  category={category}
                  text={text}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};
