import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "components/MainSeeOurNaturalComponent/MainSeeOurComponent.scss";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

export const MainSeeOurNaturalComponent = ({ id, image, category, text }) => {
  const isLiked = useSelector((state) => state[id]);

  const dispatch = useDispatch();
  return (
    <>
      <div className="see-our-natural-content">
        <div className="see-our-natural-block">
          <img src={image} alt="" />

          <Link to={`${category}/${id}`} className="see-our-natural-block-logo">
            <h2>{category}</h2>
          </Link>

          <div className="see-our-natural-block-text">{text}</div>
          <div
            className="like"
            onClick={() => {
              isLiked
                ? dispatch({
                    type: "DISLIKE",
                    id,
                  })
                : dispatch({
                    type: "LIKE",
                    id,
                  });
            }}
          >
            {isLiked ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
