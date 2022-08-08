import { useEffect, useRef, useState } from 'react';

enum REMAINDER_VALUE {
  MANY = 1000,
  AFEW = 500,
  FEW = 10,
  VERY_FEW = 1,
}

function getCountValue(endNumber: number, currentNumber: number) {
  const reaminderValue = endNumber - currentNumber;

  if (reaminderValue >= REMAINDER_VALUE.MANY) return REMAINDER_VALUE.MANY;
  else if (reaminderValue >= REMAINDER_VALUE.AFEW) return REMAINDER_VALUE.AFEW;
  else if (reaminderValue >= REMAINDER_VALUE.FEW) return REMAINDER_VALUE.FEW;

  return REMAINDER_VALUE.VERY_FEW;
}

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
      currentNumber.current += getCountValue(endNumber, currentNumber.current);

      setStart(currentNumber.current);
    }, stepTime);

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, []);

  useEffect(() => {
    if (start >= endNumber) clearInterval(timerRef.current as NodeJS.Timeout);
  }, [start]);

  return start;
};

export default useCountCovidStatus;
