import { useEffect, useState } from 'react';

export default function QuizProgress({ timout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timout);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timout);
    return () => {
      clearInterval(timer);
    };
  }, [timout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-timw"
      max={timout}
      value={remainingTime}
      className={mode}
    />
  );
}
