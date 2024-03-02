import React from 'react';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import { Head } from '@inertiajs/react';
import ShowProgress from '@/Components/Modal/ShowProgress';

export default function Admin(props) {
  const showProgress = () => {
    alert('Menampilkan Progres');
  };

  const [openProgress, setOpenProgress] = useState(false);

  return (
    <Layout>
      <Head title="Dashboard" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <h3 className="font-head text-xl font-semibold text-gray-800">
          Dashboard
        </h3>
      </div>
      <ShowProgress isOpen={openProgress} setIsOpen={setOpenProgress} />
      <div className="flex flex-col justify-center">
        <div className="my-2">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="font-head bg-gray-100 text-gray-800">
                  <th className="px-4 py-2">No. </th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Progres</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center font-body text-gray-600">
                  <td>1</td>
                  <td>{`user1_student@gmail.com`.toUpperCase()}</td>
                  <td>User Student</td>
                  <td className="flex flex-row justify-center space-x-4 py-2">
                    <button
                      onClick={() => {
                        setOpenProgress(true);
                      }}
                      className="rounded bg-green-400 px-2.5 py-2 text-white hover:bg-green-600"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
