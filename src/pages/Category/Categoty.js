import React from "react";

import { MainSeeOurNatural } from "container/MainSeeOurNatural/MainSeeOur";
import MainSeeOurNaturalContent from "utils/MainSeeOurNaturalContent";
import "container/MainSeeOurNatural/MainSeeOur.scss";
export const MenuMainCategory = () => {
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
                <MainSeeOurNatural
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
