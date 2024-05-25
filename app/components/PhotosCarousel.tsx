"use client";

import Image from "next/image";
import nature2 from "../image/nature2.jpg";
import nature3 from "../image/nature3.jpg";
import nature4 from "../image/nature4.jpg";
import nature1 from "../image/nature1.jpg";
import nature5 from "../image/nature5.jpg";
import nature6 from "../image/nature6.jpg";
import { Montserrat } from "next/font/google";
const images = [nature4, nature3, nature2, nature5, nature6, nature1];
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const PhotosCarousel = () => {
  const [currIndex, setCurrentIndex] = useState(0);
  const IncreaseCurrIndex = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const DecreaseCurrIndex = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  return (
    <div className="relative max-h-screen">
      <div className="flex items-center flex-col min-h-screen justify-center">
        <AboutText />
        <ImageIndicator currIndex={currIndex} setCurrIndex={setCurrentIndex} />
        <Images imgIndex={currIndex} />
        <CarouselControllers
          currIndex={currIndex}
          IncreaseCurrIndex={IncreaseCurrIndex}
          DecreaseCurrIndex={DecreaseCurrIndex}
        />
      </div>
    </div>
  );
};
export const AboutText = () => {
  return (
    <div className="w-full py-4 px-4">
      <h1 className="font-[500] text-[1.8rem] text-white ">Image carousel</h1>
      <p className="text-white">Inspired by the carousel component on the <span className="underline underline-offset-1"><a href="" className="flex items-center gap-1">Paystack&apos;s 2023 in review website <BsArrowUpRight/></a></span> </p>
    </div>
  );
};

export const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <div className="flex xl:w-[50vw]  sm:w-[95vw] items-center overflow-hidden mx-auto">
      {images.map((image, index) => {
        return (
          <motion.div
            animate={{
              translateX: `-${imgIndex * 100}%`,
              scale: imgIndex === index ? 0.95 : 0.65,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 50,
            }}
            className="aspect-video sm:rounded-[10px] xl:rounded-[14px] xl:w-[50vw] sm:w-[95vw] shrink-0 bg-neutral-700 object-cover "
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
          ></motion.div>
        );
      })}
    </div>
  );
};
interface imageProps {
  currIndex: number;
  setCurrIndex: Dispatch<SetStateAction<number>>;
}
export const ImageIndicator = ({ currIndex, setCurrIndex }: imageProps) => {
  return (
    <div className="flex xl:pl-0 sm:pl-4 xl:px-4 sm:px-0 indicator gap-2 xl:overflow-auto sm:overflow-scroll mb-5 xl:max-w-[60vw] mx-auto items-center justify-center">
      {images.map((image, index) => {
        return (
          <Image
            onClick={() => setCurrIndex(index)}
            src={image}
            key={index}
            alt="Nature-image"
            className={`${
              index === currIndex ? "border-2 border-white" : ""
            } cursor-pointer max-h-[80px] object-cover rounded-[8px]`}
          />
        );
      })}
    </div>
  );
};
interface controllerProps {
  currIndex: number;
  IncreaseCurrIndex: Dispatch<SetStateAction<number>>;
  DecreaseCurrIndex: Dispatch<SetStateAction<number>>;
}
export const CarouselControllers = ({
  currIndex,
  IncreaseCurrIndex,
  DecreaseCurrIndex,
}: controllerProps) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <div>
        <p className="font-bold underline text-black underline-offset-2 text-[2rem]">
          0{currIndex + 1}/06
        </p>
      </div>
    </div>
  );
};
export default PhotosCarousel;
