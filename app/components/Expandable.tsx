"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuSend } from "react-icons/lu";

export const Expandable = () => {
  const [active, setActive] = useState("default");
  return (
    <section className="py-20 px-4 flex items-center justify-center">
      <AnimatePresence>
        {active === "default" && (
          <motion.div
            layoutId="content-box"
            onClick={() => setActive("form")}
            className={`w-[17rem] border border-[#c1c5cc]  h-44 bg-[#F8F8FA] overflow-hidden flex flex-col  items-start justify-end rounded-[8px] cursor-pointer`}
          >
            <motion.h2
              className="text-[#19191A] px-4 py-2 text-[1.1rem] font-[600]"
              layoutId="content-title"
            >
              Send a mail
            </motion.h2>
            <div
              className="flex justify-between items-center bg-[#fafafa] w-full px-4 py-3"
              style={{ borderTop: "1px solid #E3E3E5" }}
            >
              <motion.p
                className="text-base text-[#19191A] "
                layoutId="content-description"
              >
                Click to send a mail
              </motion.p>
              <motion.div
                layoutId="sendicon"
                style={{ border: "1px solid #C1C5CC" }}
                className="rounded-[8px] p-2 text-[#19191A]"
              >
                <LuSend />
              </motion.div>
            </div>
            <motion.span layoutId="content-expansion" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active === "form" && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center"
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(7px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              layoutId="content-box"
              onClick={() => setActive("confirmation")}
              className={`w-[28rem] border border-[#c1c5cc]  h-[28rem] bg-[#F8F8FA] overflow-hidden flex flex-col  items-start justify-end rounded-[8px] cursor-pointer`}
            >
              <motion.h2
                className="text-[#19191A] px-4 py-2 text-[1.3rem] font-[600]"
                layoutId="content-title"
              >
                Send a mail
              </motion.h2>
              <div
                className="flex flex-col justify-end items-end bg-[#fafafa] w-full px-4 py-3"
                style={{ borderTop: "1px solid #E3E3E5" }}
              >
                <motion.p
                  className="text-base text-[#19191A] "
                  layoutId="content-description"
                ></motion.p>
                <motion.span layoutId="content-expansion" className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  veritatis eum autem ex culpa numquam doloribus consequatur
                  quos dicta quia dolor, adipisci tempora nam delectus animi
                  iure. Vitae, perspiciatis fuga!
                </motion.span>
                <motion.div
                  layoutId="sendicon"
                  style={{ border: "1px solid #C1C5CC" }}
                  className="rounded-[8px] p-2 text-[#19191A]"
                >
                  <p className="flex gap-2 items-center justify-center">
                    Send a message <LuSend />
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active === "confirmation" && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center"
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(7px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              layoutId="content-box"
              onClick={() => setActive("default")}
              className={`w-[28rem] border border-[#c1c5cc]  h-[28rem] bg-[#F8F8FA] overflow-hidden flex flex-col  items-start justify-end rounded-[8px] cursor-pointer`}
            >
              <motion.h2
                className="text-[#19191A] px-4 py-2 text-[1.3rem] font-[600]"
                layoutId="content-title"
              >
                Email Received!
              </motion.h2>
              <div
                className="flex flex-col justify-center items-center bg-[#fafafa] w-full px-4 py-3"
                style={{ borderTop: "1px solid #E3E3E5" }}
              >
                <motion.p
                  className="text-base text-[#19191A] "
                  layoutId="content-description"
                >
                  Expect a feedback in two minutes at most.
                </motion.p>
                <motion.span
                  layoutId="content-expansion"
                  className="mb-2"
                ></motion.span>
                <motion.div
                  layoutId="sendicon"
                  style={{ border: "1px solid #C1C5CC" }}
                  className="rounded-[8px] p-2 text-[#19191A]"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
