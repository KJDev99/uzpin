"use client";

import { X } from "lucide-react";
import { MdOutlineContentCopy } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import axiosInstance from "@/libs/axios";
import { Toast } from "../Toast";

export default function PurchasesModal({ selectedPurchase, isOpen, onClose }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [activeStates, setActiveStates] = useState([]);
  const [allStates, setAllStates] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProfileData = localStorage.getItem("profileData");
      if (storedProfileData) {
        const parsedProfileData = JSON.parse(storedProfileData);
        setToken(parsedProfileData?.access || null);
      }
    }
  }, []);

  const fetchPurchases = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/client/history/${selectedPurchase}/detail`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(response.data || []);
      setActiveStates(new Array(response.data.values.length).fill(false)); // Qo‘shimcha holat massivini tayyorlash
      console.log(response.data, "test");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && selectedPurchase) {
      fetchPurchases();
    }
  }, [token, selectedPurchase]);

  const copySingleValue = (value, index) => {
    navigator.clipboard.writeText(value).then(() => {
      const newActiveStates = [...activeStates];
      newActiveStates[index] = true;
      setActiveStates(newActiveStates);
    });
  };

  const copyAllValues = () => {
    if (data && data.values) {
      const allValues = data.values.join("\n");
      navigator.clipboard.writeText(allValues).then(() => {
        setAllStates(true);
        setTimeout(() => {
          setAllStates(false);
        }, 3000);
      });
    }
  };

  const downloadAllValues = () => {
    if (data && data.values) {
      const allValues = data.values.join("\n");
      const blob = new Blob([allValues], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "values.txt";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  if (!isOpen) {
    return null;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      {allStates && <Toast type="success" text="Promodlar Nusxalandi!" />}
      <div className="max-w-[547px] w-full bg-white rounded-[10px] shadow-lg">
        <div className="flex flex-col relative justify-between min-w-10 min-h-10">
          <div className="flex justify-between px-10 pt-[60px]">
            <p className="font-semibold text-[24px] leading-[28px]">
              Promokodlar
            </p>
            <div className="flex gap-5 items-center">
              <button
                onClick={copyAllValues}
                className="flex gap-2.5 py-[7px] px-2 border border-[#313131] rounded-[5px] items-center font-medium text-[14px] leading-4"
              >
                <MdOutlineContentCopy size={16} /> Nusxa olish
              </button>
              <button
                onClick={downloadAllValues}
                className="flex gap-2.5 py-[7px] px-2 border border-[#313131] rounded-[5px] items-center font-medium text-[14px] leading-4"
              >
                <GrDocumentDownload size={16} />
                Yuklab olish
              </button>
            </div>
          </div>
          <ul className="px-10 py-[35px]">
            {data &&
              data.values.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 mb-3 font-light text-[16px]"
                >
                  {index + 1}. {item}
                  {activeStates[index] ? (
                    <IoMdCheckmark size={16} className="text-green-500" />
                  ) : (
                    <MdOutlineContentCopy
                      size={16}
                      onClick={() => copySingleValue(item, index)}
                      className="cursor-pointer"
                    />
                  )}
                </li>
              ))}
          </ul>
          <button onClick={onClose} className="absolute top-5 right-5">
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}