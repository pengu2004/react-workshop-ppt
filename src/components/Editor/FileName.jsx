export default function FileName({ filename }) {
  return (
    <div className="flex flex-row gap-3 text-xl px-1 hover:border hover:border-gray-450 rounded-md">
      {filename}
    </div>
  );
}
