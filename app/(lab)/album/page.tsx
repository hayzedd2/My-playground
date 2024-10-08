"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { AlbumArr } from "@/app/components/contents/AlbumContent";
import { motion } from "framer-motion";
import { AlbumProp } from "@/app/components/type";
import { AnimatePresence } from "framer-motion";

const Album = () => {
  const [selectedImg, setSelectedImg] = useState<AlbumProp | null>(null);
  const handleImageSelect = (pic: AlbumProp) => {
    setSelectedImg(pic);
  };
  return (
    <section className="flex flex-col items-center">
      <AboutText />
      <div className="min-h-[400px] max-h-[400px]  animation-container image-grid">
        <div className="w-full relative grid-cols-3 sm:gap-2 xl:gap-3 max-w-[400px] grid">
          {AlbumArr.map((pic) => {

            return (
              <SingleImg
                key={pic.id}
                pic={pic}
                onClick={() => handleImageSelect(pic)}
              />
            );
          })}
          <BigImage pic={selectedImg} onClick={() => setSelectedImg(null)} />
        </div>
        {selectedImg ? (
          <SideImages
            selectedImage={selectedImg}
            setSelectedImage={handleImageSelect}
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
const SingleImg = ({ pic, onClick }: SingleImgProp) => {
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
const BigImage = ({ pic, onClick }: BigImageProp) => {
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
            className={`box-${pic.id} shadow-md object-contain absolute  w-full h-full cursor-pointer rounded-[10px]`}
          />
        )}
      </AnimatePresence>
    </>
  );
};
interface SideImageProp {
  selectedImage: AlbumProp | null;
  setSelectedImage: (pic : AlbumProp)=> void;
}
const SideImages = ({
  selectedImage,
  setSelectedImage,
}: SideImageProp) => {
  if (!selectedImage) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        <motion.div className="flex flex-col gap-3 sm:ml-0 xl:ml-3">
          {AlbumArr.map((pic) => {
            if (pic.id === selectedImage.id) return null; // Skip the currently selected image
            return (
              <motion.div
                layoutId={`picture-${pic.id}`}
                // onClick={() => setSelectedImage(pic)}
                key={pic.id}
                className={`w-[4rem] bg-center box-${pic.id} h-[3.5rem] cursor-pointer rounded-[10px]`}
              ></motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Album</h1>
      <p className="text-[0.85rem]">
        Inspired by{" "}
        <a
          target="_blank"
          href="https://x.com/wickedmishra/status/1824113832404668534?s=46"
          className="underline underline-offset-1"
        >
          Preet
        </a>
        .
      </p>
    </div>
  );
};

export default Album;
