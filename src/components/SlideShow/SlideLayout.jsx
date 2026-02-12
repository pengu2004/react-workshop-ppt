export default function SideLayout({ children, preview }) {
  return preview ? (
    <div className="h-24 w-40  rounded-lg border border-gray-300 hover:border-blue-500 hover:border-2 overflow-hidden relative cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="transform scale-[0.32] origin-center text-white">
          <div className="w-[500px] h-[300px] flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full w-full  text-white  flex-row items-center justify-center">
      {children}
    </div>
  );
}
