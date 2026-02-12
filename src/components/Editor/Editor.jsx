import TopBar from "./TopBar";
import SecondaryMenu from "./SecondaryMenu";
import EmptySlide from "../EmptySlide";
import IntroSlide from "../Slides/IntroSlide";
import { useState } from "react";
export default function Editor({ Present, Slides, changeSlide, CurrentSlide }) {
  return (
    <div className="h-screen w-full flex flex-col ">
      <TopBar Present={Present} />
      <div className="px-4 py-4">
        <SecondaryMenu />
      </div>
      <div className="grid grid-cols-4 gap-4 px-4 py-4 h-full">
        <div className=" col-span-1">
          <div className="    rounded-md flex flex-col items-start justify-center gap-3">
            {Slides.map((Slide, index) => {
              return (
                <div key={index} className="flex  gap-2">
                  <div className="text-sm font-bold text-gray-600 w-6">
                    {index + 1}
                  </div>
                  <button onClick={() => changeSlide(index)}>
                    <Slide page={index + 1} preview={true} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border  col-span-3 rounded-md ">
          <CurrentSlide />
        </div>
      </div>
    </div>
  );
}
