import { useEffect, useState } from "react";
import EmptySlide from "../EmptySlide";

export default function SlideEngine({ onExit }) {
  const [index, setIndex] = useState(0);
  const slides = [EmptySlide, EmptySlide];

  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (index === 0) {
      const timer = setTimeout(() => {
        setloading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setIndex((prev) => Math.min(prev + 1, slides.length - 1));
      }

      if (e.key === "ArrowLeft") {
        setIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        onExit();
      }
    };

    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [onExit, slides.length]);

  const CurrentSlide = slides[index];
  if (loading) {
    return (
      <div className="h-screen w-screen bg-white text-black text-3xl flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black text-white relative overflow-hidden">
      <CurrentSlide />

      <div className="absolute bottom-6 right-10 text-gray-400 text-sm">
        {index + 1} / {slides.length}
      </div>
    </div>
  );
}
