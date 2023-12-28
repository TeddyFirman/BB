import React from 'react';
import Header from './Header';

export default function LayoutStudent(props) {
  const { children } = props;
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-1 flex-col overflow-auto">
        <Header />
        {/* Content */}
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <div className="mx-auto max-w-5xl py-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
