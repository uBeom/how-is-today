import { useEffect, useRef, useState } from 'react';

const useCountCovidStatus = (end: string, duration: number) => {
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
  const [start, setStart] = useState(0);
  const currentNumber: { current: number } = useRef(0);
  const endNumber = Number(end);
  const stepTime = Math.abs(
    Math.floor(duration / (endNumber - currentNumber.current)),
  );

  useEffect(() => {
    currentNumber.current = start;

    timerRef.current = setInterval(() => {
      if (endNumber - currentNumber.current >= 1000)
        currentNumber.current += 1000;
      else if (endNumber - currentNumber.current >= 500)
        currentNumber.current += 500;
      else if (endNumber - currentNumber.current >= 10)
        currentNumber.current += 10;
      else currentNumber.current += 1;

      setStart(currentNumber.current);
    }, stepTime);

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, []);

  useEffect(() => {
    if (start >= endNumber) clearInterval(timerRef.current as NodeJS.Timeout);
  }, [start, endNumber]);

  return start;
};

export default useCountCovidStatus;
