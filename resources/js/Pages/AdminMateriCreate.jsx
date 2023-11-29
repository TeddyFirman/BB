import React, { useState } from 'react';
import Layout from './Layout/Layout';

export default function Admin(props) {
  const [data, setData] = useState({
    subject: '',
    // slug: '',
    // deskripsi: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mendapatkan nilai token CSRF dari meta tag
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

      const response = await fetch('/admin/simpanmateri', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf-token, // Menambahkan token CSRF ke header request
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Data berhasil disimpan, tambahkan logika atau tindakan setelah berhasil disimpan
        console.log('Data berhasil disimpan');
      } else {
        // Tangani kesalahan jika request gagal
        console.error('Gagal menyimpan data');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };


  return (
    <Layout>
      <div className="mt-5 flex justify-center">
        <h1 className="text-xl">
          Welcome to Inertia React Admin Panel Materi Create Subject
        </h1>
      </div>
      <div className="rounded-t-lg bg-gray-200 px-4 py-3">
        <h3 className="text-lg font-semibold">Add Materi</h3>
        <a
          href="/admin/materi"
          className="float-right mt-5 flex items-center rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
        >
          <svg
            className="mr-1 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Kembali
        </a>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
      <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />
        <div className="tab-content mt-2" id="myTabContent">
          <div
            className="tab-pane fade show active border p-3"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="mb-4">
              <label className="mb-1 block">Judul</label>
              <input
                type="text"
                name="subject"
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                className={`w-full rounded-md border border-gray-300 px-3 py-1 focus:outline-none ${
                  errors.subject ? 'border-red-500' : ''
                }`}
              />
              {errors.subject && (
                <small className="text-red-500">{errors.subject}</small>
              )}
            </div>
            {/* ... (input fields for 'slug' and 'deskripsi') */}
          </div>
          <div className="flex justify-end py-2">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
