import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { useRouter } from 'next/navigation';

const IntroPage = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/quiz');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex items-center justify-center xl:w-1/2 lg:w-2/3">
        <Image src={Logo} alt="" />
      </div>

      <button
        type="button"
        className="mt-10 text-white bg-pink-500 hover:bg-pink-600 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleOnClick}
      >
        Start Quiz
      </button>
    </main>
  );
};

export default IntroPage;
