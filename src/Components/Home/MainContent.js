import React, { forwardRef } from "react";
import Team from "./roster/Team";
import Benched from "./roster/Benched";
import Accomplishments from "./accomplishments/accomplishments";


const MainContent = forwardRef((props, ref) => {

  return (
    <>
      <Team ref={ref} />
      <Benched />
      <Accomplishments />
    </>
  );
});

export default MainContent;
