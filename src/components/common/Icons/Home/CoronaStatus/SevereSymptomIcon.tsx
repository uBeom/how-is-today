import * as S from '@/components/common/Icons/style';
import { IIConsProps } from '@/components/common/Icons/types';

const SevereSymptomIcon = ({ size }: IIConsProps) => {
  return (
    // Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com
    // License - https://fontawesome.com/license (Commercial License) Copyright
    // 2022 Fonticons, Inc.
    <S.Icon
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 512'
      {...{ size }}>
      <title>재원 위중증</title>
      <path d='M524 64H616C629.3 64 640 74.75 640 88C640 101.3 629.3 112 616 112H512C504.4 112 497.3 108.4 492.8 102.4L468.7 70.31L421.7 170.2C418 178.1 410.4 183.3 401.8 183.9C393.1 184.6 384.8 180.5 380 173.3L339.2 112H216C202.7 112 192 101.3 192 88C192 74.75 202.7 64 216 64H352C360 64 367.5 68.01 371.1 74.69L396.4 111.3L442.3 13.78C445.9 6.163 453.2 .9806 461.6 .1246C469.9-.7314 478.1 2.865 483.2 9.6L524 64zM320 160H332.7L353.4 191.1C364.6 207.9 384 217.3 404.1 215.8C424.3 214.4 442.1 202.1 450.7 183.8L461.9 160H544C597 160 640 202.1 640 256V480C640 497.7 625.7 512 608 512C590.3 512 576 497.7 576 480V448H64V480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480V96C0 78.33 14.33 64 32 64C49.67 64 64 78.33 64 96V352H288V192C288 174.3 302.3 160 320 160zM96 240C96 195.8 131.8 160 176 160C220.2 160 256 195.8 256 240C256 284.2 220.2 320 176 320C131.8 320 96 284.2 96 240z' />
    </S.Icon>
  );
};

export default SevereSymptomIcon;
