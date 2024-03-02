import useSWR from 'swr';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../Loading';
import DeleteQuiz from './DeleteQuiz';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import withReactContent from 'sweetalert2-react-content';

export default function EditQuiz({
  isOpen,
  setIsOpen,
  chapterId,
  chapterTitle,
}) {
  const [openDelete, setOpenDelete] = useState(false);

  const alertWithSwal = withReactContent(Swal);

  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data } = useSWR(`/api/admin/see-question-quiz/${chapterId}`, fetcher);
  async function deleteQuiz(id) {
    await axios
      .delete(`/api/admin/delete-question-quiz/${id}`)
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
              Kuis Berhasil Dihapus
            </div>
          ),
        });
        setIsOpen(false);
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
              Kuis Gagal Dihapus
            </div>
          ),
        });
      });
  }
  const quizItem = data?.data;
  return (
    <>
      <DeleteQuiz isOpen={openDelete} setIsOpen={setOpenDelete} />
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

          <div className="fixed inset-0 space-y-4 overflow-y-auto">
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
                    className="pb-4 text-lg font-medium leading-6 text-gray-800"
                  >
                    Lihat Kuis
                  </Dialog.Title>
                  <div className="h-full">
                    <form className="h-full">
                      <div className="w-full">
                        <div className="flex w-full flex-col">
                          <div className="flex flex-col space-y-2.5">
                            <div className="flex w-full flex-col">
                              <label className="block py-2">Sub-Materi</label>
                              <select
                                disabled
                                name="chapter"
                                className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                              >
                                <option>{chapterTitle}</option>
                              </select>
                            </div>
                            <p>Pertanyaan Kuis: </p>
                            <div className="flex w-full flex-col space-y-4">
                              {!quizItem ? (
                                <Loading />
                              ) : (
                                <div className="flex w-full flex-col items-center justify-between space-y-2.5">
                                  {Object.values(quizItem).map((item, index) =>
                                    !quizItem ? (
                                      <p className="w-full text-center text-lg font-semibold text-gray-800">
                                        Kuis Belum Tersedia, Silahkan Tambah
                                        Kuis
                                      </p>
                                    ) : (
                                      Object.values(item?.question).map(
                                        (questionItem) => (
                                          <div className="flex w-full flex-row items-center justify-between">
                                            <p className="font-body text-gray-800">
                                              {index + 1}.&nbsp;
                                              {questionItem?.question}
                                            </p>
                                            <button
                                              onClick={() =>
                                                deleteQuiz(item?.id)
                                              }
                                              className="flex flex-row items-center space-x-1.5 rounded bg-red-400 px-2.5 py-2 text-white hover:bg-red-600"
                                            >
                                              <p>Hapus</p>
                                            </button>
                                          </div>
                                        ),
                                      )
                                    ),
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-x-2 pt-4 font-body">
                        <button
                          type="submit"
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
