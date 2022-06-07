import React from "react";

import "container/MainSeeOurNatural/MainSeeOur.scss";

export const MainSeeOurNatural = ({ image, name, text }) => {
  return (
    <>
      <div className="see-our-natural-content">
        <div className="see-our-natural-block">
          <img src={image} alt="" />
          <div className="see-our-natural-block-logo">{name}</div>
          <div className="see-our-natural-block-text">{text}</div>

          <div className="like"></div>
        </div>
      </div>
    </>
  );
};
