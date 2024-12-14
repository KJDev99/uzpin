import { Sidebar } from "@/components/profile/sidebar";
import { UserCircle } from "lucide-react";
import React from "react";

export default function ProfileLayout({ children }) {
  return (
    <div className="relative mx-[120px] flex flex-wrap">
      <div className="mb-8 py-6 flex gap-5 items-center border-b border-[#828282] w-full">
        <UserCircle className="h-10 w-10 rounded-full" />
        <h2 className="text-2xl font-medium">Javlon</h2>
      </div>
      <div className="w-[380px] h-[600px] mb-[100px]">
        <Sidebar />
      </div>

      <div className="flex-1 pl-10">
        <main>{children}</main>
      </div>
    </div>
  );
}
