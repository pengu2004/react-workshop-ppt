import Star from "./Star";
import Actions from "./Actions";
import Menu from "./Menu";
import FileName from "./FileName";
export default function TopBar({ Present}) {
  return (
    <div className=" h-14 w-full  flex flex-row  px-4 gap-2 py-2 ">
      <div>
        <img src="https://www.gstatic.com/images/branding/product/1x/slides_2020q4_48dp.png"></img>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row  justify-between">
          <div className="flex flex-row  items-center gap-1">
            <FileName filename={"React-PPT"} />
            <Star />
          </div>
          <Actions Present={Present} />
        </div>
        <Menu />
      </div>
    </div>
  );
}
