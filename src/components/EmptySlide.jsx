import SlideLayout from "./SlideShow/SlideLayout";

export default function EmptySlide({ page, preview }) {
  return (
    <SlideLayout preview={preview}>
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-400 text-4xl">Empty Slide</div>
      </div>
    </SlideLayout>
  );
}
