"use client";
import React, { useState } from "react";
import { HiUser } from "react-icons/hi";
import { IoBed, IoMoon } from "react-icons/io5";
import { motion } from "framer-motion";
import { SlOptions } from "react-icons/sl";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

const FocusInteraction = () => {
  const [activeElement, setActiveElement] = useState<number | undefined>();
  const [activeElementOptions, setActiveOptions] = useState<
    number | undefined
  >();
  const setCurrActiveElement = (index: number) => {
    setActiveElement(index);
  };
  const openElementOptions = (index: number) => {
    setActiveOptions(index);
  };
  const variants = {
    active: {
      backgroundColor: "white",
      color: "black",
      transition: { duration: 0.3, ease: "easeInOut" }, // Customize transition as needed
    },
    inactive: {
      backgroundColor: "#111111fb",
      color: "#f8f4f4",
    },
  };

  const focusElements = [
    {
      FocusIcon: <IoMoon />,
      FocusText: "Do Not Disturb",
      FocusAttributes: {
        time: {
          time1: "For 1 hour",
          time2: "Until this evening",
          time3: "Until i leave this location",
          timeLocation: "Nearby University of Lagos",
        },
      },
    },
    {
      FocusIcon: <IoBed />,
      FocusText: "Sleep",
      FocusAttributes: {
        instructions: "Sleep focus will be activated automatically",
      },
    },
    {
      FocusIcon: <HiUser />,
      FocusText: "Personal",
      FocusAttributes: {
        time: {
          time1: "For 1 hour",
          time2: "Until this evening",
          time3: "Until i leave this location",
          timeLocation: "Nearby University of Lagos",
        },
      },
    },
  ];
  return (
    <section className="py-10 items-center justify-center flex">
      <div className={`${kumbh.className} flex flex-col gap-3`}>
        {focusElements.map((focus, index) => {
          return (
            <motion.div
              variants={variants}
              animate={activeElement === index ? "active" : "inactive"}
              onClick={() => setCurrActiveElement(index)}
              key={index}
              className={`${
                activeElementOptions === index ? "h-[6.7rem]" : "h-[3.7rem]"
              }
              cursor-pointer  px-[1.4rem]   flex w-[14rem] rounded-[30px] items-center justify-between`}
            >
              <motion.p className="text-[1.15rem]">{focus.FocusIcon}</motion.p>
              <motion.p
                animate={{
                  translateY: activeElement == index ? "-2px" : "",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="text-[0.8rem] flex flex-col items-center justify-center gap-[0.02rem]  "
              >
                {focus.FocusText}
                {activeElement == index ? (
                  <span className="text-[0.65rem]">On</span>
                ) : null}
              </motion.p>
              <SlOptions onClick={() => openElementOptions(index)} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export const Options = () => {
  return (
    <div className="flex gap-[0.15rem]">
      <div className="rounded-full bg-[#f8f4f4] w-[0.25rem] h-[0.25rem]"></div>
      <div className="rounded-full bg-[#f8f4f4] w-[0.25rem] h-[0.25rem]"></div>
      <div className="rounded-full bg-[#f8f4f4] w-[0.25rem] h-[0.25rem]"></div>
    </div>
  );
};
export default FocusInteraction;
