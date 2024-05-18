"use client";

import Image from "next/image";
import nature from "../image/nature.jpg";
import nature3 from "../image/nature3.jpg";
const images = [nature3, nature3, nature3, nature3, nature3, nature3, nature3];
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react";

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

export const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <div className="flex xl:w-[60vw]  sm:w-[90vw] items-center overflow-hidden mx-auto">
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
            className="aspect-video rounded-[10px] xl:w-[60vw] sm:w-[90vw] shrink-0 bg-neutral-700 object-cover "
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
    <div className="flex gap-2 xl:overflow-auto sm:overflow-scroll mb-5 xl:max-w-[60vw] mx-auto items-center justify-center">
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
    <div className="flex items-center justify-center gap-3">
      <div
        onClick={() => IncreaseCurrIndex}
        className=" rounded-full w-8 h-8 flex  cursor-pointer items-center justify-center bg-black text-white"
      >
        <FaAngleLeft />
      </div>
      <div>
        <p className="font-bold underline text-white underline-offset-2 text-[0.95rem]">
          0{currIndex + 1}/07
        </p>
      </div>
      <div
        onClick={() => DecreaseCurrIndex}
        className=" rounded-full w-8 h-8 flex cursor-pointer items-center justify-center bg-black text-white"
      >
        <FaAngleRight />
      </div>
    </div>
  );
};
export default PhotosCarousel;
