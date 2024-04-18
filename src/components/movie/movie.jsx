import React from "react";

export default function Movie() {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative">
      <video
        controls
        className="top-0 right-0 absolute w-full h-full object-cover"
      >
        <source
          src={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
        />
      </video>
    </div>
  );
}
