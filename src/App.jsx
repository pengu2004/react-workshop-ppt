import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import SlideEngine from "./components/SlideShow/SlideEngine";
export function App() {
  const [view, setView] = useState("editor");

  return (
    <div className="h-screen flex items-center justify-center ">
      {view === "editor" ? (
        <Editor
          Present={() => {
            setView("slideshow");
          }}
        />
      ) : (
        <SlideEngine
          onExit={() => {
            setView("editor");
          }}
        />
      )}
    </div>
  );
}

export default App;
