import React from 'react';
import Layout from '@/Pages/Layout/Layout';
import { Head, Link } from '@inertiajs/react';

export default function Admin(props) {
  return (
    <Layout>
      <Head title="Materi" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <h3 className="font-head text-xl font-semibold text-gray-800">
          Materi
        </h3>
        <Link
          href="materi/create"
          className="font-head flex flex-row items-center rounded bg-blue-400 py-1.5 pl-1.5 pr-2.5 text-white transition duration-300 hover:bg-blue-600"
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
              <tr className="font-head bg-gray-100 text-gray-800">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Judul Materi</th>
                <th className="px-4 py-2">Bab Materi</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-body text-center text-gray-600">
                <td>1</td>
                <td>Contoh</td>
                <td>4</td>
                <td className="flex flex-row justify-center space-x-4 py-2">
                  <a
                    href=""
                    className="rounded bg-green-400 px-2.5 py-2 text-white hover:bg-green-600"
                  >
                    Edit
                  </a>
                  <a
                    href=""
                    className="rounded bg-red-400 px-2.5 py-2 text-white hover:bg-red-600"
                    data-confirm-delete="true"
                  >
                    Hapus
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
