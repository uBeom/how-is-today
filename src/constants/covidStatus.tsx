import Icon from '@/components/common/Icons';

export const COVID_STATUS = [
  { icon: <Icon name='confirmation' size='lg' />, title: '일일 확진' },
  { icon: <Icon name='severeSymptom' size='lg' />, title: '재원 위중증' },
  { icon: <Icon name='hospital' size='lg' />, title: '신규 입원' },
  { icon: <Icon name='death' size='lg' />, title: '일일 사망' },
];

export const REMAINDER_VALUE = {
  MANY: 1000,
  AFEW: 500,
  FEW: 10,
};
