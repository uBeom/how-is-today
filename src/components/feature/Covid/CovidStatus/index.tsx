import CovidStatusItem from './CovidStatusItem';
import * as S from './style';

import { COVID_STATUS } from '@/constants/covidStatus';
import useFetchCovidStatus from '@/hooks/useFetchCovidStatus';
import { SpinnerContainer, Spinner } from '@/styles/util/spinner';

const CovidStatus = () => {
  const { isLoading, data, isError, error } = useFetchCovidStatus();

  if (isLoading)
    return (
      <S.Container>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      </S.Container>
    );

  if (isError) return <div>{error.toString()}</div>;

  const statusItems = COVID_STATUS.map((mock, index) => (
    <CovidStatusItem key={index} end={data[index]} {...{ mock }} />
  ));

  return (
    <S.Container>
      <S.Title>코로나 상태 현황</S.Title>
      <S.StatusList>{statusItems}</S.StatusList>
    </S.Container>
  );
};

export default CovidStatus;
