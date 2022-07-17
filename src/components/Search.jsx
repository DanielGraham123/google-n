import React, { useEffect, useState } from "react";

import { useDebounce } from "use-debounce";

import { useResultContext } from "./context/ResultContextProvider";

import { ImSearch } from "react-icons/im";
import { MdClose } from "react-icons/md";

import GMic from "../assets/google_mic.svg";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();

  const [debouncedValue] = useDebounce(text, 300); // 300ms: make a request on usertype after every 300ms

  const search = () => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  };

  useEffect(() => {
    search();
  }, [debouncedValue]);

  return (
    <div className="pt-5 mt-3 ">
      <input
        type="text"
        value={text}
        className="sm:w-[35.5rem] w-80 h-10 dark:bg-slate-700 border dark:border-none dark:text-white rounded-full shadow-md outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Googlen or type URL"
        onChange={(e) => setText(e.target.value)}
      />

      {text && (
        <div className="absolute flex space-x-3 items-center top-[2.7rem] right-[32rem]">
          <button
            type="button"
            className=" text-red-400"
            onClick={() => setText("")}
          >
            <MdClose size={20} />
          </button>

          <div className="border-l h-6 border-gray-500 "></div>
        </div>
      )}

      <div className="absolute flex space-x-3 items-center top-[2.7rem] right-[30rem]">
        <button
          type="button"
          className=" text-red-400"
          onClick={() => setText("")}
        >
          <img src={GMic} className="w-7" />
        </button>
      </div>

      <div className="absolute top-[3.1rem] right-[28.5rem] float-right">
        <button
          type="button"
          className="flex items-center text-gray-500 dark:text-gray-300"
          onClick={() => {
            console.log("search clicked");
            search();
          }}
        >
          <ImSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
