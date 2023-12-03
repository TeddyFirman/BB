import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-xl overflow-hidden rounded bg-white px-6 py-4 shadow">
        <div className="mx-auto h-24 w-24">
          <Link href="/" className="h-full w-full">
            <ApplicationLogo className="fill-current text-gray-400 transition-colors duration-300 hover:text-red-600" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
