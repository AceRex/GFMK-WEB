import React, { useRef } from "react";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";
import VideoCard from "./videoCard";

function VideoList({
  heading,
  bgStyle,
  videos,
}: {
  heading: string;
  bgStyle: string;
  videos: any[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth;
      if (direction === "left") {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={`${bgStyle} border-t border-t-pDark/5 p-12`}>
      <div className="w-[90%] m-auto overflow-hidden">
        <h4 className="font-extrabold text-2xl tracking-tighter">{heading}</h4>
        <div className="relative p-8 h-full">
          <div className="h-full absolute flex items-center place-content-center left-0">
            <div
              className="h-12 w-12 rounded-full p-2 bg-w2 flex items-center place-content-center cursor-pointer"
              onClick={() => handleScroll("left")}
            >
              <HiMiniArrowLongLeft fontSize={20} />
            </div>
          </div>
          <div className="h-full absolute flex items-center place-content-center right-0">
            <div
              className="h-12 w-12 rounded-full p-2 bg-w2 flex items-center place-content-center cursor-pointer"
              onClick={() => handleScroll("right")}
            >
              <HiMiniArrowLongRight fontSize={20} />
            </div>
          </div>
          <div
            className="grid grid-flow-col gap-2 overflow-x-scroll no-scrollbar"
            ref={scrollContainerRef}
          >
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
