import { useEffect, useRef, useState } from 'react';

function getCountValue(endNumber: number, currentNumber: number) {
  const MANY_REMAINDER_VALUE = 1000;
  const A_FEW_REMAINDER_VALUE = 500;
  const FEW_REAMINDER_VALUE = 10;

  const reaminderValue = endNumber - currentNumber;

  if (reaminderValue >= MANY_REMAINDER_VALUE) return MANY_REMAINDER_VALUE;
  else if (reaminderValue >= A_FEW_REMAINDER_VALUE)
    return A_FEW_REMAINDER_VALUE;
  else if (reaminderValue >= FEW_REAMINDER_VALUE) return FEW_REAMINDER_VALUE;

  return 1;
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
      currentNumber.current += getCountValue(endNumber, -currentNumber.current);

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
