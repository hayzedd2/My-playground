import exp from "constants";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoBed } from "react-icons/io5";

const FocusInteraction = () => {
  const focusElements = [
    {
      FocusIcon: <FaMoon />,
      FocusText: "Do Not Disturb",
      FocusAttributes: {
        instructions: "",
        time: {
          time1: "For 1 hour",
          time2: "Until this evening",
          time3: "Until i leave this location",
          timeLocation: "Nearby University of Lagos",
        },
      },
    },
    {
      FocusIcon: <IoBed />,
      FocusText: "Sleep",
      FocusAttributes: {
        instructions: "Sleep focus will be activated automatically",
      },
    },
  ];
  return <section className="py-10 items-center justify-center flex"></section>;
};

export default FocusInteraction;
