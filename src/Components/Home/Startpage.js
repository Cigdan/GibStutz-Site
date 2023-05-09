import React from "react";
import Counter from "./Counter";
import { AiFillTrophy } from "react-icons/ai";
import { BsFillKeyboardFill, BsFillCaretDownFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import Highlight from "../../images/highlight.mp4";

const Startpage = ({ teamRef }) => {

  function scrollDown(){
    teamRef.current.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <>
      <div className="justify-center items-center h-screen left-0 right-0 snap-center">
        <video
          autoPlay
          muted
          loop
          className="h-screen w-screen absolute object-fill saturate-150"
        >
          <source src={Highlight} type="video/mp4" />
        </video>

        <div className="h-full items-center flex">
          <div className="hidden w-72 bg-gs-300 md:h-4/6 sm:h-4/5 sm:flex flex-col items-center justify-center rounded-r-3xl bg-opacity-40 translate-y-0 p-6">
            <Counter
              count={1000}
              message="Tournaments won"
              target={0}
              image={<AiFillTrophy className="statIcon" />}
            />
            <Counter
              count={1000}
              message="Tournaments Played"
              target={3}
              image={<BsFillKeyboardFill className="statIcon" />}
            />
            <Counter
              count={1000}
              message="Pricemoney Won"
              target={0}
              unit="$"
              image={<AiFillDollarCircle className="statIcon" />}
            />
          </div>
          <div className="flex w-full self-end mb-10 justify-center items-end absolute">
            <BsFillCaretDownFill className="z-0 h-10 w-10 fill-gs-400 cursor-pointer animate-bounce" onClick={scrollDown} />
          </div>

        </div>
      </div>
    </>
  );
}

export default Startpage;
