
import { AboutMe } from "./components/AboutMe";
import { Expandable } from "./components/Expandable";
import Experiment from "./components/Experiment";
import Navbar from "./components/Navbar";
import PhotosCarousel from "./components/PhotosCarousel";
import WidgetInteraction from "./components/WidgetInteraction";

const playgroundPage = () => {
  return (
    <section className="bg-[rgb(17,17,16)]">
    <main className="text-[#d1d1cb] max-w-[40rem] mx-auto pb-20">
      <AboutMe/>
      {/* <Navbar/> */}
      <WidgetInteraction/>
      <PhotosCarousel/>
      <Experiment/>
      {/* <Expandable/> */}
     
    </main>
    </section>
  );
};

export default playgroundPage;
