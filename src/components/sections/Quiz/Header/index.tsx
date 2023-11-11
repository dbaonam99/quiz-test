import Icons from '@/components/commons/Icons';
import { HeaderProps } from '@/types';

const Header = ({ onBack }: HeaderProps) => {
  return (
    <div className="bg-white p-5">
      <div className="cursor-pointer" onClick={onBack}>
        <Icons.Back />
      </div>
    </div>
  );
};

export default Header;
