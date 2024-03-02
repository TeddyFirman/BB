import axios from 'axios';
import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function Register() {
  const { data, setData, processing, errors, reset } = useForm({
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

  const name = data.name;
  const email = data.email;
  const password = data.password;
  const confirm_password = data.password_confirmation;

  const submit = (e) => {
    e.preventDefault();

    axios
      .post('/api/register', { name, email, password, confirm_password })
      .then((response) => {
        console.log(response);
        router.visit(route('login'));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GuestLayout>
      <Head title="Registrasi" />

      <div className="w-2/5 rounded bg-white px-4 py-2 shadow-md">
        <Link href={route('/')}>
          <ApplicationLogo className="mx-auto w-16 fill-current text-gray-400 transition duration-300 hover:text-red-600" />
        </Link>
        <form onSubmit={submit} method="POST" className="space-y-2.5">
          <div className="space-y-1.5">
            <InputLabel htmlFor="name" value="Name" />

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

            <InputError message={errors.name} />
          </div>

          <div className="space-y-1.5">
            <InputLabel htmlFor="email" value="Email" />

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
              autoComplete="new-password"
              onChange={(e) => setData('password', e.target.value)}
              required
            />

            <InputError message={errors.password} />
          </div>

          <div className="space-y-1.5">
            <InputLabel
              htmlFor="password_confirmation"
              value="Confirm Password"
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

            <InputError message={errors.password_confirmation} />
          </div>

          <div className="flex items-center justify-between">
            <div className="font-body text-sm text-gray-400">
              Sudah Punya Akun?&nbsp;
              <Link
                href={route('login')}
                className="font-medium text-red-400 hover:text-red-600 focus:outline-none"
              >
                Masuk
              </Link>
            </div>

            <PrimaryButton disabled={processing}>Registrasi</PrimaryButton>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
