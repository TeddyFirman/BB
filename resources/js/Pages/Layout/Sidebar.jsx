import { Link } from '@inertiajs/react';
import axios from 'axios';

export default function Sidebar() {
  const submit = () => {
    axios
      .post('/api/logout')
      .then((response) => {
        alert('Berhasil Logout');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const currentRoute = window.location.pathname;
  return (
    <>
      <div className="flex w-56 flex-col bg-gray-800">
        <Link
          href="dashboard"
          className="flex flex-row items-center justify-center font-body text-white"
        >
          <span className="py-2.5 text-xl font-bold">Admin Panel</span>
        </Link>
        <hr className="mx-2 border-gray-600" />
        <ul className="flex h-full flex-col space-y-3.5 p-2 font-body">
          <li className="flex flex-row items-center space-x-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <Link
              href={route('admin.dashboard')}
              className={`text-white hover:text-red-400 ${
                currentRoute === '/admin/dashboard'
                  ? 'font-bold text-red-400'
                  : ''
              }`}
              aria-current="page"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex flex-row items-center space-x-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>

            <Link
              href={route('admin.material')}
              className={`text-white hover:text-red-400 ${
                currentRoute === '/admin/material'
                  ? 'font-bold text-red-400'
                  : ''
              }`}
              aria-current="page"
            >
              Materi
            </Link>
          </li>
          <li className="flex flex-row items-center space-x-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <Link
              href={route('admin.chapter')}
              className={`text-white hover:text-red-400 ${
                currentRoute === '/admin/chapter'
                  ? 'font-bold text-red-400'
                  : ''
              }`}
              aria-current="page"
            >
              Bab
            </Link>
          </li>
          <li className="flex flex-row items-center space-x-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            <Link
              href={route('admin.question.answer')}
              className={`text-white hover:text-red-400 ${
                currentRoute === '/admin/question-answer'
                  ? 'font-bold text-red-400'
                  : ''
              }`}
              aria-current="page"
            >
              Question
            </Link>
          </li>
        </ul>
        <hr className="mx-2 border-gray-600" />
        <div className="p-2 font-body">
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="text-decoration-none flex items-center text-white"
          >
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
