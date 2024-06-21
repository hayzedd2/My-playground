import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"] });
const Navbar = () => {
  return ( 
    <div className="z-50 fixed w-full right-0 left-0 top-[-4rem]  backdrop-blur-sm">
      <nav className="flex items-center justify-between mx-auto max-w-[40rem] xl:px-5 sm:px-5 pt-10">
      <div className={josefin.className}>
        <h1 className="text-[1.7rem] font-[600]">Az</h1>
      </div>

      <a className="bg-[#1b1c1d] shiny-button flex items-center gap-1 hover:translate-y-[-2px] cursor-pointer transition-all p-1 rounded-[50px] text-[0.75rem] work" href="mailto:azeezalhameen@gmail.com">
          See my portfolio
          <FaAngleRight className="text-[#99999a] font-[700] " />
      </a>
      </nav>
    </div>
  );
};

export default Navbar;
