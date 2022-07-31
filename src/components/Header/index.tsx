import { useState } from 'react';

import * as S from './style';
import { IGNBItem } from './types';

import Icon from '@/components/common/Icons';
import GNB_MOCK from '@/mocks/gnb';

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

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handeClickMenu = () => setIsShowing(prev => !prev);

  const gnbItems = GNB_MOCK.map((data, index) => (
    <GNBItem {...data} key={index} />
  ));

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
