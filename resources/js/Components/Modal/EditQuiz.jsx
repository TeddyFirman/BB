import axios from 'axios';
import Swal from 'sweetalert2';
import { router } from '@inertiajs/react';
import { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react';
import withReactContent from 'sweetalert2-react-content';

export default function EditQuiz({
  isOpen,
  setIsOpen,
  chapters,
  questionId,
  questions,
}) {
  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const alertWithSwal = withReactContent(Swal);

  const [quiz, setQuiz] = useState();
  const [qid, setQId] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/api/admin/see-question-quiz/${questionId}`,
      );
      setQuiz(response.data.data);
    } catch (error) {
      console.error('Error Fetching Quiz:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [questionId]);

  useEffect(() => {
    if (quiz && quiz.length > 0) {
      const chapterId = quiz[0].bab_id;
      const questId = quiz[0].question_id;
      setQId(questId);
      setValue('bab_id', chapterId || 'Loading...');
      setValue('question_id', questId);
    }
  }, [setValue, quiz]);
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
                <Dialog.Panel className="flex h-max w-[70%] transform flex-col justify-between overflow-hidden rounded bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-800"
                  >
                    Edit Quiz
                  </Dialog.Title>
                  <div className="h-full">
                    <form method="POST" className="h-full space-y-2.5">
                      <div className="w-full">
                        <div className="flex w-full flex-col space-y-2">
                          <div className="flex w-full flex-col">
                            <label className="block py-2">Pilih Bab</label>
                            <select
                              name="chapter"
                              className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                              {...register('bab_id', {
                                required: true,
                              })}
                            >
                              {Object.values(chapters).map((item, index) => (
                                <option
                                  disabled={item?.id}
                                  key={index}
                                  className="h-max"
                                  value={item?.id}
                                >
                                  {item?.judul} - {item?.subject?.subject}
                                </option>
                              ))}
                            </select>
                            {errors.chapter &&
                              errors.chapter.type === 'required' && (
                                <p className="font-head text-sm text-red-400">
                                  Pilih Bagian Materi...
                                </p>
                              )}
                          </div>
                          <div className="flex flex-row space-x-2.5">
                            <div className="flex w-full flex-col">
                              {Object.values(questions).map((item, index) => (
                                <div className="flex flex-row items-center space-x-2 py-2">
                                  <input
                                    key={item.id}
                                    value={item.id}
                                    type="checkbox"
                                    checked={item.id === qid}
                                    name="question_id"
                                    className="rounded-sm border-gray-200 p-2.5 font-body text-blue-600 focus:border-blue-200"
                                    {...register(`question_id`, {
                                      required: true,
                                    })}
                                  />
                                  <label className="font-body text-gray-600">
                                    {item?.question}
                                  </label>
                                </div>
                              ))}
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
