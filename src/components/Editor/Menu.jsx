import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const MenuConfig = [
  { id: "File", items: ["New", "Open", "Save"] },
  { id: "Edit", items: ["Undo", "Redo"] },
];

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickingOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        console.log(e);
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickingOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickingOutside);
  }, []);
  return (
    <div ref={menuRef} className="flex gap-2">
      {MenuConfig.map((option) => (
        <div key={option.id} className="relative">
          {/* Button */}
          <button
            className="px-3 py-1 hover:bg-gray-200 rounded"
            onClick={() =>
              setActiveMenu(activeMenu === option.id ? null : option.id)
            }
          >
            {option.id}
          </button>

          {/* Dropdown */}
          {activeMenu === option.id && (
            <div className="absolute top-full left-0 mt-1 bg-white border shadow-md rounded w-40 z-50">
              {option.items.map((subOption, index) => (
                <div
                  key={index}
                  className="text-left hover:bg-gray-100 px-4 py-2"
                >
                  <h2 className="text-sm">{subOption}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
