import { Link } from '@inertiajs/react';

export default function Sidebar() {
  return (
    <>
      <div className="flex w-64 flex-shrink-0 flex-col bg-gray-800 text-white">
        <Link href="/admin/dashboard" className="flex items-center text-white">
          <span className="font-head mx-auto py-2.5 text-xl font-bold">
            Admin Panel
          </span>
        </Link>
        <hr className="mx-2.5 border-gray-600" />
        <ul className="font-head mb-auto flex flex-col px-2.5">
          <li className="py-2.5">
            <Link
              href="dashboard"
              className={`flex flex-row items-center  transition duration-300 ${
                window.location.pathname === '/admin/dashboard'
                  ? 'font-bold text-red-400 hover:text-red-600'
                  : 'hover:text-red-400'
              }`}
              aria-current="page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.25}
                stroke="currentColor"
                className="mr-2.5 h-5 w-5"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Dashboard
            </Link>
          </li>
          <li className="py-2.5">
            <Link
              href="materi"
              className={`flex flex-row items-center transition duration-300 ${
                window.location.pathname === '/admin/materi'
                  ? 'font-bold text-red-400 hover:text-red-600'
                  : 'hover:text-red-400'
              }`}
              aria-current="page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.25}
                stroke="currentColor"
                className="mr-2.5 h-5 w-5"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              Materi
            </Link>
          </li>
        </ul>
        <hr className="mx-2.5 border-gray-600" />
        <div className="p-2.5">
          <Link
            href="/logout"
            method="post"
            className="text-decoration-none flex items-center text-white transition duration-300 hover:text-red-600"
            as="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.25}
              stroke="currentColor"
              className="mr-2.5 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
