import React from "react";

function Card(props) {
  return (
    <>
      <a className="card md:w-3/4 lg:w-2/5 h-full max-w-[97vw] bg-gs-100 cursor-pointer transition-transform hover:scale-105" href={props.url}>
        <div className="flex items-center justify-between ml-16">
          <div className="flex justify-center items-center">
            <h2 className=" text-3xl font-extrabold">2021</h2>
            <img
              className=" w-48 rounded-full p-6 aspect-square"
              src={require(`../../../images/accomplishments/${props.image}.webp`)}
              alt={props.image}
            ></img>
          </div>
          <div className="flex lg:w-full md:justify-center sm:justify-end mx-6">
            <h2 className="sm:text-xl md:text-2xl font-bold break-words">
              {props.text}
            </h2>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
