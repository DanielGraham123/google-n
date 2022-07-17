import React from "react";

import { NavLink } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { BiNews, BiImage } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";

import { useLocation } from "react-router-dom";

const navlinks = [
  { url: "/search", text: "All", icon: <MdOutlineSearch className="mr-1" /> },
  { url: "/news", text: "News", icon: <BiNews className="mr-1" /> },
  { url: "/images", text: "Images", icon: <BiImage className="mr-1" /> },
  { url: "/videos", text: "Videos", icon: <RiVideoLine className="mr-1" /> },
];

const Links = ({ visible }) => {
  const location = useLocation();

  return (
    <div
      className={
        (visible ? "hidden" : "links",
        location.pathname == "/news"
          ? "links max-w-[30%] ml-[20%] justify-between"
          : "links")
      }
    >
      {navlinks.map(({ url, text, icon }) => (
        <NavLink
          key={url}
          to={url}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-[3px] dark:text-blue-300 border-blue-700 dark:border-blue-300  navlinks mb-[-2px]"
              : "navlinks"
          }
        >
          {icon}
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
