"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiTelegram2Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { signIn } from "next-auth/react";
import axiosInstance from "@/libs/axios";
import { useTranslation } from "react-i18next";
import { Toast } from "../Toast";
import { useSearchParams } from "next/navigation";

export default function Register({ setLogin, loginCount, setMainEmail }) {
  const searchParams = useSearchParams();
  const [referral, setReferral] = useState(null);
  useEffect(() => {
    setReferral(searchParams.get("referral"));
  }, [searchParams]);
  const { t } = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = t("login2");
    if (!email) newErrors.email = t("login3");
    if (!password) newErrors.password = t("login4");
    if (!confirmPassword) newErrors.confirmPassword = t("login5");
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = t("login6");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (validateForm()) {
      const requestData = {
        fullname: name,
        email: email,
        password: password,
        confirm_password: confirmPassword,
        referral: referral,
      };

      try {
        const response = await axiosInstance.post(
          `client/auth/register?${referral ? `referral=${referral}` : ""}`,
          requestData
        );
        console.log("Server javobi:", response.data);
        setSuccess(true);
        setLogin(5);
        setMainEmail(email);
      } catch (error) {
        setError(true);
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const url = `/client/auth/google/login?redirect_url=${encodeURIComponent(
        "https://uzpin.games/google"
      )}${referral ? `&referral=${encodeURIComponent(referral)}` : ""}`;

      const response = await axiosInstance.get(url);

      const { auth_url } = response.data;
      if (auth_url) {
        localStorage.setItem("url", url);
        window.location.href = auth_url;
      } else {
        console.error("Auth URL not received from server");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAppleLogin = async () => {
    await signIn("apple", { callbackUrl: "/" });
  };

  const HandleTg = () => {
    if (referral) {
      localStorage.setItem("referral", referral);
    }
    console.log(referral);
    window.location.href = `https://uzpin.games/telegram-login.html`;
  };

  const handleClose = () => {
    setSuccess(false);
    setError(false);
  };
  return (
    <div className="flex items-center justify-center">
      {success && (
        <Toast type="success" text={t("profile16")} onClose={handleClose} />
      )}
      {error && (
        <Toast status={false} text={t("profile53")} onClose={handleClose} />
      )}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md max-sm:shadow-none max-sm:p-4">
        <div className="flex justify-end mb-[20px]">
          <Link href="/">
            <button className="text-[#313131]">
              <X className="w-6 h-6" />
            </button>
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            className={`w-[190px] h-[50px] font-medium text-[20px] leading-[23px] border-none outline-none rounded-[5px] max-sm:w-[164px] ${
              loginCount == 1
                ? "bg-[#313131] text-[#F9F9F9]"
                : "bg-[#F4F4F4] text-[#828282]"
            }`}
            onClick={() => setLogin(1)}
          >
            {t("login")}
          </button>
          <button
            className={`w-[190px] h-[50px] font-medium text-[20px] leading-[23px] border-none outline-none rounded-[5px] max-sm:w-[164px] ${
              loginCount == 2
                ? "bg-[#313131] text-[#F9F9F9]"
                : "bg-[#F4F4F4] text-[#828282]"
            }`}
            onClick={() => setLogin(2)}
          >
            {t("login-text1")}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 mb-4">
            <label
              className="block text-[#828282] text-[16px] leading-[18px] px-5 pb-2"
              htmlFor="name"
            >
              {t("login-text9")}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t("login-text10")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-[18px] bg-[#f4f4f4] rounded-lg outline-none font-medium text-[20px] leading-[23px] border border-[#ACACAC] text-[#000000]"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-[#828282] text-[16px] leading-[18px] px-5 pb-2"
              htmlFor="email"
            >
              {t("login-text2")}
            </label>
            <input
              type="text"
              id="email"
              placeholder="example@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-[18px] bg-[#f4f4f4] rounded-lg outline-none font-medium text-[20px] leading-[23px] border border-[#ACACAC] text-[#000000]"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="relative mb-4">
            <label
              className="block text-[#828282] text-[16px] leading-[18px] px-5 pb-2"
              htmlFor="password"
            >
              {t("login-text4")}
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder={t("login-text4")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-[18px] bg-[#f4f4f4] rounded-lg outline-none font-medium text-[20px] leading-[23px] border border-[#ACACAC] text-[#000000]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[49px] text-gray-500"
            >
              {passwordVisible ? <AiOutlineEye /> : <PiEyeClosedBold />}
            </button>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-[#828282] text-[16px] leading-[18px] px-5 pb-2"
              htmlFor="confirmPassword"
            >
              {t("login-text11")}
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="confirmPassword"
              placeholder={t("login-text11")}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-5 py-[18px] bg-[#f4f4f4] rounded-lg outline-none font-medium text-[20px] leading-[23px] border border-[#ACACAC] text-[#000000]"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="w-[130px] bg-[#828282] h-[1px]"></div>
            <p className="text-[#828282] font-normal text-[16px] leading-[18px]">
              {t("login-text12")}
            </p>
            <div className="w-[130px] bg-[#828282] h-[1px]"></div>
          </div>

          <div className="flex flex-col items-center justify-between my-5">
            {/* <Link href="/telegram-login.html" className="w-full"> */}
            <button
              onClick={HandleTg}
              type="button"
              className="flex items-center justify-center text-[black] font-medium text-[20px] leading-[23px] py-2 px-4 rounded-[5px] gap-5 w-full mb-[10px] border-2 border-[#313131]"
            >
              <RiTelegram2Fill className="bg-[#2AABEE] text-[white] p-1 text-[28px] rounded-full" />
              {t("login-text6")}
            </button>
            {/* </Link> */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center text-[black] font-medium text-[20px] leading-[23px] py-2 px-4 rounded-[5px] gap-5 w-full mb-[10px] border-2 border-[#313131]"
            >
              <FcGoogle className="p-0 text-[28px] rounded-full" />
              {t("login-text7")}
            </button>
            <button
              type="button"
              onClick={handleAppleLogin}
              className="flex items-center justify-center text-[black] font-medium text-[20px] leading-[23px] py-2 px-4 rounded-[5px] gap-5 w-full mb-[10px] border-2 border-[#313131]"
            >
              <IoLogoApple className=" text-[28px] rounded-full" />
              {t("login-text8")}
            </button>
          </div>
          <div className="text-center font-normal text-[14px] leading-[18px] text-[black] mt-3">
            {t("login-text13")}{" "}
            <Link href="#" className="text-[#FFBA00] font-medium">
              {t("login-text14")}
            </Link>{" "}
            {t("login-text15")}
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full flex justify-center items-center bg-[#FFBA00] text-[#000000] text-[20xp] leading-[23px] py-2 px-4 font-medium  rounded-lg mt-10 mb-6 border-2 border-[transparent] border-b-[#313131]"
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
            ) : (
              t("login-text1")
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
