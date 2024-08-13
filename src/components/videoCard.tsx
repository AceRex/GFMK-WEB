import Image from "next/image";
import React from "react";
import Thumbnail from "@/app/sermons/maxresdefault.jpg";

function VideoCard() {
  return (
    <div className="w-72 overflow-hidden">
      <div className="w-[100%] rounded-t-2xl overflow-hidden object-contain">
        <Image
          src={Thumbnail}
          alt={"Thumbnail"}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <p className="text-sm font-bold mt-2 tracking-tighter">
        Aye mi n fogo fun o | EmmaOMG & The OhEmGee Choir
      </p>
      <p className="text-xs font-light tracking-tighter">
        Pastor Ebenezer Ajayi • August 5, 2024
      </p>
    </div>
  );
}

export default VideoCard;
