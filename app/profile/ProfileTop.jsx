"use client";
import { Sidebar } from "@/components/profile/sidebar";
import { UserCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfileTop() {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    setProfileData(JSON.parse(localStorage.getItem("profileData")));
  }, []);
  return (
    <>
      <div className="mb-8 py-6 flex gap-5 items-center border-b border-[#828282] w-full max-md:hidden">
        <UserCircle className="h-10 w-10 rounded-full" />
        <h2 className="text-2xl font-medium">{profileData?.fullname}</h2>
      </div>
      <div className="w-[380px] h-[600px] mb-[100px] max-md:hidden">
        <Sidebar />
      </div>
    </>
  );
}
