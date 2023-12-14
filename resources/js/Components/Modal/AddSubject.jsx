import axios from 'axios';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { router } from '@inertiajs/react';

export default function AddSubject({ isOpen, setIsOpen }) {
  const [subject, setSubject] = useState('');

  const addSubject = async () => {
    await axios
      .post('/api/admin/materi', { subject })
      .then((response) => {
        setIsOpen(false);
        router.visit(route('admin.material'));
      })
      .catch((error) => {
        console.log('Gagal Menambahkan Materi', error);
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
                <Dialog.Panel className="flex h-max w-[85%] transform flex-col justify-between overflow-hidden rounded bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-800"
                  >
                    Tambah Materi
                  </Dialog.Title>
                  <div className="h-full py-2.5">
                    <form method="POST" className="h-full">
                      <div className="">
                        <label className="block py-2">Judul Materi</label>
                        <input
                          type="text"
                          name="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={`w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200`}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="space-x-2 font-body">
                    <button
                      className="justify-center rounded border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
                      onClick={addSubject}
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      className="justify-center rounded border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-red-200 focus:outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      Tutup
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
