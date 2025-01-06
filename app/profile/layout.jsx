import React from "react";
import ProfileTop from "./ProfileTop";

export default function ProfileLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto relative flex flex-wrap max-md:mx-5">
      <ProfileTop />
      <div className="md:flex-1 pl-10 max-md:pl-0 max-md:w-full">
        <main>{children}</main>
      </div>
    </div>
  );
}
