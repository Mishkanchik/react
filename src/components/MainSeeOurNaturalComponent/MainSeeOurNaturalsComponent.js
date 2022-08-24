import React from "react";
import { Container } from "@mui/system";
import { Card, Grid } from "@mui/material";
import { MainSeeOurNaturalComponent } from "components/MainSeeOurNaturalComponent/MainSeeOurComponent";
import MainSeeOurNaturalContent from "utils/MainSeeOurNaturalContent";
import "components/MainSeeOurNaturalComponent/MainSeeOurComponent.scss";
import { NavLink } from "react-router-dom";

export const MainOurNaturalsComponent = () => {
  return (
    <>
      <main className="see-our-natural">
        <Container maxWidth="lg">
          <div className="see-our-natural-logo-text">
            See our natural healing program
          </div>
          <Grid container gap="50px">
            {MainSeeOurNaturalContent.filter((el) => el.homeId === true).map(
              ({ id, image, category, text }) => (
                <Card key={id}>
                  <MainSeeOurNaturalComponent
                    id={id}
                    image={image}
                    category={category}
                    text={text}
                  />
                </Card>
              )
            )}
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive ? "active-menu-NavLink" : "menu-NavLink"
              }
            >
              <div className="see-our-natural-content">
                <div className="see-our-natural-button">
                  <button>
                    <img
                      src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-dots.png"
                      alt=""
                    />
                  </button>

                  <h3 className="see-our-natural-button-text">See more</h3>
                </div>
              </div>
            </NavLink>
          </Grid>
        </Container>
      </main>
    </>
  );
};
