import axios from 'axios';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import LayoutStudent from '../Layout/LayoutStudent';
import useSWR from 'swr';
import Loading from '@/Components/Loading';

export default function Student() {
  const fetcher = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(`/api/student/materi`, fetcher);

  const subjects = data?.data;
  return (
    <LayoutStudent>
      <Head title="Materi" />
      <div className="flex w-full flex-col justify-center space-y-6">
        <h1 className="font-head h-10 text-center text-2xl font-semibold text-gray-800">
          Daftar Materi
        </h1>
        <div className="space-y-2.5 font-body text-gray-600">
          {isLoading ? (
            <Loading />
          ) : (
            Object.values(subjects).map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between rounded-sm border-2 border-gray-200 bg-gray-100 p-2"
              >
                <p className="text-lg">
                  {index + 1}.&nbsp;{item.subject}
                </p>
                <Link
                  href={`material/chapter/${item.id}`}
                  className="font-head rounded bg-red-400 px-5 py-2.5 text-white hover:bg-red-600"
                  aria-current="page"
                >
                  Buka
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </LayoutStudent>
  );
}
