export default function Guest({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-row items-center justify-center bg-gray-50">
      {children}
    </div>
  );
}
