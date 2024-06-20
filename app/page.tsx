
import PhotosCarousel from "./components/PhotosCarousel";
import WidgetInteraction from "./components/WidgetInteraction";

const playgroundPage = () => {
  return (
    <main className="bg-[#fdfdfc] text-black">
      <PhotosCarousel/>
      <WidgetInteraction/>
    </main>
  );
};

export default playgroundPage;
