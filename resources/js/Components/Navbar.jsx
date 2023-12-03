import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function Navbar({ auth }) {
  return (
    <div className="absolute top-0 z-50 flex w-full flex-col items-center bg-gray-100 py-2.5 shadow">
      {auth.user ? (
        <Link
          href={route('dashboard')}
          className="font-semibold text-gray-600 transition-colors duration-300 hover:text-red-600"
        >
          Dashboard
        </Link>
      ) : (
        <>
          <div className="font-head mx-auto flex w-full max-w-5xl flex-row justify-between font-semibold">
            <ApplicationLogo className="h-10 w-10 fill-current text-red-600" />
            <div className="flex flex-row items-center space-x-6">
              <Link
                href={route('login')}
                className="text-gray-600 transition-colors duration-300 hover:text-red-600"
              >
                Login
              </Link>

              <Link
                href={route('register')}
                className="text-gray-600 transition-colors duration-300 hover:text-red-600"
              >
                Registerasi
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
