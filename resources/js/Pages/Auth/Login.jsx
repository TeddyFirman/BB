import { useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <GuestLayout>
      <Head title="Login" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <div className="space-y-2.5">
          <div className="space-y-0.5">
            <InputLabel
              htmlFor="email"
              value="Email"
              className="font-head font-medium"
            />

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

            <InputError message={errors.email} className="font-head" />
          </div>

          <div className="space-y-0.5">
            <InputLabel
              htmlFor="password"
              value="Kata Sandi"
              className="font-head font-medium"
            />

            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="block w-full"
              autoComplete="current-password"
              onChange={(e) => setData('password', e.target.value)}
            />

            <InputError message={errors.password} className="font-head" />
          </div>
        </div>

        {/* <div className="mt-4 block">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
              Ingat Saya
            </span>
          </label>
        </div> */}

        <div className="mt-4 flex items-center justify-between">
          {/* {canResetPassword && (
            <Link
              href={route('password.request')}
              className="rounded text-sm text-gray-600 underline hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Lupa Kata Sandi?
            </Link>
          )} */}

          <div className="flex flex-row text-sm text-gray-600">
            Belum Memiliki Akun?&nbsp;
            <Link
              href={route('register')}
              className="text-sm font-semibold text-red-400 underline hover:text-red-600"
            >
              Registrasi
            </Link>
          </div>

          <PrimaryButton disabled={processing}>Login</PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
