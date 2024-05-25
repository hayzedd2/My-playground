
import FocusInteraction from "./components/FocusInteraction";
import PhotosCarousel from "./components/PhotosCarousel";

const playgroundPage = () => {
  return (
    <main className="radialbg">
      <PhotosCarousel/>
      <FocusInteraction/>
    </main>
  );
};

export default playgroundPage;
