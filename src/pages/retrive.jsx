import React, { useState } from "react";
import BannerTrailer from "../components/common/banner-item";
import Info from "../components/info/info";
import Movie from "../components/movie/movie";

export default function Retrive() {
  const [movieIsPlay, setMovieIsPlay] = useState(false);

  return (
    <main>
      {movieIsPlay ? (
        <Movie />
      ) : (
        <BannerTrailer myFunc={() => setMovieIsPlay(true)} video={true} />
      )}
      <Info />
    </main>
  );
}
