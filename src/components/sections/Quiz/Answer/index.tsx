import Icons from '@/components/commons/Icons';
import { AnswerProps } from '@/types';
import { memo } from 'react';

interface AnswerComponentProps {
  data: AnswerProps;
  selectedAnswer: AnswerProps[] | undefined;
  onClick: (answer: AnswerProps) => void;
}

const Answer = ({ data, selectedAnswer, onClick }: AnswerComponentProps) => {
  const isSelected = selectedAnswer?.find((item) => item.id === data.id);
  let classes = 'flex items-center bg-white border rounded-lg w-full max-w-xl mt-2 cursor-pointer';

  if (isSelected) {
    classes += data.isCorrect ? 'text-purple-700 border-purple-700' : 'text-red-500 border-red-500';
  }

  return (
    <div className={classes} onClick={() => onClick(data)}>
      <p className="px-4 py-2">{data.answer}</p>

      {isSelected ? data.isCorrect ? <Icons.Check /> : <Icons.Close /> : null}
    </div>
  );
};

export default memo(Answer);
