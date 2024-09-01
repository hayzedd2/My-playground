"use client";
import { motion, useMotionValue } from "framer-motion";
import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { DrawerArr } from "./contents/DrawerContents";
import DrawerItem from "./DrawerItem";
import { DrawerProp } from "./type";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDrawer, setSelectedDrawer] = useState<DrawerProp | null>(null);
  //   const [yPosition, setYPosition] = useState(0);
  const yPosition = useMotionValue(0);
  const drawerVariants = {
    hidden: { y: "500px" },
    visible: {
      y: "0px",
    },
  };
  const handleDrag = (event: any, info: any) => {
    yPosition.set(info.point.y);
    console.log(yPosition);
  };

  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div className="flex relative gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-center justify-center border-2 border-[hsla(0,0%,100%,.03)]">
        <div
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen);
            yPosition.set(0);
          }}
          className="absolute top-4 right-5  rounded-lg flex gap-1 py-2 px-[2rem]  bx-shadow cursor-pointer justify-center items-center"
        >
          <p>Toggle</p>
        </div>
        <motion.div
          initial="hidden"
          animate={isDrawerOpen ? "visible" : "hidden"}
          variants={drawerVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="y"
          draggable
          dragConstraints={{ top: 0, bottom: 0 }} // Allow only vertical dragging
          onDrag={handleDrag}
          className="w-[20rem]  h-[17.5rem] overflow-hidden px-6 bg-white bx-shadow-light absolute  bottom-0 "
          style={{
            borderRadius: "30px",
            WebkitBackdropFilter: selectedDrawer ? "blur(7px)" : "", // Apply blur for Safari
            backdropFilter: selectedDrawer ? "blur(7px)" : "",
          }}
        >
          {/* <div
            className="
            w-6 h-[0.15rem] rounded-2xl bg-gray-500"
          ></div> */}
          <div
            style={{
              borderBottom: "1px solid #f7f7f7",
            }}
            className="flex pt-6 pb-2 mb-4 text-[#111110]  items-center justify-between"
          >
            <p className="font-[500] text-[1.05rem]">Models</p>
            <button
              className="w-8 h-8 bg-[#F7F8F9] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4854 1.99998L2.00007 10.4853"
                  stroke="#999999"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.4854 10.4844L2.00007 1.99908"
                  stroke="#999999"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="relative  h-full flex flex-col gap-3 z-[-50]"
            style={{
              pointerEvents: selectedDrawer ? "none" : "all",
            }}
          >
            {DrawerArr.map((drawerItem, index) => {
              return (
                <div key={index} onClick={() => setSelectedDrawer(drawerItem)}>
                  <DrawerItem
                    name={drawerItem.name}
                    color={drawerItem.color}
                    content={drawerItem.content}
                    icon={drawerItem.icon}
                  />
                </div>
              );
            })}
          </div>
          <OverlayDrawer
            selectedDrawer={selectedDrawer}
            setSelectedDrawer={setSelectedDrawer}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Drawer;

interface OverlayDrawerProp {
  selectedDrawer: DrawerProp | null;
  setSelectedDrawer: Dispatch<SetStateAction<DrawerProp | null>>;
}
export const OverlayDrawer = ({
  selectedDrawer,
  setSelectedDrawer,
}: OverlayDrawerProp) => {
  return (
    <motion.div
      className="absolute bottom-0 z-50 bg-white bx-shadow-light p-8 w-full left-0 right-0 h-[13rem]"
      style={{
        borderRadius: "30px",
      }}
      initial={{
        y: "100%",
      }}
      animate={{ y: selectedDrawer ? 0 : "100%" }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <p className="cursor-pointer" onClick={() => setSelectedDrawer(null)}>
        Back
      </p>
      <div>{selectedDrawer?.content}</div>
    </motion.div>
  );
};
