import React from "react";

export default function Balans() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Balans</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg">
            UZS
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg">
            USD
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg">
            RUB
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Balance Card */}
        <div className="bg-[#FFFCF6] p-6 rounded-2xl shadow-sm">
          <div className="space-y-4">
            <h2 className="text-gray-600">Uzpin hamyon</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">105 000</span>
              <span className="text-gray-600">UZS</span>
            </div>
            <div className="text-gray-600">Javlon</div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Hisobni to&apos;ldirish</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Summani kiriting: UZS
              </label>
              <input
                type="text"
                placeholder="Summani kiriting..."
                className="w-full p-3 border rounded-lg border-[#E7E7E7] bg-[#F9F9F9] focus:ring-yellow-400"
              />
            </div>
            <button className="w-full py-3 bg-[#FFC149] hover:bg-[#FFB529] text-black font-medium rounded-lg transition-colors">
              To&apos;ldirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
