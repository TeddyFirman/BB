import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, Head } from '@inertiajs/react';
import Accordion from '@/Components/Accordion';

export default function Exercise({ exercises }) {
  console.log(exercises);
  return (
    <>
      <Head title="Exercise" />
      <div className="relative mx-auto h-screen max-w-5xl">
        {/* Top Bar */}
        <div className="left-0 right-0 top-0 flex w-full items-center justify-between bg-slate-800 px-4 py-2 md:px-8">
          <Link
            href={route('/')}
            className="flex flex-row items-center rounded bg-red-600 p-4 text-white"
          >
            <ArrowLeftIcon
              className="h-5 w-5"
              strokeWidth={2.5}
              strokeLinecap="square"
            />
          </Link>
          <p className="font-head text-2xl text-white">Exercise List</p>
          <Link
            href={route('/')}
            className="flex flex-row items-center rounded p-4 text-transparent"
          >
            <ArrowLeftIcon
              className="h-5 w-5"
              strokeWidth={2.5}
              strokeLinecap="square"
            />
          </Link>
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center space-y-2 py-2 font-body text-slate-800">
          <Accordion title={'Grammar-Concept Understanding Problem (GUP)'}>
            <Link>Basic Grammar (J_GUP1)</Link>
            <Link>Basic Grammar (J_GUP2)</Link>
          </Accordion>
          <Accordion title={'Value Trace Problem (VTP)'}>
            <Link>Basic Grammar (J_VTP1)</Link>
            <Link>Advanced Grammar (J_VTP2)</Link>
            <Link>Data Structure & Algorithms (J_VTP3)</Link>
            <Link>Graph Theory (J_VTP4)</Link>
          </Accordion>
        </div>
      </div>
    </>
  );
}
