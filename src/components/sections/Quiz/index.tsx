/* eslint-disable react-hooks/exhaustive-deps */
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Modal from '@/components/commons/Modal';
import Header from './Header';
import { AnswerProps, ModalProps, QuestionProps } from '@/types';
import Answer from './Answer';

const QUERY = gql`
  query {
    questions {
      id
      question
      hint
      answers {
        id
        answer
        isCorrect
      }
    }
  }
`;

const IntroPage = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(QUERY);

  const [showHint, setShowHint] = useState(false);
  const [modal, setModal] = useState<ModalProps | null>();
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps>();
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>();

  const handleAnswer = useCallback((answer: AnswerProps) => {
    setSelectedAnswer(answer);
  }, []);

  const handleOnBack = () => {
    setModal({
      title: 'Do you want to end quiz?',
      content: 'Once you end this quiz, you will have to start from the first question again.',
      cancelText: 'Cancel',
      confirmText: 'End quiz',
      onConfirm: () => router.push('/'),
      onCancel: () => setModal(null),
    });
  };

  const handleOnNext = () => {
    setModal(null);

    const currentIndex = data.questions.indexOf(currentQuestion);

    setCurrentQuestion(data.questions[currentIndex + 1]);
  };

  useEffect(() => {
    if (!data) return;

    setCurrentQuestion(data.questions[0]);
  }, [data]);

  useEffect(() => {
    if (selectedAnswer?.isCorrect) {
      const currentIndex = data.questions.indexOf(currentQuestion);

      if (currentIndex === data.questions?.length - 1) {
        router.push('/quiz-complete');
      } else {
        setModal({
          type: 'success',
          content: 'Show Vani Barcode on the Home screen',
          confirmText: 'Next',
          onConfirm: handleOnNext,
        });
      }
    }
  }, [selectedAnswer]);

  return (
    <main>
      <Header onBack={handleOnBack} />

      <div className="bg-orange-100 min-h-screen p-4">
        <p className="text-purple-900 font-bold">Q1</p>
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

      <Modal
        isOpen={!!modal}
        onCancel={modal?.onCancel}
        onConfirm={modal?.onConfirm}
        type={modal?.type}
        title={modal?.title}
        content={modal?.content}
        cancelText={modal?.cancelText}
        confirmText={modal?.confirmText}
      />
    </main>
  );
};

export default IntroPage;
