import React, { useEffect, useState } from "react";
import { NavLinks } from "../constant";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="min-h-[70px] min-w-full sticky top-0 bg-white shadow-md flex justify-between items-center  shadow-black/10">
      <Link to="/">
        <div className="w-full sm:text-2xl text-red-700 flex justify-start items-start  underline font-bold  p-5">
          UiC
        </div>
      </Link>
      <ul className="  w-[50%] justify-around  sm:flex hidden   z-10">
        {NavLinks.map((e, index) => {
          return (
            <li
              key={`e-${index}`}
              onClick={() => {
                handleLinkClick(e.link);
              }}
              id={e.id}
              className={`list-none  ${
                activeLink === e.link ? "text-red-500 " : "text-gray-500"
              } text-[18px]  cursor-pointer `}
            >
              <Link to={e.link}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className={`flex  sm:hidden absolute top-0 right-0 w-full ${toggle ? 'h-screen ' : ' h-0 '} flex-col`}>
        <button
          className=" sm:hidden  absolute  right-3 z-50 top-3 flex text-3xl flex-1"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>

        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } py-12  absolute top-0  bg-white items-start  shadow-lg shadow-black/20 flex-col right-0  min-w-[90%] min-h-screen  z-10`}
        >
          {NavLinks.map((e, index) => {
            return (
              <Link to={e.link} className="w-full">

              <li
                key={`e-${index}`}
                onClick={() => {
                  handleLinkClick(e.link);
                  setToggle(!toggle);
                }}
                className={`${
                  activeLink === e.link ? "text-white bg-red-500" : "text-black"
                } py-5 text-start w-full px-[40px] flex items-center space-x-4`}
              >
                {" "}
                <div className="text-2xl">{e.icon}</div>
      
                <span>{e.title}</span>
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
