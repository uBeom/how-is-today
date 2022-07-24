import { Link } from 'react-router-dom';

import * as S from './style';

const GNBItem = ({ text }: { text: string }) => {
  return (
    <S.Item
      fontWeight='medium'
      fontSize='md'
      lineHeight='tall'
      letterSpacing='wide'>
      <Link to='/'>{text}</Link>
    </S.Item>
  );
};

export default GNBItem;
