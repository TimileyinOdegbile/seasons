import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const whatSeason = season === "Summer" ? "Lets hit the beach" : "Burr, it is chilly";

  return (
    <div>
      <h1>{whatSeason}</h1>
    </div>
  );
};

export default SeasonDisplay;