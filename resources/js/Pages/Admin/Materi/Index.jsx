import React from 'react';
import Layout from '@/Pages/Layout/Layout';
import { Head, Link } from '@inertiajs/react';

export default function Admin(props) {
  const subjects = props.subject;
  return (
    <Layout>
      <Head title="Materi" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <h3 className="font-head text-xl font-semibold text-gray-800">
          Materi
        </h3>
        <Link
          href="materi/create"
          className="flex flex-row items-center rounded bg-blue-400 py-1.5 pl-1.5 pr-2.5 font-head text-white transition duration-300 hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1.5 h-6 w-6"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Materi
        </Link>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 font-head text-gray-800">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Judul Materi</th>
                <th className="px-4 py-2">Bab Materi</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(subjects).map((item, index) => (
                <tr key={index} className="text-center font-body text-gray-600">
                  <td>{index + 1}</td>
                  <td>{item.subject}</td>
                  <td>{item.id}</td>
                  <td className="flex flex-row justify-center space-x-4 py-2">
                    <Link
                      href={route('materi.edit', item.id)}
                      className="rounded bg-green-400 px-2.5 py-2 text-white hover:bg-green-600"
                    >
                      Edit
                    </Link>
                    <Link
                      href=""
                      className="rounded bg-red-400 px-2.5 py-2 text-white hover:bg-red-600"
                      data-confirm-delete="true"
                    >
                      Hapus
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
