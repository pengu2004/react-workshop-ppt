import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import SlideEngine from "./components/SlideShow/SlideEngine";
import IntroSlide from "./components/Slides/IntroSlide";
import EmptySlide from "./components/EmptySlide";
export function App() {
  const [view, setView] = useState("editor");
  const [index, setIndex] = useState(0);
  const Slides = [IntroSlide, EmptySlide];
  const CurrentSlide = Slides[index];

  return (
    <div className="h-screen flex items-center justify-center ">
      {view === "editor" ? (
        <Editor
          Slides={Slides}
          changeSlide={(i) => setIndex(i)}
          CurrentSlide={CurrentSlide}
          Present={() => {
            setView("slideshow");
          }}
        />
      ) : (
        <SlideEngine
          CurrentSlide={CurrentSlide}
          Slides={Slides}
          changeSlide={(i) => setIndex(i)}
          index={index}
          onExit={() => {
            setView("editor");
          }}
        />
      )}
    </div>
  );
}

export default App;
