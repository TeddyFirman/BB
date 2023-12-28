import axios from 'axios';
import { router } from '@inertiajs/react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function DeleteQuiz({ isOpen, setIsOpen, items }) {
  const deleteSubject = async () => {
    await axios
      .delete(`/api/admin/qna/${items.id}`)
      .then(() => {
        setIsOpen(false);
        router.visit(route('admin.quiz'));
      })
      .catch((error) => {
        console.log('Gagal Menghapus Materi', error);
      });
  };
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
                    Hapus Pertanyaan
                  </Dialog.Title>
                  <div className="h-full py-2.5 font-body text-gray-600">
                    {`Anda Akan Menghapus Pertanyaan `}
                    <span className="font-bold text-red-600">{`${items?.questions}`}</span>
                    {` ?`}
                  </div>

                  <div className="space-x-2 font-body">
                    <button
                      className="justify-center rounded border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none"
                      onClick={deleteSubject}
                    >
                      Hapus
                    </button>
                    <button
                      type="button"
                      className="justify-center rounded border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-red-200 focus:outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      Batal
                    </button>
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
