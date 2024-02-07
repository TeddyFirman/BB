import useSWR from 'swr';
import axios from 'axios';
import Loading from '../Loading';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const fetcher = (url) => axios.get(url).then((response) => response.data);

export default function ShowProgress({ isOpen, setIsOpen }) {
  // Dummy Data
  const remark = [
    {
      No: 1,
      Name: 'Java Syntax 1',
      Status: 'Tried',
    },
    {
      No: 2,
      Name: 'Java Syntax 2',
      Status: 'Complete',
    },
    {
      No: 3,
      Name: 'Java Variables 1',
      Status: 'Tried',
    },
    {
      No: 3,
      Name: 'Java Variables 2',
      Status: 'Complete',
    },
  ];
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center bg-black/50 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex h-max w-[80%] transform flex-col justify-between overflow-hidden rounded bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pb-4 text-lg font-medium leading-6 text-gray-800"
                  >
                    Progres
                  </Dialog.Title>
                  <div className="h-full">
                    <table className="w-full table-auto border-collapse border border-gray-200">
                      <thead>
                        <tr className="font-head bg-gray-100 text-gray-800">
                          <th className="px-4 py-2">No.</th>
                          <th className="px-4 py-2">Nama Sub-Materi</th>
                          <th className="px-4 py-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(remark).map((item, index) => (
                          <tr key={index} className="font-body text-gray-600">
                            <td className="px-4 py-2">{item?.No}</td>
                            <td className="px-4 py-2">{item?.Name}</td>
                            <td
                              className={`px-4 py-2 font-semibold ${
                                item?.Status === 'Complete'
                                  ? 'text-green-500'
                                  : 'text-yellow-500'
                              }`}
                            >
                              {item?.Status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
