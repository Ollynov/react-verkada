import React, { useRef, useEffect, useState, useCallback } from "react";
import { Play, Pause } from "./../Icons/PlayPause";

const Progress = ({ value }) => {
  console.log("ok value: ", value);
  value = (value / 4000) * 100;
  return (
    // <svg width="30px" height="30px">
    //   <circle cx="40" cy="40" r="20" fill="gray" />
    // </svg>
    // <progress
    //   className=" w-12 h-4 rotate-90 rounded-full"
    //   id="file"
    //   value={value}
    //   max="4000"
    // >
    //   {" "}
    //   32%{" "}
    // </progress>
    <div className="flex flex-col flex-nowrap justify-end w-2 h-6 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
      <div
        className="bg-blue-500 overflow-hidden"
        role="progressbar"
        style={{ height: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="4000"
      ></div>
    </div>
  );
};

const Number = ({ active, number, value }) => {
  return (
    <div className="flex flex-row justify-between w-[33px] h-10 ">
      <span className={`${active ? "font-bold" : ""} self-center`}>
        {number}
      </span>
      <span className="self-center">
        <Progress value={active ? value : 0} />
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
    if (!pause) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(decreaseTimer, 10);
    }
    setPause((paused) => !paused);
  };

  return (
    <div className="fixed flex flex-col justify-between right-[60px] top-7 2xl:top-[400px] h-[186px]">
      {/* <div>{timer}</div> */}
      <Number
        active={position === 1 ? true : false}
        number={"01"}
        value={timer}
      />
      <Number
        active={position === 2 ? true : false}
        number={"02"}
        value={timer}
      />
      <Number
        active={position === 3 ? true : false}
        number={"03"}
        value={timer}
      />
      <button className="w-[33px] pl-[15px]" onClick={handlePause}>
        {pause ? <Play /> : <Pause />}
      </button>
    </div>
  );
}
