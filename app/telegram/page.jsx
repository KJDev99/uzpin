"use client";
import Loader from "@/components/Loader";
import axiosInstance from "@/libs/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TelegramPage = () => {
  const router = useRouter();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get("id");
    const firstName = urlParams.get("first_name");
    const lastName = urlParams.get("last_name");
    const username = urlParams.get("username");
    const photo_url = urlParams.get("photo_url");
    const auth_date = urlParams.get("auth_date");
    const hash = urlParams.get("hash");

    const fetchBanners = async () => {
      /* try {
        const response = await axiosInstance.get("client/auth/telegram/login", {
          params: {
            id,
            first_name: firstName,
            last_name: lastName,
            username,
            photo_url,
            auth_date,
            hash,
          },
        });
        const referral = localStorage.getItem("referral");
        if (referral) {
          params.set("referral", referral);
        }
        localStorage.setItem("profileData", JSON.stringify(response.data));
        router.push("/");
        setTimeout(() => {
          location.reload();
        }, 300);
      } catch (error) {
        console.error("Error fetching slides:", error);
      } */

      try {
        const params = new URLSearchParams({
          id,
          // first_name: firstName,
          // last_name: lastName,
          // username,
          // photo_url,
          auth_date,
          hash,
        });
        const referral = localStorage.getItem("referral");
        if (referral) {
          params.set("referral", referral);
        }

        if (
          firstName !== null &&
          firstName !== undefined &&
          firstName !== "" &&
          firstName !== NaN
        ) {
          params.set("first_name", firstName);
        }
        if (
          lastName !== null &&
          lastName !== undefined &&
          lastName !== "" &&
          lastName !== NaN
        ) {
          params.set("last_name", lastName);
        }
        if (
          username !== null &&
          username !== undefined &&
          username !== "" &&
          username !== NaN
        ) {
          params.set("username", username);
        }
        if (
          photo_url !== null &&
          photo_url !== undefined &&
          photo_url !== "" &&
          photo_url !== NaN &&
          photo_url !== null
        ) {
          params.set("photo_url", photo_url);
        }

        const url = `client/auth/telegram/login?${params.toString()}`;
        /* const response = await axiosInstance.get("client/auth/telegram/login", {
          params,
        }); */
        const response = await axiosInstance.get(url);
        localStorage.setItem("lastRequestURL", url);

        localStorage.setItem("profileData", JSON.stringify(response.data));
        router.push("/");
        setTimeout(() => {
          location.reload();
        }, 300);
      } catch (error) {
        console.error("Error during Telegram login:", error);
      }
    };

    // try {
    //   const params = {
    //     id,
    //     first_name: firstName,
    //     last_name: lastName,
    //     username,
    //     photo_url,
    //     auth_date,
    //     hash,
    //     ...(referral ? { referral } : {}),
    //   };

    //   // URL ni yaratish
    //   const url = `client/auth/telegram/login?${new URLSearchParams(
    //     params
    //   ).toString()}`;

    //   // URL'ni localStorage ga saqlash
    //   localStorage.setItem("lastRequestURL", url);
    //   console.log("Saved Request URL:", url);

    //   // So‘rov yuborish
    //   const response = await axiosInstance.get("client/auth/telegram/login", {
    //     params,
    //   });

    //   localStorage.setItem("profileData", JSON.stringify(response.data));
    //   router.push("/");
    //   setTimeout(() => {
    //     location.reload();
    //   }, 300);
    // } catch (error) {
    //   console.error("Error during Telegram login:", error);
    // }

    fetchBanners();
  }, []);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default TelegramPage;

/* "use client";
import dynamic from "next/dynamic";
import React from "react";

const TelegramPage1 = dynamic(() => import("@/components/telegram"), {
  ssr: false,
});

const TelegramPage = () => {
  return (
    <div>
      <TelegramPage1 />
    </div>
  );
};

export default TelegramPage; */
