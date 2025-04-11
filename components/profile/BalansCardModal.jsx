"use client";

import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { MdCheck, MdOutlineContentCopy } from "react-icons/md";
import UploadComponent from "../UploadComponent";
import axiosInstance from "@/libs/axios";
import { Alert } from "../Alert";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function BalansCardModal({
  isOpen,
  onClose,
  selectedCurrency,
  inputValue,
  setInputValue,
}) {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [success, setSuccess] = useState(false);
  const [photo, setPhoto] = useState("");
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [comment, setComment] = useState("");

  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const checkBalance1 = async () => {
    try {
      const response = await axiosInstance.get("client/auth/check-binance/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const copyCardNumber = () => {
    if (selectedCard.card_number) {
      navigator.clipboard
        .writeText(selectedCard.card_number)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 4000);
        })
        .catch(() => {
          console.log("Karta raqamini nusxalashda xatolik yuz berdi.");
        });
    }
  };

  const copyCardNumber1 = () => {
    if (comment) {
      navigator.clipboard
        .writeText(comment)
        .then(() => {
          setCopied1(true);
          setTimeout(() => setCopied(false), 4000);
        })
        .catch(() => {
          console.log("Karta raqamini nusxalashda xatolik yuz berdi.");
        });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && isOpen) {
      const storedProfileData = localStorage.getItem("profileData");
      if (storedProfileData) {
        const parsedProfileData = JSON.parse(storedProfileData);
        setToken(parsedProfileData?.access || null);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    setLoading(true);
    const fetchCard = async () => {
      try {
        const response = await axiosInstance.get(
          `/client/card/${selectedCurrency}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCart(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchCard();
    }
  }, [token, selectedCurrency]);

  if (!isOpen) {
    return null;
  }

  const handleUploadSuccess = (key, url) => {
    setPhoto(url);
  };

  const clearFile = () => {
    modalRef.current.value = "";
    setPhoto("");
  };

  const fetchHandle = async () => {
    setLoading(true);
    const formattedData = {
      currency: selectedCurrency,
      amount: +inputValue,
      chek: photo,
      from_bot: true,
      card: selectedCard.id,
    };
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        "/client/transaction/create",
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess(true);
    } catch (error) {
      if (
        error.response.data[0] ===
        "Sizda hali kutilayotgan taranzaksiya mavjud!"
      ) {
        setError1(true);
      } else {
        setError(true);
      }
      console.log(error.response.data.detail);
    } finally {
      setLoading(false);
      setIsLoading(false);
      setTimeout(() => {
        setInputValue("");
        setPhoto("");
        onClose();
        setError(false);
        setSuccess(false);
      }, 3000);
    }
  };

  if (selectedCard?.id === "8f31f905-d153-4cb9-8514-5c3c5b53dac5") {
    const fetchComment = async () => {
      try {
        const response = await axiosInstance.get(
          "client/auth/user-binance-comment/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setComment(response.data.comment);
      } catch (error) {
        console.error("Ma'lumotni olishda xatolik:", error);
      }
    };

    fetchComment();
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      {error && (
        <Alert status={400} title={t("profile14")} message={t("profile15")} />
      )}
      {error1 && <Alert status={300} title={t("profile54")} />}
      {success && (
        <Alert status={200} title={t("profile16")} message={t("profile17")} />
      )}
      <div className="bg-white rounded-[10px] shadow-lg">
        <div className="flex relative justify-between">
          <div className="w-[682px] mt-8 ml-8 mb-8">
            <p className="font-medium text-[20px] leading-[22px]">
              {t("profile25")}
            </p>
            <div className="flex gap-[30px] mt-[18px]">
              {cart.length > 0 &&
                cart.map((card) => (
                  <div
                    key={card.id}
                    className={`cursor-pointer shadow-lg w-[130px] h-[84px] rounded-lg border-2 ${
                      selectedCard?.id === card.id
                        ? " border-[#ffbb00]"
                        : " border-[#fff]"
                    }`}
                    onClick={() => handleCardSelect(card)}
                  >
                    <Image
                      src={card.photo}
                      className={`rounded-[5px] w-[127px] h-[81px] p-1  cursor-pointer`}
                      width={123}
                      height={77}
                      alt={card.card_name}
                    />
                  </div>
                ))}
            </div>
            {selectedCard?.id === "8f31f905-d153-4cb9-8514-5c3c5b53dac5" ? (
              <div className="p-5 mt-10 flex flex-col items-center">
                <div className="flex items-start space-x-3 max-w-[450px]">
                  <span className="text-yellow-500 text-2xl">⚠️</span>
                  <p className="text-red-600 text-base">{t("comment")}</p>
                </div>
                <button
                  className={`flex items-center gap-[5px] mt-10 py-[10px] px-[15px] font-medium ${
                    selectedCard.card_number.length > 19 ? "text-[9px]" : ""
                  } text-[16px] leading-[18px] bg-[#ffba00] rounded-[10px]`}
                  onClick={copyCardNumber1}
                >
                  {copied1 ? (
                    <MdCheck size={24} />
                  ) : (
                    <MdOutlineContentCopy size={24} />
                  )}
                  {comment}
                </button>
                <button
                  onClick={() => {
                    checkBalance1();
                    onClose();
                  }}
                  className={`flex items-center gap-[5px] mt-5 py-[10px] px-[15px] font-medium text-[16px] text-white leading-[18px] bg-green-600 rounded-[10px]`}
                >
                  {t("pay")}
                </button>
              </div>
            ) : (
              <>
                {selectedCurrency === "USD" &&
                  selectedCard?.id !== "8f31f905-d153-4cb9-8514-5c3c5b53dac5" &&
                  selectedCard && (
                    <div className="flex flex-col items-center mt-10">
                      <label className="block font-medium text-[20px] leading-[22px] mb-2">
                        {t("profile22")} {selectedCurrency}
                      </label>
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Faqat raqamlar va '.' ni qabul qilish uchun tekshirish
                          if (/^[0-9.]*$/.test(value)) {
                            setInputValue(value);
                          }
                        }}
                        placeholder={t("profile22")}
                        className="max-w-[482px] w-full p-3 border rounded-lg border-[#E7E7E7] bg-[#F9F9F9] focus:ring-yellow-400"
                      />
                    </div>
                  )}

                <p className="mt-5 text-center font-medium text-[20px] leading-[22px]">
                  {t("profile29")}
                </p>
                <div
                  className={`max-w-[482px] mt-5 p-[35px] mx-auto border-2 border-gray-500 border-dashed rounded-lg text-center ${
                    photo ? "hidden" : ""
                  }`}
                >
                  <Image
                    src="/file-upload.svg"
                    className="mx-auto"
                    width={40}
                    height={40}
                    alt="img"
                  />
                  <p className="mt-2.5 text-[14px] leading-4 text-[#828282]">
                    {t("profile26")}
                  </p>
                  <div className="hidden">
                    <UploadComponent
                      triggerRef={modalRef}
                      onUploadingChange={setLoading1}
                      onUploadSuccess={(url) =>
                        handleUploadSuccess("cover", url)
                      }
                    />
                  </div>
                  <button
                    onClick={() => modalRef.current.click()}
                    className="mt-2.5 font-medium text-[14px] bg-[#ffba00] py-3 px-10 rounded-[5px]"
                  >
                    {loading1 ? (
                      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                    ) : (
                      t("profile27")
                    )}
                  </button>
                </div>
              </>
            )}
            {photo.length ? (
              <div className="flex flex-col">
                <div className="max-w-[482px] w-full mx-auto mt-5 py-5 px-8 border border-[#828282] rounded-[10px] flex items-center justify-between">
                  <div>
                    <p>{photo.split("/").pop()}</p>
                  </div>
                  <button onClick={clearFile} className="text-black underline">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="relative mx-auto">
                  <button
                    onClick={fetchHandle}
                    disabled={!selectedCard}
                    className={`mx-auto mt-5 font-medium leading-[18px] py-[10px] px-[60px] rounded-[10px] ${
                      selectedCard
                        ? "bg-[#ffba00] cursor-pointer"
                        : "bg-[#b7b7b7] cursor-not-allowed"
                    } relative group`}
                  >
                    {isLoading ? (
                      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                    ) : (
                      t("profile28")
                    )}
                    {!selectedCard && (
                      <span className="absolute w-max bottom-[-30px] left-1/2 transform -translate-x-1/2 text-xs text-red-500 bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        {t("profile51")}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {selectedCard && (
            <div className="max-w-[430px] w-full px-[24px] pt-8 pb-8 bg-[#f9f9f9] rounded-tr-[10px] rounded-br-[10px]">
              <p className="font-semibold text-[24px] leading-[28px]">
                {selectedCard.card_name}
              </p>
              <p className="mt-2.5 font-semibold text-[24px] leading-[28px]">
                {selectedCard.card_holder}
              </p>
              <Image
                src={selectedCard.photo}
                className="mt-5 rounded-xl w-[241px] h-[152px]"
                width={241}
                height={152}
                alt="img"
              />
              <button
                className={`flex items-center gap-[5px] mt-10 py-[10px] px-[15px] font-medium ${
                  selectedCard.card_number.length > 19 ? "text-[9px]" : ""
                } text-[16px] leading-[18px] bg-[#ffba00] rounded-[10px]`}
                onClick={copyCardNumber}
              >
                {copied ? (
                  <MdCheck size={24} />
                ) : (
                  <MdOutlineContentCopy size={24} />
                )}
                {selectedCard.card_number}
              </button>
              <p className="mt-[87px] text-[14px] leading-[18px]">
                {t("profile30")}{" "}
                <a href="t.me/Barbossa_gaming">@Barbossa_gaming</a>{" "}
                {t("profile31")}
              </p>
            </div>
          )}
          <button
            onClick={() => {
              onClose;
              window.location.reload();
            }}
            className="absolute top-2 right-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
