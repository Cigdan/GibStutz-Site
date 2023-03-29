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
      <div className="card w-full h-[30%] my-3 py-4 flex flex-col justify-center bg-gs-50 items-center" tabIndex="0">
        {props.image}
        <h2 className=" text-center font-bold text-xl break-words mt-2">
          {props.message}
        </h2>
        <h2 className="text-xl text-center font-semibold">
          {totalNumber}
          {unit}
        </h2>
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
