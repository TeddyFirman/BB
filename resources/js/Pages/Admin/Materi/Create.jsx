import Swal from 'sweetalert2';
import React, { useEffect } from 'react';
import Layout from '@/Pages/Layout/Layout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import withReactContent from 'sweetalert2-react-content';

export default function Admin(props) {
  const { data, setData, post, errors, reset } = useForm({
    subject: '',
  });

  useEffect(() => {
    return () => {
      reset('subject');
    };
  }, []);

  const alertWithSwal = withReactContent(Swal);

  const submit = (e) => {
    e.preventDefault();
    post(route('simpan-materi', data), {
      onSuccess: alertWithSwal.fire({
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        icon: 'success',
        width: '50%',
        title: (
          <p
            className={`font-head text-center text-xl font-semibold  text-gray-800`}
          >
            Perintah Berhasil
          </p>
        ),
        html: (
          <p className={`font-body text-center font-medium text-green-400`}>
            Berhasil Menambahkan
            <span
              className={`font-semibold text-green-600`}
            >{` "${data.subject}" `}</span>
          </p>
        ),
      }),
    });
  };

  return (
    <Layout>
      <Head title="Tambah Materi" />
      <div className="flex flex-row items-center justify-between rounded bg-gray-200 px-2.5 py-2">
        <h3 className="font-head text-xl font-semibold text-gray-800">
          Tambah Materi
        </h3>
        <Link
          href="/admin/materi"
          className="font-head flex flex-row items-center rounded bg-blue-400 py-1.5 pl-1.5 pr-2.5 text-white transition duration-300 hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-0.5 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Kembali
        </Link>
      </div>
      <form onSubmit={submit}>
        <div className="my-2">
          <div className="space-y-1.5">
            <label className="font-head font-2xl block font-semibold text-gray-800">
              Judul Materi
            </label>
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={(e) => setData('subject', e.target.value)}
              className={`font-body w-full rounded border-2 border-gray-200 px-2.5 py-1.5 focus:border-blue-400 focus:ring-blue-400  ${
                errors.subject ? 'border-red-400 ' : ''
              }`}
            />
            <InputError message={errors.name} className="font-head" />
          </div>
        </div>
        <div className="flex justify-end py-1.5">
          <button
            type="submit"
            className="font-head rounded bg-blue-400 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
          >
            Simpan
          </button>
        </div>
      </form>
    </Layout>
  );
}
