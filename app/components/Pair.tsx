"use client";

import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const Pair = () => {
  type downloadingState = "default" | "downloading" | "downloaded";

  const [downloadState, setDownloadState] =
    useState<downloadingState>("default");

    const handleClick = () => {
      if (downloadState === "default") {
        setDownloadState("downloading");
      } else if (downloadState === "downloading") {
        setTimeout(() => setDownloadState("downloaded"), 2000); // Simulate download time
      } else {
        setDownloadState("default"); 
      }
    };

  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div className="animation-container max-h-[300px] min-h-[300px]">
        <motion.button
          layoutId="downloadcontainer"
          initial={{ width: "3.2rem" }}
          animate={{
            borderRadius:
              downloadState === "downloading"
                ? "20px"
                : downloadState === "downloaded"
                ? "100%"
                : "100%",
            width:
              downloadState === "downloading"
                ? "12rem"
                : downloadState === "downloaded"
                ? "3.2rem"
                : "3.2rem",
            justifyContent:
              downloadState === "downloading"
                ? "between"
                : downloadState === "downloaded"
                ? "center"
                : "center",
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          onClick={handleClick}
          className="bx-shadow bg-white p-2 h-[3.2rem] bg-inherit gap-2 cursor-pointer flex items-center "
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 100 125"
            fill="#1A1A1A"
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="0.5px"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M40.4051 79.4303L40.4451 79.5003L40.4851 79.4803L40.4051 79.4303Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M97.9351 85.7602L88.5651 90.4502L82.9651 93.2502L77.9351 95.7602L68.5651 90.3502L73.5951 87.8402L88.5651 80.3502L97.9351 85.7602Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M97.9351 85.7603V112.64L77.9351 122.64V95.7603L82.9651 93.2503L88.5651 90.4502L97.9351 85.7603Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M77.9351 95.7602V122.64L2.96509 79.3602V52.4802L12.3351 57.8902V74.0202L68.5651 106.48V90.3502L77.9351 95.7602Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M24.4151 51.8503L22.9651 52.5803L12.3351 57.8903L2.96509 52.4803L19.8851 44.0203L22.9651 49.3403L24.4151 51.8503Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M31.6651 64.3502L22.9651 68.7102L12.3351 74.0202V57.8902L22.9651 52.5802L24.4151 51.8502L31.6651 64.3502Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M73.5951 87.8402L68.5651 90.3502V106.48L12.3351 74.0202L22.9651 68.7102L31.6651 64.3502L40.4051 79.4302L40.4451 79.5002L40.4851 79.4802H40.4951L40.5651 79.4402L50.4651 74.4902L73.5951 87.8402Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M83.8751 56.1403L60.4451 69.5003L50.4651 74.4903L40.5651 79.4403L49.8551 74.1303L59.8351 68.4403L63.8751 66.1403L83.8751 56.1403Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M83.8751 56.1403L63.8751 66.1403L57.3151 54.5603L65.1351 50.6503L77.3151 44.5603L83.8751 56.1403Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M65.1351 7.69031V50.6503L57.3151 54.5603L53.1551 56.9303L45.1351 61.5003V17.6903L55.7651 12.3803L65.1351 7.69031Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M65.1351 7.69027L55.7651 12.3803L45.1351 17.6903L35.7651 12.2803L55.7651 2.28027L65.1351 7.69027Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M63.8751 66.1403L59.8351 68.4403L49.8551 74.1303L40.5651 79.4403L40.4951 79.4803H40.4851L40.4051 79.4303L31.6651 64.3503L24.4151 51.8503L22.9651 49.3403L19.8851 44.0203L17.0251 39.0903L23.5851 35.0803L30.3451 46.7403L31.3051 48.4003L32.3351 50.1703L35.7651 56.0903V12.2803L45.1351 17.6903V61.5003L53.1551 56.9303L57.3151 54.5603L63.8751 66.1403Z"
              stroke="white"
              stroke-linejoin="round"
            />
            <path
              d="M35.7651 28.9902V56.0902L32.3351 50.1702L31.3051 48.4002L30.3451 46.7402L23.5851 35.0802L35.7651 28.9902Z"
              stroke="white"
              stroke-linejoin="round"
            />
          </motion.svg>
          {downloadState!== "default" ? "Download" : ""}
        </motion.button>
      </div>
    </section>
  );
};

export default Pair;
