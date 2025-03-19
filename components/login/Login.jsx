"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiTelegram2Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { signIn } from "next-auth/react";
import axiosInstance from "@/libs/axios";
import { Toast } from "../Toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

function ReferralHandler({ setReferral }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    setReferral(searchParams.get("referral"));
  }, [searchParams]);
  return null;
}

export default function Login({ setLogin, loginCount }) {
  const [referral, setReferral] = useState(null);
  const { t } = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    emailOrPhone: false,
    password: false,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const router = useRouter(); // **Xato rounter -> router qilib to'g'rilandi**

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!emailOrPhone) {
      setErrors((prev) => ({ ...prev, emailOrPhone: true }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, emailOrPhone: false }));
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: true }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, password: false }));
    }

    if (!hasError) {
      setIsLoading(true);
      try {
        const response = await axiosInstance.post("client/auth/login", {
          email: emailOrPhone,
          password: password,
        });
        localStorage.setItem("profileData", JSON.stringify(response.data));
        router.push("/"); // **Xato rounter.push() -> router.push() qilib to'g'rilandi**
        setSuccess(true);
        setTimeout(() => {
          location.reload();
        }, 300);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setError(true);
        setTimeout(() => setError(false), [3000]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReferralHandler setReferral={setReferral} />
      <div className="flex justify-center items-center">
        {success && (
          <Toast
            type="success"
            text={t("profile16")}
            onClose={() => setSuccess(false)}
          />
        )}
        {error && (
          <Toast
            status="false"
            text={t("login-text16")}
            onClose={() => setError(false)}
          />
        )}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md max-sm:p-4">
          <div className="flex justify-end mb-[20px]">
            <Link href="/">
              <button className="text-[#313131]">
                <X className="h-6 w-6" />
              </button>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-5">
              <label className="block text-[#828282] text-[16px] leading-[18px] px-5 pb-2">
                {t("login-text2")}
              </label>
              <input
                type="text"
                placeholder="example@mail.ru"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className={`w-full px-5 py-[18px] bg-[#f4f4f4] rounded-lg outline-none font-medium text-[20px] leading-[23px] border text-[#000000] ${
                  errors.emailOrPhone
                    ? "border-b-2 border-[red]"
                    : "border-[#ACACAC]"
                }`}
              />
            </div>

            <div className="mb-5 relative">
              <label className="block text-[#828282] text-[16px] leading-[18px] px-5 pb-2">
                {t("login-text4")}
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder={t("login-text4")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-5 py-[18px] border bg-[#f4f4f4] rounded-lg outline-none font-medium text-[20px] leading-[23px] text-[#000000] ${
                  errors.password
                    ? "border-b-2 border-[red]"
                    : "border-[#ACACAC]"
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-[48px] text-gray-500"
              >
                {passwordVisible ? <AiOutlineEye /> : <PiEyeClosedBold />}
              </button>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full flex justify-center items-center bg-[#FFBA00] text-[#000000] text-[20xp] leading-[23px] py-2 px-4 font-medium rounded-lg mt-2 mb-6 border-2 border-[transparent] border-b-[#313131]"
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
              ) : (
                t("login")
              )}
            </button>
          </form>
        </div>
      </div>
    </Suspense>
  );
}
