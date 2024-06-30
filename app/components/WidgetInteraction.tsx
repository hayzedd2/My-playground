"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";
import { motion, useMotionValue } from "framer-motion";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";

const WidgetInteraction = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);

  const widgets = [
    {
      key: "widget-3",
      content: (
        <div className="widget bg-white">
          <div className="flex gap-2">
            <div className="flex basis-[50%] flex-col">
              <div>
                <h2 className="font-[600] mb-1 text-[0.9rem] text-[#ff6057]">
                  THURSDAY
                </h2>
                <p className=" text-black text-[1.6rem]  font-[600]">1</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="h-auto rounded-[8px] w-[4px] bg-[#8295af]"></div>
                  <div>
                    <p className="flex text-[#8295af]  gap-1 text-[0.95rem] font-[600]">
                      <IoGiftOutline className="text-[#ff6057] font-[500]" />
                      Zedd&apos;s bir..
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="h-auto rounded-[8px] w-[4px] bg-[#1aadf8]"></div>
                  <div className="bg-[#E8F7FE] w-full rounded-[6px]">
                    <div className="flex flex-col ">
                      <p className="font-[600] text-[#337fa6]">
                        Calculus class
                      </p>
                      <p className="text-[#64b2db] font-[500] text-[0.85rem]">
                        11.00-1.00PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex basis-[50%] flex-col">
              <div>
                <h2 className="font-[600] text-[0.9rem] text-[#8295af]">
                  TOMORROW
                </h2>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="h-auto rounded-[8px] w-[4px] bg-[#1aadf8]"></div>
                  <div className="bg-[#E8F7FE] w-full rounded-[6px]">
                    <div className="flex flex-col ">
                      <p className="font-[600] text-[#337fa6]">Go to gym</p>
                      <p className="text-[#64b2db] font-[500] text-[0.85rem]">
                        11.00-1.00PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="h-auto rounded-[8px] w-[4px] bg-[#1aadf8]"></div>
                  <div className="bg-[#E8F7FE] w-full rounded-[6px]">
                    <div className="flex flex-col ">
                      <p className="font-[600] text-[#337fa6]">
                        Bola&apos;s dinner
                      </p>
                      <p className="text-[#64b2db] font-[500] text-[0.85rem]">
                        8.00-10.00PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="h-[15px] rounded-[8px] w-[4px] bg-[#FFCC02]"></div>
                  <div className="h-[15px] rounded-[8px] w-[4px] bg-[#63DA38]"></div>
                  <div className="h-[15px] rounded-[8px] w-[4px] bg-[#FF2A69]"></div>
                  <p className="text-[0.8rem] font-[500]  text-[#8295af]">
                    3 more events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "widget-1",
      content: (
        <div className="widget bg-white widget-1">
          <div className="flex justify-between">
            <div className="song-title flex text-black gap-3 items-center">
              <div className="w-12 h-12 rounded-[6px] songbox"></div>
              <p className="font-[600] text-[0.85rem]">Forever Yours 3</p>
            </div>
            <div>
              <FaSpotify />
            </div>
          </div>
          <div className="song-content flex gap-3 items-center pt-3">
            <div className="w-full h-20 rounded-[6px] songbox"></div>
            <div className="w-full h-20 rounded-[6px] songbox"></div>
            <div className="w-full h-20 rounded-[6px] songbox"></div>
            <div className="w-full h-20 rounded-[6px] songbox"></div>
          </div>
        </div>
      ),
    },
    {
      key: "widget-2",
      content: (
        <div className=" widget widget-2 flex justify-between flex-col">
          <div className="flex w-full justify-end">
            <FaAppStoreIos className="text-black" />
          </div>
          <div>
            <h3 className="font-[600] text-[0.75rem]">FEATURED</h3>
            <p className="text-white">Our favourite online family games</p>
          </div>
        </div>
      ),
    },
    {
      key: "widget-5",
      content: (
        <div className=" widget widget-4 flex items-end">
          <div>
            <h3 className="font-[600] text-[0.85rem]">ON THIS DAY</h3>
            <p className="text-white text-[1.2rem]">June 20, 2024</p>
          </div>
        </div>
      ),
    },
    {
      key: "widget-2",
      content: (
        <div className=" widget widget-5 p-3 flex bg-[#282d31]">
          <div className="basis-[20%] flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-[500] bg-[#7E57C2] text-white">
              <p>A</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#414242] rounded-full">
              <MdOutlineModeEdit className="text-[1.2rem] text-[#e0938f]" />
            </div>
          </div>
          <div className="basis-[80%] flex flex-col gap-1">
            <div className="flex justify-between bg-[#414242] p-1.5 rounded-[6px]">
              <div className="flex flex-col justify-center gap-0 basis-[75%]">
                <h6 className=" text-[#89898b] text-[0.75rem] font-[600]">
                  Cowrywise
                </h6>
                <p className="text-[0.75rem] text-white">
                  Your withdrawal is being processed
                </p>
              </div>
              <div>
                <p className="text-[0.75rem] font-[600] h-full flex items-center justify-center text-[#89898b] basis-[25%] ">
                  9:40 PM
                </p>
              </div>
            </div>
            <div className="flex bg-[#414242] justify-between p-1.5 rounded-[6px]">
              <div className="flex flex-col justify-center gap-0 basis-[75%]">
                <h6 className=" text-[#89898b] text-[0.75rem] font-[600]">
                  Vercel
                </h6>
                <p className="text-[0.75rem] text-white">
                  Failed production environment
                </p>
              </div>
              <div>
                <p className="text-[0.75rem] font-[600] h-full flex items-center justify-center text-[#89898b] basis-[25%] ">
                  8:16 PM
                </p>
              </div>
            </div>
            <div className="flex bg-[#414242] justify-between p-1 rounded-[6px]">
              <div className="flex flex-col justify-center gap-0 basis-[75%]">
                <h6 className=" text-[#89898b] text-[0.75rem] font-[600]">
                  Glassdoor jobs
                </h6>
                <p className="text-[0.75rem] text-white">
                  Lead software engineering jobs
                </p>
              </div>
              <div>
                <p className="text-[0.75rem] font-[600] h-full flex items-center justify-center text-[#89898b] basis-[25%] ">
                  5:20 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const widgetLength = widgets.length;
  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    const y = dragY.get();
    if (y <= -dragBuffer && currIndex < widgetLength - 1) {
      setCurrIndex((prev) => prev + 1);
    } else if (y >= dragBuffer && currIndex > 0) {
      setCurrIndex((prev) => prev - 1);
    }
  };
  const dragY = useMotionValue(0);
  const dragBuffer = 10;

  return (
    <section className="flex-col py-10 max-w-[40rem] flex items-center justify-center mx-auto">
      <AboutText />
      {/* <p className="my-2">
        <input
          type="checkbox"
          name=""
          id=""
          defaultChecked={showOverflow}
          onClick={() => setShowOverflow(!showOverflow)}
        />
        Show overflow
      </p> */}
      <div className="flex gap-2 mt-3">
        <motion.div
          drag="y"
          dragConstraints={{
            top: 50,
            bottom: 50,
          }}
          style={{
            y: dragY,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className={`${
            showOverflow ? "" : "overflow-hidden"
          } widgetcontainer  rounded-[16px] sm:w-[22rem] xl:w-[26rem] h-[11.5rem] cursor-grab indicator  flex flex-col`}
        >
          {widgets.map((widget, index) => (
            <motion.div
              animate={{
                translateY: `-${currIndex * 100}%`,
                scale: currIndex === index ? 1 : 0.65,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
              }}
              key={index}
            >
              {widget.content}
            </motion.div>
          ))}
        </motion.div>
        <WidgetIndicator
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
          widgetsLength={widgetLength}
        />
      </div>
    </section>
  );
};
interface WidgetProps {
  currIndex: number;
  setCurrIndex: Dispatch<SetStateAction<number>>;
  widgetsLength: number;
}
const WidgetIndicator = ({
  currIndex,
  setCurrIndex,
  widgetsLength,
}: WidgetProps) => {
  return (
    <div className="flex flex-col gap-2 h-[13rem] items-center justify-center">
      {Array(widgetsLength)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className={`${
              currIndex == index
                ? "h-[12px] rounded-[8px]"
                : "h-[7px] rounded-full"
            } w-[7px] bg-[#d1d1cb] cursor-pointer`}
            onClick={() => setCurrIndex(index)}
          ></div>
        ))}
    </div>
  );
};
export const AboutText = () => {
  return (
    <div className="w-full px-4">
      <h1 className="text-[1.2rem]">Widget scroll</h1>
      <p className="text-[0.85rem]">
        Tried to recreate the Apple&apos;s widget interaction on iphone.
      </p>
    </div>
  );
};
export default WidgetInteraction;
