import { useEffect, useState } from "react";
import EmptySlide from "../EmptySlide";
import IntroSlide from "../Slides/IntroSlide";

export default function SlideEngine({
  onExit,
  index,
  Slides,
  CurrentSlide,
  changeSlide,
}) {
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
        changeSlide(Math.min(index + 1, Slides.length - 1));
      }

      if (e.key === "ArrowLeft") {
        changeSlide(Math.max(index - 1, 0));
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
  }, [onExit, Slides.length, changeSlide]);

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

      <div className="absolute bottom-6 right-10 text-black-400 text-sm">
        {index + 1} / {Slides.length}
      </div>
    </div>
  );
}
