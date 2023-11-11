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
  let classes = 'px-4 py-2 bg-white border rounded-lg w-full max-w-xl mt-2 cursor-pointer ';
  let textClasses = 'mr-4 text-sm text-left ';

  if (isSelected) {
    classes += data.isCorrect ? 'border-purple-700' : 'border-red-500';
    textClasses += data.isCorrect ? 'text-purple-700' : 'text-red-500 ';
  }

  return (
    <div className={classes} onClick={() => onClick(data)}>
      <div className="flex items-center">
        <p className={textClasses}>{data.answer}</p>

        {isSelected && data.isCorrect && <Icons.Check />}
      </div>

      {isSelected && !data.isCorrect && <p className="text-red-500 text-xs">Please try again</p>}
    </div>
  );
};

export default memo(Answer);
