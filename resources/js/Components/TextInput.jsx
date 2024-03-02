import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
  { type = 'text', className = '', isFocused = false, ...props },
  ref,
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        'rounded border-gray-200 text-gray-600 shadow-sm focus:border-red-400 focus:ring-red-400 ' +
        className
      }
      ref={input}
    />
  );
});
