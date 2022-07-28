import ConfirmationIcon from '@/assets/icons/Home/CoronaStatus/ConfirmationIcon';
import DeathIcon from '@/assets/icons/Home/CoronaStatus/DeathIcon';
import HospitalIcon from '@/assets/icons/Home/CoronaStatus/HospitalIcon';
import SevereSymptom from '@/assets/icons/Home/CoronaStatus/SevereSymptomIcon';

const COVID_STATUS_MOCK = [
  { icon: <ConfirmationIcon />, title: '일일 확진' },
  { icon: <SevereSymptom />, title: '재원 위중증' },
  { icon: <HospitalIcon />, title: '신규 입원' },
  { icon: <DeathIcon />, title: '일일 사망' },
];

export default COVID_STATUS_MOCK;
