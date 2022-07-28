import useCovidStatus from '@/hooks/useCovidStatus';

const CovidStatus = () => {
  const { isLoading, data } = useCovidStatus();

  if (isLoading) return <div>Loading...</div>;

  if (data)
    return (
      <div>
        {data.cnt_confirmations} {data.cnt_severe_symptoms}
        {data.cnt_hospitalizations} {data.cnt_deaths}
      </div>
    );

  return <div>Error</div>;
};

export default CovidStatus;
