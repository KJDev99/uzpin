// "use client";
// import Loader from "@/components/Loader";
// import axiosInstance from "@/libs/axios";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const TelegramPage = () => {
//   const searchParams = useSearchParams();
//   const [referral, setReferral] = useState(null);
//   useEffect(() => {
//     const ref = searchParams.get("referral");
//     setReferral(ref);
//   }, [searchParams]);
//   const router = useRouter();
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);

//     const id = urlParams.get("id");
//     const firstName = urlParams.get("first_name");
//     const lastName = urlParams.get("last_name");
//     const username = urlParams.get("username");
//     const photo_url = urlParams.get("photo_url");
//     const auth_date = urlParams.get("auth_date");
//     const hash = urlParams.get("hash");

//     const fetchBanners = async () => {
//       //   try {
//       //     const response = await axiosInstance.get("client/auth/telegram/login", {
//       //       params: {
//       //         id,
//       //         first_name: firstName,
//       //         last_name: lastName,
//       //         username,
//       //         photo_url,
//       //         auth_date,
//       //         hash,
//       //         ...(referral ? { referral } : {}),
//       //       },
//       //     });
//       //     localStorage.setItem("profileData", JSON.stringify(response.data));
//       //     router.push("/");
//       //     setTimeout(() => {
//       //       location.reload();
//       //     }, 300);
//       //   } catch (error) {
//       //     console.error("Error fetching slides:", error);
//       //   }

//       try {
//         const params = {
//           id,
//           first_name: firstName,
//           last_name: lastName,
//           username,
//           photo_url,
//           auth_date,
//           hash,
//           ...(referral ? { referral } : {}),
//         };

//         // URL ni yaratish
//         const url = `client/auth/telegram/login?${new URLSearchParams(
//           params
//         ).toString()}`;

//         // URL'ni localStorage ga saqlash
//         localStorage.setItem("lastRequestURL", url);
//         console.log("Saved Request URL:", url);

//         // So‘rov yuborish
//         const response = await axiosInstance.get("client/auth/telegram/login", {
//           params,
//         });

//         localStorage.setItem("profileData", JSON.stringify(response.data));
//         router.push("/");
//         setTimeout(() => {
//           location.reload();
//         }, 300);
//       } catch (error) {
//         console.error("Error during Telegram login:", error);
//       }
//     };

//     fetchBanners();
//   }, [referral]);

//   return (
//     <div>
//       <Loader />
//     </div>
//   );
// };

// export default TelegramPage;

"use client";
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

export default TelegramPage;