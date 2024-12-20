export default function Logout() {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-semibold mb-8">Profildan chiqasizmi?</h2>

        <div className="flex gap-4 w-full">
          <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-4 rounded-lg font-medium">
            Yo&apos;q
          </button>
          <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-medium">
            Ha
          </button>
        </div>
      </div>
    </div>
  );
}
