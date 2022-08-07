import { useEffect, useState } from 'react';

import * as S from './style';

import Icon from '@/components/common/Icons';
import { dfsXYConv } from '@/helper/myCoords';

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

const ParticulateMatter = () => {
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

      console.log(dfsXYConv(pos.coords.latitude, pos.coords.longitude));
    });
  }, []);

  if (data.address) {
    let pm10Icon;
    let pm2dot5Icon;

    if (Number(data.pm10Value) >= 51) {
      pm10Icon = (
        <>
          <Icon name='frown' size='lg' />
          <strong>나쁨</strong>
        </>
      );
    } else if (Number(data.pm10Value) >= 41) {
      pm10Icon = (
        <>
          <Icon name='meh' size='lg' />
          <strong>보통</strong>
        </>
      );
    } else if (Number(data.pm10Value) >= 0) {
      pm10Icon = (
        <>
          <Icon name='smile' size='lg' />
          <strong>좋음</strong>
        </>
      );
    }

    if (Number(data.pm25Value) >= 51) {
      pm2dot5Icon = (
        <>
          <Icon name='frown' size='lg' />
          <strong>나쁨</strong>
        </>
      );
    } else if (Number(data.pm25Value) >= 41) {
      pm2dot5Icon = (
        <>
          <Icon name='meh' size='lg' />
          <strong>보통</strong>
        </>
      );
    } else if (Number(data.pm25Value) >= 0) {
      pm2dot5Icon = (
        <>
          <Icon name='smile' size='lg' />
          <strong>좋음</strong>
        </>
      );
    }

    return (
      <S.Container>
        <S.Title>미세먼지</S.Title>
        <dl>
          <S.CurrentLocation>(현재 위치)</S.CurrentLocation>
          <S.Region>
            <strong>{data.address}</strong>
          </S.Region>
        </dl>
        <S.Time>{data.dataTime}</S.Time>
        <S.ParticulateMatters>
          <S.PM10>
            미세먼지
            {pm10Icon}
            {data.pm10Value} ㎍/m³
          </S.PM10>
          <S.PM2dot5>
            초미세먼지
            {pm2dot5Icon}
            {data.pm25Value} ㎍/m³
          </S.PM2dot5>
        </S.ParticulateMatters>
      </S.Container>
    );
  }

  return <div>Loading...</div>;
};

export default ParticulateMatter;
