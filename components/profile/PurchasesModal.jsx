"use client";

import { X } from "lucide-react";
import { MdOutlineContentCopy } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";

export default function PurchasesModal({ selectedPurchase, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="max-w-[547px] w-full bg-white rounded-[10px] shadow-lg">
        <div className="flex flex-col relative justify-between min-w-10 min-h-10">
          <div className="flex justify-between px-10 pt-[60px]">
            <p className="font-semibold text-[24px] leading-[28px]">
              Promokodlar
            </p>
            <div className="flex gap-5 items-center">
              <button className="flex gap-2.5 py-[7px] px-2 border border-[#313131] rounded-[5px] items-center font-medium text-[14px] leading-4">
                <MdOutlineContentCopy size={16} /> Nusxa olish
              </button>
              <button className="flex gap-2.5 py-[7px] px-2 border border-[#313131] rounded-[5px] items-center font-medium text-[14px] leading-4">
                <GrDocumentDownload size={16} />
                Yuklab olish
              </button>
            </div>
          </div>
          <ul className="px-10 py-[35px]">
            <li className="flex items-center gap-5 font-light text-[16px]">
              1. jqYZePRb2529H0dd4a <MdOutlineContentCopy size={16} />
            </li>
            <li className="flex items-center gap-5 font-light text-[16px]">
              2. jqYZePRb2529H0dd4a <MdOutlineContentCopy size={16} />
            </li>
            <li className="flex items-center gap-5 font-light text-[16px]">
              3. jqYZePRb2529H0dd4a <MdOutlineContentCopy size={16} />
            </li>
            <li className="flex items-center gap-5 font-light text-[16px]">
              4. jqYZePRb2529H0dd4a <MdOutlineContentCopy size={16} />
            </li>
            <li className="flex items-center gap-5 font-light text-[16px]">
              5. jqYZePRb2529H0dd4a <MdOutlineContentCopy size={16} />
            </li>
          </ul>
          <button onClick={onClose} className="absolute top-5 right-5">
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
