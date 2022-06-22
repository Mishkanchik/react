import React, { Component } from "react";
import Slider from "react-slick";
import "components/SliderComponent/Slider.scss";
import { Container } from "@mui/system";

import { SliderContentsAuto } from "components/SliderComponent/SliderContent";
import { SliderProps } from "utils/SliderContentProps";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <main className="coment-slider">
        <Container maxWidth="lg">
          <div className="slider">
            <Slider {...settings}>
              {SliderProps.map(({ id, image, name, spesific }) => (
                <div key={id}>
                  <SliderContentsAuto
                    image={image}
                    name={name}
                    spesific={spesific}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </main>
    );
  }
}
