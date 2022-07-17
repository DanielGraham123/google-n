import React from "react";

export const All = ({ results }) => {
  console.log("all results: ", results);
  return (
    <div className="w-full space-y-4 px-12">
      {results?.results?.map(({ link, title, description }, index) => (
        <div key={index} className=" w-full">
          <a href={link} target="_blank" rel="noreferrer">
            <p className="text-sm">
              {link.length > 30 ? link.substring(0, 30) : link}{" "}
            </p>
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
              {title}
            </p>
            <p className="mt-1 line-clamp-2 dark:text-gray-300 text-gray-600 text-sm">
              {description}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};
