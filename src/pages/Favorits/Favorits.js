import React, { useState } from "react";
import MainSeeOurNaturalContent from "utils/MainSeeOurNaturalContent";

export const Favorits = () => {
  const [Favorits, setFavorits] = useState();

  return <>{MainSeeOurNaturalContent.map()}</>;
};
