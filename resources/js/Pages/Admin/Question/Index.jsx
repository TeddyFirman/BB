import useSWR from 'swr';
import axios from 'axios';
import Loading from '@/Components/Loading';
import Layout from '@/Pages/Layout/Layout';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import AddQuestion from '@/Components/Modal/AddQuestion';
import EditQuestion from '@/Components/Modal/EditQuestion';
import DeleteQuestion from '@/Components/Modal/DeleteQuestion';

export default function Index() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [question, setQuestion] = useState([]);

  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data, isLoading } = useSWR(`/api/admin/qna`, fetcher);

  let questions = data?.data;
  const questionsLength = questions?.length;

  return (
    <Layout>
      <Head title="Pertanyaan" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <AddQuestion isOpen={openAdd} setIsOpen={setOpenAdd} />
        <EditQuestion
          items={question}
          isOpen={openEdit}
          setIsOpen={setOpenEdit}
        />
        <DeleteQuestion
          item={question}
          isOpen={openDelete}
          setIsOpen={setOpenDelete}
        />
        <h3 className="font-head text-xl font-semibold text-gray-800">
          Pertanyaan
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
          Pertanyaan
        </button>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          {isLoading ? (
            <Loading />
          ) : (
            <table className="w-full table-auto border-collapse border border-gray-200">
              {questionsLength === 0 ? (
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
                      <th className="px-4 py-2">Pertanyaan</th>
                      <th className="px-4 py-2">Jawaban</th>
                      <th className="px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(questions).map((item, index) => (
                      <tr
                        key={index}
                        className="text-center font-body text-gray-600"
                      >
                        <td>{index + 1}</td>
                        <td>{item?.question}</td>
                        <td>{item.answers[0].answer}</td>
                        <td className="flex flex-row justify-center space-x-4 py-2">
                          <button
                            onClick={() => {
                              setOpenEdit(true);
                              setQuestion(item);
                            }}
                            className="rounded bg-green-400 px-2.5 py-2 text-white hover:bg-green-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              setOpenDelete(true);
                              setQuestion(item);
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
