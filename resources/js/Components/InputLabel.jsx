export default function InputLabel({
  value,
  className = '',
  children,
  ...props
}) {
  return (
    <label
      {...props}
      className={`font-body block font-medium text-gray-600  ` + className}
    >
      {value ? value : children}
    </label>
  );
}
