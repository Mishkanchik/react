import React from "react";

import "components/MainSeeOurNaturalComponent/MainSeeOurComponent.scss";

export const MainSeeOurNaturalComponent = ({ image, category, text }) => {
  return (
    <>
      <div className="see-our-natural-content">
        <div className="see-our-natural-block">
          <img src={image} alt="" />
          <div className="see-our-natural-block-logo">{category}</div>
          <div className="see-our-natural-block-text">{text}</div>

          <div className="like"></div>
        </div>
      </div>
    </>
  );
};
