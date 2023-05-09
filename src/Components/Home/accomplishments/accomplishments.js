import React, { forwardRef } from "react";
import Card from "./Card"

function Accomplishments() {

  const babos = "https://www.digitec.ch/de/page/age-of-empires-iv-session-und-community-voting-preis-jetzt-anmelden-und-abstimmen-21897"
  const esportsLeague = "https://twitter.com/esportsleaguech/status/1508471265279062020"

  return (
    <>
      <div
        className="h-full w-full flex flex-col justify-center items-center pb-24 overflow-hidden"
      >
        <div className="flex pt-24">
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="flex gap-12 flex-wrap pt-12 justify-center">
          <Card image="BabosGaming" year="2021" text="Beat babos Gaming in Community voting" url={babos} />
          <Card image="SwissEsportsLeague" year="2022" text="Qualified for SEL Spring Series Challenger Division" url={esportsLeague} />
        </div>
      </div>
    </>
  );
};

export default Accomplishments;
