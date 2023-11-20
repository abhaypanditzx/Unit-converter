import React, { useState } from "react";
import LengthConverter from "../components/LengthConverter";
import Temperature from "../components/Temperature";
import Weight from "../components/Weight";

function Switch(props) {
  const { setConverter } = props;
  const [isActive, setIsActive] = useState("0");
  const Switches = [
    {
      id: "0",
      title: "Length Converter",
      component: <LengthConverter />,
    },
    {
      id: "1",
      title: "Temperature Converter",
      component: <Temperature />,
    },
    {
      id: "2",
      title: "Weight Converter",
      component: <Weight />,
    },
  ];

  const handleLinkClick = (link) => {
    setIsActive(link);
  };
  return (
    <div className="flex flex-col mt-10">
      {Switches.map((e) => {
        return (
          <button
            key={e.id}
            className={`${
              isActive === e.id
                ? "bg-red-600 border-red-600 shadow-md shadow-black/5 text-white  px-2 rounded-md py-3    m-2"
                : " bg-white/20 border-black border-[2px] text-black  px-2 rounded-md py-3    m-2"
            } max-sm:w-[170px] break-words max-sm:text-sm sm:w-auto `}
            onClick={() => {
              handleLinkClick(e.id);
              setConverter(e.component);
            }}
          >
            {e.title}
          </button>
        );
      })}
    </div>
  );
}

export default Switch;
