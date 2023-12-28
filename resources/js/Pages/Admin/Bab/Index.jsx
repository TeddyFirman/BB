import axios from 'axios';
import Layout from '@/Pages/Layout/Layout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import AddChapter from '@/Components/Modal/AddChapter';
import EditChapter from '@/Components/Modal/EditChapter';
import DeleteChapter from '@/Components/Modal/DeleteChapter';
import useSWR from 'swr';
import Loading from '@/Components/Loading';

export default function Index() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [chapter, setChapter] = useState([]);

  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data: chapters, isLoading: chaptersLoading } = useSWR(
    `/api/admin/bab`,
    fetcher,
  );
  let getChapters = chapters?.data;
  const chapterLength = getChapters?.length;
  return (
    <Layout>
      <Head title="Sub-Materi" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <AddChapter isOpen={openAdd} setIsOpen={setOpenAdd} />
        <EditChapter
          items={chapter}
          isOpen={openEdit}
          setIsOpen={setOpenEdit}
        />
        <DeleteChapter
          items={chapter}
          isOpen={openDelete}
          setIsOpen={setOpenDelete}
        />
        <h3 className="font-head text-xl font-semibold text-gray-800">
          Sub-Materi
        </h3>
        <button
          onClick={() => setOpenAdd(true)}
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
          Sub-Materi
        </button>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          {chaptersLoading ? (
            <Loading />
          ) : (
            <table className="w-full table-auto border-collapse border border-gray-200">
              {chapterLength === 0 ? (
                <div className="flex flex-row items-center justify-between rounded-sm border border-gray-200 bg-gray-100 p-2">
                  <p className="w-full text-center font-semibold text-gray-800">
                    Sub-Materi Belum Tersedia, Silahkan Tambah Sub-Materi
                  </p>
                </div>
              ) : (
                <>
                  <thead>
                    <tr className="font-head bg-gray-100 text-gray-800">
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Sub-Materi</th>
                      <th className="px-4 py-2">Materi</th>
                      <th className="px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(getChapters).map((item, index) => (
                      <tr
                        key={index}
                        className="text-center font-body text-gray-600"
                      >
                        <td>{index + 1}</td>
                        <td>{item?.judul}</td>
                        <td>{item?.subject?.subject}</td>
                        <td className="flex flex-row justify-center space-x-4 py-2">
                          <button
                            onClick={() => {
                              setOpenEdit(true);
                              setChapter(item);
                            }}
                            className="rounded bg-green-400 px-2.5 py-2 text-white hover:bg-green-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              setOpenDelete(true);
                              setChapter(item);
                            }}
                            className="rounded bg-red-400 px-2.5 py-2 text-white hover:bg-red-600"
                            data-confirm-delete="true"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              )}
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
}
