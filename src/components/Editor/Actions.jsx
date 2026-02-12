export default function Actions({ Present }) {
  return (
    <div className="flex flex-row gap-2">
      <button>
        <i className="fa-solid fa-clock-rotate-left text-2xl"></i>{" "}
      </button>
      <div className="inline-flex items-center border border-gray-400 rounded-full overflow-hidden bg-gray-100">
        <button
          onClick={() => {
            const elem = document.documentElement;
            elem.requestFullscreen();
            Present();
          }}
          className="px-6 py-2 text-gray-700 font-medium hover:bg-gray-200 transition"
        >
          Slideshow
        </button>
        <div className="w-px h-6 bg-gray-400"></div>
        <button className="px-4 py-2 hover:bg-gray-200 transition">▼</button>
      </div>
      <div className="inline-flex items-center rounded-full bg-blue-200 overflow-hidden">
        <button className="px-6 py-2 text-grey  overflow-hidden  font-medium hover:bg-blue-400 transition">
          Share
        </button>
        <div className="w-px h-6 bg-gray-400"></div>
        <button className="px-4 py-2 hover:bg-blue-400 transition">▼</button>
      </div>
    </div>
  );
}
