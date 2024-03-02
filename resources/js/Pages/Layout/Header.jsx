import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import React from 'react';

export default function Header() {
  return (
    <nav className="sticky top-0 bg-gray-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-2.5">
        <ApplicationLogo className="h-12 w-12 fill-current text-red-600" />
        <div className="flex flex-row items-center space-x-1 font-body text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="inherit"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

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
    </nav>
  );
}
