import React from 'react';
import Layout from '../Layout/Layout';
import { Head } from '@inertiajs/react';

export default function Admin(props) {
  return (
    <Layout>
      <Head title="Dashboard" />
      <div className="flex justify-center">
        <h1 className="font-head text-2xl">Halaman Dashboard</h1>
      </div>
    </Layout>
  );
}
