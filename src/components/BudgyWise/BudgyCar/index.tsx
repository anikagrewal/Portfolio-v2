import { useState } from "react";
import Image from "next/image";

// 1. Fixed the object syntax here (no curly braces around the values)
const slides = [
    {
        src: "/images/bwmark7.png",
        caption: "",
      },
      {
        src: "/images/bwmark8.png",
        caption: "",
      },
      {
        src: "/images/bwmark9.png",
        caption: "",
      },
      {
        src: "/images/bwmark10.png",
        caption: "",
      },
  {
    src: "/images/bwmark1.png", 
    caption: "",
  },
  {
    src: "/images/bwmark2.png",
    caption: "",
  },
  {
    src: "/images/bwmark3.png",
    caption: "",
  },
  {
    src: "/images/bwmark4.png",
    caption: "",
  },
  {
    src: "/images/bwmark5.png",
    caption: "",
  },
  {
    src: "/images/bwmark6.png",
    caption: "",
  },

];

export default function BudgyCar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" lg:w-imgW w-full m-auto py-12 px-4 relative group">
      {/* Image Container */}
      <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl bg-center bg-cover duration-500 overflow-hidden shadow-xl">
        <Image
          // 2. Pointing specifically to the .src property
          src={slides[currentIndex].src} 
          alt="BudgyWise Project Image"
          fill
          className="object-contain" // Changed to 'contain' since you have SVGs (logos) so they don't get cropped!
        />
      </div>

      {/* Caption Text */}
      <div className="mt-4 text-center">
        <p className="text-lg italic text-gray-700 dark:text-gray-300">
          {slides[currentIndex].caption}
        </p>
      </div>

      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute top-[40%] left-5 z-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute top-[40%] right-5 z-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
      >
        ❯
      </button>

      {/* Dot Navigation */}
      <div className="flex justify-center py-2 gap-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer text-2xl transition ${
              currentIndex === slideIndex ? "text-blue-500" : "text-gray-400"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
}