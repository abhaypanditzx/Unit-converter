import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="icons-section  items-center bg-gray-600 py-1 text-white flex">
      <h4 className="font-poppins tracking-wide max-xs:text-xs sm:text-sm p-2">
        contact me |
      </h4>
      <div className="flex space-x-4">
        <a href="https://www.github.com/abhaypanditzx">
          {" "}
          <FaGithub className="p-1 text-2xl rounded-md hover:text-white hover:bg-black"/>
        </a>
        <a href="https://www.linkedin.com/in/abhay-pandit-b9119b251/">
          {" "}
          <FaLinkedinIn className="p-1 text-2xl rounded-md hover:text-white hover:bg-blue-600" />
        </a>
        <a href="https://www.instagram.com/clown_abhay">
          {" "}
          <FaInstagram className=" p-1 text-2xl rounded-md hover:bg-gradient-to-tr from-red-600 to-purple-500"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
