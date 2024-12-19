import { Search } from "lucide-react";

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-[40px] max-w-[355px] mx-auto inset-0 bg-black bg-opacity-0 flex items-start justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white p-[6px] pr-5 rounded-lg w-96 shadow-lg"
        onClick={handleModalClick}
      >
        <div className="flex justify-between gap-5 items-center">
          {/* <h2 className="text-xl font-bold">Search</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button> */}
          <input
            type="text"
            placeholder="Qidirish"
            className="w-full py-[13px] px-5 border border-gray-300 rounded-lg outline-none"
          />
          <Search className="h-6 w-6"/>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
