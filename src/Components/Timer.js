import React, { useRef, useEffect, useState, useCallback } from "react";
import { Play, Pause } from "./../Icons/PlayPause";

export function TimerController({ updatePosition }) {
  const [timer, setTimer] = useState(4000);
  const [pause, setPause] = useState(false);
  let timerRef = useRef();

  const decreaseTimer = () => setTimer((prev) => prev - 1000);

  // start decreminting by default right away
  useEffect(() => {
    timerRef.current = setInterval(decreaseTimer, 1000);
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
      timerRef.current = setInterval(decreaseTimer, 1000);
    }
    setPause((paused) => !paused);
  };

  return (
    <div className="fixed right-[60px] top-7 2xl:top-[400px]">
      <div>{timer}</div>
      <button onClick={handlePause}>{pause ? <Play /> : <Pause />}</button>
    </div>
  );
}
