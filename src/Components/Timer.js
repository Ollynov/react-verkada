import React, { useRef, useEffect, useState } from "react";
import { Play, Pause } from "./../Icons/PlayPause";
import {
  ProgressActive,
  ProgressNextUp,
  ProgressInactive,
} from "./ProgressBars";

const Number = ({ position, number, value }) => {
  let activeStatus;
  if (position === number) {
    activeStatus = "active";
  } else if ((position === 3 && number === 1) || position === number - 1) {
    activeStatus = "next up";
  } else {
    activeStatus = false;
  }
  return (
    <div className="flex flex-row justify-between w-[33px] h-10 mr-3 cursor-pointer">
      <span
        className={`${
          position === number ? "font-bold" : "text-[#C4C4C4]"
        } self-center text-sm`}
      >
        {`0${number}`}
      </span>
      <span className="self-center">
        {activeStatus === "active" && <ProgressActive value={value} />}
        {activeStatus === "next up" && <ProgressNextUp value={value} />}
        {!activeStatus && <ProgressInactive />}
      </span>
    </div>
  );
};

export function TimerController({ position, setPosition }) {
  const [timer, setTimer] = useState(4000);
  const [pause, setPause] = useState(false);
  let timerRef = useRef();

  const decreaseTimer = () => setTimer((prev) => prev - 10);

  const updatePosition = (manualPositionSelected = false) => {
    if (!manualPositionSelected) {
      if (position === 3) {
        setPosition(1);
      } else {
        setPosition((prev) => prev + 1);
      }
    } else {
      setPosition(manualPositionSelected);
    }
  };

  // start decreminting by default right away
  useEffect(() => {
    timerRef.current = setInterval(decreaseTimer, 10);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      updatePosition();
      setTimer(4000);
    }
  }, [timer]);

  const handlePause = () => {
    setPause((paused) => !paused);
    if (!pause) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(decreaseTimer, 10);
    }
  };

  const numberSelected = (num) => {
    updatePosition(num);
    setTimer(4000);
  };

  const numbers = [1, 2, 3];
  return (
    <div className="fixed flex flex-row 2xl:flex-col justify-between right-[60px] bottom-7 2xl:top-[400px] 2xl:h-[200px] bg-white z-50 p-2 rounded-lg ">
      {numbers.map((num) => {
        return (
          <div key={num} onClick={() => numberSelected(num)}>
            <Number position={position} number={num} value={timer} />
          </div>
        );
      })}

      <button className="w-[33px] pl-[15px] pt-4" onClick={handlePause}>
        {pause ? <Play /> : <Pause />}
      </button>
    </div>
  );
}
