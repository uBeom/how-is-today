import Icon from '@/components/common/Icons';

const COVID_STATUS_MOCK = [
  { icon: <Icon name='Confirmation' size='lg' />, title: '일일 확진' },
  { icon: <Icon name='SevereSymptom' size='lg' />, title: '재원 위중증' },
  { icon: <Icon name='Hospital' size='lg' />, title: '신규 입원' },
  { icon: <Icon name='Death' size='lg' />, title: '일일 사망' },
];

export default COVID_STATUS_MOCK;
