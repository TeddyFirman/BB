import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Accordion({ title, children }) {
  return (
    <div className="hs-accordion-group">
      <div
        className="hs-accordion hs-accordion-active:border-slate-800 border border-gray-400 bg-slate-50"
        id="hs-active-bordered-heading"
      >
        <button
          className="hs-accordion-toggle hs-accordion-active:text-slate-800 font-head bg inline-flex w-full items-center justify-between gap-x-3 bg-slate-200 px-5 py-4 text-start font-semibold text-gray-600 hover:text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          aria-controls="hs-basic-active-bordered-collapse"
        >
          {title || 'Accordion Title'}
          <ChevronUpIcon className="hs-accordion-active:hidden block h-3.5 w-3.5" />
          <ChevronDownIcon className="hs-accordion-active:block hidden h-3.5 w-3.5" />
        </button>
        <div
          id="hs-basic-active-bordered-collapse"
          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-active-bordered-heading"
        >
          <div className="space-y-4 px-5 py-2.5 font-body text-slate-600">
            <ul className="flex flex-col space-y-4 font-medium">
              {children || (
                <>
                  <p>Accordion Item</p>
                  <p>Accordion Item</p>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
