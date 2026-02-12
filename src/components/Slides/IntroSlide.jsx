import SlideLayout from "../SlideShow/SlideLayout";

export default function IntroSlide({ preview }) {
  return (
    <SlideLayout preview={preview}>
      <div className="h-full w-full bg-[url('/TNP_BG.png')] bg-cover bg-no-repeat flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold">React Workshop</h1>
          <p className="text-2xl text-gray-400">
            From DOM Chaos to Declarative UI
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
