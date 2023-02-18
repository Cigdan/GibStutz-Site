import React, { forwardRef } from "react";

const Team = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="h-screen w-full snap-center"></div>
    </>
  );
});

export default Team;
