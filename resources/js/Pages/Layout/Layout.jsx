import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-auto">
        {/* <Header /> */}

        {/* Content */}
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <div className="px-2 py-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
