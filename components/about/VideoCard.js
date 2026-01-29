import React from "react";
import { Play } from "lucide-react";

const VideoCard = ({ title, src }) => (
  <div className="bg-background border border-black/50 rounded-lg p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center gap-2 px-1">
      <div className="p-1.5 bg-red-100 rounded-full">
        <Play className="h-3 w-3 text-red-600 fill-red-600" />
      </div>

      <h3 className="font-semibold text-sm">{title}</h3>
    </div>

    <div className="aspect-video rounded-md overflow-hidden bg-black/5 border border-black/10">
      <iframe
        src={src}
        width="100%"
        height="100%"
        title={title}
        allowFullScreen
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  </div>
);

export default VideoCard;
