import React, { forwardRef } from "react";
import Player from "./Player";
import { BsFillCaretDownFill } from "react-icons/bs";

const Team = () => {

  return (
    <>
      <div
        className="h-full w-full flex flex-col justify-center items-center pb-24"
      >
        <div className="flex pt-24">
          <h2 className="text-4xl font-bold">Benched</h2>
        </div>
        <div className="flex gap-12 flex-wrap pt-12 justify-center">
          <Player
            player="Stirogaming"
            twitter="GamingStiro"
            video="dQw4w9WgXcQ"
          />

          <Player
            player="Teddyyberchen"
            twitter="Teddyy91109468"
            video="M5V_IXMewl4"
          />

          <Player
            player="Beno11"
            twitter="MD50215041"
            video="6n3pFFPSlW4"
          />
        </div>
      </div>
    </>
  );
};

export default Team;
