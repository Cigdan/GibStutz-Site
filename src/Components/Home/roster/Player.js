import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./hoverAnimation.css";

function Player(props) {
  const [open, setOpen] = useState(false);

  function openCard() {
    setOpen(true);
  }
  function closeCard() {
    setOpen(false);
  }

  function toggleCard() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <div onMouseOver={openCard} onMouseLeave={closeCard}>
        <HoverCard.Root open={open}>
          <HoverCard.Trigger>
            <span
              onClick={toggleCard}
              className="card bg-gs-200 bg-opacity-40 w-72 h-80 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform group"
            >
              <div className="avatar pt-6">
                <div className="w-52 rounded-[20%] transition-all group-hover:scale-110">
                  <img
                    src={require(`../../../images/roster/${props.player}.webp`)}
                    alt="Icon"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center flex-grow">
                <h2 className="text-3xl font-semibold">{props.player}</h2>
              </div>
            </span>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              onMouseLeave={closeCard}
              className="m-2 h-[24rem] w-[36rem] flex-grow max-w-xl z-50 HoverCardContent"
            >
              <PlayerCard
                player={props.player}
                twitter={props.twitter}
                video={props.video}
              />
              <HoverCard.Arrow className="fill-gs-400 h-2 w-4" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </>
  );
}

export default Player;
