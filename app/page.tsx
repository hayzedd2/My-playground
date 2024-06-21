
import Navbar from "./components/Navbar";
import PhotosCarousel from "./components/PhotosCarousel";
import WidgetInteraction from "./components/WidgetInteraction";

const playgroundPage = () => {
  return (
    <main className="bg-[#111110] text-[#d1d1cb]">
      {/* <Navbar/> */}
      <PhotosCarousel/>
      <WidgetInteraction/>
    </main>
  );
};

export default playgroundPage;
