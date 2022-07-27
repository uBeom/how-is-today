import { useQuery } from '@tanstack/react-query';
import xml2js from 'xml2js';

const COVID_STATUS_URL = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=${process.env.REACT_APP_CORONA_STATUS}`;
const fetchCovidStatus = async () => {
  let jsonData;

  const res = await fetch(COVID_STATUS_URL);
  const data = await res.text();
  const parser = new xml2js.Parser();
  parser.parseString(data, (err, result) => {
    if (err) throw new Error().message;

    jsonData = result;
  });

  return jsonData;
};

const useCovidStatus = () =>
  useQuery(['covid'], fetchCovidStatus, {
    staleTime: 3000,
    cacheTime: 8000,
    enabled: false,
  });

export default useCovidStatus;
