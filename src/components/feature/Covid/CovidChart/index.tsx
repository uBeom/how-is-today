import { useRef } from 'react';

import * as S from './style';

const CovidChart = () => {
  const chartRef = useRef(null);

  return (
    <S.Container>
      <S.Title>코로나 확진자</S.Title>
      <S.Chart ref={chartRef} />
    </S.Container>
  );
};

export default CovidChart;
