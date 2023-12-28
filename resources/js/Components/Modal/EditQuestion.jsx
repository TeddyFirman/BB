import useSWR from 'swr';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { router } from '@inertiajs/react';
import { Dialog, Transition } from '@headlessui/react';
import withReactContent from 'sweetalert2-react-content';

export default function EditQuestion({ isOpen, setIsOpen, items }) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm();

  const alertWithSwal = withReactContent(Swal);

  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data, isLoading } = useSWR(
    `/api/admin/qna-details/${items.id}`,
    fetcher,
  );

  let answers = data?.answers?.answer;
  let status = data?.answers?.is_correct;

  async function updateQuestion(data) {
    await axios
      .put(`/api/admin/qna/${items.id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
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
              Pertanyaan
              {` ${data?.question} `}
              Berhasil Diperbarui
            </div>
          ),
        });
        setIsOpen(false);
        router.visit(route('admin.question.answer'));
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
              Pertanyaan
              {` ${data?.question} `}
              Gagal Diperbarui
            </div>
          ),
        });
      });
  }

  useEffect(() => {
    setValue('question', items?.question);
    setValue('is_correct', status);
    setValue('answer', answers);
  }, [setValue, status, items?.question, answers]);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center text-center backdrop-blur-sm">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex h-max w-[85%] transform flex-col justify-between overflow-hidden rounded bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-800"
                  >
                    Ubah Pertanyaan
                  </Dialog.Title>
                  <div className="h-full py-2.5">
                    <form
                      onSubmit={handleSubmit(updateQuestion)}
                      method="POST"
                      className="h-full space-y-2.5"
                    >
                      <div className="w-full">
                        <div className="flex w-full flex-col space-y-2">
                          <div className="flex w-full flex-col">
                            <label className="block py-2">Status</label>
                            <select
                              name="is_correct"
                              className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                              {...register('is_correct', {
                                required: true,
                              })}
                            >
                              {isLoading ? (
                                <option className="h-max">
                                  Sedang Memuat...
                                </option>
                              ) : (
                                <>
                                  <option className="h-max" key={0} value={0}>
                                    Salah
                                  </option>
                                  <option className="h-max" key={1} value={1}>
                                    Benar
                                  </option>
                                </>
                              )}
                            </select>
                          </div>
                          <div className="flex flex-row space-x-2.5">
                            <div className="flex w-full flex-col">
                              <label className="block py-2">Pertanyaan</label>
                              <input
                                type="text"
                                name="question"
                                className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                                {...register('question', {
                                  required: true,
                                })}
                              />
                              {errors.question &&
                                errors.question.type === 'required' && (
                                  <p className="font-head text-sm text-red-400">
                                    Masukkan Pertanyaan...
                                  </p>
                                )}
                            </div>
                            <div className="flex w-full flex-col">
                              <label className="block py-2">Jawaban</label>
                              {isLoading ? (
                                <input
                                  type="text"
                                  value="Sedang Memuat..."
                                  className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                                />
                              ) : (
                                <input
                                  type="text"
                                  name="answer"
                                  className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                                  {...register('answer', {
                                    required: true,
                                  })}
                                />
                              )}
                              {errors.question &&
                                errors.question.type === 'required' && (
                                  <p className="font-head text-sm text-red-400">
                                    Masukkan Jawaban...
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-x-2 font-body">
                        <button
                          type="submit"
                          disabled={!isValid || !isDirty}
                          className="justify-center rounded border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
                        >
                          Perbarui
                        </button>
                        <button
                          type="button"
                          className="justify-center rounded border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 focus:outline-none"
                          onClick={() => setIsOpen(false)}
                        >
                          Tutup
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
