import React, { useRef, useEffect, useState } from "react";
import { Play, Pause } from "./../Icons/PlayPause";

const ProgressActive = ({ value }) => {
  value = 100 - (value / 4000) * 100;
  return (
    <div className="flex flex-col flex-nowrap justify-end w-1 h-6 rounded-full overflow-hidden">
      <div
        className="bg-[#FF9900] overflow-hidden rounded-lg"
        role="progressbar"
        style={{ height: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="10"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
const ProgressNextUp = ({ value }) => {
  value = 100 - (value / 4000) * 100;
  return (
    <div className="flex flex-col flex-nowrap justify-end w-1 h-6 rounded-full overflow-hidden">
      <div
        className="bg-[#C4C4C4] overflow-hidden rounded-lg"
        // className="bg-[#FF9900] overflow-hidden rounded-lg"
        role="progressbar"
        style={{ height: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="10"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
const ProgressInactive = () => {
  const value = 20;
  return (
    <div className="flex flex-col flex-nowrap justify-end w-1 h-6 rounded-full overflow-hidden">
      <div
        className="bg-[#C4C4C4] overflow-hidden rounded-lg"
        role="progressbar"
        style={{ height: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="10"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

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
    <div className="flex flex-row justify-between w-[33px] h-10 mr-3">
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

export function TimerController({ position, updatePosition }) {
  const [timer, setTimer] = useState(4000);
  const [pause, setPause] = useState(false);
  let timerRef = useRef();

  const decreaseTimer = () => setTimer((prev) => prev - 10);

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

  return (
    <div className="fixed flex flex-row 2xl:flex-col justify-between right-[60px] bottom-7 2xl:top-[400px] 2xl:h-[186px] bg-white z-50 p-2 rounded-lg">
      {/* <div>{timer}</div> */}
      <Number position={position} number={1} value={timer} />
      <Number position={position} number={2} value={timer} />
      <Number position={position} number={3} value={timer} />
      <button className="w-[33px] pl-[15px]" onClick={handlePause}>
        {pause ? <Play /> : <Pause />}
      </button>
    </div>
  );
}
