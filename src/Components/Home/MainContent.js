import React, { forwardRef } from "react";
import Team from "./roster/Team";
import Benched from "./roster/Benched";

const MainContent = forwardRef((props, ref) => {

  return (
    <>
      <Team ref={ref} />
      <Benched />
    </>
  );
});

export default MainContent;
