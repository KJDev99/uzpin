"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import HeaderSwiper from "./HeaderSwiper";
import axiosInstance from "@/libs/axios";
import Link from "next/link";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";

export default function HeaderSlider() {
  const { t } = useTranslation();
  const [slides, setSlides] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const fetchSlides = useCallback(async () => {
    try {
      const response = await axiosInstance.get("client/banner");
      const banners = response.data.map((banner) => ({
        id: banner.id,
        title: banner.name || "No Title",
        subtitle: t("promocode"),
        buttonText: t("purchase"),
        image: banner.cover,
      }));
      setSlides(banners);
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  }, []);

  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);

  const nextSlide = useCallback(() => {
    setActiveSlide((prevActive) =>
      slides.length ? (prevActive + 1) % slides.length : 0
    );
  }, [slides.length]);

  useEffect(() => {
    if (slides.length) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, slides.length]);

  const getSlideIndex = (index) => {
    return (index + slides.length) % slides.length;
  };

  if (!slides.length) {
    return <Loader />;
  }

  return (
    <div className="relative w-full overflow-hidden py-8 max-sm:py-5 max-sm:px-[10px]">
      <div className="relative flex items-center justify-center gap-2 max-sm:hidden">
        {[-1, 0, 1, 2].map((offset, key) => {
          const index = getSlideIndex(activeSlide + offset);
          const slide = slides[index];
          return (
            <div
              key={key}
              className={`transition-all duration-400 ease-linear ${
                offset === -1 && "relative w-[2%]"
              }
              ${offset === 0 && "relative w-[79%]"}
              ${offset === 1 && "relative w-[17%]"}
              ${offset === 2 && "relative w-[12%]"}
              `}
              style={{ height: "460px" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                />
                {offset === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="mb-2 text-3xl font-bold text-white">
                        {slide.title}
                      </h2>
                      <p className="mb-4 text-lg text-gray-200">
                        {slide.subtitle}
                      </p>
                      <Link href={`/all-games/${slide.id}`}>
                        <button className="rounded-lg bg-yellow-500 px-6 py-2 font-semibold text-black transition-colors hover:bg-yellow-400">
                          {slide.buttonText}
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 max-sm:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              activeSlide === index
                ? "bg-yellow-500 w-4"
                : "bg-gray-400 hover:bg-gray-300 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <HeaderSwiper />
    </div>
  );
}
