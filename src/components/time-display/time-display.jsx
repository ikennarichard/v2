import { useState, useEffect, useRef, memo } from "react";
import "./time-display.sass";

const TimeDisplay = memo(function TimeDisplay() {
  const [currentTime, setCurentTime] = useState(new Date());
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      setCurentTime(new Date());
    };
    intervalRef.current = setInterval(updateTime, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };

  return (
    <div className="time-check">
      {currentTime.toLocaleTimeString(undefined, timeOptions)}
    </div>
  );
});

export default TimeDisplay;
