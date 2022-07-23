import * as S from './style';

const Practice = ({
  label,
  isActive,
}: {
  label: string;
  isActive: boolean;
}) => {
  return (
    <S.PracticeBtn type='button' isActive={isActive}>
      {label}
    </S.PracticeBtn>
  );
};

export default Practice;
