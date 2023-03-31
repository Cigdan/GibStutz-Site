import React, { forwardRef } from "react";
import Player from "./Player";

const Team = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="min-h-screen w-full flex flex-col justify-center py-32"
      >
        <div className="h-1/2 flex flex-col justify-center gap-36">
          <div className="flex justify-center items-between">
            <h2 className="text-4xl font-bold">Active Roster</h2>
          </div>
          <div className="flex gap-12 flex-grow justify-center items-center self-center flex-wrap">
            <Player 
              player="Cigdan"
              twitter="Cigdan1"
              video="o9koOWFCS2U"
            />

            <Player 
              player="Scrylone" 
              twitter="Scrylone" 
              video="TVbxp60jBa8" 
            />

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

            <Player 
              player="Eco"
              twitter="ecogamezzz"
              video="OtoNknfx5c4"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default Team;
