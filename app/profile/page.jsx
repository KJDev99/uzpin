import React from "react";

export default function Profil() {
  return (
    <div className="w-[460px] max-w-md   overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4">Profil ma&apos;lumotlari</h2>
      </div>
      <form className="px-6 py-4 space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Ism
          </label>
          <input
            id="name"
            defaultValue="Javlon"
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none "
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Elektron pochta yoki telefon raqam
          </label>
          <input
            id="contact"
            defaultValue="+99890 555 70 70"
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none "
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Parol
          </label>
          <input
            id="password"
            type="password"
            defaultValue="658322"
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="playerId"
            className="block text-sm font-medium text-gray-700"
          >
            O&apos;yinchi IDsi
          </label>
          <input
            id="playerId"
            defaultValue="123456789876"
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#F7B73B] hover:bg-[#E5A82C] text-black font-medium rounded-md shadow-sm outline-none"
        >
          Saqlash
        </button>
      </form>
    </div>
  );
}
