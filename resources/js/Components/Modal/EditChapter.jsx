import axios from 'axios';
import Swal from 'sweetalert2';
import Markdown from 'react-markdown';
import { router } from '@inertiajs/react';
import rehypePrism from 'rehype-prism-plus';
import { Fragment, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react';
import withReactContent from 'sweetalert2-react-content';

export default function EditChapter({ isOpen, setIsOpen, items, itemChapter }) {
  const {
    watch,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isDirty, isLoading },
  } = useForm();

  const alertWithSwal = withReactContent(Swal);

  const [contents, setContents] = useState('');

  setTimeout(() => {
    const input = watch('pertanyaan');
    setContents(input);
  }, 5000);

  async function updateSubject(data) {
    await axios
      .put(`/api/admin/bab/${itemChapter.id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
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
              Bab
              {` ${data.judul} `}
              Berhasil Diperbarui
            </div>
          ),
        });
        setIsOpen(false);
        router.visit(route('admin.chapter'));
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
              Bab
              {` ${data.judul} `}
              Gagal Diperbarui
            </div>
          ),
        });
      });
  }
  useEffect(() => {
    setValue('judul', itemChapter?.judul || isLoading);
    setValue('subject_id', itemChapter?.subject_id || isLoading);
    setValue('pertanyaan', itemChapter?.pertanyaan || isLoading);
  }, [setValue, itemChapter?.id, itemChapter?.judul, itemChapter?.pertanyaan]);
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
                    Ubah Bab
                  </Dialog.Title>
                  <div className="h-full py-2.5">
                    <form
                      onSubmit={handleSubmit(updateSubject)}
                      method="POST"
                      className="h-full"
                    >
                      <div className="w-full">
                        <div className="flex w-full flex-row space-x-2">
                          <div className="flex w-1/2 flex-col">
                            <label className="block py-2">Bagian Materi</label>
                            <select
                              className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                              name="subject"
                              {...register('subject_id', {
                                require: true,
                              })}
                            >
                              {items.map((item) => (
                                <option
                                  className="h-max"
                                  key={item.id}
                                  value={item.id}
                                >
                                  {item.subject}
                                </option>
                              ))}
                            </select>
                            {errors.subject &&
                              errors.subject.type === 'required' && (
                                <p className="font-head text-sm text-red-400">
                                  Pilih Bagian Materi...
                                </p>
                              )}
                          </div>
                          <div className="flex w-1/2 flex-col">
                            <label className="block py-2">Judul Bab</label>
                            <input
                              type="text"
                              name="chapter"
                              className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                              {...register('judul', {
                                required: true,
                              })}
                            />
                            {errors.chapter &&
                              errors.chapter.type === 'required' && (
                                <p className="font-head text-sm text-red-400">
                                  Masukkan Judul Bab...
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="flex w-full flex-row space-x-2">
                          <div className="w-1/2">
                            <label className="block py-2">Pertanyaan</label>
                            <Controller
                              name="question"
                              control={control}
                              render={({ ...field }) => (
                                <>
                                  <textarea
                                    {...field}
                                    type="text"
                                    name="question"
                                    className="h-48 w-full resize-none rounded-sm border-gray-200 p-1 font-body text-gray-600 focus:border-blue-200"
                                    {...register('pertanyaan', {
                                      required: true,
                                    })}
                                  />
                                  {errors.question &&
                                    errors.question.type === 'required' && (
                                      <p className="font-head text-sm text-red-400">
                                        Masukkan Pertanyaan...
                                      </p>
                                    )}
                                </>
                              )}
                            />
                          </div>
                          <div className="w-1/2">
                            <label className="block py-2">Pratinjau</label>
                            <Markdown
                              rehypePlugins={rehypePrism}
                              className="scroll no-scrollbar h-48 w-full rounded-sm border border-gray-200 p-1 font-body text-gray-600"
                            >
                              {contents}
                            </Markdown>
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
                          className="justify-center rounded border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600  focus:outline-none"
                          onClick={() => setIsOpen(false)}
                        >
                          Batal
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
