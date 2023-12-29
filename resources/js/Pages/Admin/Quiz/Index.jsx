import axios from 'axios';
import Layout from '@/Pages/Layout/Layout';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import AddQuiz from '@/Components/Modal/AddQuiz';
import EditQuiz from '@/Components/Modal/EditQuiz';
import DeleteQuiz from '@/Components/Modal/DeleteQuiz';
import useSWR from 'swr';
import Loading from '@/Components/Loading';

export default function Index() {
  const [quiz, setQuiz] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [question, setQuestion] = useState([]);
  const [questionId, setQuestionId] = useState([]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data: quizs, isLoading: quizLoading } = useSWR(
    `/api/admin/get-question-quiz`,
    fetcher,
  );
  const { data: questions, isLoading: questionLoading } = useSWR(
    `/api/admin/qna`,
    fetcher,
  );
  const { data: chapters, isLoading: chapterLoading } = useSWR(
    `/api/admin/bab`,
    fetcher,
  );

  let quizItem = quizs?.data;
  const quizsLength = quizItem?.length;
  return (
    <Layout>
      <Head title="Kuis" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <AddQuiz isOpen={openAdd} setIsOpen={setOpenAdd} chapters={chapters} />
        {/* <EditQuiz
          isOpen={openEdit}
          chapters={chapter}
          questions={questions}
          questionId={questionId}
          setIsOpen={setOpenEdit}
        /> */}
        <DeleteQuiz
          isOpen={openDelete}
          setIsOpen={setOpenDelete}
          items={question}
        />
        <h3 className="font-head text-xl font-semibold text-gray-800">Kuis</h3>
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
          Quiz
        </button>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          {quizLoading ? (
            <Loading />
          ) : (
            <table className="w-full table-auto border-collapse border border-gray-200">
              {quizsLength === 0 ? (
                <div className="flex flex-row items-center justify-between rounded-sm border border-gray-200 bg-gray-100 p-2">
                  <p className="w-full text-center font-semibold text-gray-800">
                    Quiz Belum Tersedia, Silahkan Tambah Quiz
                  </p>
                </div>
              ) : (
                <>
                  <thead>
                    <tr className="font-head bg-gray-100 text-gray-800">
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Pertanyaan Quiz</th>
                      <th className="px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(quizItem).map((item, index) => (
                      <tr
                        key={item?.id}
                        className="text-center font-body text-gray-600"
                      >
                        <td>{index + 1}</td>
                        <td>{item?.questions}</td>
                        <td className="flex flex-row justify-center space-x-4 py-2">
                          <button
                            onClick={() => {
                              setOpenEdit(true);
                              setQuestion(item);
                              setQuestionId(item.id);
                            }}
                            className="rounded bg-blue-400 px-2.5 py-2 text-white hover:bg-blue-600"
                          >
                            Detail
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
