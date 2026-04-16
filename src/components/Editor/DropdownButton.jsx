import { useState } from "react";

const fileMenuOptions = ["New", "Open", "Import Slides", "Make a Copy"];

const editMenuOptions = ["Undo", "Redo", "Cut", "Copy", "Paste"];

export default function DropdownButton({ isMenuOpen }) {
  return isMenuOpen != "" ? (
    <div className="bg-red h-full w-full text-gray-700 relative">
      <div className="flex flex-col absolute">
        {fileMenuOptions.map((options) => (
          <li>{options}</li>
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
}
