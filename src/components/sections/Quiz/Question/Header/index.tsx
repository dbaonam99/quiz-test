import Icons from '@/components/commons/Icons';
import { memo, useEffect, useState } from 'react';

interface Props {
  onBack: () => void;
  totalQuestion: number;
  currentQuestion: number;
}

const Header = ({ onBack, currentQuestion, totalQuestion }: Props) => {
  const [width, setWidth] = useState('');

  useEffect(() => {
    setWidth(((currentQuestion - 1) / totalQuestion) * 100 + '%');
  }, [currentQuestion, totalQuestion]);

  return (
    <div className="bg-white p-5 relative">
      <div className="cursor-pointer" onClick={onBack}>
        <Icons.Back />
      </div>
      <div
        className="bg-purple-500  h-1 absolute left-0 bottom-0 transition-all"
        style={{ width }}
      />
    </div>
  );
};

export default memo(Header);
