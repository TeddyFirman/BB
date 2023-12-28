import axios from 'axios';
import Layout from '@/Pages/Layout/Layout';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import AddQuiz from '@/Components/Modal/AddQuiz';
import EditQuiz from '@/Components/Modal/EditQuiz';
import DeleteQuiz from '@/Components/Modal/DeleteQuiz';

export default function Index() {
  const [quiz, setQuiz] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [question, setQuestion] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionId, setQuestionId] = useState([]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await axios.get('/api/admin/get-question-quiz');
        setQuiz(response.data.data);
      } catch (error) {
        console.error('Error Fetching Quiz:', error);
      }
    };
    getQuiz();
    const getQuestion = async () => {
      try {
        const response = await axios.get('/api/admin/qna');
        setQuestions(response.data.data);
      } catch (error) {
        console.error('Error Fetching Question:', error);
      }
    };
    getQuestion();
    const getChapter = async () => {
      try {
        const response = await axios.get('/api/admin/bab');
        setChapter(response.data.data);
      } catch (error) {
        console.error('Error Fetching Chapter:', error);
      }
    };
    getChapter();
  }, []);
  return (
    <Layout>
      <Head title="Materi" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <AddQuiz
          isOpen={openAdd}
          chapters={chapter}
          questions={questions}
          setIsOpen={setOpenAdd}
        />
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
        <h3 className="font-head text-xl font-semibold text-gray-800">
          Halaman Quiz
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
          Quiz
        </button>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="font-head bg-gray-100 text-gray-800">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Pertanyaan Quiz</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {quiz.map((item, index) => (
                <tr
                  key={item?.id}
                  className="text-center font-body text-gray-600"
                >
                  <td>{index + 1}</td>
                  <td>{item?.questions}</td>
                  <td className="flex flex-row justify-center space-x-4 py-2">
                    {/* <button
                      onClick={() => {
                        setOpenEdit(true);
                        setQuestion(item);
                        setQuestionId(item.id);
                      }}
                      className="rounded bg-blue-400 px-2.5 py-2 text-white hover:bg-blue-600"
                    >
                      Detail
                    </button> */}
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
          </table>
        </div>
      </div>
    </Layout>
  );
}
