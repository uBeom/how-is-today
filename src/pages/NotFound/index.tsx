import { Link, useNavigate } from 'react-router-dom';

import * as S from './style';

import Icon from '@/components/common/Icons';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Main>
        <S.Title>404 Error</S.Title>
        요청하신 페이지를 찾을 수 없습니다.
        <br /> 입력하신 주소가 정확한지 다시 한번 확인해주세요.
        <Link to='/home'>메인 페이지로 돌아가기</Link>
        <S.Exp>
          <Icon name='home' size='md' />
        </S.Exp>
      </S.Main>
    </S.Container>
  );
};

export default NotFound;
