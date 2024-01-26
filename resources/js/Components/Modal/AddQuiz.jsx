import useSWR from 'swr';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Fragment } from 'react';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react';
import withReactContent from 'sweetalert2-react-content';

export default function AddQuiz({
  isOpen,
  setIsOpen,
  chapterId,
  chapterTitle,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const alertWithSwal = withReactContent(Swal);

  const fetcher = (url) => axios.get(url).then((response) => response.data);

  const { data: questions, isLoading: loadingQuestion } = useSWR(
    `/api/admin/qna`,
    fetcher,
  );

  const questionItem = questions?.data;

  async function addQuiz(data) {
    console.log(data);
    await axios
      .post('/api/admin/add-question-quiz', data, {
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
              Kuis Berhasil Ditambahkan
            </div>
          ),
        });
        setIsOpen(false);
        router.visit(route('admin.quiz'));
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
            <div className="flex h-full items-center justify-center bg-black/50 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex h-max w-[70%] transform flex-col justify-between overflow-hidden rounded bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-800"
                  >
                    Tambah Kuis
                  </Dialog.Title>
                  <div className="h-full">
                    <form
                      onSubmit={handleSubmit(addQuiz)}
                      method="POST"
                      className="h-full space-y-2.5"
                    >
                      <div className="w-full">
                        <div className="flex w-full flex-col space-y-2">
                          <div className="flex w-full flex-col">
                            <label className="block py-2">
                              Pilih Sub-Materi
                            </label>
                            <select
                              name="chapter"
                              className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                              {...register('bab_id', {
                                required: true,
                              })}
                            >
                              <option selected value={chapterId}>
                                {chapterTitle}
                              </option>
                            </select>
                          </div>
                          <div className="flex flex-row space-x-2.5">
                            <div className="flex w-full flex-col">
                              <p>Pilih Pertanyaan Kuis: </p>
                              {loadingQuestion ? (
                                <p>Sedang Memuat...</p>
                              ) : (
                                Object.values(questionItem).map(
                                  (item, index) => (
                                    <div className="flex flex-row items-center space-x-2 py-2">
                                      <input
                                        key={item?.id}
                                        type="checkbox"
                                        value={parseInt(item?.id)}
                                        className="rounded-sm border-gray-200 p-2.5 font-body text-blue-600 focus:border-blue-200"
                                        {...register(`question_id`, {
                                          required: true,
                                        })}
                                      />
                                      <label className="font-body text-gray-600">
                                        {item?.question}
                                      </label>
                                    </div>
                                  ),
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-x-2 font-body">
                        <button
                          type="submit"
                          disable={!isValid}
                          className="justify-center rounded border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
                        >
                          Simpan
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
