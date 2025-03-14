"use client";
import Loader from "@/components/Loader";
import axiosInstance from "@/libs/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const TelegramPage1 = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const referral = searchParams.has("referral")
    ? searchParams.get("referral")
    : null; // referral mavjudligini tekshiramiz

  // Referral ni localStorage ga saqlash
  useEffect(() => {
    if (referral) {
      localStorage.setItem("referral", referral);
      console.log("Referral qiymati saqlandi:", referral);
    }
  }, [referral]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const firstName = urlParams.get("first_name");
    const lastName = urlParams.get("last_name");
    const username = urlParams.get("username");
    const photo_url = urlParams.get("photo_url");
    const auth_date = urlParams.get("auth_date");
    const hash = urlParams.get("hash");

    if (!id || !auth_date || !hash) {
      console.error("Required query parameters are missing!");
      return;
    }

    const fetchBanners = async () => {
      try {
        const params = new URLSearchParams({
          id,
          first_name: firstName || "",
          last_name: lastName || "",
          username: username || "",
          photo_url: photo_url || "",
          auth_date,
          hash,
        });

        // referral mavjud bo‘lsa qo‘shamiz, aks holda qo‘shmaymiz
        if (referral) {
          params.append("referral", referral);
        }

        const url = `client/auth/telegram/login?${params.toString()}`;

        localStorage.setItem("lastRequestURL", url);
        console.log("Saved Request URL:", url);

        const response = await axiosInstance.get(url);
        localStorage.setItem("profileData", JSON.stringify(response.data));

        router.push("/");
        setTimeout(() => {
          location.reload();
        }, 300);
      } catch (error) {
        console.error("Error during Telegram login:", error);
      }
    };

    fetchBanners();
  }, [searchParams, referral]); // referral ni qo‘shdik, toki o‘zgarishini kuzataylik

  return (
    <div>
      <Loader />
    </div>
  );
};

export default TelegramPage1;
