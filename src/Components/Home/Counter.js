import React, { useEffect, useState } from "react";

function Counter(props) {
  const count = props.count;
  const message = props.message;
  const unit = props.unit;
  const image = props.image;
  const target = props.target;

  function Stats(props) {
    const count = props.count;
    const message = props.message;
    const unit = props.unit;
    const image = props.image;
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
      <div className="card w-full h-[30%] my-3 min-h-max py-4 bg-gs-50 items-center overflow-visible dropdown dropdown-right" tabIndex="0">
        {image}
        <h2 className="min-md:text-2xl text-center break-words mt-2">
          {message}
        </h2>
        <h2 className="text-xl text-center">
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
