import { useEffect, useRef, useState } from 'react';

const useCountCovidStatus = (end: string, duration: number) => {
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
  const [start, setStart] = useState(0);
  const currentNumber: { current: number } = useRef(0);
  const endNumber = Number(end);
  const stepTime = Math.abs(Math.floor(duration / (endNumber - start)));

  useEffect(() => {
    currentNumber.current = start;
    timerRef.current = setInterval(() => {
      if (endNumber - start >= 10000) currentNumber.current += 100;
      else currentNumber.current += 1;

      setStart(currentNumber.current);
    }, stepTime);
  }, []);

  useEffect(() => {
    if (start >= endNumber) clearInterval(timerRef.current as NodeJS.Timeout);
  }, [start]);

  return start;
};

export default useCountCovidStatus;
