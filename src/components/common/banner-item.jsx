import React from "react";

// assets
import movieBanner from "../../assets/movie-banner.jpg";
import bannerTitle from "../../assets/banner-title.png";
import { RiShareLine } from "react-icons/ri";

export default function BannerTrailer(props) {
  return (
    <>
      <div className="w-full h-[60vh] md:h-[80vh] relative">
        <div className="absolute top-0 right-0 z-10 repeat-effect w-full h-full"></div>
        {props.img && (
          <>
            <img
              className="top-0 right-0 absolute w-full h-full object-cover"
              src={movieBanner}
              alt="img"
            />
          </>
        )}
        {props.video && (
          <video
            autoPlay
            muted
            className="top-0 right-0 absolute w-full h-full object-cover"
          >
            <source
              src={
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
            />
          </video>
        )}
        <div className="container flex justify-center flex-col h-full relative z-10 pb-12">
          <img
            className="w-[200px] sm:w-[260px] md:w-[350px] object-contain"
            src={bannerTitle}
            alt=""
          />
          <p>Drama, 2024, 16+, O'zbekiston</p>
          <div className="flex mt-3 gap-3">
            <button
              onClick={() => props.myFunc()}
              className="btn btn-primary rounded-lg btn-md px-9"
            >
              Ko'rish
            </button>
            <button className="btn glass rounded-lg btn-md">
              <RiShareLine size={30} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
