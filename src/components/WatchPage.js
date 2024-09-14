import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/slice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const video_ID = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  
  return (
    <div className="mt-5 ">
      <div className="mx-4 flex">
        <div className=" hidden md:block md:w-[65%] xl:w-[75%] ">
          <iframe
            // width="1000"
            height="450"
            src={"https://www.youtube.com/embed/" + video_ID + "?autoplay=1"}
            title="How To Make Complete E-Commerce Website Using React JS | React JS Ecommerce Project 2024"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full rounded-md "
          ></iframe>
        </div>

        <div className="flex-1 relative">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
}

export default WatchPage;
