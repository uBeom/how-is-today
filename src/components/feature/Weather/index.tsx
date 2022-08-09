import { useQuery } from '@tanstack/react-query';

import { dfsXYConv } from '@/helper/myCoords';
import { MyDate } from '@/helper/myDate';

let URL: string;

interface WeatherInfo {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

navigator.geolocation.getCurrentPosition(pos => {
  const { x, y } = dfsXYConv(pos.coords.latitude, pos.coords.longitude);

  URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=${
    process.env.REACT_APP_DATA_API_KEY
  }&pageNo=1&numOfRows=290&dataType=JSON&base_date=${MyDate.getBaseDate()}&base_time=${MyDate.getBaseTime()}&nx=${x}&ny=${y}`;
});

const fetchWeather = async (): Promise<WeatherInfo[]> => {
  const res = await fetch(URL);
  const {
    response: {
      body: {
        items: { item },
      },
    },
  } = await res.json();

  const TMN = item.find((data: WeatherInfo) => data.category === 'TMN');
  const TMX = item.find((data: WeatherInfo) => data.category === 'TMX');
  const TMP = item.find((data: WeatherInfo) => data.category === 'TMP');
  const SKY = item.filter((data: WeatherInfo) => data.category === 'SKY');
  const PTY = item.filter((data: WeatherInfo) => data.category === 'PTY');

  console.log(TMN, TMX, TMP, SKY, PTY);
  return [TMN, TMX, TMP];
};

const Weather = () => {
  const { isLoading, isError, data, error } = useQuery<WeatherInfo[], Error>(
    ['weather'],
    fetchWeather,
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.toString()}</div>;

  const [TMN, TMX, TMP] = data;

  return <div>{TMN.baseDate}</div>;
};

export default Weather;
