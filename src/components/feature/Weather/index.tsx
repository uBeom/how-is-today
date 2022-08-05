import { MyPos } from '@/helper/myPos';

const { kakao } = window;
const geocoder = new kakao.maps.services.Geocoder();
console.log(geocoder);

const Weather = () => {
  const callback = (result: any) => {
    console.log(result);
  };

  const handleClickButton = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      geocoder.coord2RegionCode(
        pos.coords.longitude,
        pos.coords.latitude,
        callback,
      );
    });
  };

  return (
    <button type='button' onClick={handleClickButton}>
      누르면 컴퓨터 터짐
    </button>
  );
};

export default Weather;
