import ButtonPrimary from '@/Components/ButtonPrimary';
import { Link, Head } from '@inertiajs/react';

export default function Homepage() {
  return (
    <>
      <Head title="Homepage" />
      <div className="relative mx-auto h-screen max-w-5xl">
        <div className="flex h-full flex-col items-center justify-center px-16 py-8 md:flex-row md:space-x-8">
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
            <Link
              href={route('exercise')}
              className="py-4 font-body font-semibold"
            >
              <ButtonPrimary>Open Exercise</ButtonPrimary>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
