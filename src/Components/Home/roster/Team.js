import React, { forwardRef } from "react";
import Player from "./Player";

const Team = forwardRef((props, ref) => {

  return (
    <>
      <div
        ref={ref}
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <div className="flex pt-24">
          <h2 className="text-4xl font-bold">Active Roster</h2>
        </div>
        <div className="flex gap-12 flex-wrap pt-12 justify-center">
          <Player player="Cigdan" twitter="Cigdan1" video="o9koOWFCS2U" />

          <Player player="Scrylone" twitter="Scrylone" video="TVbxp60jBa8" />

          <Player
            player="Rl22basket"
            twitter="rl22basket"
            video="4-NracxXtVE"
          />

          <Player
            player="DeathBeforeDisco"
            twitter="Sensei_Lynxx"
            video="mPy8qeXEARM"
          />

          <Player player="Eco" twitter="ecogamezzz" video="OtoNknfx5c4" />
        </div>
      </div>
    </>
  );
});

export default Team;
