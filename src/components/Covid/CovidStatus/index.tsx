import useCovidStatus from '@/hooks/useCovidStatus';

const CovidStatus = () => {
  const { data, refetch } = useCovidStatus();
  return (
    <div>
      <button
        type='button'
        onClick={() => {
          refetch();
          console.log(data);
        }}>
        버튼
      </button>
    </div>
  );
};

export default CovidStatus;
