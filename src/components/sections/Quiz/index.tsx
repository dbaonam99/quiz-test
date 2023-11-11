import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import Modal from '@/components/commons/Modal';
import Header from './Header';
import Icons from '@/components/commons/Icons';

const AllLinksQuery = gql`
  query {
    questions {
      id
      content
    }
  }
`;

const answer = [
  {
    _id: '1',
    value: 'zxc',
  },
  {
    _id: '2',
    value: 'zxc 2',
  },
  {
    _id: '3',
    value: 'zxc 3',
  },
];

const IntroPage = () => {
  const router = useRouter();

  const [showHint, setShowHint] = useState(false);
  const [showBackModal, setShowBackModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const { data, loading, error } = useQuery(AllLinksQuery);

  const handleAnswer = (id: string) => {
    setSelectedAnswer(id);
  };

  return (
    <main>
      <Header onBack={() => setShowBackModal(true)} />

      <div className="bg-orange-100 min-h-screen p-24">
        <p className="text-purple-900 font-bold">Q1</p>
        <p className="font-bold">How can you bal bla bal?</p>

        <div className="mt-10">
          {answer?.map((answer) => {
            const isSelected = answer._id === selectedAnswer;
            const isCorrect = isSelected;

            let resultClasses;
            if (isCorrect) {
              resultClasses = 'text-purple-700 border-purple-700';
            }

            return (
              <div
                key={answer._id}
                className={`flex items-center bg-white border rounded-lg w-full max-w-xl mt-2 cursor-pointer ${resultClasses}`}
                onClick={() => handleAnswer(answer._id)}
              >
                <p className="px-4 py-2">Answer</p>

                {isCorrect ? <Icons.Check /> : <Icons.Close />}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <span
            className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 cursor-pointer"
            onClick={() => setShowHint((prev) => !prev)}
          >
            {showHint ? 'Hide hint' : 'Show hint'}
          </span>

          {showHint && <p className="mt-1 text-sm">How can you bal bla bal?</p>}
        </div>
      </div>

      <Modal
        isOpen={showBackModal}
        onCancel={() => setShowBackModal(false)}
        onConfirm={() => router.push('/')}
        title="Do you want to end quiz?"
        content="Once you end this quiz, you will have to start from the first question again."
        cancelText="Cancel"
        confirmText="End quiz"
      />
    </main>
  );
};

export default IntroPage;
