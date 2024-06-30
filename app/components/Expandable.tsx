"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Expandable = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="py-20 flex items-center justify-center">
      <motion.div
        layoutId="content-box"
        onClick={() => setActive(true)}
        className={`w-[17rem] p-3 h-44 flex flex-col items-start justify-end widget-2 rounded-[8px] cursor-pointer`}
      >
        <motion.h2
          className="text-black text-[0.75rem] font-[600]"
          layoutId="content-title"
        >
          Expandable Card
        </motion.h2>
        <motion.p className="text-base " layoutId="content-description">
          Click to expand
        </motion.p>
        <motion.span layoutId="content-expansion" />
      </motion.div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center"
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(7px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              layoutId="content-box"
              onClick={() => setActive(false)}
              className={`w-[28rem] p-8 text-black h-[28rem] gap-2 flex flex-col items-start justify-end widget-2 rounded-[8px] cursor-pointer`}
            >
              <motion.h2
                className="text-black text-[1.2rem] font-[600]"
                layoutId="content-title"
              >
                Expandable Card
              </motion.h2>
              <motion.p className="text-base " layoutId="content-description">
               
              </motion.p>
              <motion.span layoutId="content-expansion">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis eius rerum est possimus, neque pariatur. Cupiditate
                  eum, architecto porro, est doloremque consectetur quis ullam
                  reiciendis eligendi nulla recusandae, dolor ipsa?
                </p>
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
