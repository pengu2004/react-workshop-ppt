import SlideLayout from "../SlideShow/SlideLayout";

export default function IntroSlide({ preview }) {
  return (
    <SlideLayout preview={preview}>
      <div className="h-screen bg-[url('/TNP_BG.png')] bg-cover bg-center bg-no-repeat">
        {" "}
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-bold">React Workshop</h1>
          <p className="text-2xl text-gray-400">
            From DOM Chaos to Declarative UI
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
