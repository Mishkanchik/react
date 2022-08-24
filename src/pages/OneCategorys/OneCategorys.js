import React from "react";
import MainSeeOurNaturalContent, {
  getProductsObject,
} from "utils/MainSeeOurNaturalContent";
import { useParams } from "react-router-dom";
import "./OneCategorys.scss";

export const OneCategorys = ({
  productsObject = getProductsObject(MainSeeOurNaturalContent),
}) => {
  let { id } = useParams();

  let text = productsObject[id].text;

  return (
    <>
      <h1 className="hello">HELLO ITEM {text} </h1>
    </>
  );
};
