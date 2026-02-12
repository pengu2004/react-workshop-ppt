export default function EmptySlide({ page, preview }) {
  return (
    <div className="flex gap-2 py-2 px-2 ">
      <div className="font-bold">{page}</div>
      {preview ? (
        <div className="h-25 w-50 bg-gray-50 rounded-2xl  border hover:border-blue-500 font-black "></div>
      ) : (
        <div className="h-screen w-screen bg-white "></div>
      )}
    </div>
  );
}
