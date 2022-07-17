import React from "react";
import ReactPlayer from "react-player";

export const Videos = ({ videos }) => {
  return (
    <div className="flex flex-wrap px-8">
      {videos?.map((video, index) => (
        <div key={index} className="p-2">
          <ReactPlayer
            url={video.additional_links[0].href}
            controls
            width="355px"
            height="200px"
          />
        </div>
      ))}
    </div>
  );
};
