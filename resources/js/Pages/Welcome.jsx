import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />
      <div className="relative min-h-screen bg-gray-50 bg-center selection:bg-red-500 selection:text-white sm:flex sm:items-center sm:justify-center">
        <Navbar />
        <div className="relative mx-auto h-screen max-w-6xl">
          <div className="flex h-full w-full flex-col items-center justify-center md:flex-row md:space-x-8">
            <div className="flex h-max w-full items-center justify-center">
              <img
                className="mx-auto w-72 transition duration-500 hover:scale-110 md:w-80"
                src="/images/Coding.SVG"
                alt="Hero Images"
              />
            </div>
            <div className="flex w-full flex-col justify-center">
              <p className="font-head text-2xl font-bold text-slate-800 md:text-4xl">
                <span className="text-red-600">{`Java `}</span>
                Programming Learning System, Let's Learn
                <span className="text-red-600">{' Java Programming '}</span>
                With Enjoy!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
