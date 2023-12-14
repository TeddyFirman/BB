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
        <ul className="flex h-full flex-col space-y-2.5 p-2 font-body">
          <li>
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
          <li>
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
