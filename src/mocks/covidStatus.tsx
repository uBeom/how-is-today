import Icon from '@/components/common/Icons';

const COVID_STATUS_MOCK = [
  { icon: <Icon name='confirmation' size='lg' />, title: '일일 확진' },
  { icon: <Icon name='severeSymptom' size='lg' />, title: '재원 위중증' },
  { icon: <Icon name='hospital' size='lg' />, title: '신규 입원' },
  { icon: <Icon name='death' size='lg' />, title: '일일 사망' },
];

export default COVID_STATUS_MOCK;
