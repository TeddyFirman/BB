import useSWR from 'swr';
import axios from 'axios';
import React from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import LayoutStudent from '../../Layout/LayoutStudent';

const fetcher = (url) => axios.get(url).then((response) => response.data);

export default function Student() {
  const { props } = usePage();

  const params = props.ziggy.location;
  const chapterId = params.split('/').pop();

  const { data, isLoading } = useSWR(
    `/api/student/bab-materi/${chapterId}`,
    fetcher,
  );
  const chapters = data?.babs;
  return (
    <LayoutStudent>
      <Head title="Sub-Materi" />
      <div className="flex w-full flex-col justify-center space-y-6">
        <div className="flex h-10 flex-row items-center justify-between">
          <Link
            href={route('student.material')}
            className="font-head flex w-max flex-row items-center rounded bg-red-400 py-2.5 pl-2.5 pr-3 text-white hover:bg-red-600"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="inherit"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp;Kembali
          </Link>
          <h1 className="font-head text-center text-2xl font-semibold text-gray-800">
            Daftar Sub-Materi
          </h1>
          <Link
            href={route('student.material')}
            className="font-head invisible flex w-max flex-row items-center rounded bg-red-400 py-2.5 pl-2.5 pr-3 text-white hover:bg-red-600"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="inherit"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp;Kembali
          </Link>
        </div>
        <div className="space-y-2.5 font-body text-gray-600">
          {isLoading ? (
            <div className="flex flex-row items-center justify-between rounded-sm border-2 border-gray-200 bg-gray-100 p-2">
              <p className="w-full text-center text-lg font-semibold text-gray-800">
                Sedang Memuat...
              </p>
            </div>
          ) : (
            Object.values(chapters).map((item, index) => (
              <div className="flex w-full flex-col items-center justify-between rounded-sm border-2 border-gray-200 bg-gray-100 p-2">
                <div className="flex w-full flex-row items-center justify-between space-x-2.5">
                  <p key={index} className="text-lg">
                    {index + 1}.&nbsp;{item?.judul}
                  </p>
                  <Link
                    href={`/student/material/chapter/${chapterId}/exercise/${item?.form_id}`}
                    className="font-head rounded bg-red-400 px-5 py-2.5 text-white hover:bg-red-600"
                    aria-current="page"
                  >
                    Buka
                  </Link>
                </div>
                <div className="mt-1.5 w-full border-t-2 pt-1.5">
                  <p className="font-body">Status: </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </LayoutStudent>
  );
}
