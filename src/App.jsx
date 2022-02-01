import React from "react";
import ForecastRow from "./components/ForecastRow";
import Dropdown from "./components/Dropdown";

const App = () => {
  return (
    <>
      <h1 className="text-center" style={{ fontWeight: "lighter" }}>
        Weather Forecast App
      </h1>
      <Dropdown />
      <ForecastRow />
    </>
  );
};

export default App;
