import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
export function App() {
  const [view, setView] = useState("editor");

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      {view === "editor" ? <Editor /> : <Slideshow />}
    </div>
  );
}

export default App;
