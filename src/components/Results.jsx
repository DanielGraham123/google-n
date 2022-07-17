import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "./Loading";

import { useResultContext } from "./context/ResultContextProvider";
import { All } from "./results/All";
import { Images } from "./results/Images";
import { News } from "./results/News";
import { Videos } from "./results/Videos";

const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/video/q=${searchTerm} videos&num=10`);
      } else if (location.pathname === "/images") {
        getResults(`/image/q=${searchTerm}&num=40`);
      } else {
        console.log("location: ", location.pathname);
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) {
    return <Loading />;
  }

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return <All results={results} />;
    case "/images":
      return <Images results={results} />;
    case "/news":
      const news = Object.keys(results).map(() => results["entries"])[0];
      return <News news={news} />;
    case "/videos":
      const { results: vids } = results;
      console.log("vids: ", vids);
      const videos = vids
        ?.filter((vid) => !vid?.link?.includes("/channel"))
        .filter((vid) => !vid?.link?.includes("/c/"))
        .filter((vid) => vid?.link?.includes("youtube.com"));
      console.log("videos: ", videos);
      return <Videos videos={videos} />;

    default:
  }
};

export default Results;
