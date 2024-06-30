"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ItemProp } from "./type";
import { content } from "./contents";
const Experiment = () => {
  const [selectedTab, setSelectedTab] = useState<ItemProp | null>(null);
  useEffect(() => {
    console.log(selectedTab);
  }, []);
  return (
    <section className="py-20">
      <div className="">
        <ul className="w-full flex items-center gap-2 justify-center">
          {content.map((content, index) => {
            return (
              <Card
                key={content.id}
                items={content}
                onClick={() => setSelectedTab(content)}
              />
            );
          })}
        </ul>
      </div>
      <Modal items={selectedTab} onClick={() => setSelectedTab(null)}></Modal>
    </section>
  );
};

interface CardProps {
  items: ItemProp;
  onClick: () => void;
}
interface ModalProps {
  items: ItemProp | null;
  onClick: () => void;
}
export const Modal = ({ items, onClick }: ModalProps) => {
  return (
    <>
      <AnimatePresence>
        {!!items && (
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(7px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <motion.div
              key={items.title}
              layoutId={`itemContainer${items.id}`}
              onClick={() => onClick()}
              className={`w-[27rem] h-[22rem] p-5 z-10 flex flex-col items-start justify-end box-${items.id} rounded-[8px] cursor-pointer`}
            >
              <motion.p
                className="text-black text-[1.5rem] font-[600]"
                layoutId={`itemTitle${items.id}`}
              >
                {items.title}
              </motion.p>
              <motion.p
                className="text-black font-[400] text-base"
                layoutId={`itemDescription${items.id}`}
              >{items.description}</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Card = ({ items, onClick }: CardProps) => {
  return (
    <motion.li
      key={items.title}
      layoutId={`itemContainer${items.id}`}
      onClick={onClick}
      className={`w-32 h-32 flex items-end box-${items.id} rounded-[8px] cursor-pointer`}
    >
      <motion.p
        className="text-black m-3 text-[0.75rem] font-[600]"
        layoutId={`itemTitle${items.id}`}
      >
        {items.title}
      </motion.p>
      <motion.span layoutId={`itemDescription${items.id}`} />
    </motion.li>
  );
};

export default Experiment;
