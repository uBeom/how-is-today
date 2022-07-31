import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { ICovidStatusItem } from './types';

import { COVID_STATUS } from '@/constants/covidStatus';
import useCountCovidStatus from '@/hooks/useCountCovidStatus';
import useFetchCovidStatus from '@/hooks/useFetchCovidStatus';

const CovidStatusItem = ({ data, end }: ICovidStatusItem) => {
  const start = useCountCovidStatus(end, 2000);

  return (
    <S.StatusItem flex='flex' $justifyContent='center' $alignItems='center'>
      {data.icon}
      <S.Count
        fontWeight='regular'
        fontSize='2xl'
        lineHeight='4'
        letterSpacing='normal'>
        {start}
      </S.Count>
      <S.Title
        fontWeight='regular'
        fontSize='sm'
        lineHeight='short'
        letterSpacing='widest'>
        {data.title}
      </S.Title>
    </S.StatusItem>
  );
};

const CovidStatus = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useFetchCovidStatus();

  if (isLoading) return <div>Loading...</div>;

  if (error) navigate('localhost:3000/notfound');

  if (data) {
    const covidApiData = [
      data.cnt_confirmations,
      data.cnt_severe_symptoms,
      data.cnt_hospitalizations,
      data.cnt_deaths,
    ];

    const statusItems = COVID_STATUS.map((data, index) => (
      <CovidStatusItem key={index} end={covidApiData[index]} {...{ data }} />
    ));

    return (
      <S.Container>
        {/* heading 추가하고 readonly */}
        <S.StatusList flex='flex' $justifyContent='center' $alignItems='center'>
          {statusItems}
        </S.StatusList>
      </S.Container>
    );
  }

  return <div>Error</div>;
};

export default CovidStatus;