export default function EmptySlide({ page }) {
  return (
    <div className="flex gap-2 py-2 px-2 border-r-2">
      <div>{page}</div>
      <div className="h-34   w-70 bg-gray-50 rounded-2xl  border "></div>
    </div>
  );
}
