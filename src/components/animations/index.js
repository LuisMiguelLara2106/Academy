import React from "react";
import Lottie from "react-lottie";

const AnimationTest = ({animation}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} width={400} height={400}/>
    </div>
  );
};

export default AnimationTest;