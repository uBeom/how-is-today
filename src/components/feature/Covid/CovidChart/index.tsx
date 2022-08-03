import { useEffect } from 'react';
import { Chart } from 'react-chartjs-2';

import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

import * as S from './style';

import useFetchCovidChart from '@/hooks/useFetchCovidChart';

const options: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const datas: ChartData<'bar', number[], string> = {
  labels: ['6일전', '5일전', '4일전', '3일전', '2일전', '1일전', '오늘'],
  datasets: [
    {
      type: 'bar',
      borderColor: '#2196f3',
      backgroundColor: '#2196f3',
      data: [],
      borderWidth: 1,
    },
  ],
};

const CovidChart = () => {
  const { data } = useFetchCovidChart();

  useEffect(() => {
    if (!data) return;

    datas.datasets[0].data = Object.entries(data)
      .sort()
      .slice(0, 7)
      .map(data => Number(data[1]));
  }, [data]);

  if (data) {
    return (
      <S.Container>
        <S.Title>코로나 확진자</S.Title>
        <Chart type='bar' data={datas} options={options} />
      </S.Container>
    );
  }

  return <div>Error</div>;
};

export default CovidChart;
