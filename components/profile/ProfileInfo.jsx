"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/libs/axios";
import { Toast } from "../Toast";

export default function ProfilInfo() {
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    phone: "",
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [formData, setFormData] = useState({});

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProfileData = localStorage.getItem("profileData");
      if (storedProfileData) {
        const parsedProfileData = JSON.parse(storedProfileData);
        setToken(parsedProfileData?.access || null);
      }
    }
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const response = await axiosInstance.get("/client/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfileData({
            fullname: response.data.fullname,
            email: response.data.email,
            phone: response.data.phone || "",
            old_password: "",
            new_password: "",
            confirm_password: "",
          });
        } catch (error) {
          console.error("Failed to fetch profile data", error);
        }
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (profileData.fullname) formData.fullname = profileData.fullname;
    if (profileData.email) formData.email = profileData.email;
    if (profileData.phone) formData.phone = profileData.phone;
    if (profileData.old_password)
      formData.old_password = profileData.old_password;
    if (profileData.new_password)
      formData.new_password = profileData.new_password;
    if (profileData.confirm_password)
      formData.confirm_password = profileData.confirm_password;

    console.log(profileData, formData);

    try {
      const response = await axiosInstance.put("/client/profile", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(true);
      setProfileData(response.data);
    } catch (error) {
      console.error("Failed to update profile data", error);
      setError(true);
    } finally {
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full overflow-hidden ">
      {success && (
        <Toast type="success" text="Malumotlar Muvofaqiyatli O'zgartirildi" />
      )}
      {error && (
        <Toast
          type="false"
          text="Malumotlar o'zgartirilmadi! Xatolik yuz berdi"
        />
      )}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4">Profil ma&apos;lumotlari</h2>
      </div>
      <form
        className="px-6 py-4  border w-full grid grid-cols-2 gap-5"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Ism
          </label>
          <input
            id="fullname"
            name="fullname"
            value={profileData.fullname || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Elektron pochta
          </label>
          <input
            id="email"
            name="email"
            value={profileData.email || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Telefon raqam
          </label>
          <input
            id="phone"
            name="phone"
            value={profileData.phone || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="old_password"
            className="block text-sm font-medium text-gray-700"
          >
            Eski parol
          </label>
          <input
            id="old_password"
            name="old_password"
            type="password"
            value={profileData.old_password || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="new_password"
            className="block text-sm font-medium text-gray-700"
          >
            Yangi parol
          </label>
          <input
            id="new_password"
            name="new_password"
            type="password"
            value={profileData.new_password || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-700"
          >
            Parolni tasdiqlash
          </label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            value={profileData.confirm_password || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E7E7E7] bg-[#F9F9F9] rounded-md shadow-sm outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#F7B73B] hover:bg-[#E5A82C] text-black font-medium rounded-md shadow-sm outline-none"
        >
          Saqlash
        </button>
      </form>
    </div>
  );
}
