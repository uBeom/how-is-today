/* eslint-disable import/extensions */
import * as S from './style';
import { IGNBItem } from './type';

const GNBItem = ({ name, src }: IGNBItem) => {
  return (
    <S.Item
      fontWeight='medium'
      fontSize='md'
      lineHeight='tall'
      letterSpacing='wide'>
      <S.NLink
        to={src}
        className={({ isActive }) => (isActive ? 'active' : undefined)}>
        {name}
      </S.NLink>
    </S.Item>
  );
};

export default GNBItem;
