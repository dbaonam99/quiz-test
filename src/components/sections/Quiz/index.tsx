/* eslint-disable react-hooks/exhaustive-deps */
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Modal, { ModalProps } from '@/components/commons/Modal';
import Header from './Question/Header';
import { AnswerProps, QuestionProps } from '@/types';
import Loading from '@/components/commons/Loading';
import Question from './Question';

const QUERY = gql`
  query {
    questions {
      id
      question
      hint
      order
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
  const { data, loading } = useQuery(QUERY);

  const [modal, setModal] = useState<ModalProps | null>();
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>();

  const { answers = [] } = currentQuestion || {};
  const correctAnswerLength = answers?.filter((answer: AnswerProps) => answer.isCorrect)?.length;
  const isMultipleAnswer = correctAnswerLength > 1;

  const handleOnBack = useCallback(() => {
    setModal({
      title: 'Do you want to end quiz?',
      content: 'Once you end this quiz, you will have to start from the first question again.',
      cancelText: 'Cancel',
      confirmText: 'End quiz',
      onConfirm: () => router.push('/'),
      onCancel: () => setModal(null),
    });
  }, []);

  const handleOnNext = () => {
    setModal({
      type: 'success',
      content: 'Show Vani Barcode on the Home screen',
      confirmText: 'Next',
      onConfirm: () => {
        setModal(null);
        setSelectedAnswer([]);
        setCurrentQuestion(data.questions[currentQuestion?.order || 0 + 1]);
      },
    });
  };

  const handleAnswer = useCallback(
    (answer: AnswerProps) => {
      if (isMultipleAnswer) {
        setSelectedAnswer((prev) => {
          if (prev.find((item) => item.id === answer.id)) return prev;
          return [...prev, answer];
        });
      } else {
        setSelectedAnswer([answer]);
      }
    },
    [isMultipleAnswer]
  );

  useEffect(() => {
    if (!data) return;

    setCurrentQuestion(data.questions[0]);
  }, [data]);

  useEffect(() => {
    if (selectedAnswer?.length === 0) return;

    const correctCondition = isMultipleAnswer
      ? selectedAnswer.filter((item) => item.isCorrect).length === correctAnswerLength
      : selectedAnswer[0]?.isCorrect;

    if (correctCondition) {
      if (currentQuestion?.order === data.questions?.length) {
        router.push('/quiz-complete');
      } else {
        handleOnNext();
      }
    }
  }, [selectedAnswer, isMultipleAnswer]);

  return (
    <main className="h-screen overflow-hidden">
      <Header
        onBack={handleOnBack}
        totalQuestion={data?.questions?.length}
        currentQuestion={currentQuestion?.order || 0}
      />

      <Question
        currentQuestion={currentQuestion}
        handleAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />

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

      {loading && <Loading />}
    </main>
  );
};

export default IntroPage;
