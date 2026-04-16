import { useState } from "react";
import SlideLayout from "./SlideShow/SlideLayout";
const TestslideData = {
  title: "This is just a test slide",
  content: "This is the content for the test slide",
};
export default function EmptySlide({ preview }) {
  const [dog, setDog] = useState(null);

  async function handleClick() {
    const data = await fetch(
      "https://dogapi.dog/api/v2/breeds?page%5Bnumber%5D=1&page%5Bsize%5D=1",
    );
    const final = await data.json();
    console.log(final.data[0]);
    setDog(final.data[0]);
  }
  return (
    <SlideLayout preview={preview}>
      <div className="flex-row bg-black  h-full w-full">
        <div className="text-gray-400 text-4xl">{TestslideData.title}</div>
        <div className="text-gray-400 text-4xl">{TestslideData.content}</div>
        <div className="text-blue-300 text-3xl">
          Let's fetch some information
        </div>
        <div className="flex flex-row text-5xl justify-center items-center">
          <button className="bg-blue-600 rounded-sm" onClick={handleClick}>
            {" "}
            Fetch
          </button>
        </div>
        {dog && <div className="text-3xl">{dog.attributes.name}</div>}
      </div>
    </SlideLayout>
  );
}
