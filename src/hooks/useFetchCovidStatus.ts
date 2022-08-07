/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query';

interface IUseCovidStatus {
  cnt_confirmations: string;
  cnt_deaths: string;
  cnt_hospitalizations: string;
  cnt_severe_symptoms: string;
}

const COVID_STATUS_URL = `http://apis.data.go.kr/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason?serviceKey=${process.env.REACT_APP_DATA_API_KEY}`;

const fetchCovidStatus = async (): Promise<string[]> => {
  const res = await fetch(COVID_STATUS_URL);

  const {
    response: { result },
  } = await res.json();

  const {
    cnt_confirmations,
    cnt_severe_symptoms,
    cnt_hospitalizations,
    cnt_deaths,
  }: IUseCovidStatus = result[0];

  const data = [
    cnt_confirmations,
    cnt_severe_symptoms,
    cnt_hospitalizations,
    cnt_deaths,
  ];

  return data;
};

const useFetchCovidStatus = () =>
  useQuery<string[], Error>(['covidstatus'], fetchCovidStatus);

export default useFetchCovidStatus;
