import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

function Player(props) {
  return (
    <>
      <span className="card bg-gs-200 bg-opacity-40 w-72 h-80 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform group">
        <div className="avatar pt-6">
          <div className="w-52 rounded-[20%] transition-all group-hover:scale-110">
            <img src={require(`../../images/roster/${props.player}.png`)} alt="Icon" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-grow">
            <h2 className="text-3xl font-semibold">{props.player}</h2>
        </div>
      </span>
    </>
  );
}

export default Player;
