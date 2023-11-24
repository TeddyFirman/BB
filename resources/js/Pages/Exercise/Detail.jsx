import ButtonPrimary from '@/Components/ButtonPrimary';
import { Link, Head } from '@inertiajs/react';

export default function Detail() {
  const data = [
    { number: 1, problemName: 'Basic Concepts', remark: 'Complete' },
    { number: 2, problemName: 'Scanner Class', remark: 'Tried' },
    { number: 3, problemName: 'If Condition', remark: 'Tried' },
  ];
  console.log(data);
  return (
    <>
      <Head title="Detail" />
      <div className="relative mx-auto h-screen max-w-5xl">
        {/* Top Bar */}
        <div className="absolute left-0 right-0 top-0 flex w-full items-center justify-between bg-slate-800 px-8 py-2 font-mono">
          <Link href={route('exercise')}>
            <ButtonPrimary>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </ButtonPrimary>
          </Link>
          <p className="font-code text-lg font-bold text-white">
            Exercise for Java Programming
          </p>
          <Link href={route('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="transparent"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="inherit"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </Link>
        </div>
        {/* Content */}
        <div className="flex h-full flex-col py-16 font-body text-slate-800">
          <table className="border-separate border border-slate-500">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="border border-slate-600 bg-slate-800">No</th>
                <th className="border border-slate-600 bg-slate-800">
                  Problem Name
                </th>
                <th className="border border-slate-600 bg-slate-800">Remark</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
}
