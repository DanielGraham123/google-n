import React from "react";

export const News = ({ news }) => {
  console.log("news entries in news: ", news);

  return (
    <div className="flex flex-wrap justify-between space-y-4 md:px-56 px-4">
      {news?.map(({ links, title, id, source }) => (
        <div key={id} className="md:w-2/5 w-full">
          <a
            href={links?.[0].href}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
          </a>

          <div className="flex gap-4">
            <a href={source?.href} target="_blank" rel="norefferer">
              {source?.href}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
