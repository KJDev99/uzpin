import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgetPassword({ setLogin, loginCount }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setError(true);
    } else {
      setError(false);
      setLogin(4); // Proceed to the next step
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-end mb-[20px]">
          <Link href="/">
            <button className="text-[#313131]">
              <X className="h-6 w-6" />
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[#141311] font-medium text-center text-3xl">
            Parolni unutdingizmi?
          </h2>
          <p className="mb-3 text-center text-[#909090] text-sm">
            Tasdiqlash jarayoni uchun telefon raqamingizni kiriting, biz sizning
            telefon raqamingizga 4 raqamli kod yuboramiz.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-5">
            <label
              className="block text-[#828282] text-sm px-5 pb-2"
              htmlFor="email"
            >
              Elektron pochta yoki telefon raqam
            </label>
            <input
              type="text"
              id="email"
              placeholder="example@mail.ru"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg outline-none text-[#000000] ${
                error ? "border-b-2 border-[red]" : "border-[#ACACAC]"
              }`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1 px-1">
                Maydonni to‘ldirish shart
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFBA00] text-[#313131] py-2 px-4 rounded-lg mt-2 font-medium mb-6 border-2 border-[transparent] border-b-[#313131]"
          >
            Kod yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
