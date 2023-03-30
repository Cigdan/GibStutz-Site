import React from "react";
import { BsTwitter } from "react-icons/bs";

function PlayerCard(props) {
  return (
    <>
      <div className="card w-full h-full bg-gs-200">
        <div className="flex items-center justify-between mx-16 gap-8">
          <img
            src={require(`../../../images/roster/${props.player}.webp`)}
            alt="Icon"
            className="rounded-full aspect-square w-12 my-2"
          />
          <h2 className="text-2xl font-semibold">{props.player}</h2>
          <a href={`https://twitter.com/${props.twitter}`}><BsTwitter className="w-10 h-10" /></a>
        </div>
        <iframe
          className="flex-grow aspect-video"
          src={`https://www.youtube.com/embed/${props.video}`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default PlayerCard;
