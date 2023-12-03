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
        `inline-flex items-center rounded border border-transparent bg-gray-200 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-gray-800 transition duration-300 ease-in-out hover:bg-red-400 hover:text-white focus:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 active:bg-red-600 ${
          disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
