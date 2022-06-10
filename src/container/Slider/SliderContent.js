import React from "react";

export const SliderContentsAuto = ({ image, name, spesific }) => {
  return (
    <div class="slider-content">
      <img src={image} alt="" />
      <div class="slider-text">
        <span>
          Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui
        </span>

        <span>
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius
        </span>

        <span>modi tempora incidunt ut labore.</span>
      </div>
      <div class="slider-symbol">...</div>
      <div class="slider-coment-name">{name}</div>
      <div class="slider-spesific">{spesific}</div>
    </div>
  );
};
