import * as S from './style';
import { ICovidStatusItem } from './types';

import useCovidStatus from '@/hooks/useCovidStatus';
import COVID_STATUS_MOCK from '@/mocks/covidStatus';

const CovidStatusItem = ({ data, count }: ICovidStatusItem) => {
  return (
    <S.StatusItem justifyContent='center' alignItems='center'>
      {data.icon}
      <S.Count
        fontWeight='regular'
        fontSize='2xl'
        lineHeight='4'
        letterSpacing='normal'>
        {count}
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
  const { isLoading, data } = useCovidStatus();

  if (isLoading) return <div>Loading...</div>;

  if (data) {
    const covidApiData = [
      data.cnt_confirmations,
      data.cnt_severe_symptoms,
      data.cnt_hospitalizations,
      data.cnt_deaths,
    ];

    const statusItems = COVID_STATUS_MOCK.map((data, index) => (
      <CovidStatusItem key={index} count={covidApiData[index]} {...{ data }} />
    ));

    return (
      <section>
        {/* heading 추가하고 readonly */}
        <S.StatusList justifyContent='center' alignItems='center'>
          {statusItems}
        </S.StatusList>
      </section>
    );
  }

  return <div>Error</div>;
};

export default CovidStatus;
