import React, { useEffect, useRef, useState } from "react";
import { NavigationConfig } from "./contents/NavigationConfig";
import Link from "next/link";
const DottedLine = ({ backgroundColor = "transparent" }) => {
  const totalDots = Math.floor(400 / (4 + 8));
  return (
    <div  className="basis-[40%]">
      <svg
        width="100%"
        className="mt-2"
        height={2}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height={1} fill={backgroundColor} />
        {[...Array(totalDots)].map((_, index) => (
          <rect
            key={index}
            x={index * (4 + 6)}
            y={(2 - 2) / 2}
            width={3}
            height={2}
            fill={"#3F3F3F"}
          />
        ))}
      </svg>
    </div>
  );
};
const PlaygroundItem = () => {
  return (
    <div className="flex flex-col gap-3 mt-10 px-4">
      <div>
        <p className="font-[500] text-[1.2rem]">Components</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {NavigationConfig.filter((nav) => nav.title !== "Home").map(
          (nav, index) => (
            <Link
              href={nav.href}
              key={index}
              className="text-[1.05rem] flex w-full gap-3 justify-between items-center opacity-70 py-3"
            >
              <h5 className="basis-[35%]">{nav.title}</h5>
              <DottedLine />
              <h5 className="basis-[25%] text-right">{nav.date}</h5>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default PlaygroundItem;
