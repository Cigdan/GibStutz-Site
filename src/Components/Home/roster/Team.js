import React, { forwardRef } from "react";
import Player from "./Player";

const Team = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="min-h-screen w-full flex flex-col justify-center py-32">
        <div className="h-1/2 flex flex-col justify-center gap-36">
          <div className="flex justify-center items-between">
            <h2 className="text-4xl font-bold">Active Roster</h2>
          </div>
          <div className="flex gap-12 flex-grow justify-center items-center self-center flex-wrap">
            <Player player="Cigdan" twitter="Cigdan1" video="o9koOWFCS2U"  />
            <Player player="Scrylone" twitter="Scrylone" video=""  />
            <Player player="Rl22basket" twitter="rl22basket" video=""  />
            <Player player="Death Before Disco" twitter="Sensei_Lynxx" video=""  />
            <Player player="Eco" twitter="ecogamezzz" video=""  />
          </div>
        </div>
      </div>
    </>
  );
});

export default Team;
