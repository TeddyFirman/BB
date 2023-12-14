import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import axios from 'axios';
import { redirect } from 'react-router-dom';

export default function Login({ status }) {
  const { data, setData, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  const email = data.email;
  const password = data.password;

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    axios
      .post('/api/login', { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GuestLayout>
      <Head title="Masuk" />

      {status && (
        <div className="text-sm font-medium text-green-600">{status}</div>
      )}
      <div className="w-2/5 rounded bg-white px-4 py-2 shadow-md">
        <Link href={route('/')}>
          <ApplicationLogo className="mx-auto w-16 fill-current text-gray-400 transition duration-300 hover:text-red-600" />
        </Link>
        <form onSubmit={submit} method="POST" className="w-full space-y-4">
          <div className="space-y-1.5">
            <InputLabel htmlFor="email" value="Email" />

            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="block w-full"
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData('email', e.target.value)}
            />

            <InputError message={errors.email} />
          </div>

          <div className="space-y-1.5">
            <InputLabel htmlFor="password" value="Password" />

            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="block w-full"
              autoComplete="current-password"
              onChange={(e) => setData('password', e.target.value)}
            />

            <InputError message={errors.password} />
          </div>

          <div className="flex items-center justify-between">
            <div className="font-body text-sm text-gray-400">
              Belum Punya Akun?&nbsp;
              <Link
                href={route('register')}
                className="font-medium text-red-400 hover:text-red-600 focus:outline-none"
              >
                Registrasi
              </Link>
            </div>

            <PrimaryButton disabled={processing}>Masuk</PrimaryButton>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
