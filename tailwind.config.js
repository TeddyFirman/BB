/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    './public/**/*',
    'node_modules/preline/dist/*.js',
  ],

  theme: {
    extend: {
      fontFamily: {
        body: ['Assistant', 'sans-serif'],
        head: ['Alegreya', 'serif'],
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
};
