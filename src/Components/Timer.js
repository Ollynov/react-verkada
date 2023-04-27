import React, { useRef, useEffect, useState, useCallback } from "react";

export function TimerController() {
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
    <div>
      <div>{timer}</div>
      <button onClick={handlePause}>{pause ? "Run" : "Pause"}</button>
    </div>
  );
}
