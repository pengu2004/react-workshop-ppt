import SlideLayout from "../SlideShow/SlideLayout";

export default function TestSlide({ preview }) {
  return (
    <SlideLayout preview={preview}>
      <div className="h-full w-full bg-[url('/TNP_BG-2.jpg')] bg-cover bg-no-repeat flex items-center justify-start px-10">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-white">What is a SPA</h1>
          <p className="text-2xl text-gray-400">
            SPA vs MPA
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
