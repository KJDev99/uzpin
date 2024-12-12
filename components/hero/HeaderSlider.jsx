"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "PUBG Mobile",
    subtitle: "O'yin promokodlari",
    buttonText: "Sotib olish",
    image: "/herobg.png",
  },
  {
    id: 2,
    title: "Free Fire",
    subtitle: "Game Promotions",
    buttonText: "Buy Now",
    image: "/herobg1.png",
  },
  {
    id: 3,
    title: "Battlegrounds",
    subtitle: "Special Offers",
    buttonText: "Get Now",
    image: "/herobg2.png",
  },
  {
    id: 4,
    title: "PUBG PC",
    subtitle: "Limited Time Deals",
    buttonText: "Purchase",
    image: "/herobg3.png",
  },
  {
    id: 5,
    title: "Mobile Legends",
    subtitle: "New Season Offers",
    buttonText: "Buy",
    image: "/herobg4.png",
  },
];

export default function HeaderSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prevActive) => (prevActive + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getSlideIndex = (index) => {
    return (index + slides.length) % slides.length;
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="relative flex items-center justify-center gap-2">
        {[-1, 0, 1, 2].map((offset) => {
          const index = getSlideIndex(activeSlide + offset);
          const slide = slides[index];
          return (
            <div
              key={slide.id}
              className={`transition-all duration-400 ease-linear ${
                offset === -1 && "relative w-[3%]"
              }
              ${offset === 0 && "relative w-[70%]"}
              ${offset === 1 && "relative w-[22%]"}
              ${offset === 2 && "relative w-[15%]"}
              `}
              style={{ height: "400px" }}
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
                      <button className="rounded-lg bg-yellow-500 px-6 py-2 font-semibold text-black transition-colors hover:bg-yellow-400">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
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
    </div>
  );
}
