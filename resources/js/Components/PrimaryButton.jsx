export default function PrimaryButton({
  className = '',
  disabled,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={
        `font-code inline-flex items-center rounded bg-gray-200 px-5 py-2.5 uppercase text-gray-600 transition duration-150 ease-in-out hover:bg-red-400 hover:text-white focus:bg-red-600 focus:outline-none active:bg-red-600 ${
          disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
