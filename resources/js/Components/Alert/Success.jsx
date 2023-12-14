import { useEffect } from 'react';

export default function Succcess({ message, onClose }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, [onClose]);
  return (
    <div
      id="dismiss-alert"
      class="hs-removing:translate-x-5 hs-removing:opacity-0 absolute bottom-5 right-5 w-96 rounded border border-teal-400 bg-teal-50 p-4 text-sm text-teal-800 transition duration-300"
      role="alert"
    >
      <div class="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <div class="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="font-body font-medium">
            {message ? message : 'Successfully'}
          </div>
        </div>
        <button
          type="button"
          class="inline-flex rounded bg-teal-50 p-2.5 text-teal-500 hover:bg-teal-100 focus:outline-none"
          data-hs-remove-element="#dismiss-alert"
        >
          <span class="sr-only">Dismiss</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
