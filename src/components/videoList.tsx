import React from "react";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";

function VideoList({ heading, bgStyle }: { heading: string; bgStyle: string }) {
  return (
    <div className={`${bgStyle} border-t border-t-pDark/5 p-12`}>
      <div className="w-[90%] m-auto">
        <h4 className="font-extrabold text-2xl tracking-tighter">{heading}</h4>
        <div className="relative p-8">
          <div className="absolute h-5 w-5 flex items-center place-content-center rounded-full p-2 bg-w2 left-0">
            <HiMiniArrowLongLeft size="30" />
          </div>
          <div className="absolute h-5 w-5 flex items-center place-content-center rounded-full p-2 bg-w2 right-0">
            <HiMiniArrowLongRight size="30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
