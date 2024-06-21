"use client";

import Image from "next/image";
import nature2 from "../image/nature2.jpg";
import nature3 from "../image/nature3.jpg";
import nature4 from "../image/nature4.jpg";
import nature1 from "../image/nature1.jpg";
import nature5 from "../image/nature5.jpg";
import nature6 from "../image/nature6.jpg";
const images = [nature4, nature3, nature2, nature5, nature6, nature1];
import { HiOutlineCursorClick } from "react-icons/hi";
import { motion } from "framer-motion";
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
    <div className="relative max-w-[40rem] pt-10 mx-auto">
      <div className="flex flex-col items-center  justify-center">
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
    <div className="w-full pb-4 px-4 ">
      <h1 className="text-[1.2rem]">Image carousel</h1>
      <p className="text-[0.85rem]">
        Inspired by a carousel component on the{" "}
        <span>
          <a
            href="htps://paystack.com/2023"
            className="underline underline-offset-2"
          >
            {" "}
            Paystack&apos;s 2023 in review website
          </a>
        </span>
      </p>
    </div>
  );
};

export const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <div className="flex xl:w-full  sm:w-full items-center overflow-hidden mx-auto">
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
            className="aspect-video sm:rounded-[10px] xl:rounded-[14px] xl:w-full sm:w-full shrink-0 bg-neutral-700 object-cover "
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
    <div className="flex indicator w-full px-4 overflow-scroll mx-auto items-start justify-start gap-2">
      {images.map((image, index) => {
        return (
          <Image
            onClick={() => setCurrIndex(index)}
            src={image}
            key={index}
            alt="Nature-image"
            className={`${
              index === currIndex ? "border-2 border-white" : ""
            } cursor-pointer h-[80px]  object-cover rounded-[8px]`}
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
        <p className="underline underline-offset-2 text-[1.5rem]">
          0{currIndex + 1}/06
        </p>
      </div>
    </div>
  );
};
export default PhotosCarousel;
