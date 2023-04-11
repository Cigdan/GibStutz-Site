import React, { forwardRef } from "react";
import Card from "./Card"

function Accomplishments() {

  return (
    <>
      <div
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <div className="flex pt-24">
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="flex gap-12 flex-wrap pt-12 justify-center">
          <Card image="BabosGaming" year="2021" text="Beat babos Gaming in Community voting" />
          <Card image="SwissEsportsLeague" year="2022" text="Qualified for SEL Spring Series Challenger Division" />
        </div>
      </div>
    </>
  );
};

export default Accomplishments;
