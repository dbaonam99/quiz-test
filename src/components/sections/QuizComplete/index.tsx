import Image from 'next/image';
import Firework from '@/public/complete.png';
import { useRouter } from 'next/navigation';

const QuizComplete = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <p className="text-white font-bold mb-10 text-center">
        You solved all the quizzes correctly!
      </p>

      <div className="flex items-center justify-center w-1/2 sm:w-1/3">
        <Image src={Firework} alt="" />
      </div>

      <button
        type="button"
        className="mt-10 text-white bg-pink-500 hover:bg-pink-600 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleOnClick}
      >
        Check coupon
      </button>
    </main>
  );
};

export default QuizComplete;
