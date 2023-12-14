import axios from 'axios';
import { router } from '@inertiajs/react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function EditChapter({ isOpen, setIsOpen, items, itemChapter }) {
  const [judul, setChapter] = useState('');
  const [pertanyaan, setQuestion] = useState('');
  const [subject_id, setSelected] = useState('');

  const addChapter = async () => {
    await axios
      .post('/api/admin/bab', { subject_id, judul, pertanyaan })
      .then((response) => {
        setIsOpen(false);
        router.visit(route('admin.chapter'));
      })
      .catch((error) => {
        console.log('Gagal Menambahkan Materi', error);
      });
  };
  const updateSubject = async () => {
    await axios
      .put(`/api/admin/bab/${itemChapter.id}`, {
        subject_id,
        judul,
        pertanyaan,
      })
      .then(() => {
        setIsOpen(false);
        router.visit(route('admin.chapter'));
      })
      .catch((error) => {
        console.log('Gagal Memperbarui Materi', error);
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
                    Ubah Bab
                  </Dialog.Title>
                  <div className="h-full py-2.5">
                    <form method="POST" className="h-full">
                      <div className="w-full">
                        <div className="flex w-full flex-row space-x-2">
                          <div className="flex w-1/2 flex-col">
                            <label className="block py-2">Bagian Materi</label>
                            <select
                              className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                              name="subject"
                              value={subject_id}
                              onChange={(e) => setSelected(e.target.value)}
                            >
                              <option>{itemChapter?.subject?.subject}</option>
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
                          </div>
                          <div className="flex w-1/2 flex-col">
                            <label className="block py-2">Judul Bab</label>
                            <input
                              type="text"
                              name="chapter"
                              value={judul || itemChapter.judul}
                              onChange={(e) => setChapter(e.target.value)}
                              className={`w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200`}
                            />
                          </div>
                        </div>
                        <label className="block py-2">Pertanyaan</label>
                        <textarea
                          type="text"
                          name="question"
                          value={pertanyaan || itemChapter.pertanyaan}
                          onChange={(e) => setQuestion(e.target.value)}
                          className={`h-48 w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200`}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="space-x-2 font-body">
                    <button
                      className="justify-center rounded border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
                      onClick={updateSubject}
                    >
                      Perbarui
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
