import * as S from './style';
import { IGNBItem } from './type';

import HouseIcon from '@/assets/icons/HouseIcon';
import { GNB_MOCK } from '@/mocks/gnb';

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
        <HouseIcon width='30' height='30' />
        {name}
      </S.NLink>
    </S.Item>
  );
};

const Header = () => {
  const gnbItems = GNB_MOCK.map((info, index) => (
    <GNBItem {...info} key={index} />
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