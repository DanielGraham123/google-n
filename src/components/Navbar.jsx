import React, { useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import Links from "./Links";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [navScrolling, setNavScrolling] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 400) {
      setNavScrolling(true);
    } else {
      setNavScrolling(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className={!navScrolling ? "navbar" : "fixed navbar pb-6"}>
      <div className="flex justify-between items-baseline">
        <div className=" flex items-baseline">
          {/* logo */}
          <Link to="/" className="mr-8">
            <div className="text-3xl font-medium">Googlen 🔎</div>
          </Link>

          {/* search bar */}
          <Search />
        </div>

        <div>
          <button
            className="hover:shadow-lg dark:bg-gray-900 rounded-md bg-white px-2 py-1"
            onClick={() => setDarkMode(!darkMode)}
          >
            {" "}
            {darkMode ? "Light ☀️" : "Dark 🌙"}
          </button>
        </div>
      </div>

      <Links visible={navScrolling} />
    </div>
  );
};

export default Navbar;
