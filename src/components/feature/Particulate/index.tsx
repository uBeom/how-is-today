import { useEffect, useState } from 'react';

import * as S from './style';

const { kakao } = window;
const geocoder = new kakao.maps.services.Geocoder();

interface Particulate {
  address_name: string;
  code: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_4depth_name: string;
  region_type: string;
  x: number;
  y: number;
}

const fetchParticulate = async (
  result: Particulate[],
): Promise<{
  dataTime: string;
  pm10Value: string;
  pm25Value: string;
  address: string;
}> => {
  const localData = Object.entries(result[0]);
  const station =
    localData[3][1] === '서울특별시' ? localData[4][1] : localData[5][1];
  const res = await fetch(
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=${process.env.REACT_APP_DATA_API_KEY}&returnType=json&stationName=${station}&dataTerm=DAILY&ver=1.3`,
  );

  const {
    response: {
      body: { items },
    },
  } = await res.json();
  const { dataTime, pm10Value, pm25Value } = items[0];

  return { dataTime, pm10Value, pm25Value, address: result[1].address_name };
};

const Particulate = () => {
  const [data, setData] = useState<{
    dataTime: string;
    pm10Value: string;
    pm25Value: string;
    address: string;
  }>({ dataTime: '', pm10Value: '', pm25Value: '', address: '' });

  const callback = async (result: Particulate[]) => {
    const data = await fetchParticulate(result);
    setData({ ...data });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      geocoder.coord2RegionCode(
        pos.coords.longitude,
        pos.coords.latitude,
        callback,
      );
    });
  }, []);

  useEffect(() => {}, [data]);

  if (data.address) {
    return (
      <S.Container>
        <S.Title>미세먼지</S.Title>
        <dl>
          <S.CurrentLocation>(현재 위치)</S.CurrentLocation>
          <S.Region>
            <strong>{data.address}</strong>
          </S.Region>
        </dl>
        <time>{data.dataTime}</time>
        {data.pm10Value}
        {data.pm25Value}
      </S.Container>
    );
  }

  return <div>Loading...</div>;
};

export default Particulate;
