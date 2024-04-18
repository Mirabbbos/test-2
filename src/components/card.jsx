import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Card({ item }) {
  return (
    <div className="card-item relative w-full cursor-pointer">
      <div className="relative w-full h-[270px] rounded-lg  lg:h-[300px] xl:h-[370px]  overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={item.files.posterUrl}
          alt="alt"
        />
        <div className="info-box bg-black/50 flex justify-center items-center flex-wrap top-0 right-0 absolute w-full h-full">
          <FaRegCirclePlay className="text-white" size={45} />
          <span className="p-3 absolute bottom-0 left-0 text-white">
            {item.genres.map(({ genreName, genreId }) => (
              <React.Fragment key={genreId}>
                <span>{genreName}</span>
                <span className="last:hidden">, </span>
              </React.Fragment>
            ))}
          </span>
        </div>
        <span className="absolute top-2 right-2 p-3 text-white backdrop-blur-md rounded-xl">
          6+
        </span>
      </div>
      <b className="mt-4">{item.movieTitle}</b>
    </div>
  );
}
