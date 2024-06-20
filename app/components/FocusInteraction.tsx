// "use client";
// import React, { useState } from "react";
// import { HiUser } from "react-icons/hi";
// import { IoBed, IoMoon } from "react-icons/io5";
// import { motion } from "framer-motion";
// import { SlOptions } from "react-icons/sl";
// import { Kumbh_Sans } from "next/font/google";

// const kumbh = Kumbh_Sans({ subsets: ["latin"] });

// const FocusInteraction = () => {
//   const [activeElement, setActiveElement] = useState<number | undefined>();
//   const [activeElementOptions, setActiveOptions] = useState<
//     number | undefined
//   >();
//   const setCurrActiveElement = (index: number) => {
//     setActiveElement(index);
//   };
//   const openElementOptions = (index: number) => {
//     setActiveOptions(index);
//   };
//   const focusElements = [
//     {
//       FocusIcon: <IoMoon />,
//       FocusText: "Do Not Disturb",
//       FocusAttributes: {
//         time: [
//           "For 1 hour",
//           "Until this evening",
//           "Until i leave this location",
//         ],
//         timeLocation: "Nearby University of Lagos",
//       },
//     },
//     {
//       FocusIcon: <IoBed />,
//       FocusText: "Sleep",
//       FocusAttributes: {
//         instructions: "Sleep focus will be activated automatically",
//       },
//     },
//     {
//       FocusIcon: <HiUser />,
//       FocusText: "Personal",
//       FocusAttributes: {
//         time: [
//           "For 1 hour",
//           "Until this evening",
//           "Until i leave this location",
//         ],
//         timeLocation: "Nearby University of Lagos",
//       },
//     },
//   ];
//   const variants = {
//     active: {
//       backgroundColor: "white",
//       color: "black",
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//     inactive: {
//       backgroundColor: "#111111fb",
//       color: "#f8f4f4",
//     },
//   };
//   return (
//     <section className="py-10 items-center justify-center flex">
//       <div className={`${kumbh.className} flex flex-col gap-3`}>
//         {focusElements.map((focus, index) => {
//           return (
//             <motion.div
//               layout
//               variants={variants}
//               animate={activeElement === index ? "active" : "inactive"}
//               className={`
//             cursor-pointer py-4 w-[14rem] rounded-[30px]`}
//             >
//               <motion.div
//                 onClick={() => setCurrActiveElement(index)}
//                 key={index}
//                 // layout="position"
//                 className="flex items-center px-[1.4rem]  justify-between w-full"
//               >
//                 <motion.p layout="position" className="text-[1.15rem]">
//                   {focus.FocusIcon}
//                 </motion.p>
//                 <motion.p
//                   animate={{
//                     translateY: activeElement == index ? "-3px" : "",
//                   }}
//                   layout="position"
//                   transition={{
//                     duration: 0.5,
//                   }}
//                   className="text-[0.8rem] flex flex-col items-center justify-center gap-[0.01rem]  "
//                 >
//                   {focus.FocusText}
//                   {activeElement == index ? (
//                     <span className="text-[0.6rem]">On</span>
//                   ) : null}
//                 </motion.p>
//                 <motion.div layout="position">
//                 <SlOptions onClick={() => openElementOptions(index)} />
//                 </motion.div>
//               </motion.div>
//               {activeElementOptions === index ? (
//                 <motion.div className="w-full py-1 flex flex-col items-center justify-center">
//                   <ul className="w-full" >
//                     {focus.FocusAttributes.time?.map((time, index) => {
//                       return <li key={index} className="text-[0.85rem]  px-[1.4rem] py-[0.15rem] border-b border-b-black">{time}</li>;
//                     })}
//                   </ul>
//                 </motion.div>
//               ) : null}
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export const Options = () => {
//   return (
//     <div className="flex gap-[0.15rem]">
//       <div className="rounded-full bg-[#f8f4f4] w-[0.25rem] h-[0.25rem]"></div>
//       <div className="rounded-full bg-[#f8f4f4] w-[0.25rem] h-[0.25rem]"></div>
//       <div className="rounded-full bg-[#f8f4f4] w-[0.25rem] h-[0.25rem]"></div>
//     </div>
//   );
// };
// export default FocusInteraction;
