import React, { forwardRef } from "react";
import Player from "./player";

const Team = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="min-h-screen w-full flex flex-col justify-center py-32">
        <div className="h-1/2 flex flex-col justify-center gap-12">
          <div className="flex justify-center items-between">
            <h2 className="text-4xl font-bold">Active Roster</h2>
          </div>
          <div className="flex gap-12 flex-grow justify-center items-center self-center flex-wrap">
            <Player player="Cigdan" />
            <Player player="Cigdan" />
            <Player player="Cigdan" />
            <Player player="Cigdan" />
            <Player player="Cigdan" />
          </div>
        </div>
      </div>
    </>
  );
});

export default Team;
