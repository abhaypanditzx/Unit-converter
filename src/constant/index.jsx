import Weight from "../components/Weight";
import { IoHomeOutline  } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
export const NavLinks = [
  {
    id: "0",
    title: "Home",
    link: "/",
    icon: <IoHomeOutline/>
  },
  {
    id: "1",
    title: "About Us",
    link: "About",
    icon : <HiOutlineUserGroup/>
  },
  {
    id: "2",
    title: "Contact Us",
    link: "Contact",
    icon : <IoIosContact/>
  },
];

export const Options = {
  Weight: [
    { title: "Kilogram", value: "kilogram" },
    { title: "Gram", value: "gram" },
    { title: "Milligram", value: "milligram" },
    { title: "Pound", value: "pound" },
  ],
  Temperature: [
    { title: "Celsius", value: "celsius" },
    { title: "Fahrenheit", value: "fahrenheit" },
    { title: "Kelvin", value: "kelvin" },
  ],
};
