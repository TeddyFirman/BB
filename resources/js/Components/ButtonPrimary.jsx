export default function ButtonPrimary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full rounded bg-red-600 px-5 py-2.5 shadow-lg transition duration-500 hover:bg-red-400 md:w-max"
    >
      <div className="flex w-full flex-row items-center font-body text-lg text-white">
        {children}
      </div>
    </button>
  );
}
