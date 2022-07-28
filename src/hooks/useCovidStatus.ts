import { useQuery } from '@tanstack/react-query';

interface IUseCovidStatus {
  cnt_confirmations: string;
  cnt_deaths: string;
  cnt_hospitalizations: string;
  cnt_severe_symptoms: string;
  mmddhh: string;
  rate_confirmations: string;
  rate_deaths: string;
  rate_hospitalizations: string;
  rate_severe_symptoms: string;
}

const COVID_STATUS_URL = `http://apis.data.go.kr/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason?serviceKey=${process.env.REACT_APP_CORONA_STATUS}`;
const fetchCovidStatus = async (): Promise<IUseCovidStatus> => {
  const res = await fetch(COVID_STATUS_URL);
  const {
    response: { result },
  } = await res.json();

  console.log(result[0]);
  return result[0];
};

const useCovidStatus = () =>
  useQuery<IUseCovidStatus, Error>(['covid'], fetchCovidStatus);

export default useCovidStatus;
