import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Slideshow from "./components/SlideShow/SlideShow";
export function App() {
  const [view, setView] = useState("editor");

  return (
    <div className="h-screen flex items-center justify-center ">
      {view === "editor" ? (
        <Editor
          Present={() => {
            setView("slideshow");
            console.log("heyy");
          }}
        />
      ) : (
        <Slideshow />
      )}
    </div>
  );
}

export default App;
