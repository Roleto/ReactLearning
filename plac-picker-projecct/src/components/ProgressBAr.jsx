import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
  const [remainingTime, setTemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemainingTime((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
