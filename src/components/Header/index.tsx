import { useState } from 'react';

import * as S from './style';

import Icon from '@/components/common/Icons';
import GNBItem from '@/components/Header/GNBItem';
import { GNB } from '@/constants/gnb';

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handeClickMenu = () => setIsShowing(prev => !prev);

  const gnbItems = GNB.map((data, index) => <GNBItem {...data} key={index} />);

  return (
    <S.Container>
      <S.GNB
        flex='flex'
        $justifyContent='flex-end'
        $alignItems='center'
        {...{ isShowing }}>
        <S.Btn type='button' onClick={handeClickMenu}>
          <Icon name='menu' size='sm' />
        </S.Btn>
        <S.GNBList {...{ isShowing }}>{gnbItems}</S.GNBList>
      </S.GNB>
    </S.Container>
  );
};

export default Header;
