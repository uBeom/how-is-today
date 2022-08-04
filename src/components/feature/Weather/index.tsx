import { MyPos } from '@/helper/myPos';

const Weather = () => {
  return (
    <button type='button' onClick={MyPos.getPos}>
      누르면 컴퓨터 터짐
    </button>
  );
};

export default Weather;
