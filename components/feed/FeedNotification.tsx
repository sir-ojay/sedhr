import { useDeleteAPostMutation } from "@/services/feed";
// import {useDe} from "@/services/upload";
import { PostRequest, PostResponse } from "@/types/feed";
import Hamburger from "hamburger-react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const FeedNotification = ({ openAccess }: any) => {
  const token: any = Cookies.get("sedherToken");
  const [deleteFeed] = useDeleteAPostMutation();
  return (
    <div className=" bg-white rounded-lg mt-[50px] ml-10  absolute shadow-[0px 8px 16px 0px rgba(0, 0, 0, 0.2)] ">
      <div className="w-[300px] h-[140px] p-[40px]  flex justify-between text-justify">
        <div>
          <div>
            {" "}
            <button>
              <p className="text-[16px]">Delete Post</p>{" "}
            </button>
          </div>
        

          <button>
            <p>Unfollow Connection</p>{" "}
          </button>
        </div>
        <div>
          <button className="hover-bg-[blue]">
          <Hamburger
            color="#0b211a"
            size={15}
            label="Show menu"
            toggled={openAccess}
            toggle={openAccess}
          />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedNotification;
