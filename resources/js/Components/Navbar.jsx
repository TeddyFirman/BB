import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function Navbar() {
  return (
    <div className="font-body absolute z-50 w-full bg-gray-100 shadow sm:fixed sm:right-0 sm:top-0">
      <div className="mx-auto flex h-14 max-w-6xl flex-row items-center justify-between">
        <ApplicationLogo className="w-12 fill-current text-red-600" />
        <div className="space-x-6">
          <Link
            href={route('login')}
            className="font-medium text-gray-400 hover:text-red-600"
          >
            Masuk
          </Link>

          <Link
            href={route('register')}
            className="font-medium text-gray-400 hover:text-red-600"
          >
            Registrasi
          </Link>
        </div>
      </div>
    </div>
  );
}
