import * as S from '@/components/common/Icons/style';
import { IIConsProps } from '@/components/common/Icons/types';

const MehIcon = ({ size }: IIConsProps) => {
  return (
    // Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com
    // License - https://fontawesome.com/license (Commercial License) Copyright
    // 2022 Fonticons, Inc.
    <S.Icon
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      {...{ size }}>
      <title>보통</title>
      <path d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM160 336C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368H352C360.8 368 368 360.8 368 352C368 343.2 360.8 336 352 336H160z' />
    </S.Icon>
  );
};

export default MehIcon;
