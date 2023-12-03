import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Welcome" />
      <div className="bg-dots-darker bg-dots-lighter relative min-h-screen bg-gray-200 bg-center selection:bg-red-500 selection:text-white sm:flex sm:items-center sm:justify-center">
        <Navbar auth={auth} />
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
            </div>
          </div>
        </div>
      </div>

      {/* <style>{`.bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
    }`}</style> */}
    </>
  );
}
