import { IIConProps } from './types';

import HomeIcon from '@/components/common/Icons/Header/HomeIcon';
import MenuIcon from '@/components/common/Icons/Header/MenuIcon';
import SettingsIcon from '@/components/common/Icons/Header/SettingsIcon';
import TodoIcon from '@/components/common/Icons/Header/TodoIcon';
import ConfirmationIcon from '@/components/common/Icons/Home/CoronaStatus/ConfirmationIcon';
import DeathIcon from '@/components/common/Icons/Home/CoronaStatus/DeathIcon';
import HospitalIcon from '@/components/common/Icons/Home/CoronaStatus/HospitalIcon';
import SevereSymptomIcon from '@/components/common/Icons/Home/CoronaStatus/SevereSymptomIcon';
import FrownIcon from '@/components/common/Icons/ParticulateMatter/FrownIcon';
import MehIcon from '@/components/common/Icons/ParticulateMatter/MehIcon';
import SmileIcon from '@/components/common/Icons/ParticulateMatter/SmileIcon';

function getIcon(name: string, size: string): JSX.Element {
  switch (name) {
    case 'home':
      return <HomeIcon {...{ size }} />;
    case 'menu':
      return <MenuIcon {...{ size }} />;
    case 'settings':
      return <SettingsIcon {...{ size }} />;
    case 'todo':
      return <TodoIcon {...{ size }} />;
    case 'confirmation':
      return <ConfirmationIcon {...{ size }} />;
    case 'death':
      return <DeathIcon {...{ size }} />;
    case 'hospital':
      return <HospitalIcon {...{ size }} />;
    case 'frown':
      return <FrownIcon {...{ size }} />;
    case 'meh':
      return <MehIcon {...{ size }} />;
    case 'smile':
      return <SmileIcon {...{ size }} />;
    default:
      return <SevereSymptomIcon {...{ size }} />;
  }
}

const Icon = ({ name, size }: IIConProps): JSX.Element => {
  return getIcon(name, size);
};

export default Icon;
