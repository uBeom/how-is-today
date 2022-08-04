import * as S from './style';
import { IGNBItem } from './types';

const GNBItem = ({ name, src, icon }: IGNBItem) => {
  return (
    <S.Item
      fontWeight='medium'
      fontSize='md'
      lineHeight='tall'
      letterSpacing='wide'
      $tColor='blue 600'
      $bColor='gray 400'>
      <S.NLink
        $tColor='blue 600'
        $bColor='gray 400'
        to={src}
        flex='flex'
        $justifyContent='center'
        $alignItems='center'
        className={({ isActive }) => (isActive ? 'active' : undefined)}>
        {icon}
        {name}
      </S.NLink>
    </S.Item>
  );
};

export default GNBItem;
