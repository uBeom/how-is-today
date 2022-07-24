import GNBItem from '../GNBItem';
import * as S from './style';

import { GNB } from '@/constants/GNB';

const Header = () => {
  const gnbItems = GNB.map((gnbItem, index) => (
    <GNBItem text={gnbItem} key={index} />
  ));

  return (
    <S.Container>
      <S.Nav>
        <S.GNB>{gnbItems}</S.GNB>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
