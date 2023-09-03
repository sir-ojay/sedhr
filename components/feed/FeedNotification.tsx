import { useDeleteAPostMutation } from "@/services/feed";
import { PostRequest, PostResponse } from "@/types/feed";
import Hamburger from "hamburger-react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const FeedNotification = ({shareLink}:any) => {
  const token: any = Cookies.get("sedherToken");
  const [deleteFeed] = useDeleteAPostMutation();
  return (
    <div className=" bg-white rounded-lg mt-[40px] ml-10  absolute shadow-[0px 8px 16px 0px rgba(0, 0, 0, 0.2)] ">
      <div className="w-[240px] h-[140px] p-[40px]  flex justify-between text-justify">
        <div>
          <div>
            {" "}
            <button onClick={()=> alert('Deleted')}>
              <p className="text-[16px]">Delete Post</p>{" "}
            </button>
          </div>
        

          <button onClick={()=> alert('Unfollowed')}>
            <p>Unfollow Connection</p>{" "}
          </button>

          <button onClick={()=> shareLink()}>
            <p>Share link</p>{" "}
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default FeedNotification;
