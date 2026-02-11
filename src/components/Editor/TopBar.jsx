import Star from "./Star";
export default function TopBar() {
  return (
    <div className=" h-14 w-full bg-red-800 flex flex-row  px-4 gap-2 py-2">
      <div>
        <img src="https://www.gstatic.com/images/branding/product/1x/slides_2020q4_48dp.png"></img>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="text-white font-bold text-lg">React PPT</div>
          <Star />
        </div>
        <div className="flex flex-row gap-2 text-sm text-white">
          {" "}
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Insert</button>
          <button>Format</button>
          <button>Slide</button>
          <button>Arrange</button>
          <button>Tools</button>
          <button>Extensions</button>
          <button>Help</button>
        </div>
      </div>
    </div>
  );
}
