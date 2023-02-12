import React from "react";
import Avatar from "@/components/global/Avatar";

const RightUser = ({message}:any) => {
  return (
    <div className="flex justify-end mb-4 space-x-6">
      <div className="max-w-sm">
        <h6 className="text-right font-semibold text-base py-2">
          You
          </h6>
        <p className="bg-[#F8F8FD] px-4 py-3">
          {message?.content}
        </p>
        
        {/* <p className="font-normal text-right py-2 text-base text-neutral-60">
          12 mins ago
        </p> */}
      </div>
      <Avatar
        size={44}
        name={message?.sender?.username}
        shape="circle"
        image={message?.sender?.profilePicture}
      />
    </div>
  );
};

export default RightUser;
