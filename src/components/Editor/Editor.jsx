import TopBar from "./TopBar";
import SecondaryMenu from "./SecondaryMenu";
import EmptySlide from "../EmptySlide";
export default function Editor({ Present}) {
  return (
    <div className="h-screen w-full flex flex-col ">
      <TopBar Present= {Present} />
      <div className="px-4 py-4">
        <SecondaryMenu  />
      </div>
      <div className="grid grid-cols-4 gap-4 px-4 py-4">
        <div className=" col-span-1">
          <div className=" w-full   rounded-md flex flex-col items-start justify-center">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index}>
                <h1>{ index+1}</h1>
                <EmptySlide />
              </div>
            ))}
          </div>
        </div>
        <h2 className="border col-span-3">heee</h2>
      </div>
    </div>
  );
}
