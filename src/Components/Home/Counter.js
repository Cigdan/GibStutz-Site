import React, { useEffect, useState } from "react";

function Counter(props) {
  const count = props.count;
  const message = props.message;
  const unit = props.unit;
  const image = props.image;
  const target = props.target;

  function Stats(props) {
    const count = props.count;
    const unit = props.unit;
    const target = props.target;
    const waitTime = 2400 / (count - target);
    const [totalNumber, setTotalNumber] = useState(count);
    useEffect(() => {
      if (totalNumber > target) {
        const interval = setInterval(() => {
          setTotalNumber(totalNumber - 1);
        }, waitTime);
        return () => clearInterval(interval);
      }
    }, [totalNumber]);
    return (
      <div
        className="card w-full h-1/3 my-2 py-4 flex flex-col justify-center bg-gs-200 items-center"
        tabIndex="0"
      >
        <div className="h-full flex items-center">{props.image}</div>
        <div className="h-full">
          <h2 className=" text-center font-bold text-xl break-words">
            {props.message}
          </h2>
          <h2 className="text-xl text-center font-semibold">
            {totalNumber}
            {unit}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Stats
        count={count}
        message={message}
        target={target}
        image={image}
        unit={unit}
      />
    </>
  );
}

export default Counter;
