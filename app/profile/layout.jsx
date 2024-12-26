import { Sidebar } from "@/components/profile/sidebar";
import { UserCircle } from "lucide-react";
import React from "react";
import ProfileTop from "./ProfileTop";

export default function ProfileLayout({ children }) {
  return (
    <div className="relative mx-[120px] flex flex-wrap max-md:mx-5">
      <ProfileTop />
      <div className="flex-1 pl-10">
        <main>{children}</main>
      </div>
    </div>
  );
}
