import React, { useState } from 'react';
import Layout from './Layout/Layout';

export default function Admin(props) {
  //   const [data, setData] = useState({
  //     subject: '',
  //     // slug: '',
  //     // deskripsi: '',
  //   });

  const [errors, setErrors] = useState({});
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/admin/simpanmateri', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Respons Error:', errorData); // Log respons error untuk pemecahan masalah
        setErrors(errorData.errors || {});
        return;
      }

      setSubject('');
      setErrors({});
    } catch (error) {
      console.error('Kesalahan Fetch:', error);
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full rounded-md border border-gray-300 px-3 py-1 focus:outline-none ${
                  errors.subject ? 'border-red-500' : ''
                }`}
              />
              {errors.subject && (
                <small className="text-red-500">{errors.subject}</small>
              )}
            </div>
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
