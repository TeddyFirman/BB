import useSWR from 'swr';
import axios from 'axios';
import Layout from '@/Pages/Layout/Layout';
import Loading from '@/Components/Loading';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import AddQuiz from '@/Components/Modal/AddQuiz';
import EditQuiz from '@/Components/Modal/EditQuiz';
import DeleteQuiz from '@/Components/Modal/DeleteQuiz';

export default function Index() {
  const [chapters, setChapters] = useState([]);
  const [question, setQuestion] = useState([]);
  const [chapterId, setChapterId] = useState([]);
  const [chapterTitle, setChapterTitle] = useState([]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const fetcher = (url) => axios.get(url).then((response) => response?.data);
  const { data: quizs, isLoading: quizLoading } = useSWR(
    `/api/admin/get-question-quiz`,
    fetcher,
  );
  useEffect(() => {
    try {
      axios.get(`/api/admin/bab`).then((response) => {
        setChapters(response?.data);
      });
    } catch (error) {
      console.log('Gagal Memuat Data', error);
    }
  }, []);

  let chapterItem = chapters?.data;

  return (
    <Layout>
      <Head title="Kuis" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <AddQuiz isOpen={openAdd} setIsOpen={setOpenAdd} chapters={chapters} />
        <EditQuiz
          isOpen={openEdit}
          chapterId={chapterId}
          setIsOpen={setOpenEdit}
          chapterTitle={chapterTitle}
        />
        <h3 className="font-head text-xl font-semibold text-gray-800">Kuis</h3>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            {!chapterItem ? (
              <thead className="flex flex-row items-center justify-between rounded-sm border border-gray-200 bg-gray-100 p-2">
                <th className="w-full text-center">
                  Quiz Belum Tersedia, Silahkan Tambah Quiz
                </th>
              </thead>
            ) : (
              <>
                <thead>
                  <tr className="font-head bg-gray-100 text-gray-800">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Sub-Materi</th>
                    <th className="px-4 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(chapterItem).map((item, index) => (
                    <tr
                      key={item?.id}
                      className="text-center font-body text-gray-600"
                    >
                      <td>{index + 1}</td>
                      <td>{item?.judul}</td>
                      <td className="flex flex-row justify-center space-x-4 py-2">
                        <button
                          onClick={() => {
                            setOpenAdd(true);
                            setQuestion(item);
                            setChapterId(item?.id);
                          }}
                          className="flex flex-row items-center space-x-1.5 rounded bg-blue-400 py-2 pl-1.5 pr-2.5 text-white hover:bg-blue-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="square"
                              strokeLinejoin="inherit"
                              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          <p>Kuis</p>
                        </button>
                        <button
                          onClick={() => {
                            setOpenEdit(true);
                            setQuestion(item);
                            setChapterId(item.id);
                            setChapterTitle(item.judul);
                          }}
                          className="flex flex-row items-center space-x-1.5 rounded bg-blue-400 py-2 pl-1.5 pr-2.5 text-white hover:bg-blue-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="square"
                              strokeLinejoin="inherit"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>

                          <p>Kuis</p>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        </div>
      </div>
    </Layout>
  );
}
