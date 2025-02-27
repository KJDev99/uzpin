"use client";
import { useState, useRef } from "react";
import {useTranslation} from 'react-i18next'

export default function AccordionComponent() {
  const {t} = useTranslation()
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const data = [
    {
      question: t("help-text1"),
      answer: t("help-text2"),
    },
    {
      question: t("help-text3"),
      answer: t("help-text4"),
    },
    {
      question: t("help-text5"),
      answer: t("help-text6"),
    },
    {
      question: t("help-text7"),
      answer: t("help-text8"),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1000px] pt-10 mx-auto max-sm:px-4">
      <h2 className="text-center font-semibold text-[32px] leading-[37.5px] max-sm:text-xl max-sm:leading-[30px]">
        {t('help')}
      </h2>
      <p className="text-center mt-5 text-xl leading-[23.44px] max-sm:text-sm">
        {t('help-text9')}
      </p>
      <div className="mt-10">
        {data.map((item, index) => (
          <div key={index} className="border-b border-[#acacac] mb-2">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-5 px-10 bg-transparent focus:outline-none flex justify-between items-center max-sm:px-0"
            >
              <span className="font-semibold text-[24px] leading-[40.8px] text-[#313131] max-sm:text-base">
                {item.question}
              </span>
              <svg
                className={`w-[34px] h-[34px] transform transition-transform duration-700 ${
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
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-700"
              style={{
                maxHeight:
                  openIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0",
              }}
            >
              <div className="px-20 py-5 text-[#313131] bg-transparent max-sm:px-5 max-sm:py-[10px]">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
