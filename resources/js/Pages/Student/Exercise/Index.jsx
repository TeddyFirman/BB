import useSWR from 'swr';
import axios from 'axios';
import Swal from 'sweetalert2';
import Markdown from 'react-markdown';
import React, { useEffect } from 'react';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import rehypePrism from 'rehype-prism-plus';
import LayoutStudent from '../../Layout/LayoutStudent';
import { Head, usePage, Link } from '@inertiajs/react';
import withReactContent from 'sweetalert2-react-content';

export default function Student() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const { props } = usePage();

  const params = props.ziggy.location;
  const parts = params.split('/');
  const lastParts = params.split('/').pop();

  const chapterIndex = parts.indexOf('chapter');
  const chapterId = parts[chapterIndex + 1];

  const alertWithSwal = withReactContent(Swal);

  const fetcher = (url) => axios.get(url).then((response) => response.data);

  const { data: exercises, isLoading: exerciseLoading } = useSWR(
    `/api/student/form-soal/${lastParts}`,
    fetcher,
  );
  const codeQuestion = exercises?.bab && exercises.bab[0]?.code_question;
  const quiz = exercises?.qna;
  const babId = quiz || [];

  async function submit(data) {
    await axios
      .post('/api/student/bab-submit', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        alertWithSwal.fire({
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          width: '50%',
          title: (
            <p className="text-center text-lg font-semibold text-green-600">
              Perintah Berhasil
            </p>
          ),
          html: (
            <div className="text-center font-medium text-green-400">
              Terima Kasih Telah Mengerjakan
            </div>
          ),
        });
        router.visit(`/student/material/chapter/${chapterId}`);
      })
      .catch((error) => {
        console.log(error);
        alertWithSwal.fire({
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          width: '50%',
          title: (
            <p className="text-center text-lg font-semibold text-red-600">
              Perintah Gagal
            </p>
          ),
          html: (
            <div className="text-center font-medium text-red-400">
              Kuis Gagal Ditambahkan
            </div>
          ),
        });
      });
  }
  useEffect(() => {
    setValue('bab_id', parseInt(babId[0]?.bab_id || []));
  }, [setValue, babId[0]?.bab_id || []]);

  return (
    <LayoutStudent>
      <Head title="Bab" />
      <div className="flex w-full flex-col justify-center space-y-6">
        <div className="flex h-10 flex-row items-center justify-between">
          <Link
            href={`/student/material/chapter/${chapterId}`}
            className="font-head flex w-max flex-row items-center rounded bg-red-400 py-2.5 pl-2.5 pr-3 text-white hover:bg-red-600"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="inherit"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp;Kembali
          </Link>
          <h1 className="font-head text-center text-2xl font-semibold text-gray-800">
            Latihan Soal
          </h1>
          <Link
            href={route('student.material')}
            className="font-head invisible flex w-max flex-row items-center rounded bg-red-400 py-2.5 pl-2.5 pr-3 text-white hover:bg-red-600"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="inherit"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp;Kembali
          </Link>
        </div>
        {quiz == undefined ? (
          <div className="flex flex-row items-center justify-between rounded-sm border-2 border-gray-200 bg-gray-100 p-2">
            <p className="w-full text-center text-lg font-semibold text-gray-800">
              Quiz Tidak Tersedia
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-row items-center justify-between rounded-sm border-2 border-gray-200 bg-gray-100 p-2">
              <Markdown className="w-full" rehypePlugins={rehypePrism}>
                {codeQuestion}
              </Markdown>
            </div>

            <div className="space-y-2.5 font-body text-gray-600">
              {exerciseLoading ? (
                <div className="flex flex-row items-center justify-between rounded-sm border-2 border-gray-200 bg-gray-100 p-2">
                  <p className="w-full text-center text-lg font-semibold text-gray-800">
                    Sedang Memuat...
                  </p>
                </div>
              ) : (
                <div>
                  <form
                    className="space-y-2 rounded-sm border-2 border-gray-200 bg-gray-100 p-2"
                    method="POST"
                    onSubmit={handleSubmit(submit)}
                  >
                    <p className="font-bold">Pertanyaan :</p>
                    {/* Untuk Parameter Id */}
                    <div className="hidden w-full flex-row">
                      <label className="w-1/2 font-body">
                        Kode Sub-Materi:&nbsp;
                      </label>
                      <input
                        disabled={!null}
                        type="number"
                        className="w-1/2 rounded-sm border-gray-200 p-0.5 text-center font-body text-gray-400"
                        {...register(`bab_id`, {
                          required: true,
                        })}
                      ></input>
                    </div>
                    {[...Object.values(quiz || {})].map((item, index) => (
                      <div
                        key={index}
                        className="flex w-full flex-row items-center"
                      >
                        <label className="w-1/2 font-body">
                          {index + 1}.&nbsp;{item?.question[0]?.question}
                        </label>
                        <input
                          type="text"
                          className="w-1/2 rounded-sm border-gray-200 px-2.5 py-0.5 font-body text-gray-600 focus:border-blue-200"
                          {...register(`ans_${index + 1}`, {
                            required: true,
                          })}
                        />
                        <input
                          key={item?.question_id}
                          value={item?.question_id}
                          type="checkbox"
                          className="hidden rounded-sm border-gray-200 p-2.5 font-body text-gray-600 focus:border-blue-200"
                          {...register(`q[]`, {
                            required: true,
                          })}
                          defaultChecked={true}
                        />
                      </div>
                    ))}
                    <button
                      disabled={!isValid}
                      type="submit"
                      className="rounded bg-blue-400 px-5 py-2.5 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </LayoutStudent>
  );
}
