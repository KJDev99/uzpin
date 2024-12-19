"use client";
import { useState } from "react";

const data = [
  {
    question: "Bu platformaga ishonch hosil qilish mumkinmi?",
    answer:
      "Albatta! Platformamiz kafolatlangan xizmatlarni mijozlarga taqdim etadi. Agar kodni aktivatsiya qilishda muammo bo‘lsa yangisiga almashtirib beramiz yoki pulingizni qaytarib beramiz!",
  },
  {
    question: "Bu platformaning afzalliklari qanday?",
    answer:
      "Biz mijozlarimizga sifatli va tezkor xizmatni taqdim etamiz. Har bir mijozga individual yondashuvni kafolatlaymiz.",
  },
  {
    question: "Aloqa uchun qanday murojaat qilish mumkin?",
    answer:
      "Bizning qo'llab-quvvatlash xizmatimiz haftaning har kuni ishlaydi.",
  },
  {
    question: "To'lovni qanday amalga oshirish mumkin?",
    answer:
      "To'lovni bank kartalari, elektron hamyonlar yoki PayPal orqali amalga oshirishingiz mumkin.",
  },
];

export default function AccordionComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1000px] pt-10 mx-auto">
      <h2 className="text-center font-semibold text-[32px] leading-[37px]">
        Yordam
      </h2>
      <p className="text-center mt-5 text-xl leading-[23px]">
        Tez tez beriladigan savollar
      </p>
      <div className="mt-10">
        {data.map((item, index) => (
          <div key={index} className="border-b border-[#acacac] mb-2">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-3 px-10 bg-transparent focus:outline-none flex justify-between items-center"
            >
              <span className="font-semibold text-[24px] leading-10 text-[#313131]">
                {item.question}
              </span>
              <svg
                className={`w-[34px] h-[34px] transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 4.25C9.95837 4.25 4.25 9.95837 4.25 17C4.25 24.0416 9.95837 29.75 17 29.75C24.0416 29.75 29.75 24.0416 29.75 17C29.75 9.95837 24.0416 4.25 17 4.25Z"
                  stroke="black"
                  strokeMiterlimit="10"
                />
                <path
                  d="M12.2188 14.875L17 20.1875L21.7812 14.875"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-20 py-5 text-[#313131] bg-transparent">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
