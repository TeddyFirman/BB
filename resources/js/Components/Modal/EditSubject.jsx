import axios from 'axios';
import Swal from 'sweetalert2';
import { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { router } from '@inertiajs/react';
import { Dialog, Transition } from '@headlessui/react';
import withReactContent from 'sweetalert2-react-content';

export default function EditSubject({ isOpen, setIsOpen, item }) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isDirty, isLoading },
  } = useForm();

  const alertWithSwal = withReactContent(Swal);

  async function updateSubject(data) {
    await axios
      .put(`/api/admin/materi/${item.id}`, data, {
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
            <p className="text-center text-lg font-semibold tracking-wide text-green-600">
              Perintah Berhasil
            </p>
          ),
          html: (
            <div className="text-center font-medium tracking-wide text-green-400">
              Materi
              {` ${data.subject} `}
              Berhasil Diperbarui
            </div>
          ),
        });
        setIsOpen(false);
        router.visit(route('admin.material'));
      })
      .catch((error) => {
        console.log('Gagal Memperbarui Materi', error);
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
              Materi
              {` ${data.subject} `}
              Gagal Diperbarui
            </div>
          ),
        });
      });
  }

  useEffect(() => {
    setValue('subject', item?.subject || isLoading);
  }, [setValue, item?.subject]);
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
                <Dialog.Panel className="flex h-max w-[60%] transform flex-col justify-between overflow-hidden rounded bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-800"
                  >
                    Ubah Materi
                  </Dialog.Title>
                  <div className="h-full py-2.5">
                    <form
                      onSubmit={handleSubmit(updateSubject)}
                      method="POST"
                      className="space-y-2.5"
                    >
                      <div className="">
                        <label className="block py-2">Judul Materi</label>
                        <input
                          type="text"
                          name="subject"
                          className="w-full rounded-sm border-gray-200 px-2.5 py-1 font-body text-gray-600 focus:border-blue-200"
                          placeholder="Masukkan Materi..."
                          {...register('subject', {
                            required: true,
                          })}
                        />
                        {errors.subject &&
                          errors.subject.type === 'required' && (
                            <p className="font-head text-sm text-red-400">
                              Masukkan Judul Materi...
                            </p>
                          )}
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
