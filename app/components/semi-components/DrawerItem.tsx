import React from "react";
import { DrawerProp } from "../type";

const DrawerItem = ({ name, color, content, icon }: DrawerProp) => {
  return (
    <div
      className={`flex gap-5 0 items-center cursor-pointer bg-[rgb(247,248,249)] rounded-[14px] px-4 py-3`}
    
    >
      <div className="text-[1.4rem] text-[#8f8f8f]">{icon}</div>
      <div className="flex flex-col">
        
        <h3 className=" text-[1.05rem] text-[#111110]">{name} </h3>
      </div>
    </div>
  );
};

export default DrawerItem;
