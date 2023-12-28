import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import LayoutStudent from '../Layout/LayoutStudent';

export default function Student() {
  const [subject, setSubjects] = useState([]);

  useEffect(() => {
    const getMaterial = async () => {
      try {
        const response = await axios.get('/api/student/materi');
        setSubjects(response.data.data);
      } catch (error) {
        console.log('Gagal Melakukan Fetching: ', error);
      }
    };
    getMaterial();
  }, []);
  return (
    <LayoutStudent>
      <Head title="Dashboard" />
      <div className="flex w-full flex-col justify-center space-y-6">
        <h1 className="font-head text-center text-2xl font-semibold text-gray-800">
          Daftar Materi
        </h1>
        <div className="space-y-2.5 font-body text-gray-600">
          {Object.values(subject).map((item, index) => (
            <div className="flex flex-row items-center justify-between rounded-sm border-2 border-gray-200 bg-gray-100 p-2">
              <p key={index} className="text-lg">
                {item.subject}
              </p>
              <Link
                href={`material/chapter/${item.id}`}
                className="font-head rounded bg-red-400 px-5 py-2.5 text-white hover:bg-red-600"
                aria-current="page"
              >
                Buka
              </Link>
            </div>
          ))}
        </div>
      </div>
    </LayoutStudent>
  );
}
