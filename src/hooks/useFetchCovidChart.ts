import { useQuery } from '@tanstack/react-query';

export interface IUseCoivdChart {
  cnt3: string;
  cnt4: string;
  cnt1: string;
  cnt2: string;
  cnt7: string;
  cnt8: string;
  cnt5: string;
  cnt6: string;
  rate4: string;
  rate5: string;
  rate6: string;
  rate7: string;
  rate1: string;
  rate2: string;
  rate3: string;
  rate8: string;
  mmdd4: string;
  mmdd5: string;
  mmdd6: string;
  mmdd7: string;
  mmdd1: string;
  mmdd2: string;
  mmdd3: string;
  mmdd8: string;
  mmddhh: string;
}

const COVID_CHART_URL = `http://apis.data.go.kr/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson?ServiceKey=${process.env.REACT_APP_DATA_API_KEY}`;

const fetchCovidChart = async (): Promise<IUseCoivdChart> => {
  const res = await fetch(COVID_CHART_URL);
  const {
    response: { result },
  } = await res.json();

  return result[0];
};

const useFetchCovidChart = () =>
  useQuery<IUseCoivdChart, Error>(['covidchart'], fetchCovidChart);

export default useFetchCovidChart;
