import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./hoverAnimation.css";

function Player(props) {
  const [open, setOpen] = useState(false);
  const [borderWidth, setBorderWidth] = useState(0);

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

  useEffect(() => {
    if(open){
      setBorderWidth(2)
    }
    else{
      setBorderWidth(0)
    }
  }, [open])

  return (
    <>
      <div onMouseOver={openCard} onMouseLeave={closeCard}>
        <HoverCard.Root open={open}>
          <HoverCard.Trigger>
            <span
              onClick={toggleCard}
              className={`card bg-gs-200 bg-opacity-40 w-72 h-auto flex flex-col items-center 
                          cursor-pointer hover:scale-105 transition-transform group border-solid border-${borderWidth}`}
            >
              <div className="avatar w-full">
                <div className="w-full rounded-t-xl transition-all group-hover:scale-90 group-hover:rounded-b-xl">
                  <img
                    src={require(`../../../images/roster/${props.player}.webp`)}
                    alt="Icon"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center flex-grow py-3">
                <h2 className="text-3xl font-semibold">{props.player}</h2>
              </div>
            </span>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              onMouseLeave={closeCard}
              className="my-2 h-[24rem] w-[36rem] flex-grow max-w-xl z-50 HoverCardContent left-0 right-0"
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
