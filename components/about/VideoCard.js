import React from "react";
import { Play } from "lucide-react";

const VideoCard = ({ title, src }) => (
  <div className="bg-background border border-black/50 rounded-lg p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center gap-2 px-1">
      <div className="p-2 w-10 rounded-md bg-red-600 flex items-center justify-center">
        <Play className="h-3 w-3 text-white fill-white" />
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>
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
