import * as S from './style';
import { IGNBItem } from './type';

import GNB_MOCK from '@/mocks/gnb';

const GNBItem = ({ name, src, icon }: IGNBItem) => {
  return (
    <S.Item
      fontWeight='medium'
      fontSize='md'
      lineHeight='tall'
      letterSpacing='wide'
      tColor='blue 600'
      bColor='gray 400'>
      <S.NLink
        tColor='blue 600'
        bColor='gray 400'
        to={src}
        className={({ isActive }) => (isActive ? 'active' : undefined)}>
        {icon}
        {name}
      </S.NLink>
    </S.Item>
  );
};

const Header = () => {
  const gnbItems = GNB_MOCK.map((data, index) => (
    <GNBItem {...data} key={index} />
  ));

  return (
    <S.Container>
      <S.GNB>
        <S.GNBList>{gnbItems}</S.GNBList>
      </S.GNB>
    </S.Container>
  );
};

export default Header;
