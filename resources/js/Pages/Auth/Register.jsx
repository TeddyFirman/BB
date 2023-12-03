import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        <div className="space-y-2.5">
          <div className="space-y-0.5">
            <InputLabel
              htmlFor="name"
              value="Nama"
              className="font-head font-medium"
            />

            <TextInput
              id="name"
              name="name"
              value={data.name}
              className="block w-full"
              autoComplete="name"
              isFocused={true}
              onChange={(e) => setData('name', e.target.value)}
              required
            />

            <InputError message={errors.name} className="font-head" />
          </div>

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
              onChange={(e) => setData('email', e.target.value)}
              required
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
              autoComplete="new-password"
              onChange={(e) => setData('password', e.target.value)}
              required
            />

            <InputError message={errors.password} className="font-head" />
          </div>

          <div className="space-y-0.5">
            <InputLabel
              htmlFor="password_confirmation"
              value="Konfirmasi Kata Sandi"
              className="font-head font-medium"
            />

            <TextInput
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password_confirmation', e.target.value)}
              required
            />

            <InputError
              message={errors.password_confirmation}
              className="font-head"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-row text-sm text-gray-600">
            Sudah Memiliki Akun?&nbsp;
            <Link
              href={route('login')}
              className="text-sm font-semibold text-red-400 underline hover:text-red-600"
            >
              Login
            </Link>
          </div>

          <PrimaryButton className="ms-4" disabled={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
