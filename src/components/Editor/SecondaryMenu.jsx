export default function SecondaryMenu() {
  return (
    <div className="flex flex-row gap-3  bg-gray-100 text-gray-900  text-sm px-1 py-2 hover:border hover:border-gray-450 rounded-full">
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div>▼</div>
      <div>
        <i class="fas fa-presentation"></i>
      </div>
      <div className=" w-px  bg-gray-400"></div>
      <div>Tools</div>
      <div>Help</div>
    </div>
  );
}
