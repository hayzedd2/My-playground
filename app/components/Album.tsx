"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { AlbumArr } from "./AlbumContent";
import { motion } from "framer-motion";
import { AlbumProp } from "./type";
import { AnimatePresence } from "framer-motion";

const Album = () => {
  const [selectedImg, setSelectedImg] = useState<AlbumProp | null>(null);
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <AboutText />
      <div className="flex relative gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-center justify-center border-2 border-[hsla(0,0%,100%,.03)] image-grid">
        <div className="w-full relative grid-cols-3 sm:gap-2 xl:gap-3 max-w-[400px] grid">
          {AlbumArr.map((pic) => {
            return (
              <SingleImg
                key={pic.id}
                pic={pic}
                onClick={() => setSelectedImg(pic)}
              />
            );
          })}
          <BigImage pic={selectedImg} onClick={() => setSelectedImg(null)} />
        </div>
        {selectedImg ? (
          <SideImages
            selectedImage={selectedImg}
            setSelectedImage={setSelectedImg}
          />
        ) : null}
      </div>
    </section>
  );
};

interface SingleImgProp {
  pic: AlbumProp;
  onClick: () => void;
}
export const SingleImg = ({ pic, onClick }: SingleImgProp) => {
  return (
    <>
      <motion.div
        layoutId={`picture-${pic.id}`}
        onClick={onClick}
        className={`${pic.width} img-${pic.id} bg-cover bg-center box-${pic.id} h-[8rem] w-full cursor-pointer rounded-[10px]`}
      />
    </>
  );
};
interface BigImageProp {
  pic: AlbumProp | null;
  onClick: () => void;
}
export const BigImage = ({ pic, onClick }: BigImageProp) => {
  return (
    <>
      <AnimatePresence>
        {!!pic && (
          <motion.div
            layoutId={`picture-${pic.id}`}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            onClick={onClick}
            className={`${pic.width} bg-cover box-${pic.id} shadow-md object-contain absolute top-50 left-50  w-full h-full cursor-pointer rounded-[10px]`}
          />
        )}
      </AnimatePresence>
    </>
  );
};
interface SideImageProp {
  selectedImage: AlbumProp | null;
  setSelectedImage: Dispatch<SetStateAction<AlbumProp | null>>;
}
export const SideImages = ({
  selectedImage,
  setSelectedImage,
}: SideImageProp) => {
  if (!selectedImage) {
    return null;
  }
  const sideImageArr = AlbumArr.filter(
    (_, index) => index !== selectedImage.id - 1
  );
  const percentArr = [
    "xl:left-[33%] sm:left-[80px]",
    "xl:left-[45%] sm:left-[150px]",
    "xl:left-[57%] sm:left-[220px]",
  ];
  // 80,150,220
  const modifiedSideImageArr = sideImageArr.map((item, index) => ({
    ...item,
    percent: percentArr[index],
  }));
  return (
    <>
      <AnimatePresence>
        <motion.div className="flex flex-col gap-3 sm:ml-0 xl:ml-3">
          {modifiedSideImageArr.map((pic, index) => {
            return (
              <motion.div
                // onClick={()=> setSelectedImage(pic)}
                key={pic.id}
                layoutId={`picture-${pic.id}`}
                className={`bottom-[5px] ${pic.percent} w-[4rem] bg-center box-${pic.id} h-[3.5rem]  cursor-pointer rounded-[10px]`}
              ></motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Album</h1>
      <p className="text-[0.85rem]">
        Inspired by{" "}
        <a href="#" className="underline underline-offset-1">
          Preet
        </a>
        .
      </p>
    </div>
  );
};

export default Album;
