import React from "react";

function Card(props) {
  return (
    <>
      <div className="card w-3/5 min-w-fit h-full bg-gs-200">
        <div className="flex items-center justify-betwee ml-16">
          <div className="flex justify-center items-center">
            <h2 className=" lg:text-3xl font-bold">2021</h2>
            <img
              className=" w-48 rounded-full p-6 aspect-square"
              src={require(`../../../images/accomplishments/${props.image}.webp`)}
              alt={props.image}
            ></img>
          </div>
          <div className="flex lg:w-full md:justify-center sm:justify-end mx-6">
            <h2 className="sm:text-sm  md:text-xl lg:text-2xl font-semibold break-words">{props.text}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
