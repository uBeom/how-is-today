import GNBItem from '../GNBItem';
import * as S from './style';

import { GNB } from '@/mocks/gnb';

const Header = () => {
  const gnbItems = GNB.map((info, index) => <GNBItem {...info} key={index} />);

  return (
    <S.Container>
      <S.GNB>
        <S.GNBList>{gnbItems}</S.GNBList>
      </S.GNB>
    </S.Container>
  );
};

export default Header;
