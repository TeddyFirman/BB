export default function Checkbox({ className = '', ...props }) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        'rounded border-gray-200  text-red-400 shadow-sm transition duration-300 focus:ring-red-400 ' +
        className
      }
    />
  );
}
