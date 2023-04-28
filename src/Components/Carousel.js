import { useState } from "react";
import { TimerController } from "./Timer";
import {
  ImageVariation1,
  ImageVariation2,
  ImageVariation3,
} from "./ImageVariations";

const Carousel = () => {
  const [position, setPosition] = useState(1);

  const updatePosition = () => {
    if (position === 3) {
      setPosition(1);
    } else {
      setPosition((prev) => prev + 1);
    }
  };

  return (
    <>
      {" "}
      <div className="w-[518px] h-full relative">
        {position === 1 && <ImageVariation1 />}
        {position === 2 && <ImageVariation2 />}
        {position === 3 && <ImageVariation3 />}
      </div>
      <TimerController updatePosition={updatePosition} />
    </>
  );
};

export default Carousel;
