import React from "react";
import { Container } from "@mui/system";
import { Card, Grid } from "@mui/material";
import { MainSeeOurNaturalComponent } from "components/MainSeeOurNaturalComponent/MainSeeOurComponent";
import MainSeeOurNaturalContent from "utils/MainSeeOurNaturalContent";
import "components/MainSeeOurNaturalComponent/MainSeeOurComponent.scss";

export const Categorys = () => {
  return (
    <>
      <main className="see-our-natural">
        <Container maxWidth="lg">
          <div className="see-our-natural-logo-text"></div>
          <Grid container gap="50px">
            {MainSeeOurNaturalContent.map(({ id, image, category, text }) => (
              <Card key={id}>
                <MainSeeOurNaturalComponent
                  id={id}
                  image={image}
                  category={category}
                  text={text}
                />
              </Card>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};
