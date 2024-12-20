"use client";
import Login from "@/components/login/Login";
import React, { useState } from "react";
import ForgetPassword from "@/components/login/ForgetPassword";
import PasswordCheck from "@/components/login/PasswordCheck";
import NewPasswrod from "@/components/login/NewPasswrod";
import Register from "@/components/login/Registr";

export default function Page() {
  const [loginCount, setLogin] = useState(1);
  const renderComponent = () => {
    switch (loginCount) {
      case 1:
        return <Login setLogin={setLogin} loginCount={loginCount} />;
      case 2:
        return <Register setLogin={setLogin} loginCount={loginCount} />;
      case 3:
        return <ForgetPassword setLogin={setLogin} loginCount={loginCount} />;
      case 4:
        return <PasswordCheck setLogin={setLogin} loginCount={loginCount} />;
      case 5:
        return <NewPasswrod setLogin={setLogin} loginCount={loginCount} />;
    }
  };

  return (
    <div className="login_bg absolute left-0 top-0 min-h-screen max-h-max py-[30px] w-full flex justify-center items-center">
      {renderComponent()}
    </div>
  );
}
