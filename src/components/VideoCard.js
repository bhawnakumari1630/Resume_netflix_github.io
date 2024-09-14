import React from "react";
import formatCounts, { formatDate } from "../utils/Format_Data";

function VideoCard({ info }) {
  const { snippet, statistics } = info || {};
  const {
    publishedAt,
    title,
    channelTitle,
    thumbnails,
  } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;

  const relativeTime = formatDate(publishedAt);
  const views = formatCounts(viewCount);

  return (
    <div className="w-64 p-2 m-2 text-sm rounded-md shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <div className="px-1">
        <p className="font-medium py-2">{title}</p>
        <p className="">{channelTitle}</p>
        <div className="flex justify-between">
          <p className="inline">{views} views</p>
          <p className="inline">{relativeTime}</p>
        </div>
      </div>
    </div>
  );
}

export const HOC_card = ({info}) => {
  return (
    <div className=" border-2 border-emerald-500 ">
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard;
