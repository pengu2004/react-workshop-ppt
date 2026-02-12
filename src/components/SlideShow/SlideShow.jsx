import { useState, useEffect } from "react";

export default function SlideShow() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-white text-black text-3xl flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center py-16 px-5">
      <div className="bg-white w-full h-full"></div>
    </div>
  );
}
