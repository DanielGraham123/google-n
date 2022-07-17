import React from "react";

export const Images = ({ results }) => {
  return (
    <div className="flex flex-wrap mx-12 justify-center items-center">
      {results?.image_results?.map(
        ({ image, link: { href, title } }, index) => (
          <a
            className="sm:p-3 p-5 "
            href={href}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image?.src} alt={title} loading="lazy" />
            <p className="w-36 break-words text-sm mt-2">{title}</p>
          </a>
        )
      )}
    </div>
  );
};
