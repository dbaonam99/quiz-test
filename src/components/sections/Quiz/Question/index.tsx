import { useState } from 'react';
import Answer from '../Answer';
import { AnswerProps, QuestionProps } from '@/types';

interface Props {
  currentQuestion: QuestionProps | undefined;
  handleAnswer: (answer: AnswerProps) => void;
  selectedAnswer: AnswerProps[];
}

const Question = ({ currentQuestion, handleAnswer, selectedAnswer }: Props) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="bg-orange-100 min-h-screen p-4">
      <p className="text-purple-900 font-bold">Q{currentQuestion?.order}</p>
      <p className="font-bold">{currentQuestion?.question}</p>

      <div className="mt-10">
        {currentQuestion?.answers?.map((answer: AnswerProps) => (
          <Answer
            key={answer.id}
            data={answer}
            onClick={handleAnswer}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </div>

      <div className="mt-10">
        <span
          className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 cursor-pointer"
          onClick={() => setShowHint((prev) => !prev)}
        >
          {showHint ? 'Hide hint' : 'Show hint'}
        </span>

        {showHint && <p className="mt-1 text-sm">{currentQuestion?.hint}</p>}
      </div>
    </div>
  );
};

export default Question;
