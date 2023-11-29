import React from 'react';
import Layout from './Layout/Layout';

export default function Admin(props) {
  return (
    <Layout>
      <div className="mt-5 flex justify-center">
        <h1 className="text-xl">
          Welcome to Inertia React Admin Panel Materi Subject
        </h1>
      </div>
      <div class="rounded-t-lg bg-gray-200 px-4 py-3">
        <h3 class="text-lg font-semibold">Materi</h3>
        <a
          href="materi/create"
          class="float-right mt-5 flex items-center rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
        >
          <svg
            class="mr-1 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Tambah Materi
        </a>
      </div>
      <br></br>
      <div className="mt-3 p-4">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th class="px-4 py-2">No</th>
                <th class="px-4 py-2">Judul Materi</th>
                <th class="px-4 py-2">Bab Materi</th>
                <th class="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>1</td>
                <td>abc</td>
                <td>4</td>
                <td className="border px-4 py-2">
                  <a
                    href=""
                    class="my-1 inline-block rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
                  >
                    Edit
                  </a>
                  <a
                    href=""
                    class="my-1 inline-block rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                    data-confirm-delete="true"
                  >
                    Delete
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
